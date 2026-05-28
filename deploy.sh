#!/bin/bash
set -ex

############################################
# CONFIG
############################################
APP_NAME="portfolio"
REPO_DIR="/home/ubuntu/portfolio"
BUILD_DIR="dist"
DEPLOY_BASE="/var/www"
TARGET_DIR=$(ls -td ${DEPLOY_BASE}/portfolio_* 2>/dev/null | head -1)

echo "Latest deploy target: $TARGET_DIR"

############################################
# FAIL IF NO EXISTING DEPLOY
############################################
if [ -z "$TARGET_DIR" ]; then
    echo "❌ No existing deployment found in /var/www"
    echo "Run initial deploy.sh first"
    exit 1
fi

############################################
# UPDATE CODE
############################################
cd $REPO_DIR

echo "Pulling latest code..."
git fetch origin
git reset --hard origin/main

############################################
# BUILD
############################################
echo "Installing dependencies..."
npm install

echo "Building project..."
rm -rf dist
npm run build

############################################
# UPDATE FILES (ZERO-DOWNTIME STYLE)
############################################
NEW_DEPLOY_DIR="${DEPLOY_BASE}/portfolio_$(date +%Y%m%d%H%M%S)"

echo "Creating new build folder: $NEW_DEPLOY_DIR"
sudo mkdir -p "$NEW_DEPLOY_DIR"

sudo cp -r dist/* "$NEW_DEPLOY_DIR/"
sudo chown -R www-data:www-data "$NEW_DEPLOY_DIR"

echo "Switching symlink..."

# atomic switch
sudo ln -sfn "$NEW_DEPLOY_DIR" /var/www/html

############################################
# RELOAD NGINX (no restart needed)
############################################
sudo nginx -t
sudo systemctl reload nginx

echo "======================================"
echo "UPDATE DEPLOY COMPLETE 🚀"
echo "New build deployed at: $NEW_DEPLOY_DIR"
echo "Site updated successfully (no downtime)"
echo "======================================"