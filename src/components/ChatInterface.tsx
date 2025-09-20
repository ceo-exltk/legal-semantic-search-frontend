'use client'

import { Send, Plus } from 'lucide-react'
import { useState } from 'react'

interface ChatInterfaceProps {
  onUploadClick?: () => void
}

export function ChatInterface({ onUploadClick }: ChatInterfaceProps) {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      // Handle search logic here
      console.log('Search query:', query)
      setQuery('')
    }
  }

  return (
    <div className="bg-white border-t border-gray-100">
      <div className="px-6 py-4">
        <form onSubmit={handleSearch}>
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <div className="legal-chat-input">
                <button
                  type="button"
                  onClick={onUploadClick}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Pregunta lo que quieras"
                  className="flex-1 bg-transparent border-0 px-2 py-2 text-sm focus:outline-none"
                />
              </div>
            </div>
            <button 
              type="submit"
              className="bg-black hover:bg-gray-800 text-white p-2 rounded-full transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
