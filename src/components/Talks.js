import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import TALKS from '../data/_Talks';

function Talk({title, src, href, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <a href={href} title={title} target='_blank'><img src={'../img/talks/' + src} className={styles.featureSvg} alt={title} /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Talks() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {TALKS.map((props, idx) => (
            <Talk key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
