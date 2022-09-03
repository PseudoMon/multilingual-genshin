import path from 'path'
import fs from 'fs/promises'

export const dataPath = path.join(__dirname, "..", "data")

export async function getJsonFile(filepath) {
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

export async function fetchJsonFile(url, filepath) {
  const urlObject = new URL(url)
  const baseURL =  `${urlObject.protocol}//${urlObject.host}`
  const res = await fetch(path.join(baseURL, "data", filepath));

  return res.json()
}


export async function getMiscText(url) {
  return await fetchJsonFile(url, "misc.json")
}