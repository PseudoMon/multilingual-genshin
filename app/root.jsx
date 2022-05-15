import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from "remix";

import SiteHeader from '~/components/site-header'
import SiteFooter from '~/components/site-footer'

import normalizeStyles from '~/styles/normalize.css'
import baseStyles from '~/styles/base.css' 

export function meta() {
  return { 
    title: "Multilingual Genshin Database",
    author: "Aliya N. A.",
    description: "A Genshin Impact database focused on showing text in multiple languages",
    viewport: "width=device-width,initial-scale=1",
  };
}

export function links() {
  return [
    { 
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Signika:wght@400;500;600&display=swap"
    },
    { rel: "stylesheet", href: normalizeStyles },
    { rel: "stylesheet", href: baseStyles },
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        <SiteHeader />
        <Outlet />
        <SiteFooter />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <SiteHeader />
        <main>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
        </main>
        <Scripts />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Error! - Multilingual Genshin Database</title>
        <Meta />
        <Links />
      </head>
      <body>
        <SiteHeader />
        <main className="error-page">
          <h1>
            {caught.status} {caught.statusText}
          </h1>
          <p>If it's no trouble, please notify the admin at <a href="https://twitter.com/PseudoMonious" target="_blank">Twitter</a> or <a href="https://github.com/PseudoMon/multilingual-genshin/" target="_blank">GitHub</a> of the error you received and what you did before you get it. Thanks!</p>
        </main>
        <Scripts />
      </body>
    </html>
  );
}