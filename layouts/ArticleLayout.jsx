// ./layouts/ArticleLayout.jsx

import Head from "next/head";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";

const ArticleLayout = ({ markdoc, children }) => {
  const { title, description, cover } = markdoc?.frontmatter;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <SiteHeader />
      <article className="site-article">
        <div className="wrapper">
          <header className="article-header">
            {/* render image */}
            <div className="img-cont relative h-56">
              <Image
                src={cover}
                fill={true}
                alt="cover"
                className="object-cover rounded-b-2xl"
              />
            </div>
            <div className="wrapper">
              <h1 className="font-extrabold text-6xl">{title}</h1>
              <p className="text-2xl">{description}</p>
            </div>
          </header>
          <div className="article-content prose">{children}</div>
        </div>
      </article>
    </>
  );
};

export default ArticleLayout;
