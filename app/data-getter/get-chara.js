import path from 'path'
import fs from 'fs/promises'
import { dataPath, getJsonFile } from './utils'

export async function getCharaGeneralData(charaId) {  
  const filepath = path.join(dataPath, "charadata", charaId, "general.json")
  const file = await getJsonFile(filepath)
  
  return JSON.parse(file)
} 

export async function getAllCharaGeneralData(charaId) {
  const allChara = await fs.readdir(path.join(dataPath, "charadata"))

  let allCharaData = []

  for (chara of allChara) {
    let charaData = await getCharaGeneralData(chara)
    charaData["id"] = chara
    allCharaData.push(charaData)
  }

  return allCharaData
}

export async function getCharaVoiceLines(charaId) {
  const file = await getJsonFile(
    path.join(dataPath, "charadata", charaId, "voice-lines.json")
  )
  
  return JSON.parse(file)
}

export async function getCharaStories(charaId) {
  const file = await getJsonFile(
    path.join(dataPath, "charadata", charaId, "stories.json")
  )
  
  return JSON.parse(file)
}

export async function getCharaTalents(charaId) {
  const file = await getJsonFile(
    path.join(dataPath, "charadata", charaId, "talents.json")
  )
  
  return JSON.parse(file)
}

export async function getCharaConstellations(charaId) {
  const file = await getJsonFile(
    path.join(dataPath, "charadata", charaId, "constellations.json")
  )
  
  return JSON.parse(file)
}