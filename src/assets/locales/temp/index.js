// Import required libraries using ES module syntax
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// File paths
const rawFilePath = path.join(__dirname, 'raw.json')
const newLangFilePath = path.join(__dirname, 'newLang.json')

// Function to transform the raw data format to the required lang.json format
async function transformRawToLang() {
  try {
    // Read raw.json
    const data = await fs.readFile(rawFilePath, 'utf8')
    const rawData = JSON.parse(data)
    const transformedData = {}

    // Iterate through the array and transform the structure
    rawData.forEach((item) => {
      const langCode = item.Name
      const translationData = { ...item } // Copy all fields

      // Remove the Name field since it's the language code
      delete translationData.Name

      // Add the rest of the fields dynamically under translation
      transformedData[langCode] = {
        translation: translationData
      }
    })

    // Write the newLang.json file
    await fs.writeFile(newLangFilePath, JSON.stringify(transformedData, null, 2))
    console.log('newLang.json has been successfully created!')
  } catch (error) {
    console.error('Error processing files:', error)
  }
}

// Execute the transformation
transformRawToLang()
