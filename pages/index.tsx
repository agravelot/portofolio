import Head from 'next/head'
import { HTMLMotionProps, motion } from 'framer-motion'
import SocialMedia from '../components/SocialMedia'
import ProjectCard from '../components/ProjectCard'
import Dots from '../components/Dots'
import Circle from '../components/Circle'
import Content from '../components/Content'
import Wave from '../components/Wave'
import { getProjectBySlug } from '../lib/content'
import type { IProject } from '../lib/content'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import { email, socialMediaList } from '../lib/constants'
import { useRouter } from 'next/router'
import LanguageSelect from '../components/LanguageSelect'
import { GetStaticPropsResult } from 'next'
import { translationFactory } from '../lib/translation'

type HomeProps = {
  // description: IContent
  email: string
  projects: Project[]
  // experiences: Experience[]
  // formations: Formation[]
}

export interface Project {
  thumb: Thumbnail | null
  highlightColor: string
  className: string
  frontmatter: IProject['frontmatter']
}

interface Thumbnail {
  className: string
  width: string
  height: string
  src: string
  alt: string
}

const Home = ({ email, projects }: HomeProps) => {
  const { locale } = useRouter()
  const t = translationFactory(locale)

  return (
    <>
      <Head>
        <title>Antoine GRAVELOT</title>
        <meta
          name="description"
          // TODO
          content="Antoine GRAVELOT is a backend software developer specializing in building ... "
        />
      </Head>
      <Circle
        className="bg-blue-600 -right-12 -top-10"
        radius="10rem"
        delay={0.2}
      />
      <Circle
        radius="12rem"
        className="bg-blue-700 top-1/4 -right-16"
        delay={0.3}
      />
      <Circle
        radius="16rem"
        className="bg-blue-900 top-1/3 -left-16"
        delay={0.4}
      />
      <Circle
        radius="12rem"
        className="bg-blue-500 bottom-80 -right-16"
        delay={0.5}
      />
      <Content>
        <div className="flex">
          <div
            style={{ gap: 12 }}
            className="grid grid-flow-col auto-cols-max md:grid-rows-3 md:grid-cols-3 md:absolute md:left-16 lg:left-24 xl:fixed"
          >
            <Dots />
            <Dots />
            <Dots />
            <Dots className="hidden md:grid" />
            <Dots className="hidden md:grid md:col-start-3" />
          </div>
          <div
            style={{ gap: 12 }}
            className="right-8 md:right-16 lg:right-24 absolute"
          >
            <LanguageSelect />
          </div>
        </div>
        <header className="relative">
          <Circle className={`bg-blue-800 ${styles.hero_circle}`} />
          <motion.img
            className="relative z-10 object-cover w-16 h-16 mb-8 bg-gray-400 border-2 border-gray-400 rounded-full md:w-20 md:h-20"
            src="/avatar-tiny.webp"
            height="80"
            width="80"
            alt="Headshot of Antoine GRAVELOT"
            variants={{
              hidden: {
                scale: 0,
              },
              shown: {
                scale: 1,
              },
            }}
            initial="hidden"
            animate="shown"
            transition={{
              type: 'spring',
              damping: 5,
              mass: 0.2,
              delay: 0.2,
            }}
          />

          <div className="relative z-10 mb-4 space-y-4 font-semibold flex flex-col md:space-y-6 md:mb-6 xl:items-start xl:text-left xl:space-y-10">
            <h1 className="flex text-3xl md:text-5xl xl:text-6xl">
              {t.welcome}
              <Wave />
            </h1>
            <p
              style={{ lineHeight: 1.4 }}
              className="text-lg space-y-4 md:text-xl lg:text-2xl xl:text-3xl"
            >
              {t.headline}
            </p>
            <ul className="flex space-x-4 text-lg">
              {socialMediaList.map((sm, i) => (
                <li key={i}>
                  <SocialMedia
                    label={sm.label}
                    link={sm.link}
                    icon={<sm.icon />}
                  />
                </li>
              ))}
            </ul>
          </div>
        </header>
        <section className="space-y-4">{t.introduction}</section>
        <section className="relative mb-12">
          <Dots className="mb-6" />
          <div className="space-y-4 -mt-2">
            <h3 className="relative z-10 text-2xl font-semibold">
              {t.projects.title}
            </h3>
            <p className="relative z-10 text-gray-200">
              {t.projects.description}
            </p>
          </div>
        </section>
        <ul
          className={`space-y-8 px-8 full-width md:grid md:grid-cols-2 md:space-y-0 md:gap-8 ${styles.project_list}`}
        >
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              frontmatter={p.frontmatter}
              className={p.className}
              highlightColor={p.highlightColor}
            >
              {p.thumb && (
                <Image
                  className={p.thumb.className}
                  layout="responsive"
                  width={p.thumb.width}
                  height={p.thumb.height}
                  src={p.thumb.src}
                  alt={p.thumb.alt}
                />
              )}
            </ProjectCard>
          ))}
        </ul>
        <section>
          <Dots className="mb-6" />
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">{t.skills.title}</h3>
            <p className="relative z-10 text-gray-200">
              {t.skills.description}
            </p>
            <ul className="grid grid-cols-2 grid-rows-3 list-disc list-inside">
              {[
                'Golang',
                'TypeScript',
                'NodeJS',
                'Docker',
                'Kubernetes',
                'Istio',
                'PostgreSQL',
                'MongoDB',
                'Redis',
                'PubSub',
                'RabbitMQ',
                'NestJS',
                'PHP',
                'Java',
                'OpenID',
                'React / Next.js',
                'Vue / Nuxt.js',
                'Git / Github / Gitlab',
                'TDD',
              ].map((tech) => (
                <li key={tech} className="relative">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <Dots className="mb-6" />
          <h3 className="relative z-10 text-2xl font-semibold">
            {t.experiences.title}
          </h3>
          <ul>
            {t.experiences.list.map((e, i) => (
              <li key={i} className="py-4">
                <h4 className="font-semibold">
                  {e.name} - {e.position}
                </h4>
                <pre>{e.period}</pre>
                <p className="text-gray-200">{e.description}</p>
                {e.techs && (
                  <ul className="mt-2 list-disc list-inside">
                    {e.techs.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <Dots className="mb-6" />
          <h3 className="relative z-10 text-2xl font-semibold">
            {t.formations.title}
          </h3>
          <ul>
            {t.formations.list.map((e, i) => (
              <li key={i} className="py-4">
                <h4 className="font-semibold">
                  {e.name} - {e.place}
                </h4>
                <pre>{e.period}</pre>
                <p className="text-gray-200">{e.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <Dots className="mb-6" />
          <h3 className="relative z-10 text-2xl font-semibold">
            {t.contact.title}
          </h3>
          <p className="text-gray-200">{t.contact.description}</p>
          <a
            className="block font-semibold text-gray-400"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </section>

        <footer className="flex items-center justify-between text-gray-400 full-width">
          <Dots numX={1} />
          <section>
            <p className="mb-2 font-mono text-sm text-center">
              Antoine GRAVELOT 2021
            </p>
            <ul className="flex justify-center space-x-4 text-lg">
              {socialMediaList.map((sm, i) => (
                <li key={i}>
                  <SocialMedia
                    label={sm.label}
                    link={sm.link}
                    icon={<sm.icon />}
                  />
                </li>
              ))}
            </ul>
          </section>
          <Dots numX={1} />
        </footer>
      </Content>
    </>
  )
}

function ExternalLink({ children, className, ...props }: HTMLMotionProps<'a'>) {
  return (
    <motion.a
      target="_blank"
      rel="noreferrer"
      className={'relative font-semibold text-blue-400 ' + className}
      initial="idle"
      whileHover="hover"
      {...props}
    >
      <motion.span
        className="absolute bottom-0 w-full bg-blue-400"
        style={{ height: 4 }}
        variants={{
          idle: {
            opacity: 0,
            y: 0,
          },
          hover: {
            opacity: 1,
            y: 8,
          },
        }}
      />
      {children}
    </motion.a>
  )
}

export const getStaticProps = async ({
  locale,
}): Promise<GetStaticPropsResult<HomeProps>> => {
  const flasher = await getProjectBySlug(locale, 'flasher.md')
  const anycloud = await getProjectBySlug(locale, 'anycloud.md')
  const freedomOS = await getProjectBySlug(locale, 'freedomos.md')

  // TODO  add srcSetnv
  const projects: Project[] = [
    {
      className: `bg-gradient-to-r from-blue-500 to-red-500 ${styles.flasher}`,
      highlightColor: 'bg-gradient-to-r from-blue-400 to-red-400',
      frontmatter: flasher.frontmatter as IProject['frontmatter'],
      thumb: {
        className: 'mt-8 rounded-lg shadow-xl',
        // layout: 'responsive',
        width: '1867',
        height: '896',
        src: `/thumbnails/${flasher.frontmatter.title.toLowerCase()}.jpg`,
        alt: flasher.frontmatter.title as IProject['frontmatter'],
      },
    },
    {
      className: `bg-gray-400 text-blacks-900 ${styles.anycloud}`,
      highlightColor: 'bg-gray-300',
      frontmatter: anycloud.frontmatter as IProject['frontmatter'],
      thumb: null,
    },
    {
      className: `bg-red-500 ${styles.freedomOS}`,
      highlightColor: 'bg-red-400',
      frontmatter: freedomOS.frontmatter as IProject['frontmatter'],
      thumb: {
        className: 'mt-32 ',
        // layout: 'responsive',
        width: '317',
        height: '561',
        src: `/thumbnails/${freedomOS.frontmatter.title.toLowerCase()}.png`,
        alt: freedomOS.frontmatter.title,
      },
    },
    // {
    //   className: `pb-2 text-blacks-900 ${styles.visualizer}`,
    //   highlightColor: 'hsl(24, 54%, 90%)',
    //   frontmatter: visualizer.frontmatter as IProject['frontmatter'],
    //   thumb: null,
    // },
  ]

  return {
    props: {
      projects,
      email,
    },
  }
}

export default Home
