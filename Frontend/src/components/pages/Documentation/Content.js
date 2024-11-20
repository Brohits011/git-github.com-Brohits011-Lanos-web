import React from 'react';
import './Content.css';

function Content() {
  return (
    <main className="content">
      <h1 className='ContentHeading' >HTML Home</h1>
      <p className='ContentParagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <div className="code-block">
        <pre>
          <code>
            {`<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
            </head>
            <body>
            </body>
            </html>`}
          </code>
        </pre>
      </div>
      <p className='ContentParagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </main>
  );
}

export default Content;
