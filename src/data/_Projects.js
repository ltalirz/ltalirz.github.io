import React from 'react';
const PROJECTS = [
  {
    category: "Website",
    title: "atomistic.software",
    slug: "#atomistic-software",
    imageUrl: "img/projects/atomistic.software.svg",
    subtitle: "Using citation frequency to look at trends in the usage of atomistic simulation software.",
    period: "January 2021 - today",
    tech: "React",
    description: (
      <>
        <p>
          <a href="atomistic.software">atomistic.software</a> is an attempt at gathering insights into the usage of atomistic simulation software in the scientific community
          by analyzing citation frequencies on Google Scholar.
        </p>
        <p>
          This project started from my own curiosity about how open-source software was faring compared to its commercial competitors in this space,
          but I hope practitioners in the field will also find it useful for other purposes - 
          e.g. for getting an overview of major simulation engines with specific features,
          or for monitoring how the use of individual simulation engines is evolving over time.
        </p>
        <p>
          The web site is accompanied by a "perpetual review" review in the <a href="https://livecomsjournal.github.io/">LiveCoMS Journal</a>.
          The plan is to update the data annually, and the review article periodically as needed.
          Contributions to both are highly welcome!
        </p>
      </>
    ),
    links: [
      {
        name: "atomistic.software",
        link: "https://atomistic.software",
      },
      {
        name: "LiveCoMS Article",
        link: "https://doi.org/10.33011/livecoms.3.1.1483",
      },
      {
        name: "GitHub",
        link: "https://github.com/ltalirz/atomistic-software",
      },
    ],
  },
  {
    category: "Open Source Tool",
    title: "AiiDA",
    slug: "#aiida",
    imageUrl: "img/projects/aiida.png",
    subtitle:
      "A workflow manager for computational science with a strong focus on provenance, performance and extensibility.",
    period: "June 2017 - today",
    tech: "Python",
    team: [
      {
        name: "AiiDA Team",
        link: "https://www.aiida.net/team/",
      },
    ],
    description: (
      <>
        <p>
          Backstory: Towards the end of my Ph.D. at Empa in 2015 I found that AiiDA helped me organize my Quantum ESPRESSO calculations more efficiently.
          Furthermore, one interaction stuck in my mind: <a href="https://github.com/aiidateam/aiida-core/issues/150#issuecomment-269009657"> an issue I reported</a>
          was fixed within 3 hours!
          This made me curious when in 2017 I came across a job ad for integrating the nanoporous materials genome with AiiDA and the Materials Cloud.
        </p>

        <p>
          While I did write a couple of AiiDA plugins for nanoporous materials, 
          it turned out there was much more to do in aiida-core, and so I ended up working on many aspects of AiiDA,
          including the <a href="https://aiidateam.github.io/aiida-registry/">plugin registry</a> (which grew from 4 plugins to over 60),
          the documentation,
          usability and performance aspects,
          bug fixes,
          testing, 
          and (lots of) code review.
        </p>

        <p>
          Besides working with great colleagues in the AiiDA team, I particularly enjoyed the interactions with plugin developers and AiiDA users, 
          and so got involved in organising several AiiDA tutorials in Switzerland, Europe, and Asia,
          and strengthened the integration of AiiDA with the global scientific software ecosystem through affiliation with the <a href="https://numfocus.org/">NumFOCUS foundation</a>.
          I'm proud to have initiated AiiDA's participation in <a href="https://summerofcode.withgoogle.com/">Google Summer of Code</a>, and to have co-mentored our first students in 2020 and 2021,
          one of whom later joined the THEOS group at EPFL.
        </p>
      </>
    ),
    links: [
      {
        name: "Website",
        link: "https://www.aiida.net/",
      },
      {
        name: "Docs",
        link: "https://aiida.readthedocs.io/",
      },
      {
        name: "GitHub",
        link: "https://github.com/aiidateam/aiida-core",
      },

    ],
  },
  {
    category: "Website",
    title: "Materials Cloud",
    slug: "#materials-cloud",
    imageUrl: "img/projects/materialscloud.png",
    subtitle: "Open-science platform for seamless sharing of resources in computational materials science.",
    period: "June 2017 - November 2021",
    tech: "flask, OpenStack, ansible, bokeh, panel, ...",
    team: [
      {
        name: "Materials Cloud Team",
        link: "https://www.materialscloud.org/team",
      },
    ],
    description: (
      <>
        <p>
          When joining EPFL in June 2017, I was originally hired for the "integration of the nanoporous genome with AiiDA and the Materials Cloud".
          While this was certainly part of what I worked on, it turned out there was a lot more to do.
        </p>
        <p>
          The Materials Cloud Archive, 
          which was supposed to eventually host all data accompanying research published by the <a href="https://nccr-marvel.ch/">MARVEL</a> national centre of competence in research,
          contained a total of 4 records, which were sent by authors via JSON files via email.
          I started by transforming the archive from a Python script that generated folders to a Flask web application, backed by a PostgreSQL database.
          We then migrated the entire Materials Cloud setup from local servers at EPFL to an OpenStack installation at the Swiss National supercomputing Centre (CSCS),
          for which I wrote the initial ansible scripts.
          I moved the data backend of the archive from the local file system to a Swift object store,
          and integrated the application with the DOI service of the ETH library.
        </p>
        <p>
          We were now ready to advertise the Materials Cloud Archive more widely.
          At the same time, a major overhaul of the Materials Cloud web site was starting to take shape.
          After drafting usage policies (taking inspiration from the <a href="https://arxiv.org/">arXiv</a> and from <a href="https://zenodo.org/">Zenodo</a>), we officially launched the new Materials Cloud web site on February 14th, 2018.
          Over the following years, I contributed several new TOOLS and DISCOVER sections to the platform,
          and initiated the migration of the Materials Cloud Archive to the scalable invenio 3 python framework that powers the Zenodo repository with over 2 million records.
          As of November 2021, the Materials Cloud Archive hosts more than 500 records, and the Materials Cloud receives more than 10k unique monthly visits from from scientists around the world 
          (e.g. top visits in Nov 2021 originate from China, US, India, Germany and Japan).
        </p>
      </>
    ),
    links: [
      {
        name: "Materials Cloud",
        link: "https://www.materialscloud.org",
      },
      {
        name: "Materials Cloud Archive",
        link: "https://archive.materialscloud.org",
      },
    ],
  },
  {
    category: "Open Source Tool",
    title: "ansible-dokku",
    slug: "#ansible-dokku",
    imageUrl: "img/projects/dokku.png",
    subtitle: "An ansible role for the dokku PaaS.",
    period: "December 2019 - November 2021",
    tech: "ansible, molecule, docker",
    team: [
      {
        name: "Jose Diaz-Gonzalez",
        link: "https://github.com/josegonzalez",
      },
      {
        name: "Leopold Talirz",
        link: "https://github.com/ltalirz/",
      },
    ],
    description: (
      <>
        <p>
          Backstory: The WORK section of the Materials Cloud includes a number of <a href="https://www.materialscloud.org/work/tools">online tools</a>, 
          which enable quick materials science calculations directly in the browser.
          While these tools were dockerized from the beginning (and deployed via ansible), 
          the developers of these tools always needed to go through a Materials Cloud administrator in order to fix issues or deploy updates,
          introducing long and unnecessary delays.
          I was therefore on the lookout for a platform-as-a-service (PaaS) implementation that would allow us to empower developers to manage deployment of their tools by themselves. 
          <a href="https://dokku.com/"> Dokku</a> prizes itself as "the smallest PaaS implementation you've ever seen".
          After playing around with it I discovered that, indeed, it was just a thin, user-friendly layer on top of docker.
          Just what we needed!
        </p>
        <p>
          <a href="https://github.com/josegonzalez">Jose</a>, the dokku guru, had already written an ansible role for dokku - alas, the role was not fully idempotent, had minor issues,
          and no continuous integration tests.
          Since I had plenty of experience in testing ansible roles from the <a href="https://galaxy.ansible.com/marvel-nccr">Quantum Mobile ansible roles</a>,
          I started by adding tests to the ansible-dokku.
          Over time, I ended up fixing more and more issues in the role and, with Jose's blessing, took over maintenance of the project.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/dokku/ansible-dokku",
      },
    ],
  },
  {
    category: "Project",
    title: "MatScreen",
    slug: "#matscreen",
    imageUrl: "img/projects/matscreen.png",
    subtitle: "A web platform that matches nanoporous materials to their applications.",
    period: "February 2019 - July 2021",
    tech: "AiiDA, cp2k, raspa, zeo++, panel",
    team: [
      {
        name: "Daniele Ongari",
        link: "https://github.com/danieleongari/",
      },
      {
        name: "Leopold Talirz",
        link: "https://github.com/ltalirz/",
      },
      {
        name: "Berend Smit",
        link: "https://www.epfl.ch/labs/lsmo/smit/",
      },
    ],
    description: (
      <>
        <p>
          The MatScreen project originates from a simple observation:
          the number of novel nanoporous materials reported in the scientific literature has exploded over the last decade, 
          e.g. with upwards of 10'000 crystal structures for metal-organic frameworks reported in the Cambridge Structural Database (as of 2020).
          At the same time, the number of possible applications for these materials are growing, both within the traditional fields of gas separation and gas storage,
          and in new fields such as catalysis and sensing.
          Identifying the best material(s) for each application thus poses a combinatorial problem that is far beyond the reach of experimental testing,
          and requires molecular simulations to narrow down the field of candidates.
        </p>

        <p>
          In <a href="https://doi.org/10.1021/acscentsci.9b00619">previous work</a>, we had accumulated the largest database of experimental crystal structures for covalent-organic frameworks,
          and started automating the prediction of key performance indicators for several applications in the field of gas separation and gas storage using AiiDA workflows.
          The question became: is there a market for a web platform that can perform this material-application match that can sustain its development?
        </p>

        <p>
          Over the course of 2020 and 2021 we contacted several key companies in this space.
          Four of them were interested in doing a project with us, we signed NDAs and performed dedicated pilot studies with each of them to demonstrate the capabilities of the platform.
          While feedback was very positive, and we were contracted for a short-term project, securing a longer-term contract unfortunately took much longer than we had hoped.
          Eventually, Daniele decided to drop out and we had to shelve the project.
        </p>

        <p>
          I personally remain convinced that money can be made in this space, and I wish the companies that come after us the best of luck - 
          such as <a href="https://www.carboninfinity.com/">Carbon Infinity</a>, who leveraged our published AiiDA workflows to screen for direct air capture materials.
        </p>
      </>
    ),
    links: [
      {
        name: "2-minute demo video",
        link: "https://www.youtube.com/watch?v=gesOQpewwJs&t=1s",
      },
      {
        name: "MatScreen website (may go down at some point)",
        link: "https://matscreen.com/",
      },
      {
        name: "2019 Article on workflows for covalent organic frameworks",
        link: "https://doi.org/10.1021/acscentsci.9b00619",
      },
      {
        name: "2020 Perspective article",
        link: "https://doi.org/10.1021/acscentsci.0c00988",
      },
    ],
  },
  {
    category: "Open Source Tool",
    title: "Quantum Mobile",
    slug: "#quantum-mobile",
    imageUrl: "img/projects/quantum_mobile.png",
    subtitle: "A virtual machine for computational materials science.",
    period: "September 2017 - July 2020",
    tech: "ansible, molecule, vagrant, VirtualBox",
    team: [
      {
        name: "Leopold Talirz",
        link: "https://github.com/ltalirz/",
      },
      {
        name: "Giovanni Pizzi",
        link: "https://github.com/giovannipizzi/",
      },
      {
        name: "Christopher Sewell",
        link: "https://github.com/chrisjsewell/",
      },
    ],
    description: (
      <>
        <p>
        Quantum Mobile is a Virtual Machine for computational materials science that provides a uniform environment for quantum mechanical materials simulations. 
        Simulation codes are set up and ready to be used either directly or through the AiiDA python framework for automated workflows and provenance tracking.
        </p>

        <p>
          We've found Quantum Mobile to be particularly useful for courses and tutorials, where it helps minimize the time spent on software installation issues for participants.
          It has been adopted in <a href="https://quantum-mobile.readthedocs.io/en/latest/#testimonials">numerous academic courses and AiiDA tutorials</a>,
          including the popular <a href="http://compmatphys.epotentia.com/">online course on computational materials physics</a> by Stefaan Cottenier.
          While most educators have used the default image provided by us (downloaded &#62;15k times), 
          the setup of Quantum Mobile is modularized through <a href="https://galaxy.ansible.com/marvel-nccr">ansible roles</a>,
          enabling educators to build their own image customized for their specific use case.
        </p>

        <p>
          Together with Giovanni Pizzi, I created the first version of Quantum Mobile in September 2017, 
          and have acted as its maintainer until handing over the role to Chris Sewell in July 2020.
        </p>
       </>
    ),
    links: [
      {
        name: "Quantum Mobile Docs",
        link: "https://quantum-mobile.readthedocs.io",
      },
      {
        name: "GitHub",
        link: "https://github.com/marvel-nccr/quantum-mobile",
      },
      {
        name: "Roles on ansible galaxy",
        link: "https://galaxy.ansible.com/marvel-nccr",
      },
    ],
  },
  {
    category: "Open Source Tool",
    title: "iDEA code",
    slug: "#idea-code",
    imageUrl: "img/projects/idea.svg",
    subtitle: "Solving the many-body Schrödinger equation in 1d",
    period: "October 2016 - August 2018",
    tech: "Python, numpy, scipy",
    team: [
      {
        name: "Jack Wetherell",
        link: "https://github.com/JackWetherell/",
      },
      {
        name: "Leopold Talirz",
        link: "https://github.com/ltalirz/",
      },
      {
        name: "Mike Entwistle",
        link: "https://github.com/MikeEntwistle/",
      },
      {
        name: "Matt Hodgson",
        link: "https://www-users.york.ac.uk/~mjph501/index.html",
      },
      {
        name: "Rex Godby",
        link: "https://www-users.york.ac.uk/~rwg3/",
      },
    ],
    description: (
      <>
        <p>
          The interacting Dynamic Electrons Approach (iDEA) is a Python package (with Cython extensions) that can solve the Schrödinger equation for model systems,
          allowing us to better understand and improve the approximations that are necessary when modeling more realistic systems.
          Specifically, it can solve the Schrödinger equation for up to 4 spinless electrons in 1 dimension for arbitrary potentials.
        </p>

        <p>
          While in the group of Rex Godby at the University of York, I added an implementation of the GW space-time method to iDEA.
          I started modularizing, testing, and packaging the code,
          and convinced the other authors to release a <a href="https://github.com/godby-group/idea-public">public version</a> of the code under the MIT license.
        </p>

        <p>
          Besides its use in fundamental research, I see iDEA as a great educational tool.
          Have you ever wondered what the derivative discontinuity of Kohn-Sham DFT looks like in real space?
          iDEA allows graduate students gain an intuitive understanding for such concepts in model systems,
          and I'm proud to see that iDEA <a href="https://www.coursera.org/learn/density-functional-theory/lecture/VRnrb/the-shape-of-the-kohn-sham-potential">made it into</a> the <a href="https://www.coursera.org/learn/density-functional-theory">
          Coursera course on density functional theory</a> by Francesco Sottile and Lucia Reining.
        </p>
      </>
    ),
    links: [
      {
        name: "Open-source version of iDEA",
        link: "https://github.com/godby-group/idea-public",
      },
      {
        name: "iDEA documentation",
        link: "https://idea-code.readthedocs.io",
      },
      {
        name: "Publications powered by iDEA",
        link: "https://www-users.york.ac.uk/~rwg3/idea.html",
      },
    ],
  },
];

export default PROJECTS;
