import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const JSONHighlight = ({ jsonString }: { jsonString: string }) => {
  try {
    const pretty = JSON.stringify(JSON.parse(jsonString), null, 2);
    return (
      <SyntaxHighlighter language="json" style={oneLight}>
        {pretty}
      </SyntaxHighlighter>
    );
  } catch {
    return <p className="text-red-500">Invalid JSON</p>;
  }
};
