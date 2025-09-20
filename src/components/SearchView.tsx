'use client'

import { Separator } from './ui/separator'

interface SearchResult {
  id: string
  title: string
  filename: string
  section: string
  content: string
  highlights: string[]
}

export function SearchView() {
  const hasSearched = true // Set to true to show example results

  const sampleResults: SearchResult[] = [
    {
      id: '1',
      title: 'Plaza Comercial Las Flores',
      filename: 'SC_LasFlores_2023.pdf',
      section: 'CLÁUSULA DÉCIMA TERCERA: DURACIÓN DEL CONTRATO',
      content: '...El presente contrato de arrendamiento se celebra por tiempo indefinido, pudiendo cualquiera de las partes darlo por terminado mediante aviso escrito con treinta (30) días de anticipación ....',
      highlights: []
    },
    {
      id: '2',
      title: 'Centro Comercial Norte',
      filename: 'CCN_Arrendamiento_2024.pdf',
      section: 'CLÁUSULA VIGÉSIMO PRIMERA: VIGENCIA',
      content: '...VIGENCIA: El término del presente contrato será indefinido, iniciando el 15 de enero de 2024, sin fecha de vencimiento establecida , sujeto únicamente a las causales de...',
      highlights: []
    },
    {
      id: '3',
      title: 'Strip Center Alameda Sur',
      filename: 'SCA_Arrendamiento_2024.pdf',
      section: 'CLÁUSULA OCTAVA: PLAZO Y TERMINACIÓN',
      content: '...PLAZO: El presente contrato se celebra a plazo indefinido, comenzando su vigencia el 01 de marzo de 2024, sin establecer fecha de terminación específica, manteniéndose vigente hasta que alguna de las partes manifieste su voluntad de darlo por terminado con preaviso de sesenta (60) días calendario ....',
      highlights: []
    }
  ]

  const highlightKeywords = (text: string) => {
    // Definición de frases exactas para resaltar
    const continuousPhrases = [
      "se celebra por tiempo indefinido, pudiendo cualquiera de las partes darlo por terminado mediante aviso escrito con treinta \\(30\\) días de anticipación",
      "será indefinido, iniciando el 15 de enero de 2024, sin fecha de vencimiento establecida",
      "se celebra a plazo indefinido, comenzando su vigencia el 01 de marzo de 2024, sin establecer fecha de terminación específica, manteniéndose vigente hasta que alguna de las partes manifieste su voluntad de darlo por terminado con preaviso de sesenta \\(60\\) días calendario"
    ]

    let highlightedText = text
    
    // Procesamiento con expresiones regulares
    continuousPhrases.forEach(phrase => {
      const regex = new RegExp(phrase, "gi")
      highlightedText = highlightedText.replace(
        regex,
        `<span class="bg-blue-100 px-1">$&</span>`
      )
    })

    return { __html: highlightedText }
  }

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      {hasSearched && (
        <>
          {/* Search Query Bubble */}
          <div className="flex justify-center mb-6">
            <div className="legal-search-bubble">
              Busca 3 contratos de arriendo de strip center que tengan duración indefinida.
            </div>
          </div>

          {/* Response Text */}
          <div className="mb-8">
            <p className="text-black text-sm">Aquí tienes los 3 contratos que encontré para ti</p>
          </div>

          {/* Search Results */}
          <div className="space-y-8">
            {sampleResults.map((result, index) => (
              <div key={result.id}>
                <div className="space-y-1">
                  <div className="mb-3">
                    <h3 className="text-black mb-1 text-sm font-medium">{result.title}</h3>
                    <p className="text-gray-400 text-xs">{result.filename}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 mb-2 uppercase tracking-wide text-xs">{result.section}</p>
                    <p 
                      className="text-black leading-relaxed text-xs"
                      dangerouslySetInnerHTML={highlightKeywords(result.content)}
                    />
                  </div>
                </div>
                
                {/* Add separator line between results, but not after the last one */}
                {index < sampleResults.length - 1 && (
                  <div className="mt-8">
                    <Separator className="bg-gray-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
