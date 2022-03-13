import { useState } from 'react'

export default function CharaDatalineCard({ dataline, lang }) {
  const [isOpen, setOpenState] = useState(false)

  return (
    <div className="dataline-card">

      <div 
        className="header"
        onClick={() => setOpenState(!isOpen)}
      >
        <span>{ dataline.title[lang] }</span>
        <svg width="32px" height="32px">        
          <image href="https://icongr.am/fontawesome/chevron-circle-down.svg?size=32&color=131114" />    
        </svg>
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