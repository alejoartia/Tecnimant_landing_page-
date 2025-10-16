# 🚀 Instrucciones de Instalación - Tecnimant Landing Page

## Prerrequisitos

Antes de ejecutar el proyecto, necesitas instalar Node.js y npm:

### 1. Instalar Node.js

**Opción A: Desde el sitio oficial**
1. Ve a [nodejs.org](https://nodejs.org/)
2. Descarga la versión LTS (recomendada)
3. Ejecuta el instalador y sigue las instrucciones

**Opción B: Usando Homebrew (si tienes macOS)**
```bash
brew install node
```

**Opción C: Usando nvm (Node Version Manager)**
```bash
# Instalar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reiniciar terminal o ejecutar:
source ~/.bashrc

# Instalar Node.js LTS
nvm install --lts
nvm use --lts
```

### 2. Verificar instalación
```bash
node --version
npm --version
```

## 🛠️ Instalación del Proyecto

Una vez que tengas Node.js instalado:

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en modo desarrollo
```bash
npm run dev
```

### 3. Abrir en el navegador
Ve a [http://localhost:3000](http://localhost:3000)

## 📦 Scripts Disponibles

- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Ejecutar en modo producción
- `npm run lint` - Ejecutar linter

## 🚀 Despliegue

### Vercel (Recomendado)
1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el build command: `npm run build`
3. Configura el publish directory: `.next`

## 🔧 Solución de Problemas

### Error: "npm: command not found"
- Instala Node.js siguiendo las instrucciones de arriba

### Error: "Module not found"
- Ejecuta `npm install` para instalar las dependencias

### Error de puerto ocupado
- Cambia el puerto: `npm run dev -- -p 3001`

## 📱 Características del Proyecto

✅ **Next.js 14** con App Router
✅ **TypeScript** para type safety
✅ **Tailwind CSS** para estilos
✅ **Framer Motion** para animaciones
✅ **Responsive Design**
✅ **SEO optimizado**
✅ **Formularios interactivos**
✅ **Navegación suave**

## 📞 Soporte

Si tienes problemas con la instalación, contacta:
- Email: info@tecnimant.com
- Teléfono: +57 300 123 4567

