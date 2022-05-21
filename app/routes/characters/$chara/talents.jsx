import { useOutletContext, useLoaderData } from 'remix'
import { getCharaTalents } from '~/data-getter/get-chara'
import CharaTalentCard from '~/components/chara-talent-card'

export async function loader({ params }) {
  const charaId = params.chara
  const talents = await getCharaTalents(charaId)

  return { talents, charaId }
}

export default function TalentsPage() {
  const { activeLang } = useOutletContext()
  const { talents, charaId } = useLoaderData()

  return (
    <ul>
      { talents.map((talent, talenti) => (
        <li key={ talent.title["en"] }>
          <CharaTalentCard 
            talent={ talent } 
            lang={ activeLang } 
            imgfile={ `${charaId}/talent_${talenti}.webp` }
          />
        </li>
      )) }
    </ul>
  )
}