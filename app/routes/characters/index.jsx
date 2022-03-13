import { useState } from 'react'
import { Link, useLoaderData } from 'remix'
import { getAllCharaGeneralData } from '~/data-getter/get-chara'
import LangPicker from '~/components/lang-picker'

export async function loader() {
  return { allData: await getAllCharaGeneralData() }
}

export default function CharacterListPage() {
  const { allData } = useLoaderData()
  const [shownData, setShownData] = useState(allData)
  const [activeLang, setLang] = useState("en") 

  const searchName = (e) => {
    const target = e.target.value.toLowerCase()
    const filteredData = allData.filter(data => {

      for (let lang in data.name) {
        if (data.name[lang].toLowerCase().includes(target)) {
          return true
        }
      }

      return false
    })

    setShownData(filteredData)
  }

  return (
    <div>
      <header class="character-list-header">
        <h1>Characters</h1>
        <input 
          class="chara-search-bar" 
          placeholder="Search..." onChange={ searchName } 
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