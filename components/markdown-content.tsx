import ReactMarkdown from 'react-markdown';

export function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => (
          <h2 className="text-xl font-semibold text-foreground mt-10 mb-4 tracking-tight">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="text-foreground/80 leading-relaxed mb-4">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-5 space-y-2 mb-4 text-foreground/80">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-5 space-y-2 mb-4 text-foreground/80">{children}</ol>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
        a: ({ href, children }) => (
          <a href={href} className="text-primary hover:underline">
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
