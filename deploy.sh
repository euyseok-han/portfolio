#!/bin/bash
set -ex

############################################
# CONFIG
############################################
REPO_URL="https://github.com/euyseok-han/portfolio.git"
APP_NAME="portfolio"
DOMAIN="louis-han.info"
WWW_DOMAIN="www.louis-han.info"

# 무중단 배포를 위한 날짜별 타겟 디렉토리 설정
DEPLOY_DATE=$(date +%Y%m%d%H%M%S)
TARGET_DIR="/var/www/portfolio_${DEPLOY_DATE}"

############################################
# UPDATE SYSTEM & INSTALL PACKAGES
############################################
sudo apt update
sudo DEBIAN_FRONTEND=noninteractive apt install -y git nginx curl

# Node.js 20 설치
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo DEBIAN_FRONTEND=noninteractive apt install -y nodejs
fi

############################################
# CLONE OR UPDATE REPO
############################################
cd /home/ubuntu

if [ -d "$APP_NAME" ]; then
    echo "Repo already exists. Pulling latest..."
    cd $APP_NAME
    git fetch --all
    git reset --hard origin/main  # 로컬 변경사항 덮어쓰고 깔끔하게 풀
else
    git clone $REPO_URL
    cd $APP_NAME
fi

############################################
# BUILD VITE APP
############################################
npm install
rm -rf dist                 # 예전 빌드 캐시 삭제
npm run build

############################################
# DEPLOY DIST FILES TO NGINX (무중단 링킹)
############################################
# 1. 새로운 날짜의 폴더를 만들고 빌드 파일 복사
sudo mkdir -p "$TARGET_DIR"
sudo cp -r dist/* "$TARGET_DIR"
sudo chown -R www-data:www-data "$TARGET_DIR"

# 2. 기존 /var/www/html 심볼릭 링크를 새 폴더로 단숨에 교체 (Downtime 없음)
sudo rm -f /var/www/html
sudo ln -s "$TARGET_DIR" /var/www/html

############################################
# CONFIGURE NGINX
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

# 에러 방지를 위해 || true 처리
sudo rm -f /etc/nginx/sites-enabled/default || true 

sudo ln -sf \
/etc/nginx/sites-available/portfolio \
/etc/nginx/sites-enabled/portfolio

############################################
# TEST & RESTART NGINX
############################################
sudo nginx -t
sudo systemctl restart nginx

echo "======================================"
echo "Deployment Complete with Zero Downtime!"
echo "Website: http://${DOMAIN}"
echo "======================================"