import { HTMLAttributes } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { CodeContainer } from './styles'

interface CodeProps extends HTMLAttributes<HTMLElement> {}

export function Code({ children, className, ...props }: CodeProps) {
  const match = /language-(?<language>\w+)/.exec(className ?? '')
  const content = String(children)

  const language = match?.groups?.language

  return (
    <CodeContainer>
      {!language ? (
        <pre>
          <code {...props} className={className}>
            {children}
          </code>
        </pre>
      ) : (
        <SyntaxHighlighter {...props} style={{}} language={language}>
          {content}
        </SyntaxHighlighter>
      )}
    </CodeContainer>
  )
}
