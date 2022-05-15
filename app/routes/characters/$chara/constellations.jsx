import { useOutletContext, useLoaderData } from 'remix'
import { getCharaConstellations } from '~/data-getter/get-chara'
import CharaTalentCard from '~/components/chara-talent-card'
import charaTalentsStyles from '~/styles/charatalents.css'

export function links() {
  return [{ rel: "stylesheet", href: charaTalentsStyles }]
}

export async function loader({ params }) {
  const charaId = params.chara
  const constellations = await getCharaConstellations(charaId)

  return { charaId, constellations }
}

export default function ConstellationsPage() {
  const { activeLang } = useOutletContext()
  const { charaId, constellations } = useLoaderData()

  return (
    <ul>
      { constellations.map((constellation, consti) => (
        <li key={ constellation.title["en"] }>
          <CharaTalentCard 
            talent={ constellation } 
            lang={ activeLang } 
            imgfile={ `${charaId}/constellation_${consti + 1}.webp` }
          />
        </li>
      )) }
    </ul>
  )
}