import path from 'path'
import fs from 'fs/promises'
import { dataPath, getJsonFile } from './utils'

export async function getWeaponsList() {
  const file = await getJsonFile(
    path.join(dataPath, "weaponsdata", "list.json")
  )

  return JSON.parse(file)
}

export async function getMiscData() {
  const file = await getJsonFile(
    path.join(dataPath, "weaponsdata", "misc.json")
  )

  return JSON.parse(file)
}

export async function getWeaponData(weaponType, weaponId) {
  const file = await getJsonFile(
    path.join(dataPath, "weaponsdata", weaponType, `${weaponId}.json`)
  )

  return JSON.parse(file)
}