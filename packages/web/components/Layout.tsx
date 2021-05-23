import * as React from "react";
import Head from "next/head";

type LayoutProps = {
  title: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </>
);

export default Layout;
