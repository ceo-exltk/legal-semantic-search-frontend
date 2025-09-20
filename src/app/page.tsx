'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { SearchView } from '@/components/SearchView'
import { UploadModal } from '@/components/UploadModal'
import { ChatInterface } from '@/components/ChatInterface'

export default function Home() {
  const [activeView, setActiveView] = useState('search')
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)

  const renderContent = () => {
    switch (activeView) {
      case 'search':
        return (
          <>
            <SearchView />
            <ChatInterface onUploadClick={() => setIsUploadModalOpen(true)} />
          </>
        )

      case 'history':
        return (
          <div className="p-6">
            <h1 className="text-base font-semibold text-foreground mb-4">Historial</h1>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-xs text-muted-foreground">No hay actividad reciente</div>
            </div>
          </div>
        )
      default:
        return (
          <>
            <SearchView />
            <ChatInterface onUploadClick={() => setIsUploadModalOpen(true)} />
          </>
        )
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar 
        activeView={activeView} 
        onViewChange={setActiveView}
      />
      <main className="flex-1 flex flex-col max-w-3xl mx-auto w-full">
        {renderContent()}
      </main>
      <UploadModal 
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </div>
  )
}
