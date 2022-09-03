const fs = require('fs/promises')
const path = require('path')

const url = "http://localhost:3000"

async function createAllCharaNameJson() {
  const allChara = await fs.readdir(path.join("public", "data", "charadata"))

  let allCharaData = []

  for (charaId of allChara) {
    const charaFile = await fs.readFile(path.join("public", "data", "charadata", charaId, "general.json"))
    let charaData = JSON.parse(charaFile)
    allCharaData.push({ id: charaId, name: charaData.name })
  }

  const jsonToSave = JSON.stringify(allCharaData)
  const filepath = path.join("public", "data", "charalist.json")
  await fs.writeFile(filepath, jsonToSave)
  console.log("Charalist succesfully created at", filepath)
}

createAllCharaNameJson()