// Cloudflare Pages Functions middleware for SPA routing
export async function onRequest(context: any) {
  const url = new URL(context.request.url);
  
  // If the request is for a file with an extension, serve it directly
  if (url.pathname.includes('.')) {
    return context.next();
  }
  
  // For all other routes, serve index.html (SPA routing)
  try {
    return await context.env.ASSETS.fetch(context.request);
  } catch {
    // If the asset doesn't exist, serve index.html
    const indexUrl = new URL('/index.html', url.origin);
    return await context.env.ASSETS.fetch(new Request(indexUrl, context.request));
  }
}
