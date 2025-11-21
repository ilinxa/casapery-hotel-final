// BlockRenderer.tsx
import React from 'react';

export type RichText =
  | { type: 'text'; text: string; bold?: boolean; italic?: boolean; underline?: boolean; strikethrough?: boolean; code?: boolean }
  | { type: 'link'; url: string; children: RichText[]; newTab?: boolean }
  | { type: 'image'; image: { url: string; alternativeText?: string } }
  | { type: 'quote'; children: RichText[]; alignment?: 'left' | 'center' | 'right' }
  | { type: 'divider' }
  | { type: 'list'; format: 'ordered' | 'unordered'; children: Array<{ type: 'list-item'; children: RichText[] }> }
  | { type: 'list-item'; children: RichText[] }
  | { type: 'code'; value: string; language?: string | null }
  | { type: 'heading'; level: 1 | 2 | 3 | 4 | 5 | 6; children: RichText[] }
  | { type: 'paragraph'; children: RichText[] };

export interface BlockRendererProps {
  content: RichText[];
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ content }) => {
  return (
    <>
      {content.map((node, idx) => renderNode(node, idx))}
    </>
  );
};

const renderNode = (node: RichText, key: React.Key) => {
  if (node.type === 'text') {
    let text = <>{node.text}</>;

    if (node.bold) text = <strong>{text}</strong>;
    if (node.italic) text = <em>{text}</em>;
    if (node.underline) text = <span className="underline">{text}</span>;
    if (node.strikethrough) text = <s>{text}</s>;
    if (node.code) text = <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono">{text}</code>;

    return <>{text}</>;
  }

  switch (node.type) {
    case 'link':
      return (
        <a
          key={key}
          href={node.url}
          target={node.newTab ? '_blank' : '_self'}
          rel={node.newTab ? 'noopener noreferrer' : undefined}
          className="text-blue-600 hover:underline font-medium"
        >
          {renderChildren(node.children)}
        </a>
      );

    case 'heading':
      const HeadingTag = `h${node.level}` as keyof JSX.IntrinsicElements;
      const headingClasses = {
        1: 'text-4xl md:text-5xl font-bold mt-10 mb-5',
        2: 'text-3xl md:text-4xl font-semibold mt-9 mb-4',
        3: 'text-2xl md:text-3xl font-semibold mt-8 mb-4',
        4: 'text-xl md:text-2xl font-medium mt-7 mb-3',
        5: 'text-lg font-medium mt-6 mb-3',
        6: 'text-base font-medium mt-5 mb-3',
      }[node.level];

      return (
        <HeadingTag key={key} className={headingClasses}>
          {renderChildren(node.children)}
        </HeadingTag>
      );

    case 'paragraph':
      return (
        <p key={key} className="text-base leading-relaxed mt-4 mb-4 text-gray-800">
          {renderChildren(node.children)}
        </p>
      );

    case 'quote':
      const alignmentClass = {
        center: 'mx-auto text-center',
        right: 'ml-auto text-right',
        left: 'mr-auto text-left',
      }[node.alignment || 'left'];

      return (
        <blockquote
          key={key}
          className={`border-l-4 border-blue-500 pl-5 italic my-6 text-gray-700 max-w-3xl ${alignmentClass}`}
        >
          {renderChildren(node.children)}
        </blockquote>
      );

    case 'image':
      return (
        <figure key={key} className="my-6">
          <img
            src={node.image.url}
            alt={node.image.alternativeText || ''}
            className="max-w-full h-auto rounded-lg shadow-md"
            style={{ margin: '0 auto' }}
          />
          {node.image.alternativeText && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {node.image.alternativeText}
            </figcaption>
          )}
        </figure>
      );

    case 'divider':
      return <hr key={key} className="my-8 border-t border-gray-300" />;

    case 'list':
      const ListTag = node.format === 'ordered' ? 'ol' : 'ul';
      const listStyle = node.format === 'ordered'
        ? 'list-decimal'
        : 'list-disc';

      return (
        <ListTag key={key} className={`${listStyle} list-inside my-4 pl-5 space-y-2`}>
          {node.children.map((item, index) =>
            item.type === 'list-item' ? (
              <li key={index} className="text-gray-800">
                {renderChildren(item.children)}
              </li>
            ) : null
          )}
        </ListTag>
      );

    case 'code':
      return (
        <pre key={key} className="my-6 p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
          <code>{node.value}</code>
        </pre>
      );

    default:
      return (
        <div key={key} className="text-red-600 text-sm italic">
          [Unsupported block: {isTypeGuard(node) ? node.type : 'unknown'}]
        </div>
      );
  }
};

const renderChildren = (children: RichText[]) => {
  return children.map((child, index) => renderNode(child, index));
};

// Helper to avoid TS error on `node.type`
function isTypeGuard(node: any): node is { type: string } {
  return typeof node.type === 'string';
}

export default BlockRenderer;