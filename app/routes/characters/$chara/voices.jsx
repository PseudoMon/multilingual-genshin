import { useOutletContext, useLoaderData } from 'remix'
import { getCharaVoiceLines } from '~/data-getter/get-chara'
import CharaDatalineCard from '~/components/chara-dataline-card'

export async function loader({ params, request }) {
  const charaId = params.chara
  let voiceLines = await getCharaVoiceLines(request.url, charaId)

  return { voiceLines }
}

export default function VoicePage() {
  const { activeLang } = useOutletContext()
  const { voiceLines } = useLoaderData()

  return (
    <ul className="datalines">
      { voiceLines.map(voiceLine => (
        <li key={ voiceLine.title["en"] }><CharaDatalineCard 
          dataline={ voiceLine } 
          lang={ activeLang }
        /></li>
      )) }
    </ul>
  )
}