import { useLoaderData } from 'remix'
import { useState } from 'react'
import { getWeaponData, getMiscData } from '~/data-getter/get-weapons'
import LangPicker from '~/components/lang-picker'
import WeaponDatalineCard from '~/components/weapon-dataline-card'

function StarElem() {
  return (
    <svg width="22" height="22" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/></svg>
  )
}

export async function loader({ params }) {
  const weaponType = params.weapontype
  const weaponId = params.weaponid
  const weaponData = await getWeaponData(weaponType, weaponId)
  const miscData = await getMiscData()

  const intToString = ["zero", "one", "two", "three", "four", "five"]

  return { weaponData, miscData, starClass: intToString[weaponData['rank']] }
}

export default function ArtifactSetPage() {
  const { weaponData, miscData, starClass } = useLoaderData()
  const [activeLang, setLang] = useState('en')
  const starRanking = weaponData['rank']

  return (
    <>
    <LangPicker 
      activeLang={ activeLang } 
      setLang={(lang) => setLang(lang)} 
    />
    <article className="main-page">
      <section className="sidebar">
        <img 
          src={`/images/weapons/${weaponData['imgid']}.webp`} 
          onError={e => {
            e.currentTarget.onerror = null //prevents looping
            e.currentTarget.src = `/images/weapons/default.webp`
          }} 
        />
        <h1 className="weapon-name">{ weaponData['name'][activeLang] }</h1>
        <h2 className={`star-ranking ${starClass}`}>
          { Array(weaponData['rank']).fill(
            <StarElem />
          ) }
        </h2>
        <h2 className="weapon-type">{miscData[weaponData['type']][activeLang]}</h2>
        
        <p>
          {weaponData['description'][activeLang]}
        </p>

      </section>

      <section>
        <ul className="datalines">
          {weaponData['lore'] && Object.keys(weaponData['lore']).length > 0 ?
            <li key="lore">
              <WeaponDatalineCard 
                dataline={{ 
                  name: "Lore", 
                  description: weaponData['lore'],
                }}
                lang={activeLang}
                isLore={true}
              />
            </li>
          : null}
          
          {weaponData['effects'] ?
            weaponData['effects'].map((effect,index) => (
              <li key={`r${index + 1}`}>
                <WeaponDatalineCard
                  dataline={effect}
                  lang={activeLang}
                  refineLevel={index + 1}
                />
              </li>
            ))
          : null}
        </ul>
      </section>
    </article>
    </>
  )
}