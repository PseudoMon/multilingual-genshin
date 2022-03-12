import path from 'path'
import fs from 'fs/promises'
import { dataPath, getJsonFile } from './utils'

export async function getAllArtifactSets() {
  const file = await getJsonFile(
    path.join(dataPath, "artedata", "sets.json")
  )
  
  return JSON.parse(file)
}