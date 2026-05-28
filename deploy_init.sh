#!/bin/bash
set -ex

############################################
# CONFIG
############################################
REPO_URL="https://github.com/euyseok-han/portfolio.git"
APP_NAME="portfolio"
DOMAIN="louis-han.info"
WWW_DOMAIN="www.louis-han.info"

APP_DIR="/var/www/portfolio"

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
# SOURCE UPDATE
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
rm -rf node_modules/.vite
rm -rf dist
npm run build

############################################
# DEPLOY (SIMPLE & SAFE)
############################################
sudo rm -rf $APP_DIR
sudo mkdir -p $APP_DIR
sudo cp -r dist/* $APP_DIR/
sudo chown -R www-data:www-data $APP_DIR

############################################
# NGINX CONFIG (NO COMPLEXITY)
############################################
sudo tee /etc/nginx/sites-available/portfolio > /dev/null <<EOF
server {
    listen 80;
    server_name ${DOMAIN} ${WWW_DOMAIN};

    root ${APP_DIR};
    index index.html;

    location / {
        try_files \$uri /index.html;
    }

    # prevent stale caching issues
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico)$ {
        expires -1;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
}
EOF

############################################
# ENABLE SITE
############################################
sudo rm -f /etc/nginx/sites-enabled/default || true
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio

############################################
# TEST & RESTART
############################################
sudo nginx -t
sudo systemctl restart nginx

############################################
# SSL (SAFE CERTBOT - NO REDIRECT CONTROL)
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
echo "STABLE VITE + NGINX + CERTBOT SETUP"
echo "======================================"