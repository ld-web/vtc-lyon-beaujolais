import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/useSiteMetadata";

export default function Seo() {
  const site = useSiteMetadata();

  return (
    <Helmet titleTemplate={`%s | ${site.title}`} defaultTitle={site.title}>
      <html lang="fr" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.description} />
      <meta name="image" content={site.image} />
      <meta property="og:title" content={site.title} />
      <meta property="og:url" content={site.siteUrl} />
      <meta property="og:description" content={site.description} />
      <meta property="og:image" content={site.image} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={site.description} />
      <link
        rel="icon"
        type="image/jpeg"
        sizes="32x32"
        href="/favicon-32x32.jpg"
      />
      <link
        rel="icon"
        type="image/jpeg"
        sizes="16x16"
        href="/favicon-16x16.jpg"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.jpg"
      />
    </Helmet>
  );
}
