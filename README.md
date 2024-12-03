Template repo for deploy https://jsr.io/@indirect/short onto **Cloudflare Workers**.

Replace `KV_NAMESPACE_ID` within the `wrangler.toml` to your own.

To use with GitHub Actions, remember to setup your own repository secrets:

- `KV_NAMESPACE_ID`
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_DEPLOY_NAME`

