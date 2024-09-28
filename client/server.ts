// Create the server and define the API route

Bun.serve({
  port: 3000,
  async fetch(req) {
    if (req.url.endsWith('/')) {
      return new Response(
        `
        <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="stylesheet" href="styles.css" />
              <title>Document</title>
            </head>
            <body>
              <button onclick="onClick()">generate</button>
              <script src="client.js"></script>
            </body>
          </html>
`,
        {
          headers: {
            'Content-Type': 'text/html',
          },
        }
      );
    }

    if (req.url.endsWith('/client.js')) {
      const file = Bun.file('./index.js');

      const text = await file.text();
      return new Response(text, {
        headers: {
          'Content-Type': 'application/javascript',
        },
      });
    }

    if (req.url.endsWith('/api/cat-names')) {
      const file = Bun.file('./cat-names.txt');

      const text = await file.text();
      const catNames = text.split('\n');

      return new Response(JSON.stringify({ catNames }), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    if (req.url.endsWith('/styles.css')) {
      const file = Bun.file('./styles.css');

      const text = await file.text();

      return new Response(text, {
        headers: {
          'Content-Type': 'text/css',
        },
      });
    }
    return new Response('Not Found', { status: 404 });
  },
});

console.log('Server running at http://localhost:3000');
