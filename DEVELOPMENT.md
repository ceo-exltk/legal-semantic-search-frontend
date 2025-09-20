# 🚀 Guía de Desarrollo - Legal Semantic Search Frontend

## 📋 Instrucciones para el Desarrollador

### 1. **Configuración Inicial**

```bash
# 1. Navegar al directorio del proyecto
cd /Users/alexispena/legal-semantic-search-frontend

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp env.example .env.local
# Editar .env.local con las credenciales reales

# 4. Ejecutar en modo desarrollo
npm run dev
```

### 2. **Estructura del Proyecto**

```
legal-semantic-search-frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Estilos globales + Legal Labs styles
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página principal (Home)
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes Shadcn/ui
│   │   ├── Sidebar.tsx       # Sidebar basado en mockup
│   │   ├── SearchView.tsx    # Vista de búsqueda con resultados
│   │   ├── ChatInterface.tsx # Interfaz de chat inferior
│   │   └── UploadModal.tsx   # Modal de upload con drag & drop
│   └── lib/                  # Utilidades
│       └── utils.ts          # Funciones helper (cn, etc.)
├── package.json              # Dependencias y scripts
├── tailwind.config.js        # Configuración Tailwind + Legal Labs colors
├── tsconfig.json             # Configuración TypeScript
├── next.config.js            # Configuración Next.js
└── README.md                 # Documentación del proyecto
```

### 3. **Características Implementadas**

#### ✅ **Basado en Mockup Legal Labs Dashboard:**
- **Sidebar** de 48px con navegación (Buscar, Historial)
- **Área principal** centrada con max-width 3xl
- **Chat interface** en la parte inferior
- **Modal de upload** con drag & drop
- **Resultados de búsqueda** con highlights
- **Indicador de API** con punto verde pulsante

#### ✅ **Tecnologías:**
- **Next.js 14** con App Router
- **TypeScript** estricto
- **Tailwind CSS** con colores personalizados
- **Shadcn/ui** para componentes base
- **Radix UI** para primitivos
- **Lucide React** para iconos

#### ✅ **Funcionalidades:**
- **Búsqueda semántica** con ejemplos reales
- **Upload de archivos** (PDF, DOC, DOCX, TXT)
- **Resaltado de texto** con expresiones regulares
- **Responsive design** mobile-first
- **Estados de carga** y feedback visual

### 4. **Próximos Pasos de Desarrollo**

#### 🔄 **Integración con Backend:**
1. **Conectar con Supabase** para autenticación
2. **Integrar DigitalOcean Gradient AI** para búsqueda real
3. **Implementar upload** de archivos a Supabase Storage
4. **Agregar real-time updates** con Supabase

#### 🎨 **Mejoras de UX:**
1. **Loading states** más sofisticados
2. **Error boundaries** para manejo de errores
3. **Toast notifications** para feedback
4. **Skeleton loaders** para resultados
5. **Autocompletado** en búsquedas

#### 🚀 **Funcionalidades Adicionales:**
1. **Historial de búsquedas** funcional
2. **Filtros avanzados** (fecha, tipo, relevancia)
3. **Exportar resultados** a PDF
4. **Compartir búsquedas** con otros usuarios
5. **Modo offline** con sincronización

### 5. **Comandos Útiles**

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo
npm run build           # Build de producción
npm run start           # Servidor de producción

# Calidad de código
npm run lint            # Linter ESLint
npm run type-check      # Verificación TypeScript
npm run format          # Formatear con Prettier
npm run format:check    # Verificar formato

# Testing
npm run test            # Tests unitarios
npm run test:watch      # Tests en modo watch
npm run test:e2e        # Tests E2E con Playwright
```

### 6. **Configuración del IDE**

#### **VSCode Extensions Recomendadas:**
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **TypeScript Importer**
- **Prettier - Code formatter**
- **ESLint**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**

#### **Configuración VSCode (.vscode/settings.json):**
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  }
}
```

### 7. **Patrones de Código**

#### **Componentes:**
```typescript
// ✅ Estructura recomendada
interface ComponentProps {
  // Props tipadas
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // Lógica del componente
  return (
    <div className="legal-class-name">
      {/* JSX */}
    </div>
  )
}
```

#### **Estilos:**
```css
/* ✅ Usar clases de Tailwind + Legal Labs */
.legal-sidebar {
  @apply w-18 bg-background border-r border-border flex flex-col;
}
```

### 8. **Debugging**

#### **Herramientas:**
- **React Developer Tools** para componentes
- **Next.js DevTools** para performance
- **Tailwind CSS DevTools** para estilos
- **Supabase Dashboard** para base de datos

#### **Logs:**
```typescript
// ✅ Logging recomendado
console.log('Search query:', query)
console.error('Upload error:', error)
console.warn('File size warning:', fileSize)
```

### 9. **Deployment**

#### **Vercel (Recomendado):**
1. Conectar repositorio GitHub
2. Configurar variables de entorno
3. Deploy automático en push a main

#### **Variables de Entorno de Producción:**
```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_key
NEXT_PUBLIC_GRADIENT_AI_API_KEY=your_production_gradient_key
```

### 10. **Recursos Útiles**

- **Documentación Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Shadcn/ui**: https://ui.shadcn.com/
- **Supabase**: https://supabase.com/docs
- **DigitalOcean Gradient**: https://docs.gradient.ai/

---

## 🎯 **¡Listo para Desarrollar!**

El proyecto está completamente configurado y listo para el desarrollo. Todas las dependencias están instaladas, la estructura está creada, y los componentes base están implementados basándose en el mockup de tu socio.

**¡Puedes comenzar a desarrollar inmediatamente!** 🚀
