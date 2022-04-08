import { useEffect } from 'react'
import { langs } from '~/const'

export default function LangPicker({ activeLang, setLang }) {
  
  useEffect(() => {
    let browserActiveLang = localStorage.getItem('activeLang')

    if (!browserActiveLang) {
      //no active lang saved. Create one
      localStorage.setItem('activeLang', activeLang)
    }

    else if (langs.includes(browserActiveLang)) {
      // set current lang to the one set in localStorage
      // but check if it's one of the langs first
      setLang(browserActiveLang)
    }
    
  }, [])


  function handleSetLang(lang) {
    localStorage.setItem('activeLang', lang)
    setLang(lang)
  }

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
          onClick={ () => handleSetLang(lang) }
        >
          { lang.toUpperCase() }
        </li>
      )}
    </ul>
  )
}