import { useState } from 'react'
import { Link, useLoaderData } from 'remix'
import { getAllCharaGeneralData } from '~/data-getter/get-chara'
import LangPicker from '~/components/lang-picker'
import { useMultilingualSearch } from '~/hooks/useSearch'

export async function loader() {
  return { allData: await getAllCharaGeneralData() }
}

export default function CharacterListPage() {
  const { allData } = useLoaderData()
  const [shownData, setShownData] = useState(allData)
  const [activeLang, setLang] = useState("en") 
  const searchName = useMultilingualSearch()

  const handleSearchName = (e) => {
    const filteredData = searchName(allData, "name", e.target.value)
    setShownData(filteredData)
  }

  return (
    <div>
      <header className="listpage-header">
        <h1>Characters</h1>
        <input 
          placeholder="Search..." onChange={ handleSearchName } 
        />
      </header>

      <LangPicker 
        activeLang={ activeLang } 
        setLang={(lang) => setLang(lang)} 
      />

      <ul className="character-list">
        { shownData.map(chara => 
          <li key={ chara["id"] }>
            <a href={ `/characters/${chara['id']}` }>
              <img src={ `/images/charahead/${chara['id']}.png` } />
              <span>{ chara["name"][activeLang] }</span>
            </a>
          </li>
        ) }
      </ul>
    </div>
  )
}