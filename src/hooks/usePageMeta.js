import { useEffect } from 'react'

export function usePageMeta(title, description, lang = 'en') {
  useEffect(() => {
    document.title = title
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', description)
    document.documentElement.lang = lang
  }, [title, description, lang])
}
