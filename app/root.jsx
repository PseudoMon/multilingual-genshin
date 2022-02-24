import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import SiteHeader from '~/components/site-header'

import normalizeStyles from '~/styles/normalize.css'
import baseStyles from '~/styles/base.css' 

export function meta() {
  return { 
    title: "Multilingual Genshin Database",
    author: "Aliya N. A.",
    description: "A Genshin Impact database focused on showing text in multiple languages" 
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
      href: "https://fonts.googleapis.com/css2?family=Signika:wght@400;600&display=swap"
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
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <SiteHeader />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}