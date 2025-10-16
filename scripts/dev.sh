#!/bin/bash

echo "🚀 Starting Tecnimant development environment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop."
    exit 1
fi

# Start development environment
echo "📦 Building and starting development container..."
docker-compose -f docker-compose.dev.yml up --build

echo "✅ Development environment started!"
echo "🌐 Open http://localhost:3000 in your browser"
