import { useRouter } from 'next/router'

const LanguageSelect = () => {
  const router = useRouter()
  const { locale, locales, pathname, asPath } = router

  return (
    <select
      name="locale"
      className="bg-transparent border-none outline-none cursor-pointer"
      value={locale}
      onChange={(e) =>
        router.push(pathname, asPath, { locale: e.target.value })
      }
    >
      {locales.map((l, i) => {
        return (
          <option key={i} value={l} className="bg-blacks-700">
            {l.toUpperCase()}
          </option>
        )
      })}
    </select>
  )
}

export default LanguageSelect
