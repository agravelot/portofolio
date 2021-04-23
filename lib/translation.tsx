import styles from '../styles/Home.module.scss'

interface Formation {
  name: string
  place: string
  period: string
  description: string
}

interface Experience {
  name: string
  period: string
  position: string
  description: string
  techs?: string[]
}

export interface ProjectsTranslation {
  title: string
  description: string
}

export interface SkillsTranslation {
  title: string
  description: string
}

export interface ExpriencesTranslation {
  title: string
  list: Experience[]
}

export interface FormationsTranslation {
  title: string
  list: Formation[]
}

export interface ContactTranslation {
  title: string
  description: string
}

export interface Translation {
  title: string
  welcome: string
  headline: JSX.Element
  introduction: JSX.Element
  projects: ProjectsTranslation
  skills: SkillsTranslation
  experiences: ExpriencesTranslation
  formations: FormationsTranslation
  contact: ContactTranslation
}

const fr: Translation = {
  title: 'Antoine GRAVELOT',
  welcome: 'Bonjour, je suis Antoine',
  headline: (
    <>
      Passionné, étudiant,{' '}
      <span className={styles.emphasis}>développeur backend</span>. <br />{' '}
      Recherche de nouvelles opportunités d'emploi.
    </>
  ),
  introduction: (
    <>
      <p>
        Je travaille à{' '}
        <a
          href="https://www.digischool.fr"
          className="font-semibold text-blue-400"
        >
          digiSchool
        </a>
        , je termine mon master spécialisé en développement web en août 2021.
      </p>
      <p className="text-gray-200">
        Je suis référent technique de l'incubateur DevOps d'Ynov Campus Lyon,
        pour accompagner les étudiants dans leurs projets. A côté de cela, je
        construis un CMS spécialisé pour améliorer la visibilité des
        photographes passionnés{' '}
        <a href="https://jkanda.fr" className="font-semibold text-blue-400">
          flasher
        </a>
        .
      </p>
    </>
  ),
  projects: {
    title: 'Projets',
    description:
      "Ces dernières années, j'ai travaillé sur plusieurs projets. Voici quelques-uns de mes préférés.",
  },
  skills: {
    title: 'Compétences',
    description:
      "Je passe une bonne partie de mon temps libre à bricoler du code et apprendre de nouvelles technologies. Voici celles avec lesquelles je suis le plus à l'aise :",
  },
  experiences: {
    title: 'Expériences',
    list: [
      {
        name: 'digiSchool',
        period: 'Août 2019 - Maintenant',
        position: 'Développeur Backend',
        description:
          "Développement d'importants microservices, utilisé par des millions d'utilisateurs sur nos sites et aussi vendu en SaaS. Réduction majeure du temps de chargement, jusqu'à 20x pour certains sites.",
        techs: [
          'NestJS',
          'Laravel',
          'PostgreSQL',
          'MongoDB',
          'RabbitMQ',
          'Redis',
          'Kubernetes',
          'OpenID',
        ],
      },
      {
        name: 'ORMA',
        period: 'Septembre 2018 - Août 2019',
        position: 'Développeur Full Stack',
        description:
          'Creation of custom Laravel, Symfony website. Development in WordPress, PrestaShop.',
      },
      {
        name: 'PEP SRA',
        period: '6 semaines',
        position: 'Développeur Android',
        description:
          'Development of an Android application, for the integration of people with disabilities.',
      },
      {
        name: 'Déclic Radio',
        period: '5 semaines',
        position: 'Développeur Web',
        description:
          'Creation of a WordPress website, design of a plug-in for live audio broadcasting  « declicradio.fr ».',
      },
    ],
  },
  formations: {
    title: 'Formations',
    list: [
      {
        name: 'Mastère',
        place: 'Ynov Campus Lyon',
        period: 'Août 2019 - Maintenant',
        description:
          "Mastère 2 Expert développement web - RNCP Niveau 7. Mémoire en cours, comment garantir la maintenanbilité d'une architecture microservices.",
      },
      {
        name: 'License professionnelle en alternance',
        place: 'IUT de Valence',
        period: 'Septembre 2018 - Août 2019',
        description:
          "Licence professionnelle CASIR. Conception, développement et test de logiciels parcours Codage d'Applications et de Systèmes Informatiques Répartis.",
      },
      {
        name: 'BTS SIO',
        place: 'Lycée Algoud Laffemas, campus Briffaut ',
        period: 'Septembre 2016 - Juillet 2018',
        description:
          'Solutions Logicielles et Applications Métiers (BTS SIO SLAM).',
      },
    ],
  },
  contact: {
    title: 'Prennons contact',
    description:
      "Je suis actuellement à la recherche d'opportunités de travail à plein temps en tant que développeur backend. Si vous en connaissez, ou si vous voulez juste dire bonjour, n'hésitez pas à me contacter !",
  },
}

const en: Translation = {
  title: 'Antoine GRAVELOT',
  welcome: "Hey, I'm Antoine",
  headline: (
    <>
      Pasionated, student,{' '}
      <span className={styles.emphasis}>backend developer</span>. <br /> Seeking
      for new job opportunities.
    </>
  ),
  introduction: (
    <>
      <p>
        I work @{' '}
        <a
          href="https://www.digischool.fr"
          className="font-semibold text-blue-400"
        >
          digiSchool
        </a>
        , finishing up my Master degree specialized in web development in August
        of 2021.
      </p>
      <p className="text-gray-200">
        I'm technical referent of the DevOps incubator at Ynov Campus Lyon, to
        support students in their projects. On the side, I'm building a
        specialized CMS to improve visibility of passionated photographers{' '}
        <a href="https://jkanda.fr" className="font-semibold text-blue-400">
          flasher
        </a>
        .
      </p>
    </>
  ),
  projects: {
    title: 'Projects',
    description:
      "Over the last years I've been working on some projects. Here's some of my favourites.",
  },
  skills: {
    title: 'Skills',
    description:
      "I spend quite a bit of my free time tinkering around with code and new technologies. Here are the ones I'm most comfortable with:",
  },
  experiences: {
    title: 'Experiences',
    list: [
      {
        name: 'digiSchool',
        period: 'August 2019 - Now',
        position: 'Développeur backend',
        description:
          'Development of important microservices, used by millions of users on our sites and also sold in SaaS. Major reduction in loading time, up to 20x for some sites.',
        techs: [
          'NestJS',
          'Laravel',
          'PostgreSQL',
          'MongoDB',
          'RabbitMQ',
          'Redis',
          'Kubernetes',
          'OpenID',
        ],
      },
      {
        name: 'ORMA',
        period: 'September 2018 - August 2019',
        position: 'Full Stack developer',
        description:
          'Création de site Laravel, Symfony sur mesure. Développement sous WordPress, PrestaShop.',
      },
      {
        name: 'PEP SRA',
        period: '6 weeks',
        position: 'Android developer',
        description:
          'Development of an Android application, for the integration of people with disabilities.',
      },
      {
        name: 'Déclic Radio',
        period: '5 weeks',
        position: 'Web developer',
        description:
          'Creation of a WordPress website, design of a plug-in for live audio broadcasting  « declicradio.fr ».',
      },
    ],
  },
  formations: {
    title: 'Formations',
    list: [
      {
        name: 'Master degree',
        place: 'Ynov Campus Lyon',
        period: 'August 2019 - Now',
        description: 'Web developer expert',
      },
      {
        name: 'Bachelor level in programming',
        place: 'IUT de Valence',
        period: 'September  2018 - August 2019',
        description:
          "Licence professionnelle CASIR. Conception, développement et test de logiciels parcours Codage d'Applications et de Systèmes Informatiques Répartis.",
      },
      {
        name: 'BTEC HND in programming',
        place: 'Lycée Algoud Laffemas, campus Briffaut ',
        period: 'September 2016 - July 2018',
        description:
          'Solutions Logicielles et Applications Métiers (BTS SIO SLAM).',
      },
    ],
  },
  contact: {
    title: "Let's get to know each other.",
    description:
      "I'm currently looking for full-time SWE opportunities. If you know any, or if you just want to say hi, feel free to reach out!",
  },
}

export const translationFactory = (locale: string): Translation => {
  switch (locale) {
    case 'en':
      return en
    case 'fr':
      return fr
    default:
      throw new Error('Unsuported locale.')
  }
}
