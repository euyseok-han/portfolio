```bash
#!/bin/bash
set -e

############################################
# CONFIG
############################################

REPO_URL="https://github.com/euyseok-han/portfolio.git"
APP_NAME="portfolio"
DOMAIN="louis-han.info"
WWW_DOMAIN="www.louis-han.info"

############################################
# UPDATE SYSTEM
############################################

sudo apt update

############################################
# INSTALL REQUIRED PACKAGES
############################################

sudo apt install -y \
    git \
    nginx \
    curl

############################################
# INSTALL NODE.JS
############################################

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

############################################
# CLONE OR UPDATE REPO
############################################

cd /home/ubuntu

if [ -d "$APP_NAME" ]; then
    echo "Repo already exists. Pulling latest..."
    cd $APP_NAME
    git pull
else
    git clone $REPO_URL
    cd $APP_NAME
fi

############################################
# INSTALL DEPENDENCIES
############################################

npm install

############################################
# BUILD VITE APP
############################################

npm run build

############################################
# DEPLOY DIST FILES TO NGINX
############################################

sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/

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

############################################
# ENABLE NGINX CONFIG
############################################

sudo rm -f /etc/nginx/sites-enabled/default

sudo ln -sf \
/etc/nginx/sites-available/portfolio \
/etc/nginx/sites-enabled/portfolio

############################################
# TEST & RESTART NGINX
############################################

sudo nginx -t
sudo systemctl restart nginx

echo "======================================"
echo "Deployment Complete!"
echo "Website: http://${DOMAIN}"
echo "======================================"
```
