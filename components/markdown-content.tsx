import ReactMarkdown from 'react-markdown';

export function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => (
          <h2 className="mb-4 mt-10 text-xl font-bold text-[#0F172A]">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="mb-3 mt-8 text-lg font-bold text-[#0F172A]">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="mb-4 leading-7 text-[#334155]">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="mb-4 list-disc space-y-2 pl-5 text-[#334155]">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 list-decimal space-y-2 pl-5 text-[#334155]">{children}</ol>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        strong: ({ children }) => <strong className="font-bold text-[#0F172A]">{children}</strong>,
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
