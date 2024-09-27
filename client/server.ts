// Create the server and define the API route

Bun.serve({
  port: 3000,
  async fetch(req) {
    if (req.url.endsWith('/api/cat-names')) {
      const file = Bun.file('./cat-names.txt');

      const text = await file.text();
      const catNames = text.split('\n');

      return new Response(JSON.stringify({ catNames }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        },
      });
    }
    return new Response('Not Found', { status: 404 });
  },
});

console.log('Server running at http://localhost:3000');
