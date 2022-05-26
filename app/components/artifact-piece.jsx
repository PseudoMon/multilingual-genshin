import { useState } from 'react'
import { processLoreText } from '~/utility/processText'
import ArrowDown from '~/components/icons/arrow-down'

export default function ArtifactPiece({ miscData, piece, activeLang }) {
  const [loreIsOpen, setLoreOpenState] = useState(false)

  return (
    <li key="{ piece['name']['en'] }">
      <div className="dataline-card">
        <h1 className="header">
          { piece['name'][activeLang] }
        </h1>

        <img 
          src={ `/images/artifacts/${ piece['imgid']}.png` } 
          onError={e => {
            e.currentTarget.src = `/images/artifacts/default.png`
          }} 
        />
        <h3 className="piece-type">
          { miscData['piecetypes'][piece['type']][activeLang] }
        </h3>
        <p className="piece-description">
          { piece['description'][activeLang] }
        </p>

        <button 
          onClick={ () => setLoreOpenState(!loreIsOpen) }
          className="lore-button"
        >
          <span>Lore</span>
          <ArrowDown />
        </button>
      </div>

      { loreIsOpen ? (
        <div className="piece-lore">
          <p>{ processLoreText(piece['lore'][activeLang]) }</p>
        </div>
      ) : null }
    </li>
  )
}