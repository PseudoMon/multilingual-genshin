import { useState } from 'react'
import { Outlet } from 'remix'
import artifactPageStyles from '~/styles/artepage.css'

export function links() {
  return [{ rel: "stylesheet", href: artifactPageStyles }]
}


export default function CharactersPage() {

  return (
    <main>
      <Outlet />
    </main>
  );
}