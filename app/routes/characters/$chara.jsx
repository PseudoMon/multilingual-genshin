import { useLoaderData, Outlet, NavLink } from 'remix'
import { useState } from 'react'
import LangPicker from '~/components/lang-picker'
import charaPageStyles from '~/styles/charapage.css'
import { getCharaGeneralData } from '~/data-getter/get-chara' 

export function links() {
  return [{ rel: "stylesheet", href: charaPageStyles }]
}

export async function loader({ params }) {
  const charaId = params.chara
  let charaData = await getCharaGeneralData(charaId)
  return { charaId, charaData }
}

export default function CharacterPage() {
  const { charaId, charaData } = useLoaderData()
  const [activeLang, setLang] = useState("en") 

  return (
    <article className="character-main">
      <section className="sidebar">

        <div className="character-profile">
          <img src={`/images/characard/${ charaId }.png`} />
          <h1 className="character-name">
            <span>{ charaData['name'][activeLang] }</span>
          </h1>
          <h2 className="character-title">
            <span>{ charaData['title'][activeLang] }</span>
          </h2>
          <p className="character-description">
            { charaData['description'][activeLang] }
          </p>
        </div>

         <div className="page-nav">
          <NavLink to="voices">
            <button className="page-button">Voice Overs</button>
          </NavLink>
          <NavLink to="stories">
            <button className="page-button">Story</button>
          </NavLink>
        </div>
      </section>

      <section className="main-content">
        <LangPicker 
          activeLang={ activeLang } 
          setLang={(lang) => setLang(lang)} 
        />

        <Outlet context={{ activeLang }} />
      </section>
    </article>
  )
}