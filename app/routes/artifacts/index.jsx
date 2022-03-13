import { useState } from 'react'
import { useLoaderData } from 'remix'
import { getAllArtifactSets } from '~/data-getter/get-artifact'
import LangPicker from '~/components/lang-picker'

export async function loader() {
  return { allData: await getAllArtifactSets() }
}

export default function ArtifactSetListPage() {
  const { allData } = useLoaderData()
  const [activeLang, setLang] = useState("en") 

  function searchName() {
    //TODO
    return
  }

  return (
    <div>
      <header className="artifact-list-header">
        <h1>Artifacts</h1>
  {/*      <input 
          className="artifact-search-bar" 
          placeholder="Search..." onChange={ searchName } 
        />*/}
      </header>

      <LangPicker 
        activeLang={ activeLang } 
        setLang={(lang) => setLang(lang)} 
      />

      <ul className="artifact-list">
        { allData.map(artifact => 
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