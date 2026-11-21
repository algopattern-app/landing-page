// Refresh the account contract from a reviewed api-gateway checkout after backend changes ship.
import SwaggerParser from '@apidevtools/swagger-parser'
import { readFile, writeFile } from 'node:fs/promises'
const source = process.argv[2]
if (!source) throw new Error('Usage: node scripts/sync-openapi.mjs ../api-gateway/public/openapi.yaml')
const target = new URL('../public/openapi.json', import.meta.url)
const current = JSON.parse(await readFile(target))
const account = await SwaggerParser.parse(source)
const discovery = current.paths['/api/v1/discovery']
account.info.title = 'AlgoPattern API'
account.info.description = current.info.description
account.paths['/api/v1/discovery'] = discovery
account.tags.push(current.tags.find(tag => tag.name === 'Discovery'))
account.components.schemas.Discovery = current.components.schemas.Discovery
for (const [path, item] of Object.entries(account.paths)) {
  if (path === '/api/v1/discovery') continue
  for (const [status, description] of Object.entries({401:'Missing, invalid or revoked token.',429:'Rate limited; wait for Retry-After seconds.',500:'Internal server error.'})) {
    item.get.responses[status] = { description, content: {'application/json': {schema: {$ref:'#/components/schemas/Error'}}} }
  }
  item.get.responses['429'].headers = {'Retry-After': {description:'Seconds to wait before retrying.',schema:{type:'integer',minimum:0}}}
}
await SwaggerParser.validate(structuredClone(account))
await writeFile(target, JSON.stringify(account, null, 2) + '\n')
