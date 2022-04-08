import path from 'path'
import fs from 'fs/promises'
import { dataPath, getJsonFile } from './utils'

const publicPath = "public"

export async function getAllArtifactSets() {
  const file = await getJsonFile(
    path.join(dataPath, "artedata", "sets.json")
  )

  let setsData = JSON.parse(file)
  
  return setsData
}

export async function getArtifactSetData(setId) {
  const file = await getJsonFile(
    path.join(dataPath, "artedata", `${setId}.json`)
  )

  let setData = JSON.parse(file)

  return setData
}

export async function getMiscData() {
  const file = await getJsonFile(
    path.join(dataPath, "artedata", "misc.json")
  )

  return JSON.parse(file)
}