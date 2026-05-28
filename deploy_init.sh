#!/bin/bash
set -ex

############################################
# CONFIG
############################################
REPO_URL="https://github.com/euyseok-han/portfolio.git"
APP_NAME="portfolio"
DOMAIN="louis-han.info"
WWW_DOMAIN="www.louis-han.info"

DEPLOY_DATE=$(date +%Y%m%d%H%M%S)
TARGET_DIR="/var/www/portfolio_${DEPLOY_DATE}"

############################################
# SYSTEM SETUP (one-time safe)
############################################
sudo apt update
sudo DEBIAN_FRONTEND=noninteractive apt install -y git nginx curl certbot python3-certbot-nginx

# Node.js 20
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo DEBIAN_FRONTEND=noninteractive apt install -y nodejs
fi

############################################
# CLONE / UPDATE
############################################
cd /home/ubuntu

if [ -d "$APP_NAME" ]; then
    cd $APP_NAME
    git fetch origin
    git reset --hard origin/main
else
    git clone $REPO_URL
    cd $APP_NAME
fi

############################################
# BUILD
############################################
npm install
rm -rf dist
npm run build

############################################
# DEPLOY (ZERO DOWNTIME)
############################################
sudo mkdir -p "$TARGET_DIR"
sudo cp -r dist/* "$TARGET_DIR"
sudo chown -R www-data:www-data "$TARGET_DIR"

sudo ln -sfn "$TARGET_DIR" /var/www/html

############################################
# NGINX CONFIG (HTTP → HTTPS ONLY HERE)
############################################
sudo tee /etc/nginx/sites-available/portfolio > /dev/null <<EOF
server {
    listen 80;
    server_name ${DOMAIN} ${WWW_DOMAIN};

    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl;
    server_name ${DOMAIN} ${WWW_DOMAIN};

    root /var/www/html;
    index index.html;

    location / {
        try_files \$uri /index.html;
    }

    # SSL will be injected by certbot
}
EOF

############################################
# ENABLE SITE
############################################
sudo rm -f /etc/nginx/sites-enabled/default || true
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio

############################################
# TEST NGINX (HTTP first)
############################################
sudo nginx -t
sudo systemctl restart nginx

############################################
# SSL (NO REDIRECT FLAG → IMPORTANT)
############################################
sudo certbot --nginx \
  -d ${DOMAIN} \
  -d ${WWW_DOMAIN} \
  --non-interactive \
  --agree-tos \
  -m admin@${DOMAIN}

############################################
# FINAL RELOAD
############################################
sudo nginx -t
sudo systemctl reload nginx

echo "======================================"
echo "DEPLOY COMPLETE 🚀"
echo "https://${DOMAIN}"
echo "NO REDIRECT LOOP VERSION FIXED"
echo "======================================"