# Tecnimant Landing Page

Landing page profesional para servicios de mantenimiento industrial y eléctrico en Bogotá y Villavicencio.

## 🚀 Deploy Options

### Opción 1: Railway.app (Recomendado)
```bash
# 1. Subir a GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. Ir a railway.app
# 3. Conectar GitHub repo
# 4. Deploy automático con Docker
```

### Opción 2: Vercel
```bash
# 1. Subir a GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. Ir a vercel.com
# 3. Importar proyecto desde GitHub
# 4. Deploy automático
```

### Opción 3: Google Cloud Run
```bash
# 1. Build Docker image
docker build -t gcr.io/PROJECT_ID/tecnimant-landing .

# 2. Push to Google Container Registry
docker push gcr.io/PROJECT_ID/tecnimant-landing

# 3. Deploy to Cloud Run
gcloud run deploy --image gcr.io/PROJECT_ID/tecnimant-landing
```

## 🐳 Docker Development

```bash
# Build image
docker build -t tecnimant-landing .

# Run locally
docker run -p 3000:3000 tecnimant-landing

# Or with docker-compose
docker-compose up --build
```

## 🧹 Clean Project

```bash
# Run cleanup script
./clean.sh

# Or manually
git rm -r --cached node_env/
git add .
git commit -m "Clean project for deployment"
```

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/         # React Components
│   └── utils/             # Constants & Utilities
├── public/                # Static assets
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose
└── next.config.js         # Next.js configuration
```

## 🛠️ Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Docker** - Containerization

## 🌐 Features

- ✅ Responsive design
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Cloud images
- ✅ Contact form
- ✅ Blog section
- ✅ About page

## 📞 Contact

- **Phone**: +57 300 123 4567
- **Email**: info@tecnimant.com
- **Cities**: Bogotá, Villavicencio