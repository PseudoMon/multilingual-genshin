import { NavLink } from 'remix'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <h1><img src="/images/geo.svg" />Multilingual Genshin Database</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/characters">Characters</NavLink></li>
          <li><NavLink to="/artifacts">Artifacts</NavLink></li>
          <li><NavLink to="/weapons">Weapons</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
