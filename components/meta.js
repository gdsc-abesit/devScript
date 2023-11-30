import Head from 'next/head'

export default ({
  title = 'DevScript',
  description = 'A 9-hour code jam for all coders, designers, and creators.',
  image = 'https://dev-script.tech/public/banner.png',
  url = 'https://dev-script.tech'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="DevScript" />
    <meta name="twitter:site" content="@gdscabesit" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'DevScript',
          url: 'https://dev-script.tech',
          logo: 'https://dev-script.tech/logo.png',
          sameAs: [
            'https://twitter.com/gdscabesit',
            'https://www.instagram.com/gdscabesit',
            'https://www.facebook.com/gdscabesit'
          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              email: 'gdscabesit@gmail.com',
              contactType: 'support',
              url: 'https://dev-script.tech'
            }
          ]
        })
      }}
    />
  </Head>
)