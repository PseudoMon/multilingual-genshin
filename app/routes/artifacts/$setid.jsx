import { useLoaderData } from 'remix'
import { useState } from 'react'
import { getArtifactSetData, getMiscData } from '~/data-getter/get-artifact' 
import LangPicker from '~/components/lang-picker'
import ArtifactPiece from '~/components/artifact-piece'

export async function loader({ params }) {
  const setId = params.setid
  let setData = await getArtifactSetData(setId)
  let miscData = await getMiscData()
  return { setId, setData, miscData }
}

export default function ArtifactSetPage() {
  const { setData, miscData } = useLoaderData()
  const [activeLang, setLang] = useState('en')

  return (
    <article className="artifact-main">
      <section className="sidebar">
        
        <img src={ `/images/artifacts/${ setData['pieces'][0]['imgid'] }.png` }/>
        <h1 className="set-name">
          <span>{ setData['name'][activeLang]}</span>
        </h1>

        { setData['descriptions'].map((desc, index) => (
          <div class="description">
            <h2 className="desc-title">
              { miscData["setterm"][activeLang].replace("{0}", setData["SetNeedNum"][index]).replace("{1}", "") }</h2>
            <p>{ desc[activeLang] }</p>
          </div>
        )) }
      </section>

      <section className="main-content">
        <LangPicker 
          activeLang={ activeLang } 
          setLang={(lang) => setLang(lang)} 
        />

        <ul className="artifact-pieces">
          { setData['pieces'].map(piece => (
            <ArtifactPiece
              key={ piece['name']['en'] } 
              miscData={ miscData }
              piece={ piece } 
              activeLang={ activeLang } 
            />
          ))}
        </ul>
      </section>
    </article>
  )
}