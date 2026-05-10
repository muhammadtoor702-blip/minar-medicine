import { useEffect, useRef, useState } from 'react'

interface MermaidDiagramProps {
  chart: string
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const idRef = useRef(`mermaid-${Math.random().toString(36).slice(2)}`)
  const [svg, setSvg] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function renderDiagram() {
      try {
        setError('')

        const mermaid = (await import('mermaid')).default
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: 'base',
          themeVariables: {
            primaryColor: '#F0FAF6',
            primaryTextColor: '#1a1a1a',
            primaryBorderColor: '#1D9E75',
            lineColor: '#0F6E56',
            secondaryColor: '#f9f9f7',
            tertiaryColor: '#ffffff',
            fontFamily: 'Source Serif 4, Georgia, serif',
          },
        })

        const { svg } = await mermaid.render(idRef.current, chart.trim())
        if (isMounted) setSvg(svg)
      } catch (err) {
        if (isMounted) {
          setSvg('')
          setError(err instanceof Error ? err.message : 'Unable to render Mermaid diagram.')
        }
      }
    }

    renderDiagram()

    return () => {
      isMounted = false
    }
  }, [chart])

  if (error) {
    return (
      <pre className="mermaid-error">
        <code>{chart}</code>
      </pre>
    )
  }

  return (
    <div
      className="mermaid-diagram"
      dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
    />
  )
}
