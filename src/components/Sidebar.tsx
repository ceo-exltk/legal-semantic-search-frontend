'use client'

import { Search, Clock } from 'lucide-react'

interface SidebarProps {
  activeView: string
  onViewChange: (view: string) => void
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'search', label: 'Buscar', icon: Search },
    { id: 'history', label: 'Historial', icon: Clock },
  ]

  return (
    <div className="legal-sidebar">
      <div className="p-2">
        <h1 className="text-base font-semibold text-foreground">Legal Labs</h1>
      </div>
      
      <nav className="flex-1 px-2">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onViewChange(id)}
            className={`legal-nav-button ${
              activeView === id
                ? 'legal-nav-button-active'
                : 'legal-nav-button-inactive'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
      
      <div className="p-2 border-t border-border">
        <div className="flex items-center gap-2 px-2 py-1 text-xs text-muted-foreground">
          <div className="legal-api-indicator" />
          <span>API Conectada</span>
        </div>
      </div>
    </div>
  )
}
