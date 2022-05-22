import { useState } from 'react'
import { Outlet } from 'remix'
import weaponPageStyles from '~/styles/weaponpage.css'

export function links() {
  return [{ rel: "stylesheet", href: weaponPageStyles }]
}


export default function WeaponsPage() {

  return (
    <main>
      <Outlet />
    </main>
  );
}