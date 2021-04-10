import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const contentDir = path.join(process.cwd(), 'content')

export interface IContent {
  frontmatter: Record<string, any>
  content: string
  slug: string
}

export interface IProject extends IContent {
  frontmatter: {
    type: string
    path: string
    github: string
    link: string | null
    tech: string[]
    title: string
    blurb: string
  }
}

export interface IArticle extends IContent {
  frontmatter: {
    type: string
    path: string
    github: string
    link: string | null
    tech: string[]
    title: string
    blurb: string
  }
}

type Resource = 'articles' | 'projects'

const getResourceDir = (locale: string, resource: Resource): string =>
  path.join(contentDir, locale, resource)

export async function getContentBySlug(
  locale: string,
  resource: Resource,
  slug: string
): Promise<IContent> {
  const realSlug = slug.replace(/\.[^/.]+$/, '')
  const fullPath = path.join(getResourceDir(locale, resource), slug)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return {
    frontmatter: data,
    content,
    slug: realSlug,
  }
}

// Projects

export function getProjectBySlug(
  locale: string,
  slug: string
): Promise<IContent> {
  return getContentBySlug(locale, 'projects', slug)
}

export function getAllProjects(locale: string): Promise<IContent>[] {
  const projectSlugs = getProjectSlugs(locale)
  return projectSlugs.map((slug) => getContentBySlug(locale, 'projects', slug))
}

export function getProjectSlugs(locale: string): string[] {
  return fs.readdirSync(getResourceDir(locale, 'projects'))
}

// Articles

export function getArticleBySlug(
  locale: string,
  slug: string
): Promise<IContent> {
  return getContentBySlug(locale, 'articles', slug + '.mdx')
}

export function getAllarticles(locale: string): Promise<IContent>[] {
  const articleSlugs = getArticleFiles(locale)
  return articleSlugs.map((slug) => getContentBySlug(locale, 'articles', slug))
}

export function getArticleFiles(locale: string): string[] {
  return fs.readdirSync(getResourceDir(locale, 'articles'))
}

export function getArticleSlugs(locale: string): string[] {
  return getArticleFiles(locale).map((s) => s.replace(/\.[^/.]+$/, '')) // Remove file extension
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
