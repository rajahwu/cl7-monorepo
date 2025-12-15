import * as fs from 'fs'
import * as path from 'path'

function checkCreds() {
  const credPath = path.join(__dirname, '../../credentials.json')

  if (!fs.existsSync(credPath)) {
    console.error('❌ ERROR: credentials.json not found in packages/generators/')
    return
  }

  const raw = fs.readFileSync(credPath, 'utf-8')
  const creds = JSON.parse(raw)

  console.log('🔍 CREDENTIALS DIAGNOSTIC')
  console.log('-------------------------')
  console.log(`📧 Service Account: ${creds.client_email}`)
  console.log(`🆔 Project ID:      ${creds.project_id}`)
  console.log('-------------------------')

  console.log(
    '\n👇 ACTION REQUIRED: Click these exact links to verify API status for THIS project:'
  )

  const docsUrl = `https://console.cloud.google.com/apis/library/documents.googleapis.com?project=${creds.project_id}`
  const driveUrl = `https://console.cloud.google.com/apis/library/drive.googleapis.com?project=${creds.project_id}`

  console.log(`\n1. Google Docs API:\n   ${docsUrl}`)
  console.log(`\n2. Google Drive API:\n   ${driveUrl}`)

  console.log('\nIf the button says "ENABLE", click it. If it says "MANAGE", you are good.')
}

checkCreds()
