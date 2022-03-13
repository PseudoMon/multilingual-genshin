import path from 'path'
import fs from 'fs/promises'
import { dataPath, getJsonFile } from './utils'

const publicPath = "public"

export async function getAllArtifactSets() {
  const file = await getJsonFile(
    path.join(dataPath, "artedata", "sets.json")
  )

  let setsData = JSON.parse(file)

  // Check if an image with the id exists, otherwise, change it to default
  let allArtifactImages = await fs.readdir(path.join(publicPath, "images", "artifacts"))
  // Strip of extension
  allArtifactImages = allArtifactImages.map(filename => filename.split(".")[0])

  for (set of setsData) {
    if (!allArtifactImages.includes(set['imgid'])) {
      set['imgid'] = 'default'
    }
  }  

  
  return setsData
}

export async function getArtifactSetData(setId) {
  const file = await getJsonFile(
    path.join(dataPath, "artedata", `${setId}.json`)
  )

  let setData = JSON.parse(file)

  // Check if an image with the id exists, otherwise, change it to default
  let allArtifactImages = await fs.readdir(path.join(publicPath, "images", "artifacts"))
  // Strip of extension
  allArtifactImages = allArtifactImages.map(filename => filename.split(".")[0])

  for (piece of setData["pieces"]) {
    if (!allArtifactImages.includes(piece["imgid"])) {
      piece["imgid"] = "default"
    }
  }

  return setData
}

export async function getMiscData() {
  const file = await getJsonFile(
    path.join(dataPath, "artedata", "misc.json")
  )

  return JSON.parse(file)
}