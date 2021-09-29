import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const PresentationList = [
  {
    title: 'The AiiDA ecosystem for materials modelling - Managing workflows on HPC systems from the cloud',
    src: 'sos24.jpeg',
    href: 'https://drive.google.com/file/d/1MHHBXduKncb6SCKEivNYlirCM_U_ZC8k/view?usp=sharing',
    description: (
      <>
        Presented on March 18th, 2021 at the <a href='https://sos24.cscs.ch/session/the-aiida-ecosystem-for-materials-modelling-managing-workflows-on-hpc-systems-from-the-cloud/'>SOS24 workshop</a> on the topic "Will HPC survive the cloud and in what form?".
      </>
    ),
  },
  {
    title: 'AiiDA and the web',
    src: 'aiida-and-the-web.png',
    href: 'https://drive.google.com/open?id=1NydPXz6Oz9t5A8Se9UJhRBvInwEBhtEY',
    description: (
      <>
        Presented on September 9th, 2020 as a group seminar at the <a href='http://theossrv1.epfl.ch/'>THEOS group at EPFL</a>.
      </>
    ),
  },
  {
    title: 'The AiiDA Ecosystem for Computational Materials Science',
    src: 'aiida-ecosystem.jpeg',
    href: 'https://drive.google.com/open?id=1YtS0kEAua3Fljk7dfkJYA896kDeD7OLb',
    description: (
      <>
        Presented on November 20th, 2019 at the <a href='https://galligroup.uchicago.edu/'>Galli group</a> at the University of Chicago (40 minutes).
      </>
    ),
  },
  {
    title: 'The AiiDA Plugin Ecosystem',
    src: 'aiida-plugins.jpeg',
    href: 'https://www.youtube.com/watch?v=wQx0eRfBSzM&list=PL19kfLn4sO_-QtPaHAA8KByFluT2vvlG0&index=8',
    description: (
      <>
        Introduction to AiiDA plugin development, presented on May 22nd, 2019 at the <a href='https://aiida-tutorials.readthedocs.io/en/latest/pages/2019_MARVEL_Psik_MaX/index.html'>AiiDA tutorial on writing reproducible workflows for computational materials science</a> at EPFL.
      </>
    ),
  },
  {
    title: 'The AiiDA Lab Ecosystem',
    src: 'aiida-lab-ecosystem.jpeg',
    href: 'https://drive.google.com/open?id=1NwF5rf5nzw5vSduq03JlSlUgaMwv5aYl',
    video: 'http://indico.ictp.it/event/8004/session/117/contribution/243/material/video/',
    description: (
      <>
        Presented on November 7th, 2018 at the <a href='https://emmc.info/events/intop18/'>EMMC IntOP2018 Workshop</a>.
      </>
    ),
  },
  {
    title: 'Materials Cloud, a Platform for Open Materials Science',
    src: 'materials-cloud.png',
    href: 'https://drive.google.com/open?id=1WsrtcEPclgNjWNm195ItLz1XGwlLzVUP',
    description: (
      <>
        Presented on January 31st, 2018 at the <a href='http://indico.ictp.it/event/8004/overview'>MaX Conference on the Materials Design Ecosystem at the Exascale</a>. 
        See also the <a href='http://indico.ictp.it/event/8004/session/117/contribution/243/material/video/'>video recording</a>.
      </>
    ),
  },
  {
    title: 'Open, Post-Publication Peer Review',
    src: 'peer-review.png',
    href: 'https://drive.google.com/file/d/0B7lz1BqbSo58NDZWUWoxbjNocHc/view?usp=sharing&resourcekey=0-J8yGfrjL6vrO-olYxFmLfg',
    description: (
      <>
        Presented on May 18th 2016, at the Condensed matter theory seminar, University of York.
      </>
    ),
  },
  {
    title: 'The bottom-up approach to graphene nanoribbons',
    src: 'bottom-up-gnrs.png',
    href: 'https://drive.google.com/file/d/0B7lz1BqbSo58aWVIbFlGc2hfalk/view?resourcekey=0-t1hIyP2eY6uStv6c8YjB9Q',
    description: (
      <>
        Presented on September 24th 2015, at the <a href='https://www.epfl.ch/schools/sb/research/iphys/'>EPFL Institute of Physics</a> (on invitation by <a href='https://people.epfl.ch/oleg.yazyev?lang=en'>Oleg Yazyev</a>).
      </>
    ),
  },
  {
    title: 'PhD Thesis defense',
    src: 'defense.png',
    href: 'https://drive.google.com/file/d/0B7lz1BqbSo58c3ozcmpZUUR6b1E/view?usp=sharing&resourcekey=0-wfBUUbYkIadKkGb0jeXtpQ',
    description: (
      <>
        Public seminar held on August 18th 2015 at the <a href='https://www.cmszh.uzh.ch/en.html'>Graduate School of Chemical and Molecular Sciences</a>, University of Zurich.
      </>
    ),
  },

];

function Presentation({title, src, href, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <a href={href} title={title} target='_blank'><img src={'../img/presentations/' + src} className={styles.featureSvg} alt={title} /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Presentations() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {PresentationList.map((props, idx) => (
            <Presentation key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
