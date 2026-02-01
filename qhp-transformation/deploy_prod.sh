#!/bin/bash

# Configuration
SERVER_IP="107.172.187.251"
REMOTE_USER="root"
SSH_KEY="/Users/test/.ssh/azurity_o2e"
REMOTE_DIR="/opt/qhp-demo"
LOCAL_BUILD_DIR="$(pwd)/out"

echo "🚀 Deploying QHP Transformation Command Center to $SERVER_IP..."

# 1. Ensure clean build
echo "📦 Building project..."
npm run build

# 2. Upload to server
echo "📤 Uploading build artifacts to $REMOTE_DIR..."
rsync -avz --delete -e "ssh -i $SSH_KEY" $LOCAL_BUILD_DIR/ $REMOTE_USER@$SERVER_IP:$REMOTE_DIR/

# 3. Fix permissions and restart Nginx
echo "🔧 Configuring server..."
ssh -i $SSH_KEY $REMOTE_USER@$SERVER_IP "chown -R www-data:www-data $REMOTE_DIR && systemctl restart nginx"

echo "✅ Deployment complete!"
echo "🌍 Live URL: https://qhpresearch.com (Deployed to $SERVER_IP)"
