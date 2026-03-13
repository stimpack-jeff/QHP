#!/bin/bash

set -euo pipefail

SERVER_IP="107.172.187.251"
REMOTE_USER="root"
SSH_KEY="/Users/test/.ssh/azurity_o2e"
REMOTE_ROOT_DIR="/opt/qhp-demo"
REMOTE_APP_DIR="$REMOTE_ROOT_DIR"
REMOTE_DATA_DIR="/opt/qhp-demo-data"
REMOTE_CONTENT_DIR="/opt/content"
REMOTE_SERVICE_PATH="/etc/systemd/system/qhp-demo.service"
REMOTE_NGINX_PATH="/etc/nginx/sites-available/qhp-demo"
LOCAL_STANDALONE_DIR="$(pwd)/.next/standalone"
LOCAL_STATIC_DIR="$(pwd)/.next/static"
LOCAL_PUBLIC_DIR="$(pwd)/public"
LOCAL_CONTENT_DIR="$(pwd)/../content"
LOCAL_SERVICE_FILE="$(pwd)/deploy/qhp-demo.service"
LOCAL_NGINX_FILE="$(pwd)/deploy/qhp-demo.nginx.conf"

echo "🚀 Deploying QHP Transformation Command Center to $SERVER_IP..."

echo "📦 Building project..."
npm run build

echo "🗂️ Preparing remote directories..."
ssh -i "$SSH_KEY" "$REMOTE_USER@$SERVER_IP" "mkdir -p '$REMOTE_ROOT_DIR' '$REMOTE_APP_DIR/.next/static' '$REMOTE_APP_DIR/public' '$REMOTE_DATA_DIR' '$REMOTE_CONTENT_DIR'"

echo "📤 Uploading application server bundle..."
rsync -avz --delete -e "ssh -i $SSH_KEY" "$LOCAL_STANDALONE_DIR/" "$REMOTE_USER@$SERVER_IP:$REMOTE_ROOT_DIR/"

echo "🗂️ Recreating app asset directories after standalone sync..."
ssh -i "$SSH_KEY" "$REMOTE_USER@$SERVER_IP" "mkdir -p '$REMOTE_APP_DIR/.next/static' '$REMOTE_APP_DIR/public' '$REMOTE_DATA_DIR' '$REMOTE_CONTENT_DIR'"

echo "📤 Uploading static assets..."
rsync -avz --delete -e "ssh -i $SSH_KEY" "$LOCAL_STATIC_DIR/" "$REMOTE_USER@$SERVER_IP:$REMOTE_APP_DIR/.next/static/"

echo "📤 Uploading public assets..."
rsync -avz --delete -e "ssh -i $SSH_KEY" "$LOCAL_PUBLIC_DIR/" "$REMOTE_USER@$SERVER_IP:$REMOTE_APP_DIR/public/"

echo "📤 Uploading markdown content..."
rsync -avz --delete -e "ssh -i $SSH_KEY" "$LOCAL_CONTENT_DIR/" "$REMOTE_USER@$SERVER_IP:$REMOTE_CONTENT_DIR/"

echo "⚙️ Installing service and nginx configuration..."
scp -i "$SSH_KEY" "$LOCAL_SERVICE_FILE" "$REMOTE_USER@$SERVER_IP:$REMOTE_SERVICE_PATH"
scp -i "$SSH_KEY" "$LOCAL_NGINX_FILE" "$REMOTE_USER@$SERVER_IP:$REMOTE_NGINX_PATH"

echo "🔧 Restarting application and nginx..."
ssh -i "$SSH_KEY" "$REMOTE_USER@$SERVER_IP" "chown -R www-data:www-data '$REMOTE_ROOT_DIR' '$REMOTE_DATA_DIR' && systemctl daemon-reload && systemctl enable qhp-demo.service && systemctl restart qhp-demo.service && nginx -t && systemctl reload nginx"

echo "✅ Deployment complete!"
echo "🌍 Live URL: https://qhpresearch.com (Deployed to $SERVER_IP)"
