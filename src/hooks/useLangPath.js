import { useLanguage } from '@/context/LanguageContext'

export function useLangPath() {
  const { lang } = useLanguage()
  return (path) => `/${lang}${path}`
}
