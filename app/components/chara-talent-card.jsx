import { useState } from 'react'
import { processColorText } from '~/utility/processText'

export default function CharaTalentCard({ talent, lang, imgfile }) {
  const [descOpen, setDescOpen] = useState(false)
  
  return (
    <div className="talent">
      <div className="talent-img-container">
        <img src={ `/images/charaskills/${imgfile}` } />
      </div>

      <h2 className="talent-name" onClick={ () => setDescOpen(!descOpen) }>
        <span>{ talent.title[lang] }</span>
        <svg width="32px" height="32px">        
          <image href="https://icongr.am/fontawesome/chevron-circle-down.svg?size=32&color=FEFFF0" />    
        </svg>
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

