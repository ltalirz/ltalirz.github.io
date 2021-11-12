import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Talks from '../components/Talks';



export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Talks`}
>
      <main>
        <div className="container">
        <Talks /> 
        </div>
      </main>
    </Layout>
  );
}
