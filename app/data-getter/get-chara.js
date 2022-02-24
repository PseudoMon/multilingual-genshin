import path from 'path'
import fs from 'fs/promises'

const dataPath = path.join(__dirname, "..", "data")

async function getJsonFile(filepath) {
  let file
  try {
    file = await fs.readFile(
      filepath,
      "utf-8"
    )
  }
  
  catch (error) {    
    if (error.code === "ENOENT") {
      throw new Response("Not Found", {
        status: 404
      });
    } 
    else {
      throw error
    }
  }

  return file
}

export async function getCharaGeneralData(charaId) {  
  const filepath = path.join(dataPath, "charadata", charaId, "general.json")
  const file = await getJsonFile(filepath)
  
  return JSON.parse(file)
} 

export async function getAllCharaGeneralData(charaId) {
  const allChara = await fs.readdir(path.join(dataPath, "charadata"))
  console.log(allChara)

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