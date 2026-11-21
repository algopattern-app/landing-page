# AlgoPattern landing site

## Agent and API resources

- `/docs/api`: indexable integration guide using the site's existing typography and colors.
- `/openapi.json`: OpenAPI 3.0.3 account contract plus anonymous discovery operation.
- `/api/v1/discovery`: public GET returning integration capabilities and official links, cached for an hour with anonymous CORS access. No account data or credentials.
- `/llms.txt`: Markdown following the llms.txt structure, with concrete use cases and invocation guidance.
- `/robots.txt` and `/sitemap.xml`: crawler entry points.

Account endpoints remain on `https://api.algopattern.app/v1` and require the user's personal access token. Discovery does not proxy account requests.

The account contract was sourced from `algopattern-app/api-gateway` commit `f2afc227a87cf6e39cce2825936dffc8c87bbb3d`. Backend changes ship first. To refresh from a reviewed gateway checkout, run:

```sh
node scripts/sync-openapi.mjs ../api-gateway/public/openapi.yaml
```

This retains the main-domain discovery operation and includes the documented common account errors. Review the resulting diff before publishing.

## Verification

```sh
npm ci
npm run build
npm start
# In another terminal (or set TEST_BASE_URL to a preview deployment):
npm run test:agents
```

Tests validate the OpenAPI format and contract completeness, exercise anonymous discovery and its method restrictions, and check all published machine files, documentation metadata, crawler links and both homepage representations. CI runs against a production build.

After deployment, rerun against `TEST_BASE_URL=https://algopattern.app`. Search placement and audit scores require recrawling; submit the sitemap through the site's search console if available. Success-path account API testing requires a user-provided personal access token in an appropriate secret store. An anonymous content API or official MCP/SDK/CLI would require a separate product decision.
