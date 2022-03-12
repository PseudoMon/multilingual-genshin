import { useLoaderData } from 'remix'
import { getAllArtifactSets } from '~/data-getter/get-artifact'

export async function loader() {
  return { allData: await getAllArtifactSets() }
}

export default function ArtifactSetListPage() {
  const { allData } = useLoaderData()

  function searchName() {
    //TODO
    return
  }

  return (
    <div>
      <header class="artifact-list-header">
        <h1>Artifacts</h1>
        <input 
          class="artifact-search-bar" 
          placeholder="Search..." onChange={ searchName } 
        />
      </header>

      <ul className="artifact-list">
        { allData.map(artifact => 
          <li key={ artifact["SetId"] }>
            <a href={ `/artifacts/${artifact['SetId']}` }>
              <img src={ `/images/artifacts/${artifact['imgid']}.png` } />
              <span>{ artifact["name"]["en"] }</span>
            </a>
          </li>
        ) }
      </ul>
    </div>
  )
}