import { Style, css } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="jp">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta robots="noindex, nofollow" />
        <title>{title}</title>

        <link href="/static/bootstrap.min.css" rel="stylesheet" />
        <link rel="icon" href="/static/favicon.jpg" type="image/jpeg" />

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />

        <Script src="/app/client.ts" async />
        <Style />
      </head>
      <body>{children}</body>
      <script src="/static/jquery.js" />
      <script src="/static/bootstrap.min.js" />
    </html>
  );
});
