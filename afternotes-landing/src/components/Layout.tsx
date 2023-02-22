import { NextPage } from 'next';
import React from 'react';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import SEO from './seo/seo';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Layout: NextPage<Props> = ({ children, title }) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
