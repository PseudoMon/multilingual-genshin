import { Link, useLoaderData } from 'remix'
import { getAllCharaGeneralData } from '~/data-getter/get-chara'

export async function loader() {
    return { allData: await getAllCharaGeneralData() }
}

export default function CharacterListPage() {
    const { allData } = useLoaderData()

    return (
        <div>
            <h1>Under construction</h1>
            <ul>
                { allData.map(chara => 
                    <li key={ chara["id"] }>
                        <a href={ `/characters/${chara["id"]}` }>{ chara["name"]["en"] }</a>
                    </li>
                ) }
            </ul>
        </div>
    )
}