#!/bin/bash

echo "🧹 Limpiando proyecto para deploy..."

# Remover node_env del tracking de git
git rm -r --cached node_env/ 2>/dev/null || true

# Limpiar archivos temporales
rm -rf .next/
rm -rf out/
rm -rf node_modules/
rm -rf .vercel/

# Limpiar logs
rm -f npm-debug.log*
rm -f yarn-debug.log*
rm -f yarn-error.log*

# Limpiar archivos de sistema
find . -name ".DS_Store" -delete
find . -name "Thumbs.db" -delete

echo "✅ Proyecto limpio y listo para deploy!"
echo ""
echo "📦 Para hacer commit:"
echo "git add ."
echo "git commit -m 'Clean project for deployment'"
echo "git push origin main"
