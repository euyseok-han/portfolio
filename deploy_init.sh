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
# SYSTEM SETUP (safe for repeat runs)
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
# DEPLOY (ZERO DOWNTIME)
############################################
sudo mkdir -p "$TARGET_DIR"
sudo cp -r dist/* "$TARGET_DIR"
sudo chown -R www-data:www-data "$TARGET_DIR"

sudo ln -sfn "$TARGET_DIR" /var/www/html

############################################
# NGINX CONFIG (ONLY HTTP - NO 443 HERE)
############################################
sudo tee /etc/nginx/sites-available/portfolio > /dev/null <<EOF
server {
    listen 80;
    server_name ${DOMAIN} ${WWW_DOMAIN};

    root /var/www/html;
    index index.html;

    # React Single Page Application Routing
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # 이미지 및 정적 자원 직접 서빙용 설정 추가 (MIME 타입 보장 및 캐싱)
    location ~* \.(?:ico|css|js|gif|jpe?g|png|svg|woff2?|eot|ttf|otf)$ {
        expires 6m;
        access_log off;
        add_header Cache-Control "public";
        try_files \$uri =404;
    }
}
EOF

############################################
# ENABLE SITE
############################################
sudo rm -f /etc/nginx/sites-enabled/default || true
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio

############################################
# START NGINX (HTTP ONLY FIRST)
############################################
sudo nginx -t
sudo systemctl restart nginx

############################################
# SSL SETUP (CERTBOT HANDLES 443 AUTOMATICALLY)
############################################
sudo certbot --nginx \
  -d ${DOMAIN} \
  -d ${WWW_DOMAIN} \
  --non-interactive \
  --agree-tos \
  -m admin@${DOMAIN}

############################################
# FINAL CHECK
############################################
sudo nginx -t
sudo systemctl reload nginx

echo "======================================"
echo "DEPLOY COMPLETE 🚀"
echo "https://${DOMAIN}"
echo "SSL handled by certbot (no manual 443 config)"
echo "======================================"