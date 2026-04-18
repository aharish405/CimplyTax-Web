import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'CimplyTax';
const DEFAULT_URL = 'https://www.cimplytax.com';
const DEFAULT_IMAGE = `${DEFAULT_URL}/og-image.jpg`;

/**
 * Reusable SEO component.
 * Renders dynamic <title>, meta description, and OpenGraph / Twitter tags.
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  schema = null,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} – Tax, GST & Loan Services`;
  const pageUrl   = canonical ? `${DEFAULT_URL}${canonical}` : DEFAULT_URL;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={pageUrl} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* OpenGraph */}
      <meta property="og:type"        content={ogType} />
      <meta property="og:url"         content={pageUrl} />
      <meta property="og:title"       content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image"       content={ogImage} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:locale"      content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card"       content={twitterCard} />
      <meta name="twitter:title"      content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image"      content={ogImage} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
