import { graphql, useStaticQuery } from "gatsby";

type UseSiteMetadataProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      image: string;
      [key: string]: unknown;
    };
  };
};

const useSiteMetadata = () => {
  const data = useStaticQuery<UseSiteMetadataProps>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
