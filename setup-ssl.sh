#!/bin/bash
set -e

echo "Starting SSL Setup..."
cd /var/www/sanota

echo "Stopping containers..."
docker-compose down

echo "Installing Certbot..."
apt-get update
apt-get install -y certbot

echo "Generating SSL Certificates for sanotaglobal.com..."
certbot certonly --standalone -d sanotaglobal.com -d www.sanotaglobal.com --non-interactive --agree-tos -m admin@sanotaglobal.com

echo "Configuring Nginx for SSL..."
cp nginx/default-ssl.conf nginx/default.conf

echo "Starting containers..."
docker-compose up -d --force-recreate --no-build

echo "======================================"
echo "SSL Setup Complete! The site is now secure."
echo "======================================"
