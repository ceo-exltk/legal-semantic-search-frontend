# Legal Semantic Search Frontend

Frontend para aplicación de búsqueda semántica legal con IA, basado en el mockup "Legal Labs Dashboard".

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **Shadcn/ui** para componentes
- **Supabase** para backend
- **DigitalOcean Gradient AI** para búsqueda semántica

## 📋 Funcionalidades

- 🔍 **Búsqueda semántica** de documentos legales
- 📄 **Upload de archivos** (PDF, DOC, DOCX, TXT)
- 💬 **Chat interface** para consultas
- 📊 **Resultados destacados** con keywords
- 📱 **Diseño responsive**
- 🎨 **UI moderna** basada en el mockup

## 🛠️ Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/ceo-exltk/legal-semantic-search-frontend.git
cd legal-semantic-search-frontend
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar variables de entorno:**
```bash
cp env.example .env.local
# Editar .env.local con tus credenciales
```

4. **Ejecutar en desarrollo:**
```bash
npm run dev
```

## 🔧 Configuración

### Variables de Entorno Requeridas

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# DigitalOcean Gradient AI
NEXT_PUBLIC_GRADIENT_AI_API_KEY=your_gradient_ai_api_key
NEXT_PUBLIC_GRADIENT_AI_WORKSPACE_ID=your_gradient_ai_workspace_id
```

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── ui/               # Componentes UI base
│   ├── Sidebar.tsx       # Sidebar de navegación
│   ├── SearchView.tsx    # Vista de búsqueda
│   ├── ChatInterface.tsx # Interfaz de chat
│   └── UploadModal.tsx   # Modal de upload
├── lib/                  # Utilidades
│   └── utils.ts          # Funciones helper
└── types/                # Tipos TypeScript
```

## 🎨 Diseño

Basado en el mockup "Legal Labs Dashboard" con:
- **Sidebar** de navegación (48px)
- **Área principal** centrada
- **Chat interface** en la parte inferior
- **Modal de upload** con drag & drop
- **Resultados de búsqueda** con highlights

## 🚀 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter
- `npm run type-check` - Verificación de tipos
- `npm run test` - Tests unitarios
- `npm run test:e2e` - Tests E2E

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** interactions

## 🔒 Seguridad

- **Sanitización** de inputs
- **Validación** de archivos
- **Headers** de seguridad
- **Autenticación** con Supabase

## 📈 Próximas Funcionalidades

- [ ] Autenticación de usuarios
- [ ] Historial de búsquedas
- [ ] Filtros avanzados
- [ ] Exportar resultados
- [ ] Notificaciones en tiempo real
- [ ] Modo offline

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

## 👥 Equipo

- **Exltk Legal Labs** - Desarrollo y diseño
- **CEO** - Product Owner
- **Yoyo Fernández del Río** - Desarrollador

## 📞 Contacto

- **Email**: ceo@exltk.com
- **Proyecto**: [Legal Semantic Search](https://github.com/ceo-exltk/legal-semantic-search-frontend)
