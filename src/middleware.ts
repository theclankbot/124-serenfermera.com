import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async ({ request, redirect }, next) => {
  const url = new URL(request.url);

  if (url.hostname === "www.serenfermera.com") {
    url.hostname = "serenfermera.com";
    return redirect(url.toString(), 308);
  }

  return next();
});
