import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Leufu MTB - Club de ciclismo en Lebu, Arauco. Donde el río, el mar y la montaña se unen pedaleando." />
        <title>Leufu MTB - Club de Ciclismo Lebu</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'leufu-primary': '#1e40af',
                    'leufu-secondary': '#059669',
                    'leufu-accent': '#f59e0b',
                    'leufu-dark': '#1f2937',
                    'leufu-light': '#f3f4f6'
                  },
                  fontFamily: {
                    'montserrat': ['Montserrat', 'sans-serif'],
                    'roboto': ['Roboto', 'sans-serif']
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body class="font-roboto antialiased">{children}</body>
    </html>
  )
})
