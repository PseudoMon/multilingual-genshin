import path from 'path'
import fs from 'fs/promises'
import { fetchJsonFile } from './utils'

export async function getAllArtifactSets(url) {
  return await fetchJsonFile(url, path.join("artedata", "sets.json"))
}

export async function getArtifactSetData(url, setId) {
  return await fetchJsonFile(url, path.join("artedata",`${setId}.json`))
}

export async function getMiscData(url) {
  return await fetchJsonFile(url, path.join("artedata", "misc.json"))
}