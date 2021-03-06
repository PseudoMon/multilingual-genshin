import { useState } from 'react'
import { processColorText, processLoreText } from '~/utility/processText'
import ArrowDown from '~/components/icons/arrow-down'

export default function WeaponDatalineCard({ dataline, lang, isLore, refineLevel }) {
  const [isOpen, setOpenState] = useState(false)
  
  const getTitle = () => {
    if (typeof dataline.name === 'string') {
      return dataline.name
    } 
    return `R${refineLevel}: ${dataline.name[lang]}`
  }

  const getText = () => {
    if (isLore) {
      return (<p>{ processLoreText(dataline.description[lang]) }</p>)
    }

    return (
      <p dangerouslySetInnerHTML={{__html:
        processColorText(dataline.description[lang])
      }} />
    )
  }

  return (
    <div className={`dataline-card ${isLore ? 'lore' : ''}`}>

      <div 
        className="header"
        onClick={() => setOpenState(!isOpen)}
      >
        <span>{ getTitle() }</span>
        <ArrowDown />
      </div>
      
      {
        isOpen ? (
          <div className="content">
            { getText() }
          </div>
        ) : null
      }
      
    </div>
  )
}