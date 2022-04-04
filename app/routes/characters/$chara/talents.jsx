import { useOutletContext, useLoaderData } from 'remix'
import { getCharaTalents } from '~/data-getter/get-chara'
import CharaTalentCard from '~/components/chara-talent-card'
import charaTalentsStyles from '~/styles/charatalents.css'

export function links() {
  return [{ rel: "stylesheet", href: charaTalentsStyles }]
}


export async function loader({ params }) {
  const charaId = params.chara
  const talents = await getCharaTalents(charaId)

  return { talents }
}

export default function TalentsPage() {
  const { activeLang } = useOutletContext()
  const { talents } = useLoaderData()

  return (
    <ul>
      { talents.map(talent => (
        <li key={ talent.title["en"] }>
          <CharaTalentCard talent={ talent } lang={ activeLang }/>
        </li>
      )) }
    </ul>
  )
}