import { useState } from 'react'
import ArrowDown from '~/components/icons/arrow-down'

export default function CharaDatalineCard({ dataline, lang }) {
  const [isOpen, setOpenState] = useState(false)

  return (
    <div className="dataline-card">

      <div 
        className="header"
        onClick={() => setOpenState(!isOpen)}
      >
        <span>{ dataline.title[lang] }</span>
        <ArrowDown />
      </div>
      
      {
        isOpen ? (
          <div className="content">
            <p>{ dataline.line[lang] }</p>
          </div>
        ) : null
      }
      
    </div>
  )
}