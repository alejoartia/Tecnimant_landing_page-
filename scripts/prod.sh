#!/bin/bash

echo "🚀 Starting Tecnimant production environment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop."
    exit 1
fi

# Start production environment
echo "📦 Building and starting production container..."
docker-compose up --build

echo "✅ Production environment started!"
echo "🌐 Open http://localhost:3000 in your browser"
