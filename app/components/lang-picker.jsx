import { langs } from '~/const'

export default function LangPicker({ activeLang, setLang }) {

  function getClass(lang) {
    if (activeLang === lang) {
      return "active"
    } else {
      return null
    }
  }

  return (
    <ul className="lang-picker">
      { langs.map(lang => 
        <li
          key={ lang } 
          className={ getClass(lang) }
          onClick={ () => setLang(lang) }
        >
          { lang.toUpperCase() }
        </li>
      )}
    </ul>
  )
}