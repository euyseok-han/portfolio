#!/bin/bash
set -ex

############################################
# CONFIG
############################################
REPO_URL="https://github.com/euyseok-han/portfolio.git"
APP_NAME="portfolio"
DOMAIN="louis-han.info"
WWW_DOMAIN="www.louis-han.info"

############################################
# SYSTEM SETUP
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
    echo "Repo exists → pulling latest"
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
# DEPLOY (IMPORTANT FIX HERE)
############################################
sudo rm -rf /var/www/html
sudo mkdir -p /var/www/html
sudo cp -r dist/* /var/www/html
sudo chown -R www-data:www-data /var/www/html

############################################
# NGINX CONFIG (HTTP ONLY)
############################################
sudo tee /etc/nginx/sites-available/portfolio > /dev/null <<EOF
server {
    listen 80;
    server_name ${DOMAIN} ${WWW_DOMAIN};

    root /var/www/html;
    index index.html;

    location / {
        try_files \$uri /index.html;
    }
}
EOF

############################################
# ENABLE SITE
############################################
sudo rm -f /etc/nginx/sites-enabled/default || true
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio

############################################
# START NGINX
############################################
sudo nginx -t
sudo systemctl restart nginx

############################################
# SSL (SAFE - NO CONFLICT)
############################################
sudo certbot --nginx \
  -d ${DOMAIN} \
  -d ${WWW_DOMAIN} \
  --non-interactive \
  --agree-tos \
  -m admin@${DOMAIN}

############################################
# FINAL
############################################
sudo nginx -t
sudo systemctl reload nginx

echo "======================================"
echo "DEPLOY COMPLETE 🚀"
echo "https://${DOMAIN}"
echo "FIXED: Vite assets + nginx root mismatch resolved"
echo "======================================"