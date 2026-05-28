set -e

############################################
# CONFIG
############################################

REPO_URL="https://github.com/euyseok-han/portfolio.git"
APP_NAME="portfolio"
APP_PORT=3000
DOMAIN="louis-han.info"
WWW_DOMAIN="www.louis-han.info"

############################################
# UPDATE SYSTEM
############################################

sudo apt update
sudo apt upgrade -y

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
# CLONE REPO
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
# BUILD APP
############################################

npm run build || true

############################################
# CREATE SYSTEMD SERVICE
############################################

sudo tee /etc/systemd/system/${APP_NAME}.service > /dev/null <<EOF
[Unit]
Description=${APP_NAME} production service
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu/${APP_NAME}
ExecStart=/usr/bin/npm start
Restart=always
echo "======================================"