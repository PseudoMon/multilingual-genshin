import path from 'path'
import fs from 'fs/promises'
import { dataPath, getJsonFile, fetchJsonFile } from './utils'

export async function getWeaponsList(url) {
  return await fetchJsonFile(url, path.join("weaponsdata", "list.json"))
}

export async function getMiscData(url) {
  return await fetchJsonFile(url, path.join("weaponsdata", "misc.json"))
}

export async function getWeaponData(url, weaponType, weaponId) {
  return await fetchJsonFile(
    url, 
    path.join("weaponsdata", weaponType, `${weaponId}.json`)
  )
}