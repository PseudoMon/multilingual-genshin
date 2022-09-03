import { useOutletContext, useLoaderData } from 'remix'
import { getCharaStories } from '~/data-getter/get-chara'
import CharaDatalineCard from '~/components/chara-dataline-card'

export async function loader({ params, request }) {
  const charaId = params.chara
  let stories = await getCharaStories(request.url, charaId)

  return { stories }
}

export default function VoicePage() {
  const { activeLang } = useOutletContext()
  const { stories } = useLoaderData()

  return (
    <ul className="datalines">
      { stories.map(line => (
        <li key={ line.title["en"] }>
          <CharaDatalineCard 
            dataline={ line } 
            lang={ activeLang }
          />
        </li>
      )) }
    </ul>
  )
}