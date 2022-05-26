import { useState } from 'react'
import { processColorText } from '~/utility/processText'
import ArrowDown from '~/components/icons/arrow-down'

export default function CharaTalentCard({ talent, lang, imgfile }) {
  const [descOpen, setDescOpen] = useState(false)

  return (
    <div className="talent">
      <div className="talent-img-container">
        <img src={ `/images/charaskills/${imgfile}` } />
      </div>

      <h2 className="talent-name" onClick={ () => setDescOpen(!descOpen) }>
        <span>{ talent.title[lang] }</span>
        <ArrowDown />
      </h2>

      { descOpen ? 
        <div className="talent-desc">
          <p dangerouslySetInnerHTML={{__html: processColorText(talent.description[lang])}} />
        </div> :
        null
      }
    </div>
  )
}

