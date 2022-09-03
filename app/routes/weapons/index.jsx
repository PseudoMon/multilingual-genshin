import { useState } from 'react'
import { useLoaderData, Link } from 'remix'
import { getWeaponsList } from '~/data-getter/get-weapons'
import LangPicker from '~/components/lang-picker'
import { useMultilingualSearch } from '~/utility/useSearch'

export async function loader({ request }) {
  return { allData: await getWeaponsList(request.url) }
}

export default function ArtifactSetListPage() {
  const { allData } = useLoaderData()
  const [shownData, setShownData] = useState(allData)
  const [activeLang, setLang] = useState("en") 
  const searchName = useMultilingualSearch()

  const handleSearchName = (e) => {
    const filteredData = searchName(allData, "name", e.target.value)
    setShownData(filteredData)
  }

  return (
    <>
      <header className="listpage-header">
        <h1>Weapons</h1>
        <input 
          placeholder="Search..." onChange={ handleSearchName } 
        />
      </header>

      <LangPicker 
        activeLang={ activeLang } 
        setLang={(lang) => setLang(lang)} 
      />

      <ul className="weapons-list">
        { shownData.map(weapon => 
          <li key={ weapon['url'] }>
            <Link to={ `/weapons/${weapon['url']}` }>
              <img
                src={ `/images/weapons/${weapon['url']}.webp` } 
                onError={e => {
                  e.currentTarget.onerror = null //prevents looping
                  e.currentTarget.src = `/images/weapons/default.webp`
                }} 
              />
              <span>{ weapon["name"][activeLang] }</span>
            </Link>
          </li>
        ) }
      </ul>
    </>
  )
}