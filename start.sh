#!/bin/bash

# Script para iniciar el proyecto Tecnimant Landing Page
echo "🚀 Iniciando Tecnimant Landing Page..."

# Verificar si el entorno Node.js existe
if [ ! -d "node_env" ]; then
    echo "📦 Creando entorno Node.js..."
    nodeenv node_env
fi

# Activar entorno Node.js
echo "🔧 Activando entorno Node.js..."
source node_env/bin/activate

# Verificar si las dependencias están instaladas
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Iniciar servidor de desarrollo
echo "🌐 Iniciando servidor de desarrollo..."
echo "📍 El proyecto estará disponible en: http://localhost:3000"
echo "🛑 Para detener el servidor, presiona Ctrl+C"
echo ""

npm run dev

