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
# SYSTEM SETUP
############################################
sudo apt update
sudo DEBIAN_FRONTEND=noninteractive apt install -y git nginx curl

# Node.js 20 install
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
    git fetch --all
    git reset --hard origin/main
else
    git clone $REPO_URL
    cd $APP_NAME
fi

############################################
# BUILD (VITE / REACT)
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

sudo rm -rf /var/www/html
sudo ln -s "$TARGET_DIR" /var/www/html

############################################
# NGINX CONFIG (HTTP → HTTPS redirect)
############################################
sudo tee /etc/nginx/sites-available/portfolio > /dev/null <<EOF
server {
    listen 80;
    server_name ${DOMAIN} ${WWW_DOMAIN};

    return 301 https://\$host\$request_uri;
}
EOF

sudo rm -f /etc/nginx/sites-enabled/default || true

sudo ln -sf \
/etc/nginx/sites-available/portfolio \
/etc/nginx/sites-enabled/portfolio

############################################
# NGINX CHECK (HTTP only first)
############################################
sudo nginx -t
sudo systemctl restart nginx

############################################
# HTTPS (Let's Encrypt SSL)
############################################
sudo apt install -y certbot python3-certbot-nginx

sudo certbot --nginx \
  -d ${DOMAIN} \
  -d ${WWW_DOMAIN} \
  --non-interactive \
  --agree-tos \
  -m admin@${DOMAIN} \
  --redirect

############################################
# FINAL RESTART
############################################
sudo nginx -t
sudo systemctl restart nginx

echo "======================================"
echo "DEPLOY COMPLETE 🚀"
echo "HTTP → HTTPS enabled"
echo "Site: https://${DOMAIN}"
echo "======================================"