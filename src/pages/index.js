import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import About from './_about.mdx';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary padding-vert--lg', styles.heroBanner)}>
      <span className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <span className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </span> */}
      </span>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Landing page">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <div className="container">
          <div className="row padding-vert--md">
            <div className="col col--9"><About /></div>
            <div className="col col--3"><img src="img/about.jpg" className='about-img' /></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
