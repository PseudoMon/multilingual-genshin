import { useLoaderData, Outlet, NavLink } from 'remix'
import { useState } from 'react'
import LangPicker from '~/components/lang-picker'
import charaPageStyles from '~/styles/charapage.css'
import { getCharaGeneralData } from '~/data-getter/get-chara' 
import { getMiscText } from '~/data-getter/utils'

export function links() {
  return [{ rel: "stylesheet", href: charaPageStyles }]
}

export async function loader({ params }) {
  const charaId = params.chara
  let charaData = await getCharaGeneralData(charaId)
  let miscText = await getMiscText() 
  return { charaId, charaData, miscText }
}

export default function CharacterPage() {
  const { charaId, charaData, miscText } = useLoaderData()
  const [activeLang, setLang] = useState("en") 

  return (
    <>
    <LangPicker 
      activeLang={ activeLang } 
      setLang={(lang) => setLang(lang)} 
    />
    <article className="main-page character-main">
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
            <button className="page-button">{ miscText["voices"][activeLang] }</button>
          </NavLink>
          <NavLink to="stories">
            <button className="page-button">{ miscText["story"][activeLang] }</button>
          </NavLink>
          <NavLink to="talents">
            <button className="page-button">{ miscText["talents"][activeLang] }</button>
          </NavLink>
          <NavLink to="constellations">
            <button className="page-button">{ miscText["constellations"][activeLang] }</button>
          </NavLink>
        </div>
      </section>

      <section className="main-content">
        <Outlet context={{ activeLang }} />
      </section>
    </article>
    </>
  )
}