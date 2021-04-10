import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from 'next'
import { getArticleBySlug, getArticleSlugs, IProject } from '../../lib/content'
import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'
import renderToString from 'next-mdx-remote/render-to-string'
import CaseStudy from '../../components/CaseStudy'
import Circle from '../../components/Circle'

type Props = {
  source: MdxRemote.Source
  frontmatter: {
    path: string
    type: string
    title: string
    tech: string[]
    blurb: string
    github: string
    link: string
  }
}

const ArticleShow: NextPage<Props> = ({ source, frontmatter }: Props) => {
  const components = {}

  const content = hydrate(source, { components })
  return (
    <CaseStudy meta={frontmatter}>
      <figure className="relative full-width mb-16">
        <Circle
          className="w-40 h-40 bg-blue-400 -right-16 -top-6 lg:w-56 lg:h-56"
          delay={0.2}
        />
        <div className="absolute w-full h-full bg-gray-500 rounded-lg top-2 left-2 lg:top-4 lg:left-4"></div>
      </figure>
      {content}
    </CaseStudy>
  )
}

export default ArticleShow

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
}): Promise<GetStaticPropsResult<Props>> => {
  const article = await getArticleBySlug(locale, params.slug as string)
  const mdxSource = await renderToString(article.content, {
    components: {},
  })

  return {
    props: {
      source: mdxSource,
      frontmatter: article.frontmatter as IProject['frontmatter'],
    },
  }
}

export const getStaticPaths: GetStaticPaths = async ({
  defaultLocale,
}): Promise<GetStaticPathsResult> => {
  const articleSlugs = await getArticleSlugs(defaultLocale)
  return {
    paths: [
      ...articleSlugs.map((slug) => ({ params: { slug }, locale: 'fr' })),
      ...articleSlugs.map((slug) => ({ params: { slug }, locale: 'en' })),
    ],
    fallback: false,
  }
}
