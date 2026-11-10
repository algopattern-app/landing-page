import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import SwaggerParser from '@apidevtools/swagger-parser'

const base = process.env.TEST_BASE_URL || 'http://localhost:3000'
const spec = JSON.parse(await readFile(new URL('../public/openapi.json', import.meta.url)))

async function get(path, type, headers = {}) {
  const response = await fetch(base + path, { headers })
  assert.equal(response.status, 200, path)
  assert.ok(response.headers.get('content-type')?.includes(type), path)
  return response
}

test('OpenAPI validates with unique documented operations and typed parameters/responses', async () => {
  const resolved = await SwaggerParser.validate(structuredClone(spec))
  const ids = new Set()
  for (const item of Object.values(resolved.paths)) {
    const op = item.get
    assert.ok(op.operationId && op.description)
    assert.ok(!ids.has(op.operationId))
    ids.add(op.operationId)
    for (const param of op.parameters || []) assert.ok(param.schema.type && param.description)
    for (const response of Object.values(op.responses)) {
      assert.ok(response.description)
      assert.ok(response.content['application/json'].schema)
    }
  }
  assert.deepEqual(spec.paths['/api/v1/discovery'].get.security, [])
  assert.deepEqual(spec.security, [{ personalAccessToken: [] }])
})

test('published spec is JSON and matches the validated contract with either Accept header', async () => {
  for (const accept of ['application/json', 'text/markdown']) {
    assert.deepEqual(await (await get('/openapi.json', 'application/json', { accept })).json(), spec)
  }
})

test('anonymous discovery returns schema-conforming metadata, caching and CORS', async () => {
  const response = await get('/api/v1/discovery', 'application/json')
  assert.equal(response.headers.get('access-control-allow-origin'), '*')
  assert.match(response.headers.get('cache-control'), /max-age=3600/)
  const data = await response.json()
  const schema = spec.components.schemas.Discovery
  assert.deepEqual(Object.keys(data).sort(), schema.required.toSorted())
  for (const [key, prop] of Object.entries(schema.properties)) {
    if (prop.type === 'array') {
      assert.ok(Array.isArray(data[key]))
      assert.ok(data[key].every(v => typeof v === 'string'))
    } else assert.equal(typeof data[key], prop.type)
    if (prop.format === 'uri') assert.equal(new URL(data[key]).protocol, 'https:')
  }
  assert.equal(data.openapi_url, 'https://algopattern.app/openapi.json')
  assert.equal(data.api_base_url, spec.servers[0].url)
  assert.equal((await fetch(base + '/api/v1/discovery', { method: 'POST' })).status, 405)
})

test('docs have product/API title, heading, canonical and official resources', async () => {
  const html = await (await get('/docs/api', 'text/html')).text()
  assert.match(html, /<title>AlgoPattern API Documentation<\/title>/)
  assert.match(html, /<h1[^>]*>AlgoPattern API Documentation<\/h1>/)
  for (const link of ['/openapi.json', '/llms.txt', 'https://api.algopattern.app/v1', 'https://github.com/algopattern-app']) {
    assert.ok(html.includes(`href="${link}"`), link)
  }
  assert.match(html, /rel="canonical" href="https:\/\/algopattern.app\/docs\/api"/)
})

test('llms guidance has the expected structure and concrete call instructions', async () => {
  const body = await (await get('/llms.txt', 'text/plain', { accept: 'text/markdown' })).text()
  assert.ok(body.startsWith('# AlgoPattern\n\n> '))
  for (const text of ['## When to use', 'GET https://algopattern.app/api/v1/discovery', 'Authorization: Bearer', 'Retry-After', '/me/streak', '/docs/api', '/openapi.json']) assert.ok(body.includes(text), text)
})

test('robots and sitemap advertise the official docs', async () => {
  const robots = await (await get('/robots.txt', 'text/plain')).text()
  assert.match(robots, /Allow: \//)
  assert.match(robots, /Sitemap: https:\/\/algopattern.app\/sitemap.xml/)
  const xml = await (await get('/sitemap.xml', 'application/xml')).text()
  assert.match(xml, /<loc>https:\/\/algopattern.app\/docs\/api<\/loc>/)
})

test('HTML and Markdown homepages expose developer resources', async () => {
  const html = await (await get('/', 'text/html')).text()
  for (const link of ['/docs/api', 'https://github.com/algopattern-app']) assert.ok(html.includes(`href="${link}"`))
  const md = await (await get('/', 'text/markdown', { accept: 'text/markdown' })).text()
  for (const path of ['/docs/api', '/openapi.json', '/llms.txt', 'https://github.com/algopattern-app']) assert.ok(md.includes(path))
})
