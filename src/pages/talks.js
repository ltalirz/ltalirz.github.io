import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Presentations from '../components/Presentations';



export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Talks`}
>
      <main>
        <div className="container">
        <Presentations /> 
        </div>
      </main>
    </Layout>
  );
}
