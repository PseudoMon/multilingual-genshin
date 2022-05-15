import { useState } from 'react'

function processDesc(oriDesc) {
  // Talent description includes formatting such as <color=#FFD780FF>
  // This process it to proper HTML
  let newDesc = oriDesc

  newDesc = newDesc.replace(
    /<color=#\w*>/g, 
    (match, p1, p2, p3, offset, string) => {
      const colorcode = match.match(/\w*(?=>)/)
      return `<span style="
        color: #${colorcode}; 
        font-weight: 500;
        filter: brightness(0.8) saturate(1.5);
      ">`
      // note the use of filter
      // since Genshin expect dark background, but our website uses light
      // we need to adjust the colors a bit
      // i know this won't work on older browser but like, their loss
    }
  )
  newDesc = newDesc.replace(/<\/color>/g, "</span>")
  
  return newDesc
}

export default function CharaTalentCard({ talent, lang, imgfile }) {
  const [descOpen, setDescOpen] = useState(false)
  const formattedDesc = processDesc(talent.description[lang])

  return (
    <div className="talent">
      <div className="talent-img-container">
        <img src={ `/images/charaskills/${imgfile}` } />
      </div>

      <h2 className="talent-name" onClick={ () => setDescOpen(!descOpen) }>
        <span>{ talent.title[lang] }</span>
        <svg width="32px" height="32px">        
          <image href="https://icongr.am/fontawesome/chevron-circle-down.svg?size=32&color=131114" />    
        </svg>
      </h2>

      { descOpen ? 
        <div className="talent-desc">
          <p dangerouslySetInnerHTML={{__html: formattedDesc}} />
        </div> :
        null
      }
    </div>
  )
}

