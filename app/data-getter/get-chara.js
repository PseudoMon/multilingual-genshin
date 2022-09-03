import path from 'path'
import fs from 'fs/promises'
import { dataPath, getJsonFile, fetchJsonFile } from './utils'

export async function getCharaGeneralData(url, charaId) {  
  const filepath = path.join("charadata", charaId, "general.json")
  return await fetchJsonFile(url, filepath)
} 

export async function getAllCharaGeneralData(url) {
  return fetchJsonFile(url, "charalist.json")
}

export async function getCharaVoiceLines(url, charaId) {
  const filepath = path.join("charadata", charaId, "voice-lines.json")
  return await fetchJsonFile(url, filepath)
}

export async function getCharaStories(url, charaId) {
  const filepath = path.join("charadata", charaId, "stories.json")
  return await fetchJsonFile(url, filepath)
}

export async function getCharaTalents(url, charaId) {
  const filepath = path.join("charadata", charaId, "talents.json")
  return await fetchJsonFile(url, filepath)
}

export async function getCharaConstellations(url, charaId) {
  const filepath = path.join("charadata", charaId, "constellations.json")
  return await fetchJsonFile(url, filepath)
}