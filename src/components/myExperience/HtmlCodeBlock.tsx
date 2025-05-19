import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import css from './htmlCodeBlock.module.css'
import FadeInSection from '../../utils/FadeInSection';

const HtmlCodeBlock: FC = () => {

  const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio</title>
</head>
<body>
  <h1>Роман Чернышков</h1>
  <p>front-end developer</p>
</body>
</html>
  `.trim();

  return (
    <div className={css.htmlCodeBlock} >
      <FadeInSection delay={0.4}>
        <SyntaxHighlighter
          language="html"
          style={vscDarkPlus}
          showLineNumbers
          customStyle={{ 
            backgroundColor: 'transparent', 
            opacity: '0.3' 
          }}
        >
          {htmlCode}
        </SyntaxHighlighter>
      </FadeInSection>
    </div>
  );
}

export default HtmlCodeBlock;
