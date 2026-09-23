import { useEffect } from 'react'
import { siteContent } from '../content/siteContent'

type PageMetaProps = {
  title: string
  description: string
}

const setMetaByName = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
  if (!element) {
    element = document.createElement('meta')
    element.name = name
    document.head.append(element)
  }
  element.content = content
}

const setMetaByProperty = (property: string, content: string) => {
  let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.append(element)
  }
  element.content = content
}

export default function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${siteContent.seo.siteName}`

    document.title = fullTitle

    setMetaByName('description', description)
    setMetaByName('robots', 'index,follow')
    setMetaByProperty('og:title', fullTitle)
    setMetaByProperty('og:description', description)
    setMetaByProperty('og:type', 'website')
    setMetaByProperty('og:locale', 'de_DE')
  }, [description, title])

  return null
}
