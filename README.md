# Awesome Agentic Commerce

![Merit Logo](./merit-logo-agentic-commerce.png)

Curated resources for the x402 ecosystem: specs, repos, standards, and community. Contributions welcome via pull requests.

### Quick Links
- [Website](https://www.x402.org/)
- [Spec / Repo](https://github.com/x402-foundation/x402)
- [Explorer](https://x402scan.com/)

### What is x402?
x402 is an emerging open standard from the Coinbase ecosystem focused on safer, more composable authorization and transaction flows. This list tracks authoritative resources and adjacent standards commonly used alongside x402-style flows.

### Official Resources
- [x402 Official Website](https://www.x402.org)
- [x402 Protocol Docs](https://docs.x402.org/introduction)
- [x402 Foundation Docs](https://docs.x402.org/) - Credibly neutral documentation for the open x402 standard.
- [x402 Foundation at the Linux Foundation](https://www.linuxfoundation.org/x402foundation)
- [x402 Whitepaper (PDF)](https://www.x402.org/x402-whitepaper.pdf)
- [x402 Developer Docs Portal](https://docs.cdp.coinbase.com/x402/welcome)
- [x402 Docs llms.txt](https://docs.x402.org/llms.txt) - Machine-readable index of the x402 docs for AI agents and LLM-assisted integrations.
- [Coinbase Announcement – Introducing x402](https://www.coinbase.com/developer-platform/discover/launches/x402)
- [x402 V2 Launch Note](https://www.x402.org/writing/x402-v2-launch) - official overview of the v2 protocol changes, including modular SDKs, CAIP identifiers, and expanded payment flows.
- [x402 Foundation GitHub repo](https://github.com/x402-foundation/x402) — canonical spec, SDKs, issues, proposals, and reference materials
  - [Issues](https://github.com/x402-foundation/x402/issues)
- [Coinbase x402 development fork](https://github.com/coinbase/x402)
- [Cloudflare Announcement of the x402 Foundation](https://blog.cloudflare.com/x402/)

### Ecosystem
- [x402Scan](https://x402scan.com/) - Analytics and overview of the x402 ecosystem.
- [AgentZone](https://agentzone.fun/) - Unified explorer for trustless AI agents, combining ERC-8004 identity, x402 payment history, reputation signals, and live service status across Base and Arbitrum.
- [AgentStatus](https://github.com/EvanRMora/agentstatus) - Heartbeat and cron monitoring API for AI agents with x402 micropayments, MCP tools, and multi-channel alerts.
- [Pyrimid](https://pyrimid.ai/) - Agent-to-agent commerce infrastructure for x402 and ERC-8004, with MCP-native service discovery and onchain payment splitting through PyrimidRouter. ([Proof](https://pyrimid.ai/proof))
- [x402station](https://x402station.com/) - Analytics and monitoring platform for x402 services with real-time insights and performance tracking.
- [Onyx Bazaar](https://onyx-actions.onrender.com/bazaar) - Free public leaderboard of every paid x402 service indexed via the Coinbase CDP discovery API. Refreshed every 15 min, four views (top by volume / unique payers / recently active / cheapest), JSON variant at `/bazaar.json`. Complementary CDP-only slice next to x402Scan's multi-source view.
- [gold-402](https://github.com/Haustorium12/gold-402) - Curated x402 directory by 24K Labs. 300+ handpicked entries across facilitators, SDKs, MCP servers, APIs, and tools, with editorial writeups and verified badges for production-confirmed services. Backed by a 29,000+ entry full catalog sourced from CDP Bazaar and Agentic.market.
- [x402 Ecosystem Directory](https://www.x402.org/ecosystem)
- [Strale](https://strale.dev) - Business data & compliance APIs for AI agents. 250+ quality-scored capabilities (company data, VAT validation, sanctions screening, KYB) across 27 countries with x402 payment support. [MCP server](https://www.npmjs.com/package/strale-mcp) available.
- [Hedera and the x402 Payment Standard](https://hedera.com/blog/hedera-and-the-x402-payment-standard/) - Hedera ecosystem overview of x402-style programmable payments for applications and AI agents.
- [CardZero](https://cardzero.ai) - Smart-contract wallet (ERC-4337) for AI agents on Base mainnet, USDC. Buyer-side x402 support via `POST /v1/x402/pay`. Owner-controlled spending rules (per-tx limit, daily cap, whitelist, freeze) enforced on-chain. Also runs first known production deployment of ERC-8004 + ERC-8183.
- [Fuel](https://fuelai.cloud) - Compute market for AI agents: OpenAI-compatible text, pictures, video, 3D and voice routed to the cheapest healthy provider, paid per request with x402 (USDC on Solana or USDG on Robinhood Chain) or from a wallet balance. MCP server and agent-framework plugins on [GitHub](https://github.com/defibuilderpizza/fuel-integrations).

### Facilitators & Networks
- [Coinbase Hosted Facilitator (Base)](https://docs.cdp.coinbase.com/x402#offload-your-infra)
- [Supported Networks](https://docs.cdp.coinbase.com/get-started/supported-networks#x402)
- [x402 on Stellar](https://developers.stellar.org/docs/build/agentic-payments/x402) - Stellar payment flow, compatible wallets, and facilitator options for x402 payments.
- [PayAI Facilitator & Supported Networks](https://docs.payai.network/x402/quickstart#facilitator)
- [Satoshi Facilitator](https://facilitator.bitcoinsapi.com/supported) - Independent x402 facilitator for Bitcoin-focused pay-per-call services with Base, Base Sepolia, Solana Mainnet, and Solana Devnet support.
- [thirdweb Facilitator & Supported Networks](https://portal.thirdweb.com/payments/x402/facilitator)
- [Corbits Faremeter Facilitators & Supported Networks](https://docs.corbits.dev/about-corbits/networks)
- [OpenZeppelin Relayer x402 Facilitator](https://docs.openzeppelin.com/relayer/guides/stellar-x402-facilitator-guide) - Stellar x402 facilitator plugin for payment verification and settlement via OpenZeppelin Relayer.


### Open Source & SDKs
- [AgentCash Router](https://github.com/merit-systems/agentcash-router) - x402 + mpp + discover SDK.
- [x402 Foundation reference SDKs](https://github.com/x402-foundation/x402)
- [coinbase/x402 development fork (GitHub)](https://github.com/coinbase/x402)
- [x402-rs (Rust Facilitator & SDK)](https://github.com/x402-rs/x402-rs)
- [x402 TypeScript SDKs](https://github.com/x402-foundation/x402/tree/main/typescript)
- [x402 Python SDK](https://github.com/x402-foundation/x402/tree/main/python/x402) - Official Python client/server, facilitator, and MCP helpers.
- [x402 Python SDK (PyPI)](https://pypi.org/project/x402/) - Official Python package for client, server, facilitator, and framework integrations.
- [x402 Go SDK](https://github.com/x402-foundation/x402/tree/main/go) - Official Go client/server, facilitator, and MCP package.
- [x402 Java SDK](https://github.com/x402-foundation/x402/tree/main/java) - Official Java implementation for JVM services.
- [x402-analytics (NPM)](https://www.npmjs.com/package/x402-analytics) - Analytics wrapper for x402 payments with monitoring and insights.
- [x402-Solana (Community)](https://github.com/8bitsats/x402-Solana)
- [Solana Foundation Pay (x402/MPP CLI and MCP)](https://github.com/solana-foundation/pay) - Local payment layer for handling x402 payment challenges with wallet-authorized stablecoin signing.
- [Pipegate (x402 + Payment Channels)](https://github.com/Dhruv-2003/pipegate)
- [TrustBench](https://trustbench.io) - Non-custodial routing and audit layer on top of x402. Ed25519-signed receipts with on-chain settlement evidence, verifiable offline. Fail-safe paywall on Base via the Coinbase CDP facilitator. Verifier on npm: [`@trustbench/verify-receipt`](https://www.npmjs.com/package/@trustbench/verify-receipt).
- [thirdweb/x402 (Github)](https://github.com/thirdweb-dev/js/tree/main/packages/thirdweb/src/x402)
- [Faremeter (Typescript Facilitator, Middleware, and Examples)](https://github.com/faremeter/faremeter)
- [x402-dotnet (Community)](https://github.com/michielpost/x402-dotnet)
- [MCPay (Build and Monetize MCP servers. SDK, Infrastructure and Examples)](https://github.com/microchipgnu/mcpay)
- [Bermuda (ZK-private x402)](https://www.bermudabay.xyz) - ZK-private HTTP payments for x402 using Noir proofs on Base. Adds sender privacy so agents can pay without exposing wallet state. ([Docs](https://docs.bermudabay.xyz/sdk/x402))
- [x402-mcp package (Vercel)](https://github.com/ethanniser/x402-mcp)
- [Gatefare MCP](https://github.com/gatefareio/mcp-server) — Marketplace MCP server for paid HTTP APIs. 13 tools across discovery, buyer (auto 402→sign→retry), and publisher domains. Non-custodial, USDC on Base. Listed in the [official MCP Registry](https://registry.modelcontextprotocol.io/v0.1/servers?search=gatefareio). Install: `npx -y @gatefare/mcp`. ([npm](https://www.npmjs.com/package/@gatefare/mcp))
- [agenticpay Facilitator (Solana, open-source TypeScript)](https://github.com/krystiangw/agenticpay/tree/main/packages/facilitator) — Self-hostable verify+settle with `feePayer` abstraction (payers send only USDC). Hosted devnet endpoint: `https://agentpay-facilitator-e9b20a5fee6a.herokuapp.com`.
- [agenticpay (npm @agenticpay/*)](https://github.com/krystiangw/agenticpay) — Open-source TypeScript x402 stack for MCP on Solana. Includes SDK, CLI, paywall middleware, self-hostable facilitator, Eliza plugin. Live Claude Opus demo paying autonomously, on-chain settled in ~2s. MIT.
- [x402-saas (Hosted Onboarding Proxy on Base)](https://x402-saas.surge.sh) — Sign in with a wallet, point at any backend URL, get a paywalled proxy URL in ~60s. Multi-tenant data plane with SIWE auth and slug routing. 1% of routed USDC volume; MIT-licensed self-host alternative at [x402-kit](https://github.com/kite-builds-erik/x402-kit).
- [x402-kit (TypeScript)](https://github.com/kite-builds-erik/x402-kit) — MIT-licensed Express middleware + slug-routed multi-tenant data plane that powers [x402-saas](https://x402-saas.surge.sh). 38 tests, real x402.rs facilitator wired in.
- [x402-proxy](https://github.com/cascade-protocol/x402-proxy) - `curl` for x402 paid APIs. CLI and library that auto-pays HTTP 402 responses with USDC on Base and Solana, with MCP stdio proxy for AI agents. `npx x402-proxy`.
- [x402-agent-pay (Agent payments with MCP, spending controls, discovery & receipts)](https://github.com/Omnivalent/x402-agent-pay)
- [agent-wallet-sdk (NPM)](https://www.npmjs.com/package/agentwallet-sdk) - Non-custodial multi-chain wallet SDK for AI agents with native x402 payment support, CCTP cross-chain transfers, and CowSwap solver integration.
- [ATXP – Agent Identity & Payment Infrastructure](https://github.com/atxp-dev/atxp) – One command registers an AI agent with a USDC wallet on Base, `@atxp.email` inbox, and 100+ x402-paid MCP tools (web search, image gen, LLM). The agent is both an x402 payer and can receive USDC payments.
- [x402 Wallet for Claude Desktop](https://github.com/402md/x402-wallet-for-claude-desktop) - Claude Desktop extension with x402 USDC payments on Stellar and Base. Automatic 402 handling with configurable spending limits.
- [x402-anthropic-python](https://github.com/kinance/x402-anthropic-python) — Drop-in Anthropic Python SDK wrapper that transparently handles HTTP 402 x402 payment retry. Wraps `httpx` transport so `anthropic.Anthropic` / `AsyncAnthropic` auto-pays with USDC on EVM (Base, Ethereum) or SVM (Solana) and retries — no call-site changes needed.
- [x402-anthropic-typescript](https://github.com/kinance/x402-anthropic-typescript) — TypeScript equivalent. Custom `fetch` wrapper passed to `@anthropic-ai/sdk` for transparent x402 HTTP 402 pay-and-retry; ESM, fully typed, streaming-compatible.
- [strale-mcp (NPM)](https://www.npmjs.com/package/strale-mcp) - MCP server for Strale's x402 capability catalog (KYB, sanctions, financial validation, business registries).
- [@zkproofport-ai/mcp](https://github.com/zkproofport/proofport-ai) - MCP server + SDK for ZK proof generation paid via x402. Generate Coinbase KYC, Country, OIDC domain, or Google Workspace proofs from any AI agent.
- [x402-rails (QuickNode)](https://github.com/quiknode-labs/x402-rails) - Ruby gem for integrating blockchain micropayments into your Ruby on Rails application
- [x402-payments (QuickNode)](https://github.com/quiknode-labs/x402-payments) - Ruby gem for generating signed payment HTTP headers and links using the X402 protocol
- [MoltPe (AI agent payment infrastructure)](https://github.com/umangbuilds/moltpe-agent-payments) - Non-custodial agent wallets with Shamir key splitting, programmable spending policies, and tri-rail support: x402 (HTTP-native), MPP (session-based), and fiat. 11 MCP tools for Claude Desktop, Cursor, Windsurf. Sub-second settlement on Polygon PoS, Base, Tempo. Free tier, no credit card. ([Site](https://moltpe.com))
- [Routeweiler](https://github.com/nikoSchoinas/routeweiler-python-sdk) — Python micropayment client for autonomous agents that auto-handles HTTP 402 across x402, L402, MPP-Tempo, and Stripe SPT.
- [agentpay-mcp](https://github.com/up2itnow0822/agentpay-mcp) ([npm](https://www.npmjs.com/package/agentpay-mcp)) - Non-custodial x402 MCP payment server for AI agents. Local signing — no custodial infrastructure. x402 V2 session payments, Base USDC, CCTP cross-chain.
- [PipRail](https://github.com/piprail/piprail) - Backendless, MIT TypeScript SDK for x402 across 28 chains in 10 families (EVM, Solana, TON, Tron, NEAR, Sui, Aptos, Algorand, Stellar, XRPL). No facilitator, no fee — payments settle straight to your wallet, verified locally against your own RPC. ([npm](https://www.npmjs.com/package/@piprail/sdk))

### Standards and EIPs
- [HTTP 402 Payment Required (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/402): browser-facing reference for the status code x402 standardizes around.
- [HTTP 402 Payment Required (IANA Registry)](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml): canonical HTTP status-code registry entry for 402.
- [ERC-3009 — Transfer With Authorization](https://eips.ethereum.org/EIPS/eip-3009): meta-transaction transfers using EIP-712 signatures, enabling gasless and recipient-submitted transfers.
- [EIP-712 — Typed Structured Data Hashing and Signing](https://eips.ethereum.org/EIPS/eip-712): canonical typed signing used by modern wallets.
- [EIP-2612 — permit for ERC-20](https://eips.ethereum.org/EIPS/eip-2612): approvals via signatures; often complementary to authorization-based flows.
- [ERC-4337 — Account Abstraction (AA)](https://eips.ethereum.org/EIPS/eip-4337): smart account architecture that pairs well with authorization patterns.
- [ERC-8004 — Trustless Agents](https://eips.ethereum.org/EIPS/eip-8004): on-chain identity + reputation registries for autonomous agents; lets x402 sellers check an agent's payment history before serving.
- [ERC-8183 — Agentic Commerce](https://eips.ethereum.org/EIPS/eip-8183): on-chain escrow standard for agent-to-agent service delivery, complementary to x402 (which handles per-request micropayments) for cases where the deliverable can't be verified by HTTP 200.

#### Extensions
- [ERC-3009 Forwarding](https://github.com/TheGreatAxios/eip3009-forwarder): forwarding contract extending meta-transactions with EIP-721 signatures to any ERC-20 on any network
- [x402 Extensions Overview](https://docs.x402.org/extensions/overview): official guide to x402 resource server and facilitator extension points
- [A2A x402 Extension](https://github.com/google-agentic-commerce/a2a-x402): specification, libraries, and examples for adding on-chain x402 payments to Agent-to-Agent services

### Tutorials & Guides
- [AgentCash - Sell to agents](https://agentcash.dev/docs/sell-to-agents)
- [Alchemy - What is x402?](https://www.alchemy.com/blog/how-x402-brings-real-time-crypto-payments-to-the-web) - Developer explainer covering the HTTP 402 payment flow, agent use cases, and x402 Foundation context.
- [QuickNode – How to Implement a Crypto Paywall with x402](https://www.quicknode.com/guides/infrastructure/how-to-use-x402-payment-required)
- [Circle Blog – Autonomous Payments using Circle Wallets, USDC, and x402](https://www.circle.com/blog/autonomous-payments-using-circle-wallets-usdc-and-x402)
- [x402 Quickstart for Sellers](https://docs.cdp.coinbase.com/x402/quickstart-for-sellers)
- [x402 Quickstart for Buyers](https://docs.cdp.coinbase.com/x402/quickstart-for-buyers)
- [x402 Migration Guide (v1 to v2)](https://docs.cdp.coinbase.com/x402/migration-guide) - official upgrade guide covering header changes, CAIP-2 network IDs, and current v2 SDK package mappings.
- [MCP Server with x402 Guide](https://docs.cdp.coinbase.com/x402/mcp-server)
- [x402 Foundation – MCP Server with x402](https://docs.x402.org/guides/mcp-server-with-x402)
- [Base AgentKit – Building Autonomous Agents with x402](https://docs.base.org/agentkit/x402)
- [Vercel x402 MCP SDK Announcement](https://vercel.com/blog/introducing-x402-mcp-open-protocol-payments-for-mcp-tools)
- [Cloudflare Agents x402 Docs](https://developers.cloudflare.com/agents/agentic-payments/x402/): official Cloudflare guide for charging and paying for resources with x402 in Agents
- [How to Get Started with x402 on Solana](https://solana.com/developers/guides/getstarted/intro-to-x402) – Official Solana guide for integrating x402 payments on Solana networks.
- [Privy – Using x402 payments with embedded wallets](https://docs.privy.io/recipes/agent-integrations/x402) – React and Node.js examples for signing x402 payments from Privy wallets.
- [Magic – x402 Payments with Embedded Wallets](https://docs.magic.link/recipes/embedded-wallets/x402-payments) – Guide for using Magic embedded wallets to pay for x402-protected APIs with USDC.

- [x402charity](https://x402charity.com) — Open-source micro-donation server. Triggers USDC charity donations on every HTTP event via x402. Express/Next.js middleware, CLI, Vercel-ready. ([GitHub](https://github.com/allscale-io/x402charity)) ([npm](https://www.npmjs.com/package/x402charity))

### Example Apps
- [QuickNode Video Paywall Demo](https://www.quicknode.com/sample-app-library/coinbase-x402)
- [Hyperbolic x402 Chat API (LLM Pay-per-Request)](https://github.com/HyperbolicLabs/hyperbolic-x402)
- [CoinMarketCap x402 API](https://coinmarketcap.com/api/documentation/ai-agent-hub/skills/cmc-x402) - Pay-per-request crypto market data and MCP access over x402 with USDC settlement on Base.
- [Satoshi API](https://bitcoinsapi.com) - Bitcoin fee market, next-block mining, and transaction intelligence API for agents and wallets, with x402 pay-per-call endpoints on Base.
- [Pinata – Pay to Pin on IPFS with x402](https://pinata.cloud/blog/pay-to-pin-on-ipfs-with-x402/)
- [Pinata 402-server (Code)](https://github.com/PinataCloud/402-server)
- [Pinata – Monetize AI Hardware (Jetson) with x402](https://pinata.cloud/blog/using-x402-to-monetize-ai-hardware/)
- [Pinata jetson-x402 (Code)](https://github.com/PinataCloud/jetson-x402)
- [x402 Example Gallery (GitHub)](https://github.com/coinbase/x402/tree/main/examples)
- [Cloudflare Agents x402 Example](https://github.com/cloudflare/agents/tree/main/examples/x402) – Official example showing how to gate Cloudflare Agents endpoints with x402 payments.
- [x402 Analytics Examples](https://github.com/RemsLabs/x402-analytics-examples) - Practical examples demonstrating x402-analytics usage with buyer and seller implementations.
- [x402 Starter Kit – by Nader Dabit](https://github.com/dabit3/x402-starter-kit) – Simplest starter kit for building and deploying x402 APIs quickly.
- [Vercel x402 AI Starter](https://vercel.com/templates/ai/x402-ai-starter) - Full-stack Next.js template combining x402, MCP, AI SDK, AI Gateway, and Coinbase CDP wallets.
- [agent-marketplace-proxy](https://github.com/yayashuxue/agent-marketplace-proxy) – Reference implementation of the commodity-API-resale pattern: ~80 lines of Express that wrap any upstream REST API with `x402-express` middleware. Demoed with DataForSEO Google SERP at $0.001 USDC/call on Base. [Live](https://agent-marketplace-proxy.vercel.app)
- [x402-approval-guard](https://github.com/eltociear/x402-approval-guard) – Pattern for gating an agent action on an x402 check: before signing `approve(spender, amount)`, calls `contract-guard` (`x402-fetch` + viem, $0.005 USDC on Base) to flag unlimited/risky ERC20 allowances and block the approval. Drop-in `guardApprove()` library + CLI.
- [OpenStoa (zkproofport)](https://github.com/zkproofport/openstoa) – ZK-gated community where humans and AI agents coexist. Server-side ZK proof generation paid via x402. 1st Place at The Synthesis Hackathon (Agents That Keep Secrets).


### Security & Ops
- [x402 Whitepaper – Security Section](https://www.x402.org/x402-whitepaper.pdf)
- [x402 FAQ – Security](https://docs.cdp.coinbase.com/x402/support/faq#security)
- [Compliance-Aware Agentic Payments on Stablecoin Rails](https://arxiv.org/abs/2605.00071) - Research paper on policy and compliance guardrails for x402-style stablecoin payment authorization.

### Benchmarks & Analysis
- [Dev.to – x402 vs Traditional Payments (Micropayments)](https://dev.to/pathak_prakarsh/x402-finally-payments-built-for-the-internet-not-bolted-onto-it-1058)

### Videos
- [x402: Building Tools for AI agents, Demos, and Use-Cases](https://www.youtube.com/watch?v=Nodgp7fiPQc&t=197s)
- [x402: Revolutionizing How AI Agents Pay for Services](https://www.youtube.com/watch?v=UQJl8jCDMlo)
- [x402: Building dynamic tools for AI agents, demos, and use-cases.](https://www.youtube.com/watch?v=pL5LxhZ8iCY)
- [Agent Bootcamp with x402 I Lincoln Murr](https://www.youtube.com/watch?v=GtrX9gHfLak)
- [Eliza Social Club: The latest with x402 and autonomous agents](https://www.youtube.com/watch?v=gvLWsY3l_zU)
- [x402 Explained in 42 Seconds – Yinka](https://x.com/geniusyinka/status/1980682227173163014) – Short video explainer by Yinka introducing the x402 protocol.
- [Customize Your x402 Paywalls – Koha](https://x.com/kohawithstuff/status/1982521924287943148) – 41-second video by Koha showing how to set up and customize x402 paywalls.
- [Building Apps and Agents with x402 – EigenCloud Broadcast](https://x.com/i/broadcasts/1OwxWerawqAGQ) – X broadcast with Dhaiwat and EigenCloud on building AI agents using x402.
- [x402 Explained in 100 Seconds – Nader Dabit](https://x.com/dabit3/status/1982483131979735078) – Nader Dabit breaks down x402's purpose and shares key developer resources.

### Podcasts & Media
- [Cognitive Revolution Podcast – "402 Payment Required"](https://www.cognitiverevolution.ai/402-payment-required-a-new-way-for-ai-agents-to-pay-with-nemil-dalal-dev-platform-lead-coinbase/)
- [The Index Podcast – Coinbase's x402 & AI Agents](https://www.youtube.com/watch?v=P03BXU0fnMo)
- [RelayMag – x402 Handshake Explainer](https://therelaymag.com/x402-the-paywall-handshake-that-lets-agents-pay-the-web)
- [Boosty Labs Blog – AI Agents That Pay Their Own Bills](https://boostylabs.com/ai-agents-that-pay-their-own-bills)
- [a16z – The Month Fintechs Embraced Stablecoins (mentions x402)](https://a16zcrypto.com/posts/article/making-sense-of-stablecoin-news/)

### Community
- [Reddit – r/x402](https://www.reddit.com/r/x402/)
- [Discord – Coinbase Developer Platform](https://discord.com/invite/cdp)

### Contributing
- Add high-signal links: specifications, reference implementations, deep-dive posts, audits, and example apps.
- Prefer primary sources and canonical specifications.
- Submit a PR with a concise description; group items under existing sections when possible.

### License
This list is offered under CC0; see upstream specs for their respective licenses.

- [AgentBridge](https://github.com/tianzizhiming-svg/agentbridge) — Pay-per-fetch gateway for Chinese web content (Xiaohongshu, Zhihu, etc.). Returns clean markdown, settled in USDC on Base via x402.
