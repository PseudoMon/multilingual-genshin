import { useState } from 'react'
import { useLoaderData } from 'remix'
import { getAllArtifactSets } from '~/data-getter/get-artifact'
import LangPicker from '~/components/lang-picker'
import { useMultilingualSearch } from '~/hooks/useSearch'

export async function loader() {
  return { allData: await getAllArtifactSets() }
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
    <div>
      <header className="listpage-header">
        <h1>Artifacts</h1>
        <input 
          placeholder="Search..." onChange={ handleSearchName } 
        />
      </header>

      <LangPicker 
        activeLang={ activeLang } 
        setLang={(lang) => setLang(lang)} 
      />

      <ul className="artifact-list">
        { shownData.map(artifact => 
          <li key={ artifact["SetId"] }>
            <a href={ `/artifacts/${artifact['SetId']}` }>
              <img
                src={ `/images/artifacts/${artifact['imgid']}.png` } 
                onError={ e => { e.target.src="/images/default.png" } } 
              />
              <span>{ artifact["name"][activeLang] }</span>
            </a>
          </li>
        ) }
      </ul>
    </div>
  )
}