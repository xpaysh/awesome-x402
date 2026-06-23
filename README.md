# Awesome X402 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> ⚡ **The Ultimate x402 Resource Hub** - Everythng you need to build internet-native payments using HTTP 402. Perfect for AI agents, APIs, and micropayments. Build paywalls, monetize services, and enable autonomous agent payments with crypto/USDC. Zero fees, 2-second settlement.

[![GitHub stars](https://img.shields.io/github/stars/xpaysh/awesome-x402?style=social)](https://github.com/xpaysh/awesome-x402)

## Contents

- [🎯 Quick Start - Become an x402 Champion](#-quick-start---become-an-x402-champion)
- [📚 Official Resources](#-official-resources)
- [📖 Protocol Documentation](#-protocol-documentation)
- [🚀 Quickstart Guides](#-quickstart-guides)
- [⚙️ Protocol Implementations](#-protocol-implementations)
- [🏭 Production Implementatdions](#-production-implementations)
- [🛠️ SDKs & Client Libraries](#-sdks--client-libraries)
- [🔧 Server Frameworks & Middleware](#-server-frameworks--middleware)
- [🏗️ Facilitators](#-facilitators)
- [💡 Example Applications](#-example-applications)
- [🎨 Use Cases & Patterns](#-use-cases--patterns)
- [🤖 AI Agent Integration](#-ai-agent-integration)
- [🔨 Tools & Utilities](#-tools--utilities)
- [🧪 Testing & Development](#-testing--development)
- [📚 Tutorials & Learning Resources](#-tutorials--learning-resources)
- [🎥 Videos & Talks](#-videos--talks)
- [📝 Articles & Blog Posts](#-articles--blog-posts)
- [👥 Community](#-community)
- [🌟 Ecosystem Projects](#-ecosystem-projects)
- [📊 Ecosystem Market Data](#-ecosystem-market-data)
- [🚀 Migration Guides](#-migration-guides)
- [🔒 Security & Audits](#-security--audits)
- [🔗 Related Protocols](#-related-protocols)
- [🤝 Contributing](#-contributing)
- [Awesome Lists](#awesome-lists)

The x402 protocol enables instant Blockchain payments over HTTP using the 402 "Payment Required" status code. This is your complete guide to mastering x402 and building the future of agent payments.

🚀 **Start building in 5 minutes** | ⚡ **2-second settlement** | 💰 **USDC on Base**

---

## 🎯 Quick Start - Become an x402 Champion

**New to x402?** Follow this path to mastery:

1. [5-Minute Quickstart](https://docs.cdp.coinbase.com/x402/quickstart-for-sellers) - Accept your first payment.
2. Choose Your Stack - Find your language/framework.
3. Copy an Example - Working code you can run immediately.
4. Join the Community - Get help from other builders.

**For AI Agents:** Start with [MCP Integration](#model-context-protocol-mcp) to enable Claude/other agents to make autonomous payments.

---

## 📚 Official Resources

Core resources from the x402 protocol maintainers.

- [x402 Protocol Specification](https://github.com/coinbase/x402) - Official open-source protocol implementation by Coinbase.
- [x402 Foundation](https://x402.org) - Protocol foundation website with overview and documentation.
- [x402 Whitepaper](https://x402.org/x402-whitepaper.pdf) - Technical deep dive into protocol architecture.
- [Coinbase Developer Platform Docs](https://docs.cdp.coinbase.com/x402) - Complete implementation guide and API reference.
- [Protocol Specifications](https://github.com/coinbase/x402/tree/main/specs) - Detailed technical specifications.
  - [Payment Schemes](https://github.com/coinbase/x402/tree/main/specs/schemes) - Different payment flow types.
  - [EVM Implementation](https://github.com/coinbase/x402/blob/main/specs/schemes/exact/scheme_exact_evm.md) - Ethereum Virtual Machine specifics.

## 📖 Protocol Documentation

Essential documentation for understanding and implementing x402.

- [How x402 Works](https://docs.cdp.coinbase.com/x402/how-it-works) - Complete payment flow explanation with diagrams.
- [Payment Requirements Schema](https://github.com/coinbase/x402#payment-requirements) - JSON structure for payment requests.
- [Payment Payload Format](https://github.com/coinbase/x402#payment-payload) - Client payment submission format.
- [Verification & Settlement](https://github.com/coinbase/x402#verification-and-settlement) - Payment validation process.
- [EIP-3009 TransferWithAuthorization](https://eips.ethereum.org/EIPS/eip-3009) - Gasless transfer standard used by x402.
- [HTTP 402 Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402) - The long-dormant HTTP status.

## 🚀 Quickstart Guides

Get started with x402 in minutes.

- 5-Minute Quickstart for Sellers - Accept your first payment.
- [Buyer/Client Setup](https://docs.cdp.coinbase.com/x402/quickstart-buyers) - Make automated payments.
- [One-Line Integration](https://github.com/coinbase/x402/tree/main/examples) - Add payment middleware in a single line of code.
- [Base Sepolia Testnet Setup](https://docs.cdp.coinbase.com/x402/network-support) - Get test USDC and start testing.
- Production Deployment Checklist - Go live on Base mainnet.

## ⚙️ Protocol Implementations

Official and community implementations of the x402 protocol.

### Go

- [coinbase/x402](https://github.com/coinbase/x402/tree/main/go) ⭐ **Official** - Complete Go implementation.
  - Core protocol types and utilities
  - Payment verification and settlement logic
  - Multi-chain support (Base, Base Sepolia, Ethereum, Solana)

### TypeScript/JavaScript

- [x402-typescript](https://github.com/coinbase/x402/tree/main/typescript) ⭐ **Official** - Complete TypeScript implementation.
  - Core protocol types and utilities
  - Payment verification and settlement logic
  - Multi-chain support (Base, Base Sepolia, Ethereum, Solana)
- [x402-data-api](https://github.com/155143783/x402-data-api) - HTTP 402 micro-payment data API with Base chain USDC payments. 16 developer data tools including email validation, DNS lookup, WHOIS, SSL check, and IP geolocation with x402 payment integration.

- [x402-express](https://github.com/coinbase/x402/tree/main/examples/typescript/servers/express) - Express.js middleware example.
- [hive-rosetta](https://www.npmjs.com/package/hive-rosetta) ⭐ **Community** - Open EIP-3009 `transferWithAuthorization` signer. Zero ethers/web3 dependency, primitives-only EIP-712. Returns wire shape `{scheme: 'exact', network: 'eip155:8453', payload: {authorization, signature}}`. Same package name on PyPI. ([GitHub](https://github.com/srotzin/hive-rosetta))

### Python

- [x402](https://pypi.org/project/x402/) ⭐ **Official** - Python SDK on PyPI.
  - FastAPI middleware integration
  - Requests session with auto-payments
  - Payment requirement generation

- [ag402](https://github.com/AetherCore-Dev/ag402) ⭐ **Community** - Payment layer for AI agents using x402. Wrap any API or MCP server with a USDC paywall (`ag402 serve`), or let agents auto-pay (`ag402 run`). Solana USDC, ~0.5s settlement, non-custodial, 648+ tests. [Glama](https://glama.ai/mcp/servers/AetherCore-Dev/ag402-mcp)

- [x402-pay](https://pypi.org/project/x402-pay/) - Call any x402 API with one API key. Routes requests through a broker that handles on-chain payment. httpx-based, optional wallet mode for direct payments. ([GitHub](https://github.com/bartonguestier1725-collab/x402-pay))
- [hive-rosetta](https://pypi.org/project/hive-rosetta/) ⭐ **Community** - Direct port of the Node `hive-rosetta` signer. Byte-identical EIP-712 digest across both languages. Returns `{scheme, network, payload}` matching CDP `/verify` and `/settle`. ([GitHub](https://github.com/srotzin/hive-rosetta))

### Rust

- [x402-rs](https://github.com/x402-rs/x402-rs) ⭐ **Community** - Production-grade Rust implementation.
  - Axum middleware
  - Reqwest client wrapper
  - Self-hostable facilitator
  - Multi-chain support
- x402-axum - Axum web framework integration.
- x402-reqwest - Reqwest HTTP client wrapper.


## 🏭 Production Implementations

Real companies using x402 in production with proven scale and transaction volumes.

### High-Volume Production Deployments

- [Fleet x402 Microservices](https://fleet-x402-audit.fly.dev) - Two agent-payable AI services on Base: SEO Audit ($0.05 USDC) and Competitive Intel Pack ($0.50 USDC). Instant response, zero auth required, machine-readable JSON. ([Discovery](https://fleet-x402-audit.fly.dev/.well-known/x402-listing))
- [Arch Tools](https://archtools.dev) - 58 production API tools for AI agents with x402 payments built in. Web scraping, AI generation, crypto data, OCR, browser automation, MCP compatible. Patent-pending agent auth. 15+ chains supported. ([GitHub](https://github.com/Deesmo/Arch-AI-Tools))
- [PayAPI Market](https://payapi.market) - First marketplace for x402-powered APIs. 10 APIs, 65 endpoints: UK property data, email verification, company enrichment, postcode lookup, currency/crypto rates, screenshots, DNS intelligence, web scraping, IP geolocation, QR codes. $0.001–$0.01 USDC on Base per request. MCP server discovery. ([GitHub](https://github.com/chetparker/x402-marketplace))
- [LogicNodes](https://logicnodes.io) - Live A2A marketplace with 619 deterministic microservices payable per-call in USDC. No signup — agents pay via x402, results include SHA-256 trust hashes. 8 chains: Base, Solana, Arc, Arbitrum, Optimism, Polygon, Ethereum, World Chain. Tiers: Micro $0.001 · Basic $0.05 · Standard $0.15 · Premium $0.50 USDC. MCP: `npx @logicnodez/mcp-bridge` | Python: `pip install logicnodes-m2m`. ([npm](https://www.npmjs.com/package/@logicnodez/mcp-bridge)) | ([PyPI](https://pypi.org/project/logicnodes-m2m/)) | ([Agent Guide](https://logicnodes.io/agent-guide)) | ([llms.txt](https://logicnodes.io/llms.txt))
- [Superhighway](https://superhighway.walls.sh) - Web search API for AI agents, live in production on Base mainnet. Five tools: search, news, images, scrape, and one-call deep research. $0.001 USDC per call. MCP-compatible: `npx -y superhighway-mcp`. Free API key available.
- [Rug Munch Intelligence](https://x402.rugmunch.io) - 117 MCP tools + 19 REST API endpoints for crypto data: DexScreener, Birdeye, GMGN, Arkham, Nansen, Dune, Jupiter, DeFiLlama, and more. $0.001-$0.02 USDC per call. Multi-chain (Base + Solana), free trial (1 call/IP), OpenAPI spec, no API keys, no signup. ([Discovery](https://x402.rugmunch.io/.well-known/x402) | [OpenAPI](https://x402.rugmunch.io/openapi.json) | [MCP Catalog](https://x402.rugmunch.io/mcp) | [Solana](https://x402-sol.rugmunch.io/.well-known/x402) | [GitHub](https://github.com/Rug-Munch-Media-LLC/))
- [AIsa](https://aisa.network) - Leading x402 payment processor with **10.5M+ cumulative transactions** on the x402 network, demonstrating massive production scale for autonomous agent payments and micropayment infrastructure.
- [Bitget](https://www.bitget.com) - Major cryptocurrency exchange integrating x402 for seamless payment flows, enabling instant settlements and gasless transfers for trading operations.
- [Stratalize](https://www.stratalize.com) — 100+ attested financial, healthcare, real estate, and governance intelligence tools with x402 micropayments on Base. Ed25519-signed outputs on every synthesis. $0.02–$1.00 USDC per tool call. MCP registry: com.stratalize. ([x402.json](https://www.stratalize.com/.well-known/x402.json))
- [Coinbase Developer Platform](https://coinbase.com/developer-platform) - Official CDP implementation processing hundreds of thousands of transactions weekly with enterprise-grade reliability and 2-second settlement times.
- [Cloudflare Workers](https://workers.cloudflare.com) - Edge computing platform with x402 integration serving global distributed payment verification at scale across 300+ data centers.
- [GigSoul AI Research Agent](https://gig-x402-api.jayson-be1.workers.dev) - 23-endpoint AI research API for consultants: SEC filings, earnings calls, competitor analysis, market research, and document intelligence. - [Cloudflare Workers](https://workers.cloudflare.com) - Edge computing platform with x402 integration serving global distributed payment verification at scale across 300+ data centers..01 USDC per call on Base mainnet. Wallet: x2b6c16fb557291b98222a570526ff2430848b723. ([OpenAPI](https://gig-x402-api.jayson-be1.workers.dev/openapi.json) | [.well-known/x402.json](https://gig-x402-api.jayson-be1.workers.dev/.well-known/x402.json))
- [Zuluworks AI — Sovereign Shaka PQC-Shield Factory](https://api.zuluworksai.com) - Autonomous A2A factory on Cloudflare Workers selling 5 post-quantum-hardened agent services via x402 USDC on Base L2: `quantum-shield` ($0.10, ML-KEM-768 PQC tunnel — NIST FIPS 203), `kya` ($0.01, agent trust scoring), `browser-rendering` ($0.03, headless browser extraction), `memory` ($0.05, semantic recall on a PQC knowledge index), `workers-ai` ($0.02, Llama 3.1 inference). All settlement routed through Coinbase CDP facilitator for Bazaar indexing. ([Agent Card](https://api.zuluworksai.com/.well-known/agent.json) | [Bazaar Manifest](https://api.zuluworksai.com/.well-known/x402-bazaar.json) | [MCP](https://api.zuluworksai.com/.well-known/mcp.json) | [Sitemap](https://api.zuluworksai.com/sitemap.xml))
- **[Suede Agent Studio](https://agents.suedeai.ai)** - Visual agent-flow builder that publishes flows as pay-per-call x402 endpoints (USDC on Base). Machine-readable catalog at [`/api/catalog`](https://agents.suedeai.ai/api/catalog); each agent exposes `/.well-known/x402`, `/.well-known/agent-card`, and `/a2a`. Two live agents: Daily Lyric Drop ($0.10 USDC) and The Ownership Loop ($0.25 USDC).
- [Agent402](https://agent402.tools) - Open-source, self-hostable x402 + MCP server with ~1,100 deterministic web tools: browser rendering, web search, PDF/image/OCR/audio, geo, live data (FX, weather, USGS, gov-data), network truth (DNS/TLS/WHOIS), crypto/x402 helpers, ~1,040 pure-CPU utilities. Dual-rail: free via proof-of-work, paid via USDC on Base/Polygon/Arbitrum (x402 v2 with Bazaar discovery). No LLM in the serving path — every tool re-tested against its own example before each release. Ships a hosted MCP connector (`/mcp`), an open x402 index ([Find](https://agent402.tools/api/find) · [Route](https://agent402.tools/api/route) · [Leaderboard](https://agent402.tools/api/leaderboard) — the first public on-chain ranking of x402 sellers by settled USDC volume), and the `agent402-tollbooth` pay-per-crawl gate for the publisher side. MIT. ([MCP](https://agent402.tools/mcp)) ([OpenAPI](https://agent402.tools/openapi.json)) ([Discovery](https://agent402.tools/.well-known/x402)) ([GitHub](https://github.com/MikeyPetrillo/Agent402))

- [GoldBean API](https://goldbean-api.xyz) — 146+ AI endpoints including Baidu OCR, Translation, TTS, LLM Chat with x402 micropayments on Base. From ### Production Success Metrics.01/call for premium AI. MCP server at [mcpize.com/mcp/goldbean](https://mcpize.com/mcp/goldbean). ([GitHub](https://github.com/wuzenghai616-lang/goldbean))

### Production Success Metrics

**Key Performance Indicators:**
- 10.5M+ transactions - AIsa cumulative network volume
- 500K+ weekly transactions - Ecosystem-wide payment activity
- $180M+ market cap - Combined ecosystem valuation
- 2-second settlement - Average production payment finality
- 10,000%+ growth - Year-over-year transaction volume increase

### Multi-Chain Production Support

| Chain         | Status      | Facilitators               | Settlement      | Production Examples       |
| ------------- | ----------- | -------------------------- | --------------- | ------------------------- |
| Base          | Production  | Coinbase CDP, Cloudflare   | Instant (2s)    | AIsa, Bitget, thirdweb    |
| Base Sepolia  | Testnet     | Coinbase CDP               | Instant (2s)    | Development, Testing      |
| Ethereum      | Production  | Cloudflare                 | Deferred        | Enterprise DApps          |
| Solana        | Production  | Community                  | Instant (<1s)   | High-frequency trading    |
| BNB Chain     | Production  | Pieverse                   | Instant (2s)    | Gaming, NFTs              |
| Radius        | Production  | Community                  | Instant (<1s)   | Micropayments             |

### Data & Social APIs
- [EZ-Path](https://ezpath.myezverse.xyz) — Best-execution pay-per-request DEX meta-router. Races 10+ venues (0x, ParaSwap, Aerodrome, Uniswap V3, Curve, Balancer, 1Inch, CoW Swap, Synthetix) concurrently on Base mainnet. Three tiers: basic ($0.03, 0x only), resilient ($0.10, dual-lane race), institutional ($0.50, all venues). Strict agent wallet drain protections with hardcoded toll address validation. x402 v2 USDC on Base. Supports ElizaOS plugin integration. ([Discovery](https://ezpath.myezverse.xyz/.well-known/agent.json)) ([npm](https://www.npmjs.com/package/plugin-ezpath)) ([GitHub](https://github.com/infiniteezverse/ez-agentic-price-path))
- [Sentinel Intelligence API](https://sentinel-intelligence-api.onrender.com) - Pay-per-brief fintech and AI governance intelligence. BNPL/embedded finance and AI compliance research briefs at $2 USDC; on-demand research on any topic at $10 USDC. CDP-facilitated settlement on Base mainnet. ([Discovery](https://sentinel-intelligence-api.onrender.com/.well-known/x402.json)) ([GitHub](https://github.com/ucsandman/sentinel-api))

- [OSF — Open Source Filings](https://osf-master-server.com) - Provenance-stamped public-domain US government and scientific data for AI agents. SEC EDGAR, FRED, NOAA, openFDA, USGS, Crossref, and more — every record ships with a provenance URL back to its authoritative primary source. Pay-per-record x402 USDC on Base, $0.05–$0.50. Paid MCP server + listed in the official MCP Registry. No API keys, no subscriptions. ([MCP](https://api.osf-master-server.com/mcp) | [MCP Registry](https://registry.modelcontextprotocol.io/v0.1/servers?search=osf-data-marketplace) | [Bazaar health](https://api.osf-master-server.com/x402/bazaar_health))
- 
- [AI Growth](https://kjtirbnxxymeumycrhqv.supabase.co/functions/v1/x402-seller?discover=1) - Real-data feeds for AI agents, settling via Coinbase CDP Facilitator on Base mainnet. Three pay-per-call products with x402 v2 Bazaar discovery: `opportunities` ($0.01, Claude-scored AI revenue opportunities from real GitHub bounties), `verification` ($0.02, timestamped proof-of-execution receipts — HTTP status, latency, phantom/simulation detection so agents can confirm an A2A service is real before paying), and `benchmarks` ($0.02, real endpoint liveness & latency measurements for routing). All data sourced from verified live calls — no synthetic data. No API keys, no signup. Select product via `?product=<id>`. ([Discovery](https://kjtirbnxxymeumycrhqv.supabase.co/functions/v1/x402-seller?discover=1))
- [MiroShark](https://github.com/aaronjmars/MiroShark) - Universal swarm-intelligence engine exposed as a paid API: POST a scenario to the `/x402/run` surface and hundreds of grounded LLM personas simulate Twitter, Reddit, and a prediction market hour-by-hour, returning an analytical report. USDC on Base via x402. ([GitHub](https://github.com/aaronjmars/MiroShark))
- [wrapper-agency APIs](https://fx.wrapper-agency.com) - Suite of 8 pay-per-call utility APIs settled in USDC on Base via x402 (free tier + one key for all): historical FX rates, color conversion, timezone/DST, fake/mock data, cron explainer, QR codes, data-format conversion, and encode/hash. ([FX](https://fx.wrapper-agency.com)) ([Color](https://color.wrapper-agency.com)) ([Timezone](https://tz.wrapper-agency.com)) ([Mock data](https://mock.wrapper-agency.com)) ([Cron](https://cron.wrapper-agency.com)) ([QR](https://qr.wrapper-agency.com)) ([Data format](https://data.wrapper-agency.com)) ([Encode](https://encode.wrapper-agency.com))
- [Crest x402 Data](https://data.crestsystems.ai) - x402 agent profiling plus crypto market data. Profile any x402 buyer or EVM wallet (whale score, behavior cluster, x402 spend graph, risk), plus prices, gas, DeFi, derivatives, NFTs, and DEX pairs. $0.002-$0.90 USDC on Base via Coinbase CDP facilitator, no API keys. ([Agent Card](https://data.crestsystems.ai/.well-known/agent.json) | [llms.txt](https://data.crestsystems.ai/llms.txt) | [l402-services](https://data.crestsystems.ai/.well-known/l402-services))
- [Pyrimid](https://pyrimid.ai) - Agent commerce protocol for x402-style USDC payments on Base. Includes on-chain vendor/product registry, payment router, affiliate attribution, MCP endpoint, and live catalog API for agent-discoverable paid services. Current mainnet proof: 3 vendors, 8 on-chain products, 4 routed test payments. ([Catalog](https://pyrimid.ai/api/v1/catalog)) ([MCP](https://pyrimid.ai/api/mcp)) ([Skill](https://pyrimid.ai/skill.md))
- **[Polybot Arb Intelligence](https://github.com/packrvnner/polybot-arb-api)** — Real-time cross-platform prediction market arb data (Polymarket+Kalshi+Myriad). x402 USDC on Base. [Live API](https://governments-ruth-distribution-breaks.trycloudflare.com/free/market-pulse)

- [Aigregator](https://x402.aigregator.com) - Structured data on 5,336+ AI tools via REST API and MCP server. Search, compare, and retrieve tool profiles. USDC micropayments on Base. ([MCP Server](https://x402.aigregator.com/mcp))
- [Xquik](https://xquik.com) - Real-time X (Twitter) data API with 7 MPP/x402 pay-per-use endpoints — tweet lookup, tweet search, user lookup, follower check, article extraction, media download, and trends. No accounts or subscriptions required. ([GitHub](https://github.com/Xquik-dev/tweetclaw)) ([npm](https://www.npmjs.com/package/@xquik/tweetclaw)) ([MCP Server](https://xquik.com/mcp))
- [glim.sh](https://glim.sh) - Live data from Twitter, Reddit, the web, GitHub, Amazon, and YouTube for AI agents. 11 MCP tools, $0.002-$0.015 USDC per call (Base/Solana/Monad). No API keys, no scraping stack. ([MCP Server](https://glim.sh/mcp)) ([OpenAPI](https://glim.sh/openapi.json)) ([GitHub](https://github.com/glim-sh/glim-mcp))
- [agentsvc.io](https://agentsvc.io) - 20 utility tools for AI agents via x402 USDC micropayments on Base. Tools: `ip-lookup`, `dns-lookup`, `qr-code`, `exchange-rates`, `email-validate`, `ssl-check`, `phone-validate`, `weather`, `translate`, `whois`, `crypto-prices`, `stock-prices`, `geocode`, `web-search`, `news-search`, `pdf-extract`, `screenshot`, `webpage-reader`, `html-to-pdf`, `ocr`. $0.001–$0.008 USDC per call. No API keys, no signup. Auto-discovery: [/.well-known/agent-services.json](https://agentsvc.io/.well-known/agent-services.json) | [Catalog](https://agentsvc.io/api/v1/services) | [OpenAPI](https://agentsvc.io/api/openapi.json) | [MCP Server](https://agentsvc.io/mcp-server.mjs) | ([GitHub](https://github.com/jakobautomation/agentsvc-mcp))
- [AgentData API](https://agentdata-api.com) - Real-time crypto market data for AI agents. 16 pay-per-request endpoints on Base Mainnet: prices, funding rates, volatility, liquidation levels, DeFi yields, cross-exchange arbitrage, technical indicators (RSI/MACD/BB/ATR), support/resistance, sentiment, stablecoin health, and historical OHLCV. Self-hosted facilitator, no accounts required. Supports x402 v2 with Bazaar discovery extension. ([Discovery](https://agentdata-api.com/discovery)) ([OpenAPI](https://agentdata-api.com/openapi.json))
- [GPT55 x402 Wallet Safety and Merchant Readiness](https://gpt55.558686.xyz) - x402-paid agent gateway for AI buyers that need wallet signing safety, EIP-712/Permit2 risk decoding, EVM transaction risk decoding, approval-risk auditing, x402 prepay trust checks, merchant-readiness reports, and GPT55 chat on Base USDC. Prices start at $0.0001 for chat, $0.004 for prepay checks, and $0.01 for signing/approval checks. ([Discovery](https://gpt55.558686.xyz/.well-known/x402)) ([OpenAPI](https://gpt55.558686.xyz/openapi.json)) ([Wallet Safety Kit](https://gpt55.558686.xyz/x402/wallet-signing-risk-kit)) ([MCP Config](https://gpt55.558686.xyz/mcp/config))
- [Fly Labs Agentic Market](https://flylabs.fun/agents) - YouTube data APIs for AI agents, paid in USDC on Base. Two endpoints live: `POST /api/agents/transcribe` ($0.03) returns a stable v1.0 JSON payload with verbatim transcript, language, time-indexed paragraphs, creator chapters, and canonical metadata (captions when available, Whisper fallback otherwise, no LLM rewrites). `POST /api/agents/engagement` ($0.02) returns view/like/comment counts, derived ratios, a composite engagement score, channel info (subscribers included), and full video context (tags, categories, thumbnail, availability, live status). Transparent cache on every response (`cache.hit`, `cachedAt`, `ageSec`) — transcripts are permanent, engagement refreshes every 6 hours. Typed error codes, OpenAPI 3.1, no signup. ([OpenAPI 3.1](https://flylabs.fun/api/agents/openapi.json)) ([Manifest](https://flylabs.fun/api/agents))
- [NicheData KDP Intelligence](https://nichedata.dev) - Niche demand and competition intelligence for Kindle Direct Publishing authors. AI agents query keyword-level data including demand scores, competition intensity, BSR ranges, revenue estimates, and pricing analytics. $0.03 USDC per query on Base via CDP Facilitator. Free discovery endpoint lists all available niches. ([OpenAPI](https://nichedata.dev/openapi.json)) ([Docs](https://nichedata.dev/docs))
- [Intelica](https://api.intelica.dev) - Competitive intelligence API for autonomous AI agents. Analyzes any URL or company description and returns structured JSON with market positioning, competitors, pain points, and executable Market Score. 10 context modes including `regulatory_compliance`, `venture_screening`, `crypto_protocol`, and `sales_enablement`. Standard tier $0.05 USDC, Elite tier $1.00 USDC per call on Base and Solana mainnet. MCP server at `/mcp`. A2A protocol at `/message/send`. ([OpenAPI](https://api.intelica.dev/openapi.json)) ([Discovery](https://api.intelica.dev/.well-known/x402))
- [DevDrops](https://devdrops.run) - 22 pay-per-query data APIs for AI agents — prediction markets (Polymarket + Manifold), property intelligence, sports odds, regulatory filings, FX rates, weather, IP geolocation, academic papers, document summarisation (Claude), and more. $0.001–$0.10 USDC per query on Base. No API keys or subscriptions. ([OpenAPI](https://api.devdrops.run/openapi.json)) ([Catalog](https://api.devdrops.run/catalog))
- [Regression Incoming — NFL Fantasy Rankings](https://api.regressionincoming.fyi) - Model-driven 2026 NFL preseason fantasy football rankings for AI agents. 5 x402-protected endpoints on Base mainnet: `GET /v1/rankings/preseason` ($1.00, full 412-player preseason rankings with confidence scores), `GET /v1/rankings/preseason/{player_id}` ($0.10, single-player projection by player ID), `GET /v1/draft-board/half-ppr` ($1.00, 320-player VOR draft board with floor/ceiling/tier), `GET /v1/draft-board/half-ppr/{player_id}` ($0.10, single-player draft board row), `POST /v1/bundle/purchase` ($3.00, 7-day unlimited-access JWT). USDC on Base via CDP Facilitator. Bazaar discovery extension on all 402 responses. No API keys or signup. ([Discovery](https://api.regressionincoming.fyi/.well-known/x402.json)) ([Catalog](https://api.regressionincoming.fyi/v1/bazaar))
- [Darrylbots x402 Research](https://tryponcho.com/m/darrylbots.com) - Agent-readable paid JSON research endpoints on Base USDC: stock-screen reports plus Polymarket/trading-agent analysis with structured rankings, risks, provenance, and disclaimers. $0.001 USDC per resource, no API key or account. ([Catalog](https://darrylbots.com/x402.json)) ([x402scan](https://www.x402scan.com/server/35285845-c871-4694-847b-c9b727cb474f))
- [Social Intel](https://socialintel.dev) — Instagram influencer search API for AI agents. Search by niche, country, demographics, or follower count → returns usernames, bios, follower counts, business categories, and public business emails. Single-profile lookup at $0.01; full search $0.50–$1.30 (100 leads). USDC on Base, Solana, Polygon, Arbitrum. No signup. ([OpenAPI](https://socialintel.dev/openapi.json)) ([MCP Server](https://socialintel.dev/mcp/)) ([Demo](https://socialintel.dev/v1/search?query=fitness&demo=true))
- [GlobalAPI](https://globalapi.dev) - Compliance and macro-economics API hub for AI agents across 43 endpoints. Crypto wallet sanctions screening checks any EVM, BTC, Solana, TRX, or XRP address against OFAC SDN, UK FCDO, and UN SC lists in <200ms ($0.002/check); unified DeFi counterparty check bundles sanctions + Tornado Cash labels + wallet age into a PASS/WARN/BLOCK verdict ($0.01). Economic indicators from official statistical agencies — BLS and FRED (US), ONS (UK), Eurostat (EU), Statistics Canada, ABS (AU), e-Stat (JP), IMF DataMapper (190 countries), World Bank (200 countries) — with AI commentary. Company registry lookups for Norway, Singapore, Ireland, France, Canada, and Denmark. No API key — x402 USDC on Base mainnet, $0.002–$0.10/call. ([OpenAPI](https://globalapi.dev/openapi.json) | [Discovery](https://globalapi.dev/.well-known/x402))
- [Sivut Public x402 Data APIs](https://pay.sivut.co) - Public page markdown conversion and x402 seller intelligence endpoints for AI agents, paid in USDC on Base via x402. Prices range from $0.003 to $1.00 per call; no signup or API key. ([OpenAPI](https://pay.sivut.co/openapi.json)) ([llms.txt](https://pay.sivut.co/llms.txt)) ([GitHub](https://github.com/rambov1/sivut-x402-public-data))
- [LoneStarOracle](https://lonestaroracle.xyz) - 39 x402-gated AI data services on Base: token forensics (TokenScope), smart contract audits (RattlerAI/CottonmouthAI/CopperheadAI), weather consensus, oil & gas (CrownBlock), on-chain intel (ChainScout), macroeconomics (MacroPulse), real estate, commodities, stablecoin risk, and more. $0.02-$2.00 USDC per call. No API keys. MCP server at mcp.lonestaroracle.xyz (38 tools, xyz.lonestaroracle/mcp-server v1.1.0). ([Discovery](https://token.lonestaroracle.xyz/.well-known/x402.json) | [MCP](https://mcp.lonestaroracle.xyz) | [Status](https://status.lonestaroracle.xyz))
- [TOUGH LOVE SECURITY ImageGen](https://toughlovesec.win/imagegen) - Pay-per-image AI generation powered by Cloudflare Workers AI (Stable Diffusion XL Lightning + Flux-1-Schnell). Three tiers: $0.50 single, $1.99 12-pack, $7.99 100-bundle. Stripe Checkout for humans, x402 for agents at $0.04/image. No accounts, no expiring credits. ([Launch post](https://toughlovesec.win/blog/launch-imagegen-stripe-x402))
- [TOUGH LOVE SECURITY ClawWork](https://toughlovesec.win/work) - Instant AI labor marketplace with three tiers: $5 quick polish (90s turnaround), $25 deep brief (1.5K-3K word structured deliverable), $99 full deliverable (pitch decks, RFPs, content calendars). Stripe + x402 ($0.05/call on bulk). Powered by Claude 4.7 Sonnet. ([Launch post](https://toughlovesec.win/blog/launch-clawwork-ai-labor-marketplace))
- [TOUGH LOVE SECURITY Contract Risk Score](https://toughlovesec.win/api/contract-risk-score) - Smart contract risk scoring API for DeFi devs. Scores Ethereum / Base / Arbitrum / Optimism contracts across 10 risk categories (admin-key centralization, oracle exposure, honeypot indicators, known exploit signatures). $1.25 per 5-pack via Stripe, $0.25/call via x402. Triage layer between "free Etherscan glance" and "$50K formal audit." ([Launch post](https://toughlovesec.win/blog/launch-contract-risk-score-defi-security))
- [GLHFDD](https://199-119-137-189.nip.io) - AI-powered text analysis, code analysis, and data transformation APIs built by a self-hosted AI agent. Pay-per-call via x402 protocol on Base mainnet. `POST /analyze/text` ($0.01), `POST /analyze/code` ($0.02), `POST /transform/data` ($0.005). No API keys, no signup. Auto-discovery via [bazaar.json](https://199-119-137-189.nip.io/.well-known/x402-bazaar.json).
- [Deepnets](https://api.deepnets.ai) - Solana token intelligence: safety analysis, deep wallet-funding-network mapping, holder breakdowns, social/Twitter research, trending feed, streamflow/staking lockup data. 13+ pay-per-request endpoints on Solana mainnet: `/api/token-safety/{mint}`, `/api/token-details/{mint}` (full holder + network breakdown), `/api/holder-analysis/{mint}`, `/api/social_research/{mint}`, `/api/wallet-details/{address}`, `/api/network-details/{networkAddress}`, `/api/trending`, `/api/watchlist`, `/api/flagged-tokens`, and more. $0.01 basic / $0.15 holder analysis. USDC on Solana, gas sponsored by the facilitator — no SOL needed. v2 with Bazaar discovery extension. ([OpenAPI](https://api.deepnets.ai/openapi.json)) ([Docs](https://api.deepnets.ai/docs)) ([Marketing](https://deepnets.ai/agents))
- [OpenPulsechain](https://safety.openpulsechain.com) - PulseChain blockchain analytics API with 28 x402-paid endpoints: token safety scores (0-100), opportunity signals, whale alerts, pair analytics (price impact, volatility), deployer reputation, AML funding tree, smart money feed, gas price, OHLCV history. Covers 5,900+ tokens. $0.001–$0.03 USDC per call on Base. ([x402 Discovery](https://safety.openpulsechain.com/.well-known/x402)) ([npm MCP](https://www.npmjs.com/package/@openpulsechain/mcp-server)) ([GitHub](https://github.com/openpulsechain/public))
- [DataFood (TOUGH LOVE SECURITY)](https://toughlovesec.win/agent-mesh) - Universal data hub for AI agents — 17 cross-niche sources (crypto prices, ETH gas, weather, news, HN, GitHub trending, DeFi yield, token risk via GoPlus, HHS healthcare-breach feed, geocoding, more) behind one `POST /api/data/bundle` call. **Bundle micropayments save up to 92% vs per-API alternatives.** Day pass $0.99 unlimited 24h, week pass $4.99. Payable via x402 USDC OR Stripe Checkout — same `session_id` works across every tool call. Free 1-row preview at `/api/data/preview?type=…&q=…`. ([Live demo](https://toughlovesec.win/agent-mesh)) ([MCP server](https://github.com/atmflow55/datafood-mcp)) ([x402 descriptor](https://toughlovesec.win/.well-known/x402.json)) ([catalog](https://toughlovesec.win/api/v1/catalog))
- [x402 Trust Oracle](https://x402oracle.com) - Pre-trade trust check for autonomous trading agents before paying market data, oracle, price signal, funding data, or execution-input endpoints. Endpoint https://api.x402oracle.com/v1/trade-check, route /v1/trade-check. Price: $0.002 / 2000 atomic USDC on Base mainnet eip155:8453. asset 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913. payTo 0x2DF1AEc598a104Fc15E80C0B60e50C497559A980.
- [Askew](https://x402.askew.network) - Security and DeFi intelligence for AI agents. 5 pay-per-call endpoints on Base mainnet: `/yields` ($0.002, live APY across 5 chains via DefiLlama), `/staking/router` ($0.003, SOL/ATOM native vs liquid staking routing), `/research/query` ($0.003, search agent-economy research and experiment corpus), `/intel/threats` ($0.002, Guardian security threat summary), `/intel/feed` ($0.005, combined research + threats + staking strategic feed). Free preview at `/yields/preview` and `/health`. Self-hosted facilitator (xpay.sh). Auto-discovery: ([/.well-known/x402.json](https://x402.askew.network/.well-known/x402.json) | [llms.txt](https://x402.askew.network/llms.txt) | [/offers](https://x402.askew.network/offers))
- [BitBooth](https://app.heinrichstech.com/bazaar.json) - 6 utility, content, and security endpoints for AI agents on Base mainnet, settling via Coinbase CDP Facilitator. Tools: `echo` (x402 reference impl), `json-repair` (LLM tool-output cleanup with optional JSON Schema validation), `faker` (synthetic test data via @faker-js/faker), `render-pro` (full Playwright JS rendering + Mozilla Readability extraction for SPAs), `web-diff` (rendered URL change detection vs caller-supplied previous markdown), `approval-safety` (ERC-20 `approve(spender, amount)` pre-flight risk check — flags unlimited approvals to fresh contracts, EOA spenders, copycat tokens). $0.001 USDC per call for utility tier, $0.05 for premium tier. No API keys, no subscriptions. Self-hosted discovery at [bazaar.json](https://app.heinrichstech.com/bazaar.json). ([GitHub](https://github.com/Drock91/bitbooth-gateway))
- [EconDash](https://econdash.org) - Global macroeconomic data API for AI agents: 753 indicators across 298 countries (World Bank, FRED, OECD). 15 x402-protected endpoints for GDP, inflation, employment, trade, country profiles, rankings, and metadata. $0.02 USDC/call on Base. Also supports MPP (Tempo + Solana). ([Docs](https://econdash.org/docs/quick-start)) ([OpenAPI](https://econdash.org/m2m-openapi.json))
- [anchor-x402](https://anchor-x402.com) - 16 x402-paid services for AI agents on Base + Solana mainnet. 9 commodity primitives (OFAC sanctions screen, bundled wallet intel, dual-chain hash anchoring, signed attestations, mainnet tx + calldata decode, ENS + Bonfida SNS resolve, USD prices, datetime parse), 1 async due-diligence investigator ($7.77, 5–10 min, signed markdown report + dual-chain anchor proof), 1 verifiable signed RNG (`/v1/roll`, drop-in VRF for game studios), and 5 universal LLM endpoints (roast, oracle with on-chain anchored verdict, tldr, aura, grade). Plus a hosted chatbot at [chat.anchor-x402.com](https://chat.anchor-x402.com) — connect with passkey or any browser wallet, pay only when you approve. MCP server: [`anchor-x402-mcp`](https://www.npmjs.com/package/anchor-x402-mcp). ([GitHub](https://github.com/hypeprinter007-stack/anchor-x402)) ([Discovery](https://anchor-x402.com/.well-known/x402.json)) ([Trust portal](https://anchor-x402.com/trust))
- [romefeller.app](https://romefeller.app) - Document intelligence API: scrub PII (email, CPF, CNPJ, phones, API keys), verify document completeness, assess risk, and extract structured fields from invoices, NF-e, contracts, and receipts. Regex + Claude AI hybrid. 4 paid endpoints at $0.005–$0.15 USDC per call on Base mainnet via Coinbase CDP facilitator. Free regex preview at `/preview` (no payment required). No API keys, no signup. ([/.well-known/x402.json](https://romefeller.app/.well-known/x402.json) | [OpenAPI](https://romefeller.app/openapi.json) | [llms.txt](https://romefeller.app/.well-known/llms.txt))
- [QuantOracle](https://api.quantoracle.dev) - 73 deterministic quant finance endpoints for AI agents: Black-Scholes pricing with full Greeks, Kelly Criterion, Monte Carlo simulation, Sharpe/Sortino/Calmar/VaR/CVaR risk metrics, Hurst exponent, GARCH, drawdown analysis, plus 10 paid composites (full risk audit, hedge recommendations, options strategy optimizer, portfolio rebalance plan). Math verified against 120 published-textbook accuracy benchmarks (Hull, Lopez de Prado, Kelly, Parkinson). $0.002–$0.10 USDC per call on Base + Solana mainnets via Coinbase CDP facilitator. Free tier: 1,000 calls/IP/day, no signup, no API key. 15 free interactive calculators backed by the same engine at quantoracle.dev. ([OpenAPI](https://api.quantoracle.dev/openapi.json) | [x402 Discovery](https://api.quantoracle.dev/.well-known/x402) | [AgentKit Integration](https://github.com/QuantOracledev/quantoracle/tree/main/integrations/agentkit) | [Calculators](https://quantoracle.dev) | [GitHub](https://github.com/QuantOracledev/quantoracle))
- [krewe](https://www.krewe.world) - Decentralized AI inference network on Base. Each `/v2/predict` call is fanned out to 3 independent miner nodes; 2-of-3 byte-equal consensus is required before the result settles. 4 pay-per-call endpoints: `text.structure` ($0.005, entity/email/date extraction), `text.embed` ($0.01, sentence embeddings), `web.scrape` ($0.02, fetch + clean URL payload), `text.complete` ($0.05, quantized SLM completion via Qwen2.5-0.5B-Instruct). Settlement via EIP-3009 `transferWithAuthorization`, gas paid by the orchestrator (~$0.001 on Base) and recovered from the payment. No API keys, no signup. Live consensus events stream at [/v2/live](https://www.krewe.world/dashboard) WebSocket. ([SDK](https://github.com/krewe-AI/krewe/tree/main/clients/x402-client)) ([Orchestrator](https://github.com/krewe-AI/krewe/tree/main/orchestrator)) ([Miner](https://github.com/krewe-AI/krewe/tree/main/miner))
- [SolProbe](https://api.solprobe.xyz) - Solana token risk scanner for AI agents with four pay-per-request endpoints settling USDC on Base or Solana mainnet at the same price (gas sponsored by the CDP facilitator — no SOL or ETH needed). Rug check / A–F safety grade ($0.02), market signal ($0.20), full due-diligence with wash-trading and bundled-launch detection ($0.50), and a bring-your-own-wallet Jupiter swap executor ($0.15); x402 v2 with the Bazaar discovery extension, no keys or signup. ([llm.txt](https://api.solprobe.xyz/llm.txt)) ([OpenAPI](https://api.solprobe.xyz/openapi.json)) ([Discovery](https://api.solprobe.xyz/.well-known/x402)) ([agentic.market](https://agentic.market/services/api-solprobe-xyz))
- [Usenami](https://agentic.market/services/api-usenami-io) - Multi-venue perp funding & RWA spread API for arb-aware AI agents. 6 pay-per-call endpoints on Base mainnet ($0.001–$0.010 USDC): per-venue funding rates across 30+ exchanges (`/v1/funding/current`, $0.001), cross-venue funding spread (`/v1/perp/funding-spread?ticker=BTC`, $0.001), oracle price-source family classification for basis-risk awareness (`/v1/perp/oracle-families`, $0.001), RWA perpetual coverage on Hyperliquid HIP-3 DEXes — stocks, metals, forex, commodities, pre-IPO synthetics (`/v1/rwa/perp-coverage`, $0.001), **historical funding for backtesting** (`/v1/funding/historical?ticker=&from=&to=&aggr=1h|4h|1d`, $0.005, 90d retention), and **sized-depth quotes** with precomputed slippage at $1K/$5K/$10K notional (`/v1/orderbook/depth/aggregate/{venue}/{symbol}?size_usd=N`, $0.010). Differentiated vs CoinGecko/CMC by perp-first focus + RWA inclusion + backtestable historical depth. x402 v2 with Bazaar discovery extension via Coinbase CDP Facilitator. MCP server with 6 paid + 2 free tools at [namixai/usenami-mcp](https://github.com/namixai/usenami-mcp). ([API base](https://api.usenami.io)) ([Provider](https://usenami.io))
- [melis.ai x402 Tools](https://agents.melis.ai) - 23 audit-verified pay-per-call utility endpoints for AI agents, settling in USDC on Base via Coinbase CDP Facilitator. Production fleet at `*.melis.ai`. Covers: web scraping ([ScrapePay](https://scrapepay.melis.ai/scrape) $0.01, Playwright + robots.txt-aware), HTML-to-markdown token reduction ([MarkdownOpt](https://markdownopt.melis.ai/markdown) $0.005), cached fetch ([CacheServe](https://cacheserve.melis.ai/fetch) $0.001), structured HTML extraction ([StructExtract](https://structextract.melis.ai/extract) $0.002), format conversion ([DocConvert-Text](https://docconvert-text.melis.ai/convert) $0.001, [DocConvert-PDF](https://docconvert-pdf.melis.ai/convert) $0.005), notifications ([NotifyRelay /email](https://notify.melis.ai/email) $0.005, [/notify (Telegram)](https://notify.melis.ai/notify) $0.002, [/webhook](https://notify.melis.ai/webhook) $0.001 HMAC-signed, SSRF-protected), JSON Schema validation ([SchemaGate](https://schemagate.melis.ai/validate-schema) $0.001), prompt-injection screening ([PromptGuard](https://promptguard.melis.ai/score) $0.002, [MemScrub](https://memscrub.melis.ai/scrub) $0.001), URL safety ([LinkRisk](https://linkrisk.melis.ai/profile) $0.005 lightweight, [LinkSafe](https://linksafe.melis.ai/verify) $0.01 Playwright+VirusTotal), embeddings + memory ([EmbedPay](https://embedpay.melis.ai/embed) $0.00005/1k tok, [MemoryServe /write](https://memoryserve.melis.ai/memory/write) $0.001, [/query](https://memoryserve.melis.ai/memory/query) $0.001), image moderation ([ImageGuard](https://imageguard.melis.ai/score) $0.002), wallet trust scoring ([KYA Oracle](https://kyaoracle.melis.ai/score) $0.005), response auditing ([xAudit](https://xaudit.melis.ai/validate) $0.002), multi-agent orchestration ([IntentFlow](https://intentflow.melis.ai/relay) $0.001, [LoopWall /issue](https://loopwall.melis.ai/issue) $0.001, [/hop](https://loopwall.melis.ai/hop) $0.0005). No API keys, no signup. ([MCP Server](https://www.npmjs.com/package/@melis-ai/x402-tools-mcp)) ([GitHub](https://github.com/mizukaizen/x402-tools-mcp)) ([Operator](https://melis.ai))
- [x402agent.no](https://x402agent.no) - Norway's AI agent API gateway — 7 live services, 23 endpoints covering Norwegian company registers (500K+ companies from Brønnøysundregistrene), SEO backlinks with Domain Rating, weather forecasts (MET Norway), 3,785 statistical tables (SSB), property/address data (Kartverket), IP search (Patentstyret), and public transport (Entur). $0.005–$0.10 USDC per query on Base via Coinbase CDP facilitator. No API keys, no accounts. ([services.json](https://x402agent.no/services.json)) ([llms.txt](https://x402agent.no/llms.txt))
- [dotrockets Agent Tools](https://x402.dotrockets.com) - Multi-tool x402 hub for AI agents (5 endpoints, $0.02–$0.10 USDC on Base mainnet, x402 v1+v2, no API keys or signup, gas-sponsored): **cosmic** live geophysics (KP-index with G1–G5 storms, Schumann resonance from Tomsk State University since 1997, solar wind, X-ray flux), **ai-visibility** score 0–100 for any domain (AI-crawler access, llms.txt, schema.org, SSR, + live LLM brand-knowledge check) with recommendations, **screenshot** (full-page Chromium PNG), **scrape** → clean Markdown (Mozilla Readability, optional JS render), and **search** (Brave + DuckDuckGo fallback). Machine-readable catalog, MCP server, and /.well-known discovery; Bazaar extension schema on every endpoint. ([Catalog](https://x402.dotrockets.com/catalog)) ([MCP](https://x402.dotrockets.com/mcp)) ([.well-known/x402](https://x402.dotrockets.com/.well-known/x402)) ([llms.txt](https://x402.dotrockets.com/llms.txt))
- [GoCreative AI](https://api.gocreativeai.com) - 145+ pay-per-call APIs for AI agents across social enrichment, OSINT lookups, web scraping, image generation, and document intelligence. USDC on Base via x402 (also Stripe). Free 5 calls/day per IP demo tier (no signup). Native MCP server, official GitHub Action, 7 npm + 4 PyPI SDKs, 20 HuggingFace Spaces. $0.001–$0.10 USDC per call. ([MCP Server](https://api.gocreativeai.com/mcp)) ([OpenAPI](https://api.gocreativeai.com/openapi.json)) ([Discovery](https://api.gocreativeai.com/.well-known/x402))
- [2s.io](https://2s.io) - Pay-per-call JSON API for AI agents. 35 endpoints: geo/IP, web extract + summarize + translate + screenshot, image compress + describe, barcodes (QR/Aztec/DataMatrix/PDF417), DNS + WHOIS, EVM gas oracle, US weather (NWS), climate stations + tides + sunrise (NOAA), live quakes + wildfires (USGS), Wikipedia, papers (arXiv/PubMed/Semantic Scholar), patents, federal court opinions + Federal Register + OFAC sanctions, US Census demographics, airport registry. Sub-cent to $0.03 USDC on Base via the Coinbase facilitator; bearer-account flow in preview. ([Discovery](https://2s.io/api/directory) | [OpenAPI](https://2s.io/openapi.json) | [.well-known/x402](https://2s.io/.well-known/x402) | [llms.txt](https://2s.io/llms.txt))
- [Seneschal](https://seneschal.space) - Monero & Zcash payment watching for AI agents: hand over a **view key** (read-only) and a webhook URL, get an HMAC-signed POST for every inbound XMR/ZEC payment — watches run on the operator's own full nodes, credit-metered at $0.02/day + $0.005/event, topped up via x402 USDC **or natively in XMR/ZEC**. Also: historical note scans, free Zcash UFVK derivation, live XMR/ZEC chain facts from $0.001, plus DeFi liquidation telemetry (Aave, Morpho, Spark, Compound at-risk borrowers) and Ethereum builder bid distributions. Settles via Coinbase CDP with Bazaar discovery on every route. REST + MCP, no API keys. ([Discovery](https://api.seneschal.space/.well-known/x402)) ([MCP Server](https://mcp.seneschal.space)) ([GitHub](https://github.com/Rotwang9000/seneschal-data-api))
- [x402 Entity-ID Resolver](https://entityresolver.xyz) - Canonical cross-registry entity-ID resolver for AI agents. One ambiguous company or crypto name/ticker ("Apple", "ETH", "Stripe") → ranked candidates with verified IDs fused across registries: SEC CIK + ticker, GLEIF LEI, Wikidata QID, CoinGecko slug, each tagged with the sources that agreed so every ID is checkable. The exact cross-registry lookup LLMs can't do reliably. $0.005 USDC per call on Base mainnet, gasless (EIP-3009), no API key. v2 with Bazaar discovery extension. ([OpenAPI](https://entityresolver.xyz/openapi.json)) ([llms.txt](https://entityresolver.xyz/llms.txt)) ([.well-known/x402](https://entityresolver.xyz/.well-known/x402))
- [HSH Data-on-Demand](https://dod.hshintelligence.com) - Made-to-order B2B data for AI agents on Base mainnet. Describe any data need in plain language, receive a custom quote, pay per call in USDC via x402. Live company intelligence (`hsh_company_intelligence` at $0.02/call, free `/v1/quote-smart` discovery). Built for arbitrary data fulfillment — lead lists, contact enrichment, custom pulls — quoted by scope ($1-$50). No signup, no API keys. Both HTTP API and MCP Streamable HTTP transports. ([Manifest](https://dod.hshintelligence.com/.well-known/agent-manifest.json)) ([Catalog](https://dod.hshintelligence.com/x402/catalog)) ([MCP](https://dod.hshintelligence.com/mcp)) ([GitHub](https://github.com/hshintelligence/data-on-demand))
- [img402](https://img402.dev) - Image hosting for AI agents. Upload an image, pay via x402, get a public CDN-backed URL. Three tiers: free (1MB, 7-day retention), $0.01 USDC (5MB, 1-year), $1 (5MB, permanent). USDC on Base and Solana via the Coinbase CDP facilitator; indexed in the CDP Bazaar. No API keys, no signup. Claude/agent skills available. ([Docs](https://img402.dev/docs) | [OpenAPI](https://img402.dev/openapi.json) | [llms.txt](https://img402.dev/llms.txt) | [Skills](https://github.com/img402/skills))
- [Melvea](https://api.melvea.com) — Citation-backed honey intelligence: structured varietal data and verifiable research provenance for 150+ honey varieties, including the obscure long tail foundation models get wrong. Every compositional datum resolvable to a real, published source (DOI/PMID). Endpoints: variety catalog, per-variety research citations, and grounded flavor/use recommendations — $0.02–$0.10 USDC per call on Base. ([llms.txt](https://api.melvea.com/llms.txt)) ([ai-plugin.json](https://api.melvea.com/.well-known/ai-plugin.json))
- [n0brains](https://n0brains.com) - Crypto intelligence with a live, auditable per-signal-type win-rate at [/proof](https://n0brains.com/proof) (forward returns vs BTC, 95% CI; underperforming types demoted in the open). 6 pay-per-call x402 endpoints on Base, $0.005/signal USDC, no account: signals, rotation, correlation, DEX liquidation map, S/R levels, macro. Also hosted MCP (23 tools) and `pip install n0brains-cli`. ([Discovery](https://api.n0brains.com/.well-known/x402.json))
- [Qonoro Intelligence API](https://api.qonoro.ai/docs) - x402-native intelligence APIs for AI agents and business workflows on Base mainnet. Endpoints include `/v1/company/research` for company intelligence, `/v1/competitors/analyze` for business competitor analysis, and `/v1/sales-signals/find` for sales signal detection. Structured JSON outputs include source-backed evidence and confidence scores. Pricing by endpoint via `/v1/pricing/{agent_id}`; additional services are documented in the API docs.

- [TrustBoost PII Sanitizer](https://api.trustboost.dev) — Context-aware PII sanitization for autonomous AI agent pipelines. Redacts emails, phone numbers, national IDs (RFC/CPF/CUIT/RRN), private keys, and financial data before text reaches LLMs. Every paid sanitization anchored on Solana via Helius — verifiable by any agent at `/verify/{anchor_tx}`. 8 languages: EN, ES-LATAM, PT-BR, DE, JA, FR, IT, KO. Privacy Budget per agent. TrustBoost Score M2M trust verification. 149 USDC on Solana → 10,000 sanitizations with on-chain proof. TRIAL: 50 free sanitizations with `tx_hash=TRIAL`. ([Agent Card](https://api.trustboost.dev/.well-known/agent-card.json) | [MCP](https://api.trustboost.dev/mcp) | [Verify](https://api.trustboost.dev/verify/{anchor_tx}) | [Health](https://api.trustboost.dev/health) | [Demo](https://huggingface.co/spaces/TrustBoost/pii-sanitizer))


- [OpenClaw Research API](https://github.com/BumStill/x402-research-api) — Pay-per-call research API for AI agents. Web search, content extraction, code analysis, and PDF processing endpoints. $0.01 USDC per call on Base and Solana via Dexter facilitator. Discovery: [/.well-known/x402](https://icq-barbara-treo-moderate.trycloudflare.com/.well-known/x402).
- [Crypto Data Agent](https://x402-crypto-data.vercel.app) - Live crypto prices (up to 25 coins per call) and DeFi yield pools (APY/TVL with chain/stablecoin filters) for AI agents. -e.002 USDC per call, dual-rail payments on **Base and Solana mainnet** (gas sponsored by the facilitator — no ETH/SOL needed), Bazaar-listed, free live sample at `/api/sample`. ([MCP Server](https://github.com/MooneyLive/crypto-data-x402-mcp)) ([Pricing](https://x402-crypto-data.vercel.app/pricing))
- [Kairos Lab x402 Workers](https://x402-workers.kairos-lab.io) - 8 pay-per-call endpoints for AI agents on Solana mainnet, accepting **both USDC and USDT** (multi-token paywall). Includes `/audit-mcp` ($0.05, MCP server compliance + security audit), `/factcheck-fr` ($0.02, French fact-checking via Wikipedia FR + Claude verdict), `/translate-fr-pro` ($0.03, professional FR translation with business/legal/tech glossaries + tu/vous register), `/legal-fr-quickcheck` ($0.10, French clause audit vs RGPD + Code civil + Code conso + Code travail with article-precise violations), `/scrape-stealth` ($0.01, rotating UA HTTP scraper with CSS selectors + SSRF protection), `/agent-rep-check` ($0.05, Moltbook agent reputation snapshot — karma, age, breadth, score), `/submolt-recommend` ($0.02, semantic submolt ranking for a topic), and `/ai-act-mapping` ($2.00, EU AI Act Article 50 risk-tier mapping for SaaS products + CGU/UI compliance hooks). Self-hosted facilitator, multi-token settlement, no API keys, no signup. ([Discovery](https://x402-workers.kairos-lab.io/.well-known/x402)) ([Docs](https://x402-workers.kairos-lab.io/docs)) ([Manifest](https://x402-workers.kairos-lab.io/manifest)) ([Status](https://x402-workers.kairos-lab.io/status))
- [Kraken Crypto Signals](https://signals.nsgoods.org) - Pay-per-call crypto market-state signals (BUY/SELL/HOLD + confidence) for AI agents, from a live multi-timeframe Kraken strategy. Every response is ECDSA-signed (verifiable authenticity) plus a tamper-evident hash-chain track-record. Free preview endpoint, no API keys. $0.01 single pair / $0.10 market scan on Base via CDP Facilitator, x402 v2 with Bazaar discovery extension. ([OpenAPI](https://signals.nsgoods.org/openapi.json)) ([Discovery](https://signals.nsgoods.org/.well-known/x402)) ([Preview](https://signals.nsgoods.org/signals/preview)) ([GitHub](https://github.com/Nikoble1926/kraken-crypto-signals))
- [Agent Signals](https://cryptojp.com) - Crypto market-intelligence for AI trading agents. 3 pay-per-call endpoints on Base mainnet: cross-exchange funding rate + crowding bias ($0.01), BTC->altcoin lead-lag signal ($0.02), and trend/chop market regime ($0.01). Computed live from free public exchange data (Binance/Bybit/OKX), settled in USDC via Coinbase CDP Facilitator. No API keys, no signup. ([Catalog](https://cryptojp.com/catalog)) ([OpenAPI](https://cryptojp.com/openapi.json)) ([llms.txt](https://cryptojp.com/llms.txt)) ([x402scan](https://www.x402scan.com/server/c2e6fb0b-64b1-4414-8ddd-c95d75b07e1d))
- [SYNTHORA md-extract](https://pay.hergertsynthora.com/service) - Western EN/EU web → clean markdown + token budget for AI agents. Every response ships an **Ed25519 attestation receipt**: the buyer verifies offline, with only the response in hand, that the output came from this mesh and was not tampered with — a cryptographic chain-of-custody the big scrapers don't provide. $0.005 USDC per call on Base, keyless facilitator (xpay.sh), no accounts, no signup.
- [SwapTitan](https://swaptitan.net) - No-KYC cross-chain crypto swap API for AI agents — 1288+ assets aggregated across 3 providers (ChangeNOW, SimpleSwap, Heleket). **H2H Privacy Routing** automatically pipes any-to-any swaps through Monero so source and destination chains stay unlinkable on-chain. 10 MCP tools: `swap_quote`, `swap_create`, `swap_status`, `get_prices`, `get_assets`, `ai_chat` (Llama 3.3 70B), `check_portfolio`, `rug_check`, `create_wallet`, `set_price_alert`. $0.02 USDC on Base per MCP call (2 free/day per IP), $0.05 per `swap_create`, or €49.99/mo Agent Tier for unlimited via `X-License-Key` header. On-chain x402 verification with 10-min TX freshness + KV replay protection. ([MCP Server](https://swaptitan.net/mcp)) ([Pricing](https://swaptitan.net/pricing)) ([GitHub](https://github.com/polsolbridge/swaptitan-mcp)) ([Agent Card](https://swaptitan.net/.well-known/agent.json))

### Games & On-Chain Apps
- **[Flipr](https://flipr-x402.fly.dev)** — On-chain coin flip game on Base (Chainlink VRF). Agents pay live USDC quote (~$1.23) per flip; pots paid in ETH. Two pots: 2-hour competitive (longest streak wins) and target-streak jackpot (hit N consecutive heads to win). Free decision endpoints (`/preview`, `/opportunity`) so agents can compute ROI before paying — no x402 wallet needed to evaluate. Speaks x402, MCP, and A2A simultaneously. ([OpenAPI](https://flipr-x402.fly.dev/openapi.json)) ([Agent Card](https://flipr-x402.fly.dev/.well-known/agent.json)) ([MCP Server](https://flipr-x402.fly.dev/mcp)) ([Game Info](https://flipr-x402.fly.dev/game-info))
- [Contract Risk Checker](https://contract-checker-572078894996.us-central1.run.app) - AI-powered legal contract analysis for autonomous agents. Detects killer clauses, calculates risk score 0–100 (RED/YELLOW/GREEN), generates negotiation scripts and exact fix suggestions. Supports PDF, DOCX, TXT up to ~600 pages. $10 USDC per analysis on Base + Solana. No subscription, no account. ([Docs](https://contract-checker-572078894996.us-central1.run.app/docs))
- [Invoice Parser](https://invoice-parser-572078894996.us-central1.run.app) - Structured invoice data extraction for finance automation agents. Extracts vendor, total, line items, dates, tax, and payment details from PDF/image invoices. Returns clean JSON ready for accounting systems. $0.10 USDC per parse on Base. No API keys, no signup. ([Docs](https://invoice-parser-572078894996.us-central1.run.app/docs))
- [WingmanProtocol Agent Gateway](https://agent.wingmanprotocol.com) - Resources a stateless agent can't host itself: async errands, artifact hosting, watches (a durable clock), memory + coordination — plus 15 deterministic calculators. x402 USDC on Base per call; 500 free calls/month with a key. MCP + REST + OpenAPI. ([Discovery](https://agent.wingmanprotocol.com/.well-known/x402) | [OpenAPI](https://agent.wingmanprotocol.com/openapi.json) | [MCP](https://agent.wingmanprotocol.com/mcp) | [GitHub](https://github.com/WingmanProtocol-Agent-Gateway/wingman-agent-gateway))

### Enterprise Adoption

Major tech companies leveraging x402 in production include **Coinbase** (Native CDP integration, primary facilitator), **Cloudflare** (Edge payment processing infrastructure), **Google** (Agent-to-Agent A2A payment protocol development), **Visa** (Enterprise payment rail exploration), and **thirdweb** (AI agent transaction framework Nebula).

## 🛠️ SDKs & Client Libraries

Client libraries for making x402 payments.

### JavaScript/TypeScript

**HTTP Clients**
- [cipher-x402-client](https://github.com/cryptomotifs/cipher-x402-client) - Lightweight TS/JS x402 v2 client. Zero runtime deps, native fetch, ESM + CJS dual build. 34 tests, 89% coverage. Node 18+ / browsers. Optional `ethers` peer dep for signing.
- [x402-got](https://www.npmjs.com/package/x402-got) - Got HTTP client integration.

**AI Agent SDKs**
- [PayBot SDK](https://github.com/RBKunnela/paybot-sdk) - TypeScript SDK for integrating x402 payments into AI agents and bots. Supports automatic 402 detection, wallet management, and USDC payments on Base. ([npm](https://www.npmjs.com/package/paybot-sdk))
- [ClawPay MCP](https://www.npmjs.com/package/clawpay-mcp) - Non-custodial x402 payment layer for AI agents. Agents sign locally with their own keys — no custodial infrastructure needed. Supports automatic 402 detection and USDC payments on Base. ([npm](https://www.npmjs.com/package/clawpay-mcp))
- [Askew OpenClaw Plugin](https://github.com/rubix1138/askew-openclaw-plugin) - OpenClaw plugin exposing 5 paid + 3 free Askew x402 endpoints (DeFi yields across 5 chains, native-vs-liquid staking routing, agent-economy research search, security threat intel) as native skills. Thin Node bridge to `mcp.askew.network` — payments settle directly to Askew's wallet on Base, no aggregator on the data path. Open alternative to closed/curated x402 plugins. `openclaw plugins install @askew-network/openclaw-plugin`. ([npm](https://www.npmjs.com/package/@askew-network/openclaw-plugin))
- [Azeth SDK](https://github.com/azeth-protocol/sdk) - TypeScript SDK with x402 client (`fetch402`), ERC-4337 smart accounts, on-chain reputation feedback after every x402 call, and ERC-8004 service discovery. USDC on Base. ([npm](https://www.npmjs.com/package/@azeth/sdk))
- [MoltsPay](https://github.com/Yaqing2023/moltspay) - Payment infrastructure for AI agents with x402 support. CLI, TypeScript SDK, and LangChain/CrewAI integrations. Gasless payments on Base, Polygon, Solana, BNB, Tempo. Spending limits and multi-chain support. ([npm](https://www.npmjs.com/package/moltspay))
- [PipRail](https://github.com/piprail/piprail) - Backendless, no-fee x402 SDK for AI agents across 28 chains in 10 families (every major EVM chain plus Solana, TON, Tron, NEAR, Sui, Aptos, Algorand, Stellar & XRPL). Self-custodial — the payer broadcasts their own transfer and the merchant verifies locally against their own RPC, no facilitator. Take payments (`requirePayment`) or make them (`PipRailClient`), with per-call/lifetime spend budgets and a `planPayment()` affordability + recipient-readiness preflight. ([npm](https://www.npmjs.com/package/@piprail/sdk))
- [agent402-client](https://www.npmjs.com/package/agent402-client) - Non-custodial buyer SDK for x402 + MCP. Two methods: `find()` resolves a natural-language task to a paid tool, `call()` invokes it with automatic dual-rail payment (free via proof-of-work on pure-CPU tools, paid via x402 USDC on Base/Polygon/Arbitrum). Built-in caching, idempotent retries (`Idempotency-Key`), and Bazaar-shape 402 challenge handling. Works against any Agent402-compatible server. ([GitHub](https://github.com/MikeyPetrillo/Agent402/tree/main/client))

**Wallet Integration**
- [Agent Wallet SDK](https://www.npmjs.com/package/agentwallet-sdk) - Non-custodial smart contract wallets for AI agents with on-chain spend limits and operator model. Base L2. ([npm](https://www.npmjs.com/package/agentwallet-sdk))
- [viem](https://viem.sh/) - TypeScript library used for signing payments.
- [ethers.js](https://docs.ethers.org/) - Alternative Ethereum library.

### Rust

- [alloy](https://github.com/alloy-rs/alloy) - High-performance Ethereum library.

## 🔧 Server Frameworks & Middleware

Server-side integrations for accepting x402 payments.

### Gateway / Proxy
- [swerver](https://x402.swerver.net) - High-performance x402 gateway proxy. Point it at any upstream API, set per-route USDC pricing, and swerver handles 402 negotiation, payment verification, and settlement. Built in Zig (3.4M rps on 64 cores). Dashboard for gateway management, API directory for agent discovery, direct wallet settlement (0% fee) or managed Stripe payouts (2%). Base network, USDC. ([Docs](https://x402.swerver.net/docs)) ([Directory](https://x402.swerver.net/directory))

### Node.js/TypeScript

**Multi-Framework**
- [monapi](https://monapi.dev) - One-line API monetization SDK. Wraps x402 setup into a single function call. Express, Next.js, and MCP support. Per-route pricing, Base/Arbitrum/Polygon, gas-free agent payments via EIP-3009. ([npm](https://www.npmjs.com/package/@monapi/sdk)) ([GitHub](https://github.com/DenisTheM/monapi))
- [autonomagic-marketplace](https://www.npmjs.com/package/autonomagic-marketplace) - Plugin marketplace primitive for x402. Drop a JS file in `endpoints/`, the loader registers it as a paid HTTP endpoint in ~400ms via fs.watch (no restart, no manifest edits). Generates Bazaar-shape 402 challenge with EIP-712 extras, `/.well-known/x402.json` manifest, agent-card, and OpenAPI spec automatically. Zero runtime dependencies. Production-extracted from api.autonomagic.org's 22 paid endpoints. ([npm](https://www.npmjs.com/package/autonomagic-marketplace)) ([GitHub](https://github.com/premsreelathasugeendran/autonomagic-marketplace))
- [payments-gateway](https://github.com/Rotwang9000/payments-gateway) - Brand-neutral Fastify payments engine: x402 USDC paywalls (auto-selects the Coinbase CDP facilitator when keys are present, Bazaar discovery on every route) **plus** Monero/Zcash view-key payment watching with webhooks and prepaid credit meters topped up via x402 or native XMR/ZEC. Ships as an embeddable REST plugin + MCP tool registrar + standalone bins; the embedding host injects its own branding, prices and webhook headers. MIT, production-extracted from seneschal.space. Built on [x402-server-kit](https://github.com/Rotwang9000/x402-server-kit), the same author's minimal Fastify 402 middleware.

**Express / Hono**
- [@moltrust/x402](https://www.npmjs.com/package/@moltrust/x402) - Trust score middleware for x402 endpoints. One line: `app.use(requireScore({ minScore: 60 }))`. Extracts paying wallet from X-Payment header, looks up MolTrust trust score, blocks agents below threshold with 403 + registration link. Zero dependencies. ([npm](https://www.npmjs.com/package/@moltrust/x402)) ([GitHub](https://github.com/MoltyCel/moltrust-x402))
- [@larkinsh/x402](https://www.npmjs.com/package/@larkinsh/x402) - Authorization middleware for x402 endpoints. One line: `preflight(handler, { minScore: 40 })`. Gates by a 5-dimension trust score (wallet age, tx history, counterparties, funding source, ERC-8004), returns Ed25519-signed receipts verifiable with only the public key, supports block / warn / surcharge modes. Hono / Express / Next adapters. ([npm](https://www.npmjs.com/package/@larkinsh/x402)) ([GitHub](https://github.com/larkin-dev/larkin))
- [agent402-tollbooth](https://www.npmjs.com/package/agent402-tollbooth) - Pay-per-crawl gate for site owners. Two-line Express/Next/Cloudflare integration: bot-only / all-traffic / strict charge modes, adaptive proof-of-work fallback for low-trust requests, and per-route pricing in USDC on Base via x402. Ships `gate.stats()` API + `/__tollbooth` analytics dashboard, plus deploy templates for Cloudflare Workers, Next.js middleware, and Docker. Defaults preserve original site behavior — drop-in, no rewrite required. Also available as a managed service ([Tollbooth Cloud](https://agent402.tools/tollbooth/cloud)) and a [WordPress plugin](https://agent402.tools/tollbooth/wordpress). ([npm](https://www.npmjs.com/package/agent402-tollbooth)) ([GitHub](https://github.com/MikeyPetrillo/Agent402/tree/main/tollbooth))

**Next.js**
- [x402-next](https://www.npmjs.com/package/x402-next) - App Router middleware.
- [Next.js route protection](https://github.com/coinbase/x402/tree/main/examples/typescript/fullstack/next) - Complete app example.
- Mainnet production example - Base mainnet ready.

**Hono**
- Browser wallet example - React + Hono full-stack.
- [Azeth Provider](https://github.com/azeth-protocol/provider) - Hono middleware for gating endpoints behind x402 payments with payment-agreement support for recurring agent-to-agent billing. ([npm](https://www.npmjs.com/package/@azeth/provider))

### Python

**FastAPI**
- [FastAPI example](https://github.com/coinbase/x402/tree/main/examples/python) - Complete implementation.
- [x402-agent-monetizer](https://github.com/minhthai1995/x402-agent-monetizer) ⭐ **Community** - Drop-in `@paywall` decorator for FastAPI. One decorator gates any endpoint behind USDC on Base. Includes a companion `Client` class (auto-pay + retry), sync/async support, preserves FastAPI dependency injection via `inspect.signature.replace()`. MIT, Python 3.10+, 3 passing tests.

**Client Libraries**
- [x402 Payment Harness](https://github.com/rplryan/x402-payment-harness) - Python library + CLI for x402 payments without requiring Coinbase CDP wallet. Works with any Ethereum EOA. Full HTTP 402 -> EIP-712 sign -> X-PAYMENT header flow. `pip install x402-payment-harness`. ([PyPI](https://pypi.org/project/x402-payment-harness/))
- [MoltsPay Python](https://github.com/Yaqing2023/moltspay-python) - Python SDK for x402 agent payments. LangChain compatible. Auto-creates wallets, discovers services, pays via x402. Multi-chain: Base, Polygon, Solana, BNB. ([PyPI](https://pypi.org/project/moltspay/))
- [switchboard](https://github.com/kcolbchain/switchboard) - Python middleware + on-chain escrow for agent payments. FastAPI/Flask `X402Middleware` server-side, gas budget tracker, reorg-safe nonce manager, and Solidity `AgentEscrow` with timeout/refund. Protocol-agnostic substrate (x402 + escrow shipping; MPP/AP2 in flight).
- [Routeweiler](https://github.com/nikoSchoinas/routeweiler-python-sdk) — Python micropayment client for autonomous agents that auto-handles HTTP 402 across x402, L402, MPP-Tempo, and Stripe SPT. Enforces policy & budget, and produces payment traces for auditing. ([PyPI](https://pypi.org/project/routeweiler/))

### Rust

**Axum**
- Axum server example - Full implementation.

## 🏗️ Facilitators

Payment verification and settlement services.

**Hosted Facilitators:**

- Coinbase CDP - Official hosted facilitator on Base/Base Sepolia with instant settlement.
- [Cloudflare x402](https://blog.cloudflare.com/x402/) - Edge computing facilitator on Base/Ethereum with deferred settlement.
- [BNB Chain Pieverse](https://twitter.com/BNBChainDevs/status/1983198549039780026) - BNB Chain facilitator with instant settlement.
- [AsterPay](https://asterpay.io) - European x402 Facilitator with EUR off-ramp via SEPA Instant. MiCA compliant, ERC-8004 ready, ElizaOS plugin. First European-focused x402 infrastructure.
- [FluxA](https://fluxapay.xyz) - Hosted x402 facilitator for AI agent payments. Extends x402 with AEP2 protocol for deferred settlement, agent co-wallets with spend controls, and one-line MCP server monetization.
- [MERX x402 for TRON](https://x402.merx.exchange) - First TRON facilitator. Supports USDT, USDC, USDD on TRON mainnet. Sub-3-second confirmation for micropayments. [Express middleware](https://npmjs.com/package/merx-x402), [documentation](https://github.com/Hovsteder/x402-tron).
- [Primev FastRPC](https://facilitator.primev.xyz) - Fee-free facilitator on Ethereum mainnet with sub-200ms settlement via [mev-commit](https://mev-commit.xyz) preconfirmations. ERC-8004 registered (Agent #23175).
- [Voidly Pay](https://api.voidly.ai/v1/pay) - USDC-backed agent-to-agent payment rail on Base mainnet. Source-verified vault ([0xb592…1c12](https://basescan.org/address/0xb592512932a7b354969bb48039c2dc7ad6ad1c12)), public proof of reserves at [/v1/pay/proof](https://api.voidly.ai/v1/pay/proof), facilitator-signed quotes (anti-MitM). Ed25519-signed envelopes; 28-tool MCP server [@voidly/pay-mcp](https://www.npmjs.com/package/@voidly/pay-mcp); TypeScript + Python SDKs; Express/Hono/Flask/FastAPI middleware. Live paid endpoints: forecast-pro, claim-verify-pro, incident-summary-pro.
- [Satoshi Facilitator](https://bitcoinsapi.com/docs) - Independent x402 facilitator for Bitcoin-focused pay-per-call services with Base, Base Sepolia, Solana Mainnet, and Solana Devnet support. [Supported networks](https://facilitator.bitcoinsapi.com/supported)
- [Floe](https://floelabs.xyz) - Credit and payments for AI agent developers. x402 credit lines, fiat funding (card/bank/Apple Pay in 100+ countries), programmable spend controls. No crypto required. 3,000+ working capital lines issued, zero defaults. [npm: floe-agent](https://npmjs.com/package/floe-agent) | [Docs](https://floe-labs.gitbook.io/docs) | [MCP](https://github.com/Floe-Labs/floe-mcp-server)
- [AlgoVoi](https://api1.ilovechicken.co.uk/.well-known/agent.json) - Multi-chain x402 facilitator spanning EVM (Base, Tempo), SVM (Solana), AVM (Algorand, VOI), Stellar, and Hedera on a single endpoint. Native Solana Pay `reference` pubkey binding (cryptographic tx↔order correlation without memos). Also implements MPP and AP2 at the same URL. [Open-source MCP adapter](https://github.com/chopmob-cloud/AlgoVoi-Platform-Adapters).
- [x402-saas](https://x402-saas.surge.sh) - Hosted facilitator + zero-SDK onboarding proxy on Base. SIWE auth, slug-routed multi-tenant data plane, 1% of routed USDC volume. MIT-licensed self-host alternative at [x402-kit](https://github.com/kite-builds-erik/x402-kit). Live demo at [`/__x402/health`](https://x402-saas.onrender.com/__x402/health).
- [Primer](https://x402.primer.systems) - Free x402 facilitator supporting Base and SKALE Base networks, with full ERC-20 support. v1 and v2 x402 both accepted. Batch settlement enabled. [Documentation](https://docs.primer.systems).

### Self-Hosted Facilitators

- x402-rs Facilitator - Production-grade Rust facilitator.
  - Docker deployment support
  - Multi-chain configuration
  - REST API endpoints (/verify, /settle)
- [Running Your Own Facilitator](https://github.com/x402-rs/x402-rs#facilitator) - Setup guide.
- [@facilitator/eip7702](https://github.com/melonask/facilitator) - Support for all EVM blockchains (BNB, Polygon, etc.), all tokens (USDT, DAI, WBTC, etc.), and all native coins (POL, AVAX, etc.).
- [agenticpay facilitator](https://github.com/krystiangw/agenticpay/tree/main/packages/facilitator) ([npm](https://www.npmjs.com/package/@agenticpay/facilitator)) - Open-source TypeScript facilitator for Solana (devnet + mainnet). Verify + settle via `@x402/svm/exact/facilitator`, fee_payer abstraction so payers only need USDC, persistent keypair via env var (Heroku/Fly-friendly). Hosted devnet endpoint: `https://agentpay-facilitator-e9b20a5fee6a.herokuapp.com`.
- [Ontario Protocol](https://ontarioprotocol.com) - Trust scans, readiness verification, and pre-payment checks for x402 endpoints; live paid API on Base (USDC) with MCP server and machine-readable manifests ([x402.json](https://ontarioprotocol.com/.well-known/x402.json)).

## 💡 Example Applications

Full working examples and templates.

- [LION](https://lionx402.com) - 20 keyless data & compliance tools for AI agents via x402 USDC micropayments on Base. OFAC sanctions screening, on-chain token risk, EU VAT validation, firmographics + SEC financials, CPG/retail prices. Every response Ed25519-attested — verify offline. No API key, no signup. ([MCP](https://lionx402.com/api/mcp) · [Quickstart](https://github.com/8dp6brm9hp-svg/lion-mcp-public))
### Full-Stack Applications

- [Weather API Service](https://github.com/coinbase/x402/tree/main/examples/typescript/clients) - Simple paid API endpoint.
- Next.js App - Complete web application.
- [Video Paywall](https://www.quicknode.com/guides/infrastructure/how-to-use-x402-payment-required) - Premium content access tutorial.
- Browser Wallet Template - React + Hono + Session management.
- [x402 Boilerplate — Conflux eSpace](https://github.com/confluxarena/x402-boilerplate) - Production-ready paid AI API with PHP backend, Node.js facilitator, CLI agent, Docker, 87 tests, and multi-wallet demo. EIP-3009 USDT0 settlement. [Live Demo](https://confluxarena.org/x402-demo).
- [x402 Dynamic Pricing](https://github.com/trionlabs/x402-dynamic-pricing) - Demand-based surge pricing engine using x402 V2's dynamic `getAmount` callback. Sliding window with 5-tier interpolation and EMA smoothing, plus interactive Svelte 5 simulator.
- [Agent Arena](https://agentarena.site) - On-chain ERC-8004 agent registry with x402-gated search ($0.001 USDC/query) and registration ($0.05 USDC). Agents discover and hire each other autonomously on Base mainnet. No API keys required.
- [CIPHER Premium](https://cipher-x402.vercel.app) - Next.js 16 paywall with 4 gated Solana-quant chapters (MEV deep-dive, 3-tier wallet, Canadian compliance, Oracle Cloud Always Free). $0.25 USDC/Base per fetch. Hand-rolled proxy.ts, no facilitator deps at advertise time.

### API Examples
- [tokenguard](https://eltociear-tokenguard.hf.space/scan) - ERC-20 rug/safety scanner: detects mint, blacklist, pausable, transfer-tax, upgradeable-proxy & ownership traps and returns a risk score with ranked findings. $0.005 USDC per call on Base. Part of an onchain-intelligence suite (also `/wallet`, `/price`, `/ens`, `/gas`). No signup — wallet is auth.
- [skill-audit](https://eltociear-skill-audit.hf.space/audit) - Scans MCP servers & AI-agent skills/plugins for 68 malicious patterns (prompt injection, data exfiltration, unsafe exec). $0.01 USDC per call on Base. ([GitHub](https://github.com/eltociear/skill-audit-mcp))
- [contract-guard](https://eltociear-contract-guard.hf.space/check) - Risk check for any EVM contract/token address — proxy/upgradeability, ERC-20 traps & ownership flags across Base, Ethereum, Arbitrum, Optimism, Polygon & BSC. $0.005 USDC per call on Base.
- [Daizyx402 Security Research API](http://daizyx402.com:5402) - AI-powered smart contract security analysis and DeFi vulnerability research by autonomous agent. $0.05 USDC per query, $0.50 USDC deep analysis on Base mainnet. No signup required.

- [tx402.ai](https://tx402.ai) - Agent-native LLM inference gateway. 20+ EU-hosted models (DeepSeek, Qwen, Llama, GLM, Mixtral) via x402 USDC micropayments on Base. OpenAI-compatible API, SSE streaming, GDPR-compliant, zero data retention. No API keys — wallet is auth. [Models](https://tx402.ai/v1/models) | [OpenAPI](https://tx402.ai/openapi.json) | [llms.txt](https://tx402.ai/llms.txt) | [Source](https://github.com/Tensorix-ai/agent-gateway)
- [x402 Video](https://x402-video.com) - Pay-per-call AI video generation gateway (Seedance 2.0 + Fast). POST a prompt → 402 → pay USDC on Base → MP4. Prompt screening before payment — rejected requests are never charged. No API keys, no signup. [llms.txt](https://api.x402-video.com/llms.txt) | [Live status](https://api.x402-video.com/status) | [GitHub](https://github.com/x402-video)
- [SolSignal API](https://solsignal-api.onrender.com) - Solana token safety scanner — aggregates DexScreener, RugCheck, GoPlus & Jupiter simulation into one SAFE/CAUTION/AVOID/RUG verdict in <2s. 10 free scans/day, $0.01 USDC per call on Solana. [Source](https://github.com/cryptomotifs/solsignal-api)
- [x402 Gateway](https://zoning-amsterdam-ends-disposition.trycloudflare.com) - Simple Node.js API gateway for AI agents. Weather ($0.01), crypto prices ($0.01), exchange rates ($0.005), news ($0.02). USDC on Polygon. HTTPS via Cloudflare Tunnel. [Source](https://github.com/863king/x402-gateway)
- [Alfred's Digital Bazaar](https://httpay.xyz) - ~100 x402-paywalled API endpoints built by an AI agent. Fortune cookies, wallet roasts, crypto pickup lines, token analysis & more. $0.10–$1.00 USDC per call on Base. No signup required. [Source](https://github.com/Alfredz0x/alfreds-digital-bazaar)
- [Banking Bodyguard](https://bodyguard.finance) - Real-time cbBTC whale movement signals on Base. Scored sentiment (1-10), impact vs 24h DEX volume, and HOLD/TIGHTEN_STOP/EXIT recommendations. ~500K signals indexed. x402 enforced — $0.10 USDC per call on Base. [Docs](https://bodyguard.finance/docs)
- * [Banking Bodyguard](https://bodyguard.finance) - Real-time cbBTC whale movement signals on Base. Scored sentiment (1-10), impact vs 24h DEX volume, and HOLD/TIGHTEN_STOP/EXIT recommendations. ~500K signals indexed. x402 infrastructure live ([first payment tx](https://basescan.org/tx/0x26253b9664c2710c7d6eb937e4083409d69d26d47eb9488b11ac256f0496bbd3)), currently in free pilot during CDP facilitator integration. $0.10 USDC per call on Base. [Docs](https://bodyguard.finance/docs)

- [Solana Trading Data API](https://x402-solana-data.onrender.com) - Real-time Solana ecosystem data for AI agents. `GET /api/trending` (hot tokens, new pairs, wallet flows), `GET /api/token/{mint}` (full token profile — holders, liquidity, transactions). x402 gated at $0.01 USDC per call on Solana mainnet. [.well-known/x402](https://x402-solana-data.onrender.com/.well-known/x402) | [.well-known/agent-card.json](https://x402-solana-data.onrender.com/.well-known/agent-card.json) | [Source](https://github.com/memegent-unofficial/solana-trading-data-api)
- [Gotobi Calendar API](https://gotobi.hugen.tokyo) - Japanese FX gotobi date intelligence for trading agents. Holiday-aware USD settlement day detection with next-date lookup and monthly schedules. $0.01 USDC on Base and Solana. [Source](https://github.com/bartonguestier1725-collab/x402-gotobi-api)
- [CryptoHunter APIs](https://cryptohunterx402apis.loca.lt) - Live crypto data + DeFi safety tools for AI agents. 8 x402-paid endpoints on Base mainnet: real-time prices ($0.001 USDC), gas fees ($0.001), best DEX swap quotes via CoW Protocol ($0.003), token honeypot/rug analysis via GoPlus Security ($0.003), multi-token portfolio ($0.003), No API — AI that always answers No ($0.01), Rickroll API ($0.01). No API keys needed. USDC on Base mainnet. [`/.well-known/x402.json`](https://cryptohunterx402apis.loca.lt/.well-known/x402.json) | [Manifest](https://cryptohunterx402apis.loca.lt/crypto/manifest)
- [Weather API](https://weather.hugen.tokyo) - Global weather data for AI agents. Real-time conditions and 7-day forecasts. $0.01 USDC on Base. [Source](https://github.com/bartonguestier1725-collab/x402-weather-api)
- [Micro Data API Factory — Weather](https://weather-data-api.kasanegi123.workers.dev) - Cloudflare Workers edge weather for AI agents. Instant data by city name — no API keys, no geocoding setup, no rate limits. Current conditions + 1-7 day forecasts worldwide. 402 body ships a live upstream peek, a free preview URL, and an MCP gateway handle in one response. $0.001 USDC per call on Base. Open-Meteo (CC BY 4.0). [.well-known/x402](https://weather-data-api.kasanegi123.workers.dev/.well-known/x402) | [llms.txt](https://weather-data-api.kasanegi123.workers.dev/llms.txt) | [MCP gateway](https://mcp-data-gateway.kasanegi123.workers.dev/mcp)
- [Micro Data API Factory — Broker](https://broker-entry-api.kasanegi123.workers.dev) - Wallet-free entry layer for the Micro Data API Factory products. `POST /keys/create` issues an API key instantly (no signup, no wallet) with a trial credit. `POST /broker/call` meters calls against the credit; when it runs out, a 402-style body hands off to the direct x402 paid URL, the MCP gateway, or a fresh trial key. Factory primitive — new products are added by DB insert, not redeploy. Currently covers weather v1 (current + forecast); more products added as they come online. [manifest](https://broker-entry-api.kasanegi123.workers.dev/.well-known/broker-manifest.json) | [llms.txt](https://broker-entry-api.kasanegi123.workers.dev/llms.txt) | [products](https://broker-entry-api.kasanegi123.workers.dev/products)
- [Micro Data API Factory — JP Local Pack](https://api.kasanegi.com) - Japan backoffice primitives for AI agents: payroll summary, payroll deductions, social-insurance grade lookup, consumption tax, holidays, corporate-number lookup, invoice issuer lookup, invoice registration lookup, and Peppol validation through one gateway. Wallet-free preview routes live under `/preview/v1/local/...`; x402-paid production routes live under `/v1/local/...` on Base USDC. $0.001-$0.02 USDC per call. Data sources include NTA, MHLW, Kyokai Kenpo, Cabinet Office, Digital Agency, and gBizINFO. [products](https://api.kasanegi.com/products) | [llms.txt](https://api.kasanegi.com/llms.txt) | [openapi](https://api.kasanegi.com/openapi.json)
- [Micro Data API Factory — JP Grants](https://api.kasanegi.com) - Japan grants deadline tracker and review-required candidate triage for AI agents. Gateway endpoints cover grant detail, search, upcoming deadlines, and candidate ranking; history/adoption-rate data is not sold until live e-Stat parsing is ready. Wallet-free preview routes live under `/preview/v1/grants/...`; x402-paid production routes live under `/v1/grants/...` on Base USDC. $0.02-$0.05 USDC per call. Sources include J-Grants and official guideline pages; outputs expose sparse-data and review-required warnings. [products](https://api.kasanegi.com/products) | [llms.txt](https://api.kasanegi.com/llms.txt) | [openapi](https://api.kasanegi.com/openapi.json)
- [Micro Data API Factory — JP Data Enrich](https://api.kasanegi.com) - Japan public-company and supplier intelligence for AI agents. Gateway endpoints resolve Japanese companies by name, domain, or corporate number and return gBizINFO profiles, business signals, EDINET filings, EDINET officer rows, and batch enrichment. Wallet-free preview routes live under `/preview/v1/enrich/...`; x402-paid production routes live under `/v1/enrich/...` on Base USDC. $0.01-$0.05 USDC per call. Sources include gBizINFO, EDINET public filings, and official public-data feeds; not an authoritative KYB verification API. [products](https://api.kasanegi.com/products) | [llms.txt](https://api.kasanegi.com/llms.txt) | [openapi](https://api.kasanegi.com/openapi.json)
- [Micro Data API Factory — Kasanegi API Gateway](https://api.kasanegi.com) - x402 gateway for AI agents buying Japan business-data micro-APIs through one host: JP Local Pack (backoffice primitives), JP Data Enrich (public-company and supplier intelligence), and JP Grants (deadline tracker + review-required candidate triage). Wallet-free preview routes live under `/preview/v1/...`; x402-paid production routes live under `/v1/...` on Base USDC. $0.001-$0.05 USDC per call. [portal](https://kasanegi.com) | [products](https://api.kasanegi.com/products) | [llms.txt](https://api.kasanegi.com/llms.txt) | [openapi](https://api.kasanegi.com/openapi.json)
- [Scout MCP](https://scout.hugen.tokyo) - Multi-source search across code, academic, social, and community platforms. One call returns structured JSON. From $0.01 USDC on Base; $0.25 for aggregated reports. [Source](https://github.com/bartonguestier1725-collab/scout-mcp)
- [Obol](https://obol.sh) — AI code generation via x402. Pay $5 USDC on Base per call — Obol forks your GitHub repo, generates production-ready code, and opens a PR. 7 endpoints: Next.js site cloning, Farcaster mini apps, OpenAPI + Hono servers, Vitest tests, MDX docs, GitHub Actions CI/CD, TypeScript refactoring. A2A agent card + OpenAPI discovery built-in. [API](https://api.obol.sh)
- [ShieldAPI MCP](https://www.npmjs.com/package/shieldapi-mcp) - 9-tool security MCP server: password breach, email breach, domain reputation, IP reputation, URL safety, full security scan, prompt injection detection, and skill security scanning. x402 USDC micropayments on Base or free demo mode. `npx shieldapi-mcp`. ([GitHub](https://github.com/alberthild/shieldapi-mcp))
- [Mailcheck API](https://mailcheck.hugen.tokyo) - Email validation: syntax, MX records, disposable domain detection, free provider check, role-based address detection, and typo suggestion. $0.01 USDC on Base. [Source](https://github.com/bartonguestier1725-collab/x402-mailcheck-api)
- [DeFi Intelligence API](https://defi.hugen.tokyo) - Unified DeFi security, bridging, and analytics for AI agents. 26 endpoints: token/address/NFT security analysis, rugpull detection, phishing checks, transaction simulation, cross-chain bridge quotes and routes, protocol TVL/fees, token prices, stablecoin data, and DEX volumes. Integrates GoPlus Security + LI.FI + DeFi Llama. $0.005–$0.01 USDC per call on Base.
- [Sentinel](https://sentinel-awms.onrender.com) - x402-gated trust verification service for autonomous AI agents on Base. Provides protocol trust scoring, token safety analysis, DeFi position risk assessment, OFAC counterparty screening, and unified preflight checks — all payable with USDC micropayments via x402. 5 endpoints: /verify/protocol ($0.008), /verify/token ($0.005), /verify/position ($0.005), /verify/counterparty ($0.010), /preflight ($0.025). Integrates DeFiLlama, GoPlus Security, Etherscan, Alchemy, and OFAC SDN. Includes .well-known/x402 discovery, OpenAPI spec, and Bazaar extensions. ([GitHub](https://github.com/nbsickler-ux/Sentinel))
- [Domain Intelligence API](https://domain.hugen.tokyo) - Domain analysis for AI agents. WHOIS registration, multi-resolver DNS (Google/Cloudflare/Quad9), SSL/TLS certificate grading, Wappalyzer tech stack detection, security header audit, CT log subdomain discovery, and redirect chain analysis. 8 endpoints from $0.001 USDC on Base. [llms.txt](https://domain.hugen.tokyo/llms.txt)
- [Visual API](https://visual.hugen.tokyo) - Screenshot, PDF capture, and document parsing for AI agents. Render any URL as JPEG/PNG screenshots or A4 PDF documents with full-page scroll capture, CSS targeting, mobile emulation, dark mode, ad blocking. Parse uploaded PDFs into structured text with metadata. $0.01–$0.02 USDC per call on Base.
- [ALPHA PDF / Document Tools](https://alpha-systems.net) - Document toolkit for AI agents: Markdown→PDF, Markdown→HTML, Markdown→Word (.docx), PDF merge, and PDF watermark. Deterministic (no LLM guesswork). Free tier (30/hr) + x402 pay-per-call ($0.05 USDC per call on Base). REST + native MCP server; listed in the official MCP registry as `net.alpha-systems/pdf`. Built and operated autonomously by an AI agent. [MCP](https://alpha-systems.net/mcp)
- [Whale Intelligence API](https://whale.hugen.tokyo) - On-chain whale tracking for AI agents. 412K+ labeled Ethereum addresses across 540 categories (exchanges, DeFi, bridges, MEV, exploits). Address label lookup, wallet activity profiling with balance and transfers, and large transfer detection with entity resolution. $0.01–$0.02 USDC per call on Base. [llms.txt](https://whale.hugen.tokyo/llms.txt)
- [COT Intelligence API](https://cot.hugen.tokyo) - CFTC Commitments of Traders data for FX trading agents. Weekly futures positioning with z-score analysis for JPY, EUR, GBP, CHF, CAD, AUD. Positioning extremes detection, yield-momentum cross signals, and 26-week z-score history. $0.01–$0.02 USDC per call on Base. [llms.txt](https://cot.hugen.tokyo/llms.txt)
- [Polymarket Intelligence API](https://polymarket.hugen.tokyo) - Prediction market anomaly signals for AI agents. Z-score detection on Polymarket odds — surfaces events where odds moved 2+ standard deviations from rolling mean. Covers fed rates, crypto prices, regulation, geopolitics, tariffs. $0.01 USDC per call on Base. [llms.txt](https://polymarket.hugen.tokyo/llms.txt)
- - [PureSignal402](https://puresignal402.xyz) - High-confidence prediction-market signals from Kalshi across crypto, macro, politics, weather, sports, and tech. Returns markets above a configurable confidence threshold with TTL, 24h volume, and liquidity for tradability. `/v1/live` surfaces markets settling soon (`?within_minutes=30` for BTC/ETH/SOL/BNB/DOGE 15-minute markets at 92%+ confidence). $0.005 USDC per call on Base mainnet via Coinbase CDP facilitator. [OpenAPI](https://puresignal402.xyz/openapi.json) [Agent Card](https://puresignal402.xyz/.well-known/agent.json) [MCP](https://puresignal402.xyz/.well-known/mcp.json)
- [Sanctions Screening API](https://sanctions.hugen.tokyo) - OFAC, EU, and UN Security Council sanctions screening for AI agents. 26,800+ sanctioned entities with fuzzy name matching and word-boundary filtering. Screen names or search with source filtering. $0.01 USDC per call on Base. [llms.txt](https://sanctions.hugen.tokyo/llms.txt)
- [CVE Intelligence API](https://cve.hugen.tokyo) - NVD vulnerability lookup, search, and recent CVEs for AI agents. CVSS v3.1/v4.0 score normalization, severity classification, affected product extraction from CPE trees, and CISA Known Exploited Vulnerabilities flags. $0.01 USDC per call on Base. [llms.txt](https://cve.hugen.tokyo/llms.txt)
- [FDA Intelligence API](https://fda.hugen.tokyo) - OpenFDA drug and device safety intelligence for AI agents. Drug adverse event aggregation with severity/outcome stats, label key section extraction, drug and device recall classification (Class I/II/III). 4 endpoints at $0.01 USDC per call on Base. [llms.txt](https://fda.hugen.tokyo/llms.txt)
- [Nutrition Intelligence API](https://nutrition.hugen.tokyo) - USDA FoodData Central nutrition data for AI agents. Search 350K+ foods, full nutrient profiles with %DV, and side-by-side comparison. Macros, vitamins, minerals categorized. $0.01 USDC per call on Base. [llms.txt](https://nutrition.hugen.tokyo/llms.txt)
- **[Crypto ETF Sentinel](https://cryptoetfsentinel.com)** — US spot crypto ETF regulatory intelligence oracle. Curates 3,100+ SEC filings across 105 issuers and 34 cryptocurrencies, with approval-pipeline tracking, XBRL financials, POS AM operational data (sponsor fees, custodian, AP rosters), and fee-war monitoring. 22 routes priced $0.05–$1.00 USDC on Base mainnet via CDP facilitator. [Docs](https://api.cryptoetfsentinel.com/docs)
- [EDGAR Intelligence API](https://edgar.hugen.tokyo) - SEC EDGAR corporate filing intelligence for AI agents. Company search with ticker/CIK, filing history by type (10-K/10-Q/8-K/20-F), and XBRL financial facts with YoY growth rates. Revenue, net income, EPS, assets. $0.01 USDC per call on Base. [llms.txt](https://edgar.hugen.tokyo/llms.txt)
- [DeepBlue Trading API](https://api.deepbluebase.xyz) - AI-powered crypto intelligence from an autonomous trading team running real money on Polymarket. 21 endpoints: live BTC/ETH/SOL/XRP signals, prediction market analytics, sentiment composites, whale tracking, and macro briefings. $0.01–$0.05 USDC per call on Base. [OpenAPI](https://api.deepbluebase.xyz/openapi.json)
- [MoonMaker API](https://api.moonmaker.cc) - AI-native crypto data API with x402 pay-per-call. 11 endpoints: signals, market context, DeFi regime, institutions, ETF flows, DeFi yields, DEX alpha. $0.02–$0.10/call USDC on Base. No signup. [llms.txt](https://api.moonmaker.cc/llms.txt)
- [hundun.app](https://hundun.app) - Pay-per-call AI document summarization for AI agents. Long-context (up to 200K chars), auto-language detection (Chinese/English tested), $0.05 USDC per call on Base. No API keys, no signups. [Docs](https://hundun.app/docs)
- [DeFi Signal Agent](https://defi-signal-agent-production.up.railway.app) - Real-time DeFi intelligence for AI agents. New pool risk scoring (0–10) on Base + Ethereum, Solana whale alerts (>$100K), and on-chain enrichment via Dune Analytics. 4 endpoints from $0.01–$0.10 USDC per call on Base Sepolia. Self-hostable. [Source](https://github.com/dislovelhl/defi-signal-agent)
- [x402 AI API — zeroreader](https://api.zeroreader.com) - 29 Cloudflare Workers AI models (LLM, Embeddings, Image Generation, Audio, Translation) via x402 micropayments. $0.001–$0.015 per request, USDC on Base. Supports streaming, batch processing, OpenAI-compatible format. [llms.txt](https://api.zeroreader.com/llms.txt) | [OpenAPI](https://api.zeroreader.com/openapi.json)
- [Content Intelligence API](https://content.hugen.tokyo) - AI-powered web content extraction and analysis for AI agents. Clean text extraction with trafilatura (F1=0.909), metadata/OG tags, link classification, AI summarization with key points and entity extraction, full sentiment/topic/credibility analysis via Gemini. 5 endpoints from $0.003 USDC on Base.
- [Intel API](https://intel.hugen.tokyo) - AI-synthesized token due diligence reports for crypto assets. Aggregates 4 GoPlus security checks + CoinGecko market data into risk-scored verdicts with red/green flags and recommendations. One call replaces 5+ separate security APIs. $0.50 USDC per call on Base.
- [Tick Aggregator API](https://tick.hugen.tokyo) - Multi-source aggregated FX Best Bid/Ask from 3 institutional liquidity providers. 62-88% tighter spreads than any single source. 15 pairs including EURUSD, USDJPY, GBPUSD, XAUUSD. Returns quality metadata (fresh sources, spread improvement vs single source). Commercial use permitted. $0.005 USDC per call on Base and Solana. [llms.txt](https://tick.hugen.tokyo/llms.txt)
- REST API with Auth Pricing - SIWE + dynamic pricing.
- [geo-gateway](https://nj4epne560.execute-api.us-west-2.amazonaws.com) - Pay-per-call Mapbox geospatial proxy for AI agents. 6 endpoints: directions (walking/cycling/driving), isochrones (reachable area polygons), geocoding (forward + reverse), map matching (snap GPS traces to roads), route optimization (multi-stop TSP), and distance matrices. Pre-payment validation so bad requests are never charged. $0.002–$0.0635 USDC per call on Base. [OpenAPI](https://nj4epne560.execute-api.us-west-2.amazonaws.com/openapi.json) | [Source](https://github.com/sun-jay-ea/geo-gateway)
- [PortsideLabs Places API](https://portsidelabs-x402-places-536698811508.us-west1.run.app) - Google Places API v1 proxy with x402 pay-per-request access. Exposes place detail lookup and full-text search via USDC micropayments on Base mainnet and Solana mainnet. $0.001 USDC per call.
- [PortsideLabs KoinChappie](https://portsidelabs-x402-koinchappie-536698811508.us-west1.run.app) - Crypto signals API with x402 pay-per-request. Returns bull and bear signals for the top 10 cryptocurrencies by market cap across 8 timeframes (1m–1D) using SMA(14). Single-coin lookup supports any CryptoCompare symbol. USDC micropayments on Base mainnet and Solana mainnet. $0.001 USDC per call.
- [CYBERA Compliance API](https://compliance-api-ruddy.vercel.app) - Crypto compliance suite for AI agents. VASP address identification (20,468 addresses, 29 chains), risk scoring (0-100 with signal detection), and sanctions/mixer screening (single + batch). Three endpoints at $0.01 USDC per call on Base. [Source](https://github.com/tedddb-ai/compliance-api) | [llms.txt](https://compliance-api-ruddy.vercel.app/llms.txt)
- [RugGuard](https://rugguard.redfleet.fr) - Pre-trade rug-check API for AI agents. 14 deterministic heuristics on Base + 5 on Solana SPL: owner renounced, LP locked, honeypot signatures (buy/sell sim + tax), top10 concentration, mint authority, bytecode similarity to known rugs (MinHash on 4-byte shingles), deployer rug history, hidden owner, source verified, etc. Returns weighted risk score 0–100, verdict, structured red flags, and `rug_probability_30d`. Dual-mode v1/v2 x402 wire format. $0.01 quick scan, $0.05 deep scan with per-heuristic audit trail, $0.005 explain. ([OpenAPI](https://rugguard.redfleet.fr/openapi.json) | [llms.txt](https://rugguard.redfleet.fr/llms.txt) | [x402scan](https://www.x402scan.com/server/88f6ecef-5668-4def-90a3-6984865f0e06))

- [Kerdos Market Intelligence](https://nonvisceral-eloisa-mousily.ngrok-free.dev) - AI market intelligence API for agents and traders. 8 endpoints: live crypto sentiment scoring, BTC/ETH regime direction, Hyperliquid funding rates, gold/oil trading signals, whale alerts, and liquidation cascade risk. $0.01-$0.05 USDC per call on Base.
- [Mercury402](https://mercury402.uk) - Pay-per-call U.S. Treasury and macro data API using x402. Agents access FRED indicators, yield curves, and GDP data with USDC micropayments on Base.
- [Product Reputation API](https://github.com/andichen0420/x402-reputation-api) — AI-powered product reputation intelligence from Reddit, HN & YouTube. Pay $0.03-$0.08 USDC per query for structured scores, dimensional analysis, and competitor comparisons. ([Live](https://x402-reputation-api-production.up.railway.app)) ([x402scan](https://www.x402scan.com/server/8ae848b3-ea71-4b2a-8ea1-fa6bec508ca5))
- [x402engine](https://x402engine.app) - Pay-per-call API gateway with 74 endpoints: 44 LLMs, image/video generation, crypto data, web search, code execution, TTS, travel, and IPFS. Multi-chain: USDC on Base, USDm on MegaETH, USDC on Solana. Discovery: [/.well-known/x402.json](https://x402engine.app/.well-known/x402.json) | [/.well-known/agent.json](https://x402engine.app/.well-known/agent.json). ([GitHub](https://github.com/agentc22/x402-engine)) | ([MCP](https://www.npmjs.com/package/x402engine-mcp))
- [SignalFuse](https://api.signalfuse.co) — Trading intelligence + x402 API gateway. Crypto signals fusing sentiment, macro regime, and market structure ($0.001–$0.050). Gateway proxies: web search via Tavily ($0.012) and Brave ($0.008), code execution via E2B ($0.005). Agents pay USDC on Base per call — no API keys needed. [Landing](https://signalfuse.co) | [Gateway Info](https://api.signalfuse.co/v1/gateway/info)
- [mornin-agentee](https://api.mornin-agentee.cc) — Daily Tokyo morning briefing API generated by an OpenClaw multi-agent system (researcher + coder + main). Top 5 Japanese news with URLs, weather (today/tomorrow), 3 focus proposals, and a one-liner — refreshed daily at 07:30 JST. $0.05 USDC per call on Base mainnet. Cached output (near-zero marginal cost). [llms.txt](https://api.mornin-agentee.cc/llms.txt) | [.well-known/x402.json](https://api.mornin-agentee.cc/.well-known/x402.json) | [Source](https://github.com/Minnanthu/mornin-agentee)
- [cipher-mcp-registry](https://cipher-mcp-registry.vercel.app) - x402-gated search for the Official Model Context Protocol Registry. Returns top 10 servers matching a keyword (name, description, version, repo, remote endpoints). $0.005 USDC/Base per call.
- [cipher-gas-oracle](https://cipher-gas-oracle.vercel.app) - x402-gated multi-chain gas oracle. One call returns live slow/standard/fast gwei for Base, Ethereum, Arbitrum, and Optimism (gasPrice, maxPriorityFee, baseFee, typical transfer cost). $0.005 USDC/Base per call.
- [Rug Scanner](https://rug-scanner-production.up.railway.app) - On-chain token risk analysis API. 7 parallel checks (bytecode, holders, liquidity, deployer, trading, verification, market), deterministic scoring, $0.05 USDC per scan via x402 on Base. ([GitHub](https://github.com/LucianoLupo/rug-scanner))
- [agent-marketplace-proxy](https://agent-marketplace-proxy.vercel.app) - x402-gated Google SERP API. `POST /search` returns top organic results from DataForSEO; agents pay $0.001 USDC per call on Base — no API key, no signup, no credit card. Single-route reference implementation showing how to wrap any commodity REST API with `x402-express` middleware in ~80 lines. ([Source](https://github.com/yayashuxue/agent-marketplace-proxy))
- [TradingAgents x402](https://tradingagents-x402.fly.dev) — Multi-agent LLM ticker consensus. Five specialist analysts (fundamentals / sentiment / news / technical) plus bullish-vs-bearish researcher debate, trader synthesis, risk-management review, and portfolio-manager final decision. Returns structured BUY/HOLD/SELL with confidence and full per-agent reports. Powered by [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) (arXiv:2412.20138). $1.00 USDC per call on Base mainnet. [Source](https://github.com/bshelby88/tradingagents-x402)
- [Sentry Forge x402](https://sentry-forge-x402.fly.dev) — Consumer-debt dispute pack generator. One paid call returns an 8-file pack: collector dispute letter, original-creditor dispute, CFPB complaints (collector + creditor), credit-bureau disputes, court-records search guide, action checklist, and evidence inventory. Validated against real FDCPA/FCRA cases. $0.50 USDC per call on Base mainnet. [Source](https://github.com/bshelby88/sentry-forge-x402)
- [Royal Ruby x402](https://royal-ruby-x402.fly.dev) — US consumer-rights law citation lookup (FCRA, FDCPA, TILA, state UDAP statutes, debt-collection rules, credit-reporting timelines). Information-only, no legal advice. Useful for paralegals, journalists, dispute-letter drafting bots, and consumer-rights AI agents. $0.05 USDC per call on Base mainnet. [Source](https://github.com/bshelby88/royal-ruby-x402)
- [Vault Pro x402](https://vault-pro-x402.fly.dev) — Obsidian project/agent scaffolder. Returns a complete markdown document (frontmatter + Goal + Success criteria + Decomposition table + Hermes coordination notes) fitted to the Vault Pro template structure. Two routes: scaffold-project and scaffold-agent. Useful for AI orchestrators that need to register a new specialized agent. $0.05 USDC per call on Base mainnet. [Source](https://github.com/bshelby88/vault-pro-x402)
- [Nano Banana x402](https://nanobanana-x402.fly.dev) — Paid Gemini image generation. Wraps `gemini-3.1-flash-image-preview` with x402 micropayments. Generate from prompt OR edit an existing image. Returns base64 PNG. Supports 10 aspect ratios. $0.02 USDC per call on Base mainnet. [Source](https://github.com/bshelby88/nanobanana-x402)
- [Power Pack x402](https://power-pack-x402.fly.dev) — Outreach email scorer. Scores subject quality, body quality, predicted open rate, spam risk, tone, length, personalization, and CTA clarity. Returns top 3 specific improvement suggestions and a stronger rewritten subject. Useful for sales/marketing/recruiting AI agents that need QA before sending. Powered by Claude Haiku 4.5. $0.01 USDC per call on Base mainnet. [Source](https://github.com/bshelby88/power-pack-x402)
- [SupraPack x402](https://suprapack-x402.fly.dev) — Skill discovery over a 531-skill curated bundle. Returns top matching skills with full markdown content, quality score, categories, and source repo. Optional filters: `min_quality`, `categories`, `limit`. Useful for AI agents that need to discover and load specialized skills on-demand without bundling the full 15 MB skill library. $0.01 USDC per call on Base mainnet. [Source](https://github.com/bshelby88/suprapack-x402)
- [TradeRoute](https://traderoute-psi.vercel.app) - Crypto-trading data router for AI agents: 55 paid endpoints across signals, market data, DEX routing, whale alerts, portfolio, news, identity, Solana routing, bridges, and onchain primitives. ~40 endpoints return live keyless data (CoinGecko, DefiLlama, DexScreener, Jupiter, Across, Warpcast, Web3.bio, ScamSniffer, Base/Solana RPCs). Trust-band routing across 60+ upstream services with cross-agent cache. $0.001–$0.05 USDC per call on Base mainnet via Coinbase CDP facilitator. ([GitHub](https://github.com/SMXFREEZE/traderoute)) | ([MCP](https://github.com/SMXFREEZE/traderoute/tree/main/mcp)) | ([Health](https://traderoute-psi.vercel.app/api/health))
- [unlock-api](https://unlock-api.lewis-6d8.workers.dev) - Pay-per-unlock website fetcher. `POST /unlock` returns the rendered body, screenshot, or full XHR capture through a stealth browser + residential proxy. Worker only settles payment when the page passes the caller's `expect_status` / `expect_contains` check; failed unlocks return 502 and are not charged. $0.02 USDC per call on Base. No API key.
- [pricing-matrix-api](https://pricing-matrix-api.lewis-6d8.workers.dev) - SaaS pricing page extractor. `POST /compare` returns a normalized tier-by-feature matrix as JSON (tier name, monthly, annual, seats, quotas, feature flags). 24h KV cache per URL. $0.10 USDC per call on Base.
- [bill-negotiation-api](https://bill-negotiation-api.lewis-6d8.workers.dev) - Voice-agent that dials ISP / cell / insurance retention lines and negotiates a lower bill. `POST /negotiate` returns the call transcript and the booked saving. Flat $20 USDC per attempt on Base. No subscription.
- [swornly](https://swornly.luci.ws) - Deterministic, signed-receipt tools for AI agents — every answer returns an HMAC-signed, re-verifiable receipt (a chat tool narrates a result; swornly signs it). `/dry-run/command` (is a shell/git command destructive + its blast radius, before the agent runs it), `/diff/mcp-schema` (breaking vs non-breaking MCP tools/list changes), `/snapshot/tool-contract` (stable tools/list fingerprint for contract pinning), `/convert` (Markdown→PDF), `/receipts/verify` (free). $0.005–$0.02 USDC per call on Base Sepolia testnet (mainnet pending). [OpenAPI](https://swornly.luci.ws/openapi.json) | [stats](https://swornly.luci.ws/stats)
- [x402stock](https://x402stock.xyz) - Real-time US stock market data for AI agents. 23 pay-per-call endpoints: quotes, snapshots, OHLC aggregates, company fundamentals, dividends, splits, corporate events, market news, top gainers/losers, whole-market grouped daily, and technical indicators (SMA/EMA/RSI/MACD). $0.01–$0.03 USDC per call on Base via x402 — no API keys, no accounts. [OpenAPI](https://x402stock.xyz/openapi.json) | [llms.txt](https://x402stock.xyz/llms.txt)
- [Fast PDF Parser](https://x402-parser-edge-mainnet.epicblubber.workers.dev) - Pay-per-parse PDF text extraction for AI agents, served from Cloudflare Workers edge (LiteParse WASM). POST raw PDF bytes, get structured JSON text back — born-digital PDFs, no OCR, 10MB cap, sub-100ms parse. SHA-256-bound payment proofs with replay protection, x402 Bazaar discovery metadata, settlement via Coinbase CDP facilitator. $0.002 USDC per document on Base. No API keys, no signup. [Source](https://github.com/epicblubber1-alt/x402-parser) | [Docs](https://x402-parser-edge-mainnet.epicblubber.workers.dev/)
- [Agent Cafe](https://402.coffee) - Test and certify your x402 agent - a live mainnet endpoint that grades the *client*, not the seller: point your paying agent at it, it pays real USDC on Base, and you get back a public certificate plus a README badge of exactly what it did. Includes a scam-resistance test (does your agent refuse a deliberately over-priced order?). Free machine-readable menu at [/inspect](https://api.402.coffee/inspect). [Docs](https://api.402.coffee/docs) | [Examples](https://github.com/englishdoggy/agentcafe-examples)

### Client Examples
- [CentRake](https://centrake.biz) — AI-powered universal calculator with 3-layer self-correcting verification engine. 5-tier dynamic pricing: $0.01 basic solve, $0.05 verified solve (calculus/finance), $0.10 research solve (proofs/theorems), $0.15 AI action plans, $0.02 AI search. 438+ problem categories across math, finance, science, statistics, health, and everyday domains. Free for humans, paid for AI agents. USDC on Base. [Discovery](https://centrake.biz/api/.well-known/x402) | [Pricing](https://centrake.biz/api/x402/tiers) | [Info](https://centrake.biz/api/x402/info)
- [Axios Client](https://github.com/coinbase/x402/tree/main/examples/typescript/clients/axios) - Automatic payment handling.
- [Fetch Client](https://github.com/coinbase/x402/tree/main/examples/typescript/clients/fetch) - Fetch API wrapper demo.
- Python Requests - Python client example.
- [agent-starter-x402](https://github.com/Nikoble1926/agent-starter-x402) — minimal starter: build an x402-paying crypto-monitoring agent in ~10 min (free preview → pay-per-call on Base).

## 🎨 Use Cases & Patterns

Real-world use cases and implementation patterns. The x402 protocol has seen **10,000%+ transaction growth**, evolving from a developer curiosity to a full-blown market narrative with production deployments across major tech companies including **Coinbase, Cloudflare, Google, and Visa**.

### By Industry

**AI & Autonomous Agents**
- Context purchasing (Anthropic MCP)
- Tool marketplace access
- Real-time data feeds for trading bots
- Compute resource allocation

**Content & Media**
- AI content extraction and analysis ([Content Intelligence API](https://content.hugen.tokyo))
- Per-article paywalls
- Video streaming (pay-per-view)
- Music licensing per play
- Premium podcast episodes

**Data & APIs**
- Weather data services
- Financial market data ([Tick Aggregator API](https://tick.hugen.tokyo) — multi-source FX Best Bid/Ask)
- Geolocation services
- Real-time sports scores

**Infrastructure**
- Cloud storage (pay-per-GB)
- Compute time (pay-per-second)
- CDN bandwidth
- API rate limiting bypass

### By Payment Pattern

**Micropayments (< $0.10):** API calls ($0.001 per request for weather data, geocoding), Content views ($0.01 per article read, $0.05 per premium video), Data queries ($0.001 per database query, $0.005 per market data point), LLM inference ($0.01 per 1K tokens, $0.10 per image generation).

**Production Pricing Examples:** Weather API ($0.001 per API call), Article paywalls ($0.01 - $0.25 per article), Video streaming ($0.50 - $2.00 per video), Market data feeds ($0.005 per real-time quote), AI model inference ($0.01 - $0.50 per request).

**Metered Billing**
- Token-based LLM APIs - Pay per token/request
- Time-based service access - Per second/minute billing
- Usage-based pricing tiers - Volume discounts at scale

**Session-Based**
- Aggregate usage into single payment
- Deferred settlement patterns
- Batch processing

### Production Patterns

- Dynamic Pricing Strategy - SIWE authentication with conditional pricing.

## 🤖 AI Agent Integration
- [σ-gate Coherence Scorer](https://swagletz-sigmagate.hf.space) — x402-payable LLM-output coherence/hallucination score. `GET /check?text=...` → HTTP 402 → pay 0.001 USDC on Solana → re-call with `&tx=<sig>`. No account, no KYC. Deterministic, ~85µs.

- [MYA / Monetize Your Agent](https://monetizeyouragent.fun) - AI agent launchpad and discovery hub connected to Pyrimid payment rails. Agents and vendors can publish `skill.md` manifests, discover services, and route paid actions through Pyrimid's Base USDC payment router. ([Skill](https://monetizeyouragent.fun/skill.md))
- [Superhighway](https://superhighway.walls.sh) - Live web search API with x402 pay-per-call (search, news, images, scrape, research at $0.001/call on Base). MCP server (`npx -y superhighway-mcp`) lets Claude and other agents discover and call it autonomously — no signup, wallet pays directly.
- [MAXIA](https://maxiaworld.app) - AI-to-AI marketplace implementing x402 V2 micropayments on Solana and Base for autonomous agent service payments.
- [WorkProtocol](https://workprotocol.ai) - Open job marketplace where AI agents find structured work, deliver artifacts, and get paid in USDC on Base. Escrow-backed with automated verification (CI-based for code jobs), portable on-chain reputation, and A2A + MCP discovery. Framework-agnostic — agents from LangChain, CrewAI, OpenClaw, or custom stacks can register and earn. ([GitHub](https://github.com/Atlaskos/workprotocol)) | ([Docs](https://workprotocol.ai/docs/quickstart))
- [CYBERDYNE](https://cyberdyne-os.xyz) - Agent-native marketplace where AI agents post real-world tasks they cannot do alone and pay verified humans in USDC on Base. Non-custodial x402 auth-capture escrow (budget frozen at deploy, released first-come-first-served), a verified-X human-identity step to prevent impersonation, and an open-source MCP gateway. ([npm](https://www.npmjs.com/package/cyberdyne-mcp)) ([GitHub](https://github.com/Cyberdyne-OS/cyberdyne-mcp)) ([MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=cyberdyne)) ([App](https://app.cyberdyne-os.xyz))
- [Clearance Agent Income](https://clearance.nauti-labs.com/agent-income/agents) - Paid readiness service for agents, APIs, and MCP servers. x402-gated Base USDC endpoints provide `audit` ($49), `review` ($199), and `blueprint` ($499) reports; `custom-quote` handles implementation scope separately and requires Clearance approval before spend or delivery. ([Manifest](https://clearance.nauti-labs.com/agent-income/.well-known/agent.json))

Enable AI agents to make autonomous payments.
- [agentsvc.io MCP Server](https://agentsvc.io/mcp-server.mjs) - 20 pay-per-call utility tools via MCP + x402: screenshots (Playwright), OCR (Tesseract), PDF generation, webpage reader, web/news search, weather, forex/crypto/stock prices, DNS, IP geolocation, geocoding, translation, QR codes, email/phone/SSL validation, WHOIS. $0.001–$0.008 USDC per call on Base. Download: `curl -O https://agentsvc.io/mcp-server.mjs && npm install viem x402`. ([GitHub](https://github.com/jakobautomation/agentsvc-mcp)) ([Catalog](https://agentsvc.io/api/v1/services))
- [AgentMesh](http://81.70.209.246:3000/agentmesh/catalog) — Crypto data API with 3-tier referral commissions for AI agents. 5 endpoints (token-price, dex-price, klines, wallet-score, gas-estimate) at $0.01/call via x402. MCP server enabled. Agents earn 10-20% commission when their referrals use the API.
- [SelfHeal](https://selfheal.dev) - Self-healing API proxy for AI agents with x402 outcome-based pricing. Agents route HTTP calls through the proxy — successes pass through free, failures trigger x402 payment for LLM-powered error diagnosis + response normalization. $0.001-$0.005 USDC on Base, charged only on successful heal. Published SDKs on npm and PyPI with native x402 support. ([GitHub](https://github.com/carsonlabs/graceful-fail)) ([npm](https://www.npmjs.com/package/graceful-fail)) ([PyPI](https://pypi.org/project/graceful-fail/))
- [Strale MCP Server](https://api.strale.io/mcp) - 250+ business data and compliance tools for AI agents via MCP. IBAN validation, VAT format checks, sanctions screening, company lookups, SSL certificate checks, domain reputation, and more. Each capability independently tested with quality scores. x402 USDC micropayments on Base. Also available as REST API.
- [IBANforge](https://ibanforge.com) - Compliance API for AI agents focused on European banking: IBAN validation (mod-97 + BBAN), BIC/SWIFT lookup against 121,197 GLEIF entries with LEI enrichment, **Swiss BC-Nummer / QR-IID lookup** (1,190 SIX BankMaster entries — only API exposing this), EMI / vIBAN / neobank classification, SEPA Instant + VoP (EU 2024/886) reachability, OFAC/EU/UN sanctions + FATF risk scoring. Two transports: stdio via `npx -y ibanforge-mcp` and Streamable HTTP at [api.ibanforge.com/mcp](https://api.ibanforge.com/mcp). $0.003–$0.02 USDC per call on Base. Free tier 200 req/month with API key. ([GitHub](https://github.com/cammac-creator/ibanforge)) ([npm](https://www.npmjs.com/package/ibanforge-mcp)) ([MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=ibanforge)) ([x402 discovery](https://api.ibanforge.com/.well-known/x402))

- [chain-signer](https://github.com/Kevthetech143/chain-signer) - Non-custodial wallet for AI agents: create a burner wallet in one call, then sign locally — including **EIP-712 typed data for x402 payment authorizations** — with no password prompt, no signup, no custody. Pure Python + an MCP server (6 tools: create_wallet, balance, send, swap, etc.). ([PyPI](https://pypi.org/project/chain-signer/)) ([MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=chain-signer))

### Agent Verification & Security

- [AgentGrade](https://agentgrade.com) - Free web-based scanner that validates x402 implementations on any URL (HTTP 402 with quoted price headers, payment-required surface, well-known/x402 discovery, agent-readable pricing) alongside ~70 other agent-readiness checks. Per-check remediation hints linked to a Knowledge Base. Also available as a [CLI](https://github.com/Agentic-Adventures/agentgrade-cli), [MCP server](https://agentgrade.com/mcp), and [GitHub Action](https://github.com/marketplace/actions/agentgrade-scan). Public leaderboard at [agentgrade.com/leaderboard/](https://agentgrade.com/leaderboard/).
- [Achilles EP AgentIAM](https://achillesalpha.onrender.com/quickstart) — 5 AI agent verification endpoints (NoLeak, MemGuard, RiskOracle, SecureExec, FlowCore) on Base Mainnet. $0.01-$0.02 USDC per call via x402.
- [MainStreet](https://avisradar-production.up.railway.app/mainstreet.html) - Reputation oracle for onchain AI agents on Base. `/preflight/{address}` returns BLOCK/CAUTION/PROCEED in <100ms with EIP-712 signatures. Vet any wallet/token before x402 payments. Covers Virtuals agents, Clanker tokens, DEX launches (Aerodrome/UniV3/BaseSwap), DexScreener trending, sniper detection, allowlist + denylist with cluster analysis. Free reads + paywalled premium audits ($0.25-$25 USDC on Base). ERC-8004 registered (agentId 53953). MCP server `@raskhaaa/mainstreet-oracle`. ([GitHub](https://github.com/philpof102-svg/avisradar)) ([Agent Card](https://avisradar-production.up.railway.app/.well-known/agent.json)) ([OpenAPI](https://avisradar-production.up.railway.app/api/agent/openapi.json))
- [Boundary Guard](https://boundary-guard.vercel.app) - Pre-action checkpoint API for agents. Returns `allow`, `retry`, or `block` plus a deterministic receipt before downstream writes, sends, or other actions. Live docs and x402 inventory are published on the public host. ([GitHub](https://github.com/LarryLemonBot/boundary-guard))
- **SafeAgent Execution Guard** — Exactly-once execution guard for AI agents. Prevents duplicate payments, emails, and trades when agents retry. Two-phase PENDING → COMMITTED claim with crash-safe receipts, audit endpoint, and audit trail by agent wallet. Layer 2 in the DashClaw × SafeAgent × Mycelium Trails execution stack. $0.001 USDC per claim on Base. Indexed on Bazaar and agentic.market. ([GitHub](https://github.com/azender1/SafeAgent)) ([Orbis](https://orbisapi.com/proxy/safeagent-execution-guard-bb0b02)) ([OpenAPI](https://safeagent-production.up.railway.app/openapi.json))
- [Agent Passport System (APS)](https://github.com/aeoess/agent-passport-system) - Open-source governance and delegation layer for x402. Provides cryptographic agent identity, scoped delegation with spending caps, rotation-aware DID verification, and signed receipts with per-condition attestation. Apache 2.0.
- [LetAgentPay](https://github.com/letagentpay/letagentpay) - Rail-agnostic spend-control policy layer for AI agents. Same policy engine (daily/weekly/monthly caps, categories, schedule, human-in-the-loop approval) governs x402, Stripe, and prepaid wallets. Non-custodial x402 facilitator-ready with USDC ↔ USD reconciliation, tx-hash dedup, and stablecoin de-peg protection. ([Docs](https://letagentpay.com)) ([PyPI](https://pypi.org/project/letagentpay/)) ([npm](https://www.npmjs.com/package/letagentpay))
- [Vouch](https://vouch.futuronoti.workers.dev) - Counterparty trust/risk scoring for x402 payments; explainable score, risk band, and reasons. $0.001 USDC on Base Sepolia (testnet). ([source](https://github.com/notifuturo/vouch)) ([/.well-known/x402](https://vouch.futuronoti.workers.dev/.well-known/x402))
- [presidio-hardened-x402](https://github.com/presidio-v/presidio-hardened-x402) - Pre-signing hardening middleware for agent x402 payments: PII detection and redaction over payment metadata, spending-policy limits, and replay detection — all run before the payment is signed, fail-closed. Backed by a labelled corpus and a published study. `pip install presidio-hardened-x402`. ([PyPI](https://pypi.org/project/presidio-hardened-x402/)) ([arXiv](https://arxiv.org/abs/2604.11430))
- [AgentRadar x402-trust](https://www.npmjs.com/package/@agentradar/x402-trust) - Pre-pay trust gate for x402 payments. Before settling a `402`, score the payee with AgentRadar and block/warn on scam or low-trust wallets — the "Stripe Radar" for agent payments. Library-agnostic `fetch` wrapper, zero runtime deps, powered by an on-chain trust oracle (ERC-8004 reputation + static analysis + scam DB). ([npm](https://www.npmjs.com/package/@agentradar/x402-trust)) | ([GitHub](https://github.com/Bichev/agentradar-integrations)) | ([API](https://api.vvpro.ai))
- [Frisk](https://github.com/Jiangw2718i/frisk) - Pre-transaction screening for agent payments. The `frisk-screen` SDK (TypeScript + Python, MIT, no runtime deps) returns an `allow`/`review`/`block` verdict before an agent pays an x402 seller, checking for the V2 `payTo` swap, spending-policy violations, plaintext-HTTP quotes, and malformed or blocklisted counterparties. Lite mode runs offline with no API key; a hosted reputation tier is in early access. ([npm](https://www.npmjs.com/package/frisk-screen)) ([PyPI](https://pypi.org/project/frisk-screen/))

### GPU Inference APIs

x402-native GPU inference APIs that let agents pay autonomously for compute.

- [GPU-Bridge](https://gpubridge.xyz) - 30-service GPU inference API with native x402 payments (USDC on Base L2). LLM, image generation, embeddings, STT, TTS, PDF processing — all in one API. Agents pay per call with no human intervention. /usr/bin/bash.00002/embedding, /usr/bin/bash.001/LLM call. ([Docs](https://docs.gpubridge.xyz)) ([GitHub](https://github.com/fjnunezp75/gpu-bridge))
- [Spraay Compute & Futures](https://github.com/plagtech/spraay-compute) - GPU compute and AI model inference (LLM, image, video, speech-to-text, text-to-speech, embeddings) over x402, plus prepaid compute-futures credits with tier discounts up to 15% — deposit USDC once and draw down per job. USDC on Base + Solana, no API keys. Installable as an OpenClaw/Claude Code skill via npx clawhub install spraay-compute. Part of the Spraay x402 gateway.

- [GEDX402](https://gedx402.com) - Cloudflare Workers AI hub with x402 v2 USDC (Base, Polygon, Arbitrum, World, Solana). Eight modality shards. [Hub](https://gedx402.com) | [agents.json](https://gedx402.com/.well-known/agents.json) | [OpenAPI](https://gedx402.com/openapi.json) | [x402](https://gedx402.com/.well-known/x402) | [MCP](https://github.com/scrolls-cf/ged-x402)
- [Verified Burst](https://burst.solcleus.com) - Pay-per-correct-answer inference for agents: escalate to fast silicon (Cerebras), sample best-of-N, run a verifier, and settle over x402 — charged only if the answer passes. No API key to start (first 3 bursts run on the host key, just a funded Base wallet), then BYOK (your tokens, your rate limit). Self-hosted facilitator, USDC on Base mainnet. MCP one-liner: `pip install verified-burst`. ([x402scan](https://www.x402scan.com/server/d09b513d-cefa-46de-a1c8-34189026c408)) ([PyPI](https://pypi.org/project/verified-burst/))
- [Clawy AI Gateway](https://clawy.uk) - Pay-per-call LLM inference with native x402 v2 payments (USDC on Base mainnet, Solana opt-in). OpenAI-compatible endpoints for GPT-5.5 ($0.10), Claude Opus 4.8 ($0.15), and a cost-optimized auto tier ($0.04). No API keys, no signup. Coinbase Bazaar-discoverable, listed on x402scan. ([llms.txt](https://clawy.uk/llms.txt)) ([Manifest](https://clawy.uk/.well-known/x402.json))

### Model Context Protocol (MCP)

- [@tensorfeed/x402-base-mcp](https://www.npmjs.com/package/@tensorfeed/x402-base-mcp) - Read-only Base mainnet chain reader purpose-built for x402 payment verification. 11 tools: verify on-chain that a USDC settlement matches a claimed x402 receipt (recipient + amount), parse publisher `/.well-known/x402` manifests, list recent USDC payments to an address, check AFTA federation status, plus generic Base reads. No private keys, no signing, no broadcasts (verification only). Published with cryptographic provenance via GitHub Actions OIDC. `npx -y @tensorfeed/x402-base-mcp`. ([GitHub](https://github.com/RipperMercs/tensorfeed-x402-base-mcp)) ([MCP registry](https://registry.modelcontextprotocol.io/v0/servers/ai.tensorfeed/x402-base-mcp))
- **[Vongstaad MCP](https://github.com/VGSTAAD/vongstaad-mcp)** - Quant signal infrastructure. Discovery: vongstaad.com/.well-known/x402.json


- Anthropic MCP Integration - Official Claude integration.
- x402 MCP Server - Claude Desktop ready server.
- [MCP Server Setup Guide](https://docs.cdp.coinbase.com/x402/mcp-server) - Complete installation instructions.
- Embedded Wallet MCP - Electron-based wallet for MCP.
- [ALTER MCP](https://mcp.truealter.com/api/v1/mcp) - Identity infrastructure MCP for the AI economy. Agents query verified human identity via a 33-trait psychometric engine: belonging probability, trait alignment, and Ed25519-signed identity vectors. Identity Income earned via x402 USDC — tiered per-query pricing L0 (free) → L5 ($0.50), identity holders earn 75% per verified query. 24 free tools, 40 invokable at launch; 100 free queries/bot. SDK: `@truealter/sdk`. ([Docs](https://truealter.com)) ([SDK](https://github.com/true-alter/alter-identity))
- [AgentStatus](https://github.com/EvanRMora/agentstatus) - Heartbeat and cron monitoring API for AI agents with x402 micropayments, MCP tools, and multi-channel alerts. USDC on Base. ([Docs](https://agentstatus.ai))
- [ALTER MCP](https://mcp.truealter.com/api/v1/mcp) - Identity infrastructure MCP for the AI economy. Agents query verified human identity via a 33-trait psychometric engine: belonging probability, trait alignment, and Ed25519-signed identity vectors. Identity Income earned via x402 USDC — agents pay $0.01/query, identity holders earn per verified query. 16 tools free (10 req/min). SDK: `@truealter/sdk`. ([Docs](https://truealter.com)) ([SDK](https://github.com/true-alter/alter-identity))
- [MaximumSats MCP](https://github.com/joelklabo/maximumsats-mcp) - Lightning-native MCP tools with L402 micropayments and Nostr Web-of-Trust scoring APIs.
- [Apollo Intelligence MCP Server](https://www.npmjs.com/package/@apollo_ai/mcp-proxy) - 26-tool MCP server covering intelligence feeds, crypto, OSINT, DeFi, proxy, and search. `npx @apollo_ai/mcp-proxy`. ([GitHub](https://github.com/bnmbnmai/mcp-proxy))
- [Pylon MCP Server](https://www.npmjs.com/package/@pylonapi/mcp) - 20-tool MCP server for utility APIs: web extraction, search, translation, code execution, image generation, email, and more. `npx @pylonapi/mcp`. ([GitHub](https://github.com/pylon-apis/pylon-mcp))
- [IteraTools MCP](https://api.iteratools.com) - 80+ tool MCP server with x402 micropayments: image generation (Flux), web scraping, TTS, OCR, QR codes, browser automation, sandboxed code execution, DNS, WHOIS, weather, crypto, charts, email validation, URL shortening, and more. $0.001–$0.01 USDC per call on Base. ([GitHub](https://github.com/fredpsantos33/mcp-iteratools)) | ([Docs](https://iteratools.com))
- [Scout MCP](https://scout.hugen.tokyo) - MCP stdio server for multi-source search across code, academic, social, and community platforms. Individual source search and aggregated reports. From $0.01 USDC on Base. ([Source](https://github.com/bartonguestier1725-collab/scout-mcp))
- [Intelligence Aeternum](https://github.com/codex-curator/intelligence-aeternum-mcp) - First monetized MCP server marketplace. 2M+ museum artworks with x402 USDC micropayments on Base L2. 16 MCP tools for search, enrichment, and delivery. [Live](https://data-portal-172867820131.us-west1.run.app/mcp)
- [PYTHIA Oracle](https://github.com/eyloni/pythia-oracle) - Oracle MCP server for AI agents. One tool (`consult_oracle`), one reading. 3 free per agent, then $0.025 USDC on Base via x402. [Smithery](https://smithery.ai/servers/dexigo/pythia) | [Glama](https://glama.ai/mcp/servers/eyloni/pythia-the-oracle)
- [x402 Service Discovery MCP](https://github.com/rplryan/x402-discovery-mcp) - MCP server for discovering 251+ x402-payable services at runtime with quality signals (uptime, latency, trust scores). 6 tools: x402_discover, x402_health_check, x402_trust, x402_register, x402_facilitator_check, x402_route. Smithery 100/100. Docker: `ghcr.io/rplryan/x402-discovery-mcp:latest`
- [EntRoute MCP](https://www.npmjs.com/package/@entroute/mcp-server) - Discover and call 350+ verified x402 API endpoints across 110+ capabilities. Natural language intent discovery, quality ranking (success rate, latency, price), and automatic x402 payments. `npx @entroute/mcp-server`. ([GitHub](https://github.com/entroute/mcp-server)) | ([Website](https://entroute.com))
- [Gatefare MCP](https://github.com/gatefareio/mcp-server) - Marketplace MCP for paid HTTP APIs. 13 tools across discovery (search/get/list/suggest), buyer (call_api auto-handles 402 → sign → retry), and publisher (register/distribute) domains. Non-custodial USDC on Base. `npx -y @gatefare/mcp`. ([npm](https://www.npmjs.com/package/@gatefare/mcp)) | ([Marketplace](https://gatefare.io)) | ([MCP Registry](https://registry.modelcontextprotocol.io/v0.1/servers?search=gatefareio))
- [Gapup MCP](https://github.com/getgapup/gapup-mcp-public) - 183-tool MCP server (100+ board-ready C-suite expertises) — competitive intel (EDGAR + Yahoo + Wayback), SEC filing decoder, 8-list sanctions screener (OFAC + EU + UK + UN + SECO + SEMA + DFAT), KYC, pentest scope, clinical evidence GRADE-graded (PubMed + ClinicalTrials.gov + OpenFDA), EU-first real estate (DVF Cerema + Géorisques), NAICS classifier, sentiment news (GDELT), research paper Q&A (OpenAlex 45M). Pay-per-call x402 USDC/EURC on Base + Optimism. Free tier 100 calls/mo, no credit card. Dual-audience format (human/agent — Cerebras-backed). ([Smithery](https://smithery.ai/servers/gapup-team/gapup-mcp)) ([Live](https://mcp.gapup.io/mcp)) ([Onboard](https://hub.gapup.io/agents-api/onboard)) ([Storefront](https://tryponcho.com/m/mcp.gapup.io))
- [x402search MCP](https://github.com/x402-index/x402search-mcp) - Search 14,000+ x402-enabled HTTP APIs by keyword. The largest x402 API index available. Agents pay $0.01 USDC per search on Base mainnet — no API keys required. Available on npm and PyPI. Also live as ACP agent on Virtuals Protocol (ID 22531). ([npm](https://www.npmjs.com/package/x402search-mcp)) ([PyPI](https://pypi.org/project/x402search-mcp))
- [agent-tools-mcp](https://github.com/AgentTools-Cloud/AgentToolsCollection) - Discover and call x402 paid services — search by intent, filter by price/chain. Indexes 2,300+ services with quality signals (confidence + 30-day tx volume). Free streamable-http MCP at https://agent-tools.cloud/mcp-discovery/. ([PyPI](https://pypi.org/project/agent-tools-mcp/)) | ([MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=agent-tools-mcp))
- [AetherCore-Dev/token-rugcheck](https://github.com/AetherCore-Dev/token-rugcheck) - Solana token safety audit for AI agents. Three-layer risk analysis (machine verdict + LLM analysis + raw on-chain evidence) from RugCheck.xyz, DexScreener, and GoPlus Security. Live on mainnet with USDC micropayments ($0.02/audit) via x402 protocol. [Glama](https://glama.ai/mcp/servers/AetherCore-Dev/token-rugcheck)
- [Harvey Intel](https://agents.rugslayer.com) - x402-paid MCP server for Solana token rug pull detection (DrainBrain ML ensemble), trading signals, and social intelligence. 8 tools, $0.005–0.05 USDC on Solana. ([GitHub](https://github.com/meltingpixelsai/harvey-intel)) | ([npm](https://www.npmjs.com/package/@meltingpixels/harvey-intel))
- [Harvey Tools](https://tools.rugslayer.com) - x402-paid MCP server for web scraping, screenshots, structured data extraction, code review, content generation, and sentiment analysis. 8 tools, $0.005–0.05 USDC on Solana. ([GitHub](https://github.com/meltingpixelsai/harvey-tools)) | ([npm](https://www.npmjs.com/package/@meltingpixels/harvey-tools))
- [DPX Settlement Protocol](https://mcp.untitledfinancial.com) - 23-tool MCP server for institutional cross-border settlement on Base mainnet. 9-layer Stability Oracle (climate, macro, FX, ESG, supply chain, earth systems), 23 x402 intelligence endpoints ($0.15–$0.75 USDC), ESG scoring, compliance screening, and USDC settlement. MiCA-aligned, GENIUS Act compatible. `npx @untitledfinancial/dpx-mcp`. ([npm](https://www.npmjs.com/package/@untitledfinancial/dpx-mcp)) ([Docs](https://docs.untitledfinancial.com)) ([x402 discovery](https://intelligence.untitledfinancial.com/.well-known/x402.json))
- [Harvey Verify](https://verify.rugslayer.com) - x402-paid MCP server for post-transaction outcome verification using LLM-as-judge. Tracks aggregated service quality scores. 5 tools, $0.002–0.01 USDC on Solana. ([GitHub](https://github.com/meltingpixelsai/harvey-verify)) | ([npm](https://www.npmjs.com/package/@meltingpixels/harvey-verify))
- [Harvey Budget](https://budget.rugslayer.com) - x402-paid MCP server for agent spending management with budget tracking, ROI analysis, and spend approval. 6 tools, $0.001–0.005 USDC on Solana. ([GitHub](https://github.com/meltingpixelsai/harvey-budget)) | ([npm](https://www.npmjs.com/package/@meltingpixels/harvey-budget))
- [TWZRD Agent Intel](https://intel.twzrd.xyz) - Solana-native agent trust scoring over x402. Free preflight scores any seller wallet (wash-trade + sybil flags from x402 settlement history); paid calls ($0.05 USDC, gas-less co-sign) return signed `twzrd.receipt.v5` trust receipts verifiable offline. MCP server, 17 tools (registry `xyz.twzrd.intel/twzrd-agent-intel`). ([MCP](https://intel.twzrd.xyz/mcp)) ([OpenAPI](https://intel.twzrd.xyz/openapi.json)) ([llms.txt](https://intel.twzrd.xyz/llms.txt))
- [@voidly/pay-mcp](https://www.npmjs.com/package/@voidly/pay-mcp) - 28-tool MCP server for the Voidly Pay rail. Transfer credits, hire-and-release escrow, x402 paywall facilitator, hash-chained streams, subscriptions, on-chain deposits to Base mainnet vault. Live, source-verified vault, public proof of reserves at /v1/pay/proof. `npx @voidly/pay-mcp`. ([Manifest](https://api.voidly.ai/v1/pay/manifest.json)) ([Source](https://github.com/voidly-ai/voidly-pay))
- [PayBot MCP](https://github.com/RBKunnela/paybot-mcp) - MCP server enabling Claude and AI agents to make autonomous x402 payments. Supports wallet management, transaction history, and configurable spending limits. ([npm](https://www.npmjs.com/package/paybot-mcp))
- [AskClaude MCP](https://www.npmjs.com/package/askclaude-mcp) - MCP server for pay-per-query Claude AI. 9 x402 endpoints: Haiku/Sonnet/Opus chat, streaming, summarization, code review, translation, sentiment, and crypto analysis. $0.01–$0.10 USDC on Base. `npx askclaude-mcp`. ([GitHub](https://github.com/pvega23/askclaude-mcp) | [Live](https://askclaude.shop))
- [Cerebrus Pulse MCP](https://github.com/0xsl1m/cerebrus-pulse-mcp) - Real-time crypto intelligence MCP server with technical analysis (RSI, EMAs, Bollinger Bands), sentiment, and funding rates for 30+ Hyperliquid perpetuals. x402 USDC micropayments on Base.
- [APIMesh MCP Server](https://www.npmjs.com/package/@mbeato/apimesh-mcp-server) — 16-tool MCP server for web analysis: SEO, security headers, Core Web Vitals, domain availability, email security, email verify, tech stack detection, wallet spend tracking, and more. x402 micropayments on Base. `npx @mbeato/apimesh-mcp-server`. ([GitHub](https://github.com/mbeato/conway))
- [BotIndex MCP](https://github.com/Cyberweasel777/botindex-mcp-server) - 17-tool MCP server for signal intelligence: sports odds, crypto correlations, token graduations (Zora/Hyperliquid/Metaplex Genesis), DFS optimization, and arbitrage detection. 50 free requests per wallet, then x402 USDC on Base. `npx botindex-mcp-server`. ([npm](https://npmjs.com/package/botindex-mcp-server)) ([Live API](https://king-backend.fly.dev/api/botindex/v1/))
- [Azeth MCP Server](https://github.com/azeth-protocol/mcp-server) - MCP server with x402 payment tool (`azeth_pay`), ERC-8004 trust registry discovery, on-chain reputation scoring, and payment agreements for recurring x402 billing. USDC on Base. ([npm](https://www.npmjs.com/package/@azeth/mcp-server))
- [PayCrow](https://github.com/michu5696/paycrow) - Escrow protection for autonomous agent payments. Trust scoring from 4 on-chain sources + USDC escrow with dispute resolution on Base. 10 MCP tools including safe_pay (trust-informed smart escrow) and trust_gate (go/no-go decision before payment). ([npm](https://www.npmjs.com/package/paycrow))
- [Arbitova](https://arbitova.com) - Escrow + transparent AI arbitration (N=3 LLM majority vote with tiebreaker) for agent-to-agent payments. Sub-task chained escrow for agent swarms. External arbitration API lets any escrow system use Arbitova as their dispute resolver. 0.5% success fee, 2% dispute only. 8 MCP tools. ([npm SDK](https://www.npmjs.com/package/@arbitova/sdk)) | ([MCP](https://www.npmjs.com/package/@arbitova/mcp-server)) | ([x402 example](https://github.com/jiayuanliang0716-max/arbitova-x402-example)) | ([docs](https://arbitova.com/docs))
- [InstaDomain](https://instadomain.fly.dev) - MCP server for domain registration that accepts x402 payments (USDC on Base). AI agents can search, check availability, and buy domains autonomously without human payment intervention. ([GitHub](https://github.com/nach-dakwale/instadomain-mcp))
- [Recall Kitchen](https://recallkitchen.com/docs/#mcp) - MCP server for searching food/product/vehicle recalls. Accepts x402 payments, no account required, $0.025 USDC on Base per request. [Examples](https://github.com/Recall-Kitchen/rk-mcp/tree/master/examples/go)
- [x402 Wallet for Claude Desktop](https://github.com/402md/x402-wallet-for-claude-desktop) - Native Claude Desktop extension (.mcpb one-click install) with USDC wallet on Stellar and Base. Three tools: check_balance, pay, and x402_fetch with automatic 402 payment handling. Configurable budget limits per call and per day.
- [x402engine MCP](https://www.npmjs.com/package/x402engine-mcp) - MCP server exposing 74 pay-per-call API tools: 44 LLMs, image/video generation, crypto data, web search, code execution, TTS, travel, and IPFS. Multi-chain payments via USDC on Base, USDm on MegaETH, USDC on Solana. `npx x402engine-mcp`. ([GitHub](https://github.com/agentc22/x402-engine)) | ([Live](https://x402engine.app))
- [ToolOracle](https://tooloracle.io) — x402 entitlement gateway with 10 intelligence products and 90+ MCP tools: RankOracle (SEO), ShopOracle (e-commerce), MemeOracle (memecoin), SmartMoneyOracle (whale flows), YieldOracle (DeFi), FlightOracle, HotelOracle, NewsOracle, JobOracle, MacroOracle. Unit-based pricing ($0.01/unit, 2–15 units per call). Policy-checked, tier-gated, no account needed. USDC on Base. Wallet: `0x4a4B1F45a00892542ac62562D1F2C62F579E4945`. [Discovery](https://tooloracle.io/x402/)
- [Spraay MCP Server](https://smithery.ai/server/@plagtech/spraay-x402-mcp) - 60+ tool MCP server for multi-chain DeFi payments: batch sends, payroll, token swaps, bridge, escrow, AI inference, and Robot Task Protocol (RTP). 76+ x402 endpoints across 13 chains (Base, Ethereum, Solana, Bitcoin, + 9 more). $0.005-$0.25 USDC. ([GitHub](https://github.com/plagtech)) ([Gateway](https://gateway.spraay.app)) ([Docs](https://docs.spraay.app))
- [PipRail MCP](https://github.com/piprail/piprail/tree/main/mcp) - Hands any MCP client (Claude Desktop, Cursor, Claude Code, Windsurf, VS Code, Cline) a budget-bound wallet to pay x402 URLs autonomously across 28 chains in 10 families. Self-custodial and backendless — your key, your RPC, spend caps enforced before any on-chain send; no facilitator, no custody. Three tools: quote a gated URL, plan it (balance + gas + recipient-readiness preflight), and pay. `npx -y @piprail/mcp`. ([npm](https://www.npmjs.com/package/@piprail/mcp)) | ([Setup](https://piprail.com/mcp))
- [Loadbay](https://loadbay.xyz) - Catalog of 370+ open-source AI-agent harnesses (MCP servers, SDKs, adapters) across 11 domains. Agent-native: connect over MCP to search and list harnesses; authors earn USDC tips via x402 on Base and Solana. ([MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=loadbay))
- [JubJub MCP](https://api.jubjubapp.com/v2/mcp) - 65-tool MCP server for media publishing, cross-platform analytics, and automated on-chain royalty splits. Agents publish content, track performance, and surface claimable USDC balances autonomously. api.jubjubapp.com/v2/mcp
- [Human Pages](https://humanpages.ai) - The open directory AI agents use to hire humans for real-world tasks. Supports x402 pay-per-use for profile views ($0.05) and job offers ($0.25) in USDC on Base. Also available as an [MCP server](https://github.com/human-pages-ai/humanpages) with 31 tools.
- [TweetClaw](https://xquik.com/mcp) - OpenClaw/MCP plugin for Xquik's real-time X (Twitter) data. 7 pay-per-use endpoints via MPP/x402 — tweet lookup, search, user lookup, follower check, article, media download, and trends. ([GitHub](https://github.com/Xquik-dev/tweetclaw)) ([npm](https://www.npmjs.com/package/@xquik/tweetclaw))
- [ZKProofport MCP](https://github.com/zkproofport/proofport-ai) - Zero-knowledge identity proof MCP server. Generates Coinbase KYC, Country, Google OIDC, Workspace, and MS 365 proofs without revealing personal data. AWS Nitro Enclave TEE proving, ERC-8004 registered (token ID 25331). x402 USDC payments on Base. NPM: `@zkproofport-ai/mcp`. Reference application [OpenStoa](https://github.com/zkproofport/openstoa) won 1st place at The Synthesis Hackathon ("Agents That Keep Secrets" track, April 2026).
- [Onyx Actions](https://onyx-actions.onrender.com) - Paid agent tools that unstick agents at signup walls and login flows. Captcha OCR via ddddocr (~30ms, 70-90% accuracy, $0.003 USDC) + SMS OTP delivered via real carrier SIM with demo-mode for testing ($0.05 USDC). MCP-native at `/mcp/`, REST fallback at `/v1/<tool>`, full Bazaar-discoverable manifest at `/.well-known/x402.json`. Base mainnet/sepolia. ([GitHub](https://github.com/dimitrilaouanis-tech/onyx-mcp)) ([Smithery](https://smithery.ai/servers/dimitrilaouanis/onyx-mcp))
- [TensorFeed MCP](https://www.npmjs.com/package/@tensorfeed/mcp-server) - 6 free + 15 paid MCP tools for AI industry intelligence: real-time AI news, service status, model pricing, model routing recommendations, news search, pricing/benchmark/uptime history series, snapshot diff, enriched agents directory, cost projection, forecasting, provider deep-dive, model comparison, and webhook watches with daily/weekly digest tier. $0.02 USDC per credit on Base, volume discounts at $5/$30/$200. x402 V2 discovery at `/.well-known/x402`. Already in the official MCP registry as `ai.tensorfeed/mcp-server` (DNS-verified `tensorfeed.ai`). `npx -y @tensorfeed/mcp-server`. ([GitHub](https://github.com/RipperMercs/tensorfeed/tree/main/mcp-server)) | ([Docs](https://tensorfeed.ai/developers/agent-payments)) | ([Discovery](https://tensorfeed.ai/.well-known/x402))
- [TensorFeed MCP](https://github.com/RipperMercs/tensorfeed/tree/main/mcp-server) - Real-time AI industry intelligence MCP server. 6 free tools (AI news from 15+ sources, service status, model pricing, today summary, agent activity) plus 13 paid premium tools (routing recommendations, news search, history series, cost projection, provider deep-dive, model comparison, agents directory, what's new brief, webhook watches with daily/weekly digest tier). Welcome bonus of 50 free credits on first wallet payment. Pay-per-call in USDC on Base mainnet, no accounts. `npx -y @tensorfeed/mcp-server`. ([npm](https://www.npmjs.com/package/@tensorfeed/mcp-server)) ([Docs](https://tensorfeed.ai/developers/agent-payments))
- [MoltPe MCP Server](https://github.com/umangbuilds/moltpe-agent-payments) - **MoltPe** — AI-native payment infrastructure with 11 MCP tools for autonomous USDC payments. Non-custodial agent wallets with Shamir key splitting, programmable spending policies (daily caps, per-tx caps, allowlists), and tri-rail support: x402 (HTTP-native), MPP (session-based), and fiat. Sub-second settlement on Polygon PoS, Base, and Tempo. Free tier, no credit card. ([Site](https://moltpe.com)) ([Repo](https://github.com/umangbuilds/moltpe-agent-payments))
- [anchor-x402-mcp](https://www.npmjs.com/package/anchor-x402-mcp) - 16-tool MCP server for [anchor-x402](https://anchor-x402.com) on Base + Solana. **9 commodity primitives** (anchor, screen, attest, decode/tx, resolve/name, price/token, decode/calldata, parse/datetime, intel/wallet), **1 async due-diligence investigator** (`/v1/investigate`, $7.77), **1 verifiable signed RNG** (`/v1/roll`), plus **5 universal LLM endpoints** (roast, oracle with on-chain anchored verdict, tldr, aura, grade). Auto-pays from the agent's Base wallet via x402-fetch + viem. No prepay, no API key, no account. Works with Claude Desktop, Claude Code, Codex CLI, ChatGPT Desktop, Cursor, OpenAI Agents SDK, and any MCP-compatible client. `npx -y anchor-x402-mcp`. ([GitHub](https://github.com/hypeprinter007-stack/anchor-x402-mcp))

- [PayPerByte](https://github.com/0rkz/byte-mcp-server) - Per-byte data feeds & oracles for AI agents: pay-per-call in USDC on Base mainnet over x402 (no API key, no token), or subscribe to first-party feeds across markets, weather, threat-intel and legal — plus decision oracles (address-reputation, sanctions screening). 15 MCP tools incl. `byte_buy_data` (one-off via the gateway at https://x402.payperbyte.io/feeds); priced per feed in USDC (flagship $0.05 address-reputation). Every paid response emits an EIP-712 PayloadAttestation; subscribers re-derive keccak256 over received bytes and recover the signer before trusting it — fails closed on tamper. Attestation domain anchored on Arbitrum Sepolia (audit-gated for mainnet). ([npm](https://www.npmjs.com/package/byte-mcp-server)) ([Smithery](https://smithery.ai/servers/byte/byte-library)) ([MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=io.github.0rkz/byte-protocol))

- [The Stall](https://the-stall.intuitek.ai/mcp) — 209-capability MCP server for financial intelligence and data APIs. Capabilities span US/international equities, options chains, DeFi/DEX analytics, crypto markets, macro indicators, earnings, SEC filings, Polymarket prediction markets, and 150+ more — all priced 20–70% below comparable x402 providers, with no API key required. $0.001–$0.020 USDC per call on Base mainnet. ([MCP Registry](https://registry.modelcontextprotocol.io)) ([Glama](https://glama.ai/mcp/servers))

- [FiatDock](https://fiatdock.com) - Non-custodial MCP marketplace for AI agents: discover and pay for MCP services per call in USDC over x402 on Base. 3 tools — search_services, get_service, call_service (call_service auto-handles 402 → sign → retry). Each paid call settles directly buyer-wallet → seller-wallet; the 1% platform fee is an on-chain split (0% for a seller's first 30 days), so FiatDock never holds funds. Sellers list free and keep 99%; Verified sellers pass a KYC + MCP-security scan. Also a non-custodial USDC↔bank on/off-ramp. `npx fiatdock-mcp`. ([MCP](https://fiatdock.com/mcp)) | ([Marketplace](https://fiatdock.com/mcp-marketplace.html)) | ([Source](https://github.com/fiatdock/fiatdock))
- [agent-discovery-mcp](https://github.com/Claynsn/agent-discovery-mcp) - Minimal MCP server (~250 lines TypeScript) for ERC-8004 agent discovery and x402 payment. Three tools: `find_agents_by_skill` (via 8004scan public API), `get_agent_card`, and `call_agent_with_payment` using Coinbase's official `x402-fetch`. Direct EOA signing — no smart account, no bundler, no relay. Works with Claude Code, OpenClaw, Cursor, and any MCP-compatible client. USDC on Base/Ethereum + testnets, MIT.
- [Seneschal MCP](https://mcp.seneschal.space) - x402-paid MCP server for **Monero & Zcash view-key payment webhooks**: register an address + a read-only view key and get an HMAC-signed webhook the instant a payment lands (no node to run; a view key cannot spend). Also serves XMR/ZEC chain facts, Ethereum block-builder market share, and DeFi-liquidation telemetry. Pay-per-call in USDC on Base, free read tier, no API key. In the official MCP registry as `io.github.Rotwang9000/seneschal-data`. ([GitHub](https://github.com/Rotwang9000/seneschal-data-api)) | ([Discovery](https://api.seneschal.space/.well-known/x402))
- [Base Intel Search](https://www.npmjs.com/package/base-intel-search-mcp) - Web search MCP tool for AI agents: ranked, de-duplicated results + top news, with recency/site/count filters. Auto-pays the upstream `/search` API per query (~$0.015 USDC on Base via x402) from the agent's own wallet — no API key. `npx -y base-intel-search-mcp`. ([GitHub](https://github.com/jakemaxsigal-creator/base-intel-search-mcp)) ([Live](https://base-intel-api.jakemaxsigal.workers.dev/search))
- [presidio-hardened-x402-mcp](https://github.com/presidio-v/presidio-hardened-x402-mcp) - Pre-signing safety tools for agent x402 payments: `screen_payment_metadata` (Presidio PII detection and redaction), `check_payment_policy` (spending limits), and `check_payment_replay`. On PyPI and the canonical MCP Registry. `pip install presidio-hardened-x402-mcp`. ([PyPI](https://pypi.org/project/presidio-hardened-x402-mcp/))
- [Agent402 MCP](https://agent402.tools/mcp) - Hosted MCP connector for the Agent402 server (~1,100 deterministic web tools). Four meta-tools — `search_tools`, `find_tool`, `call_tool`, `about_agent402` — let an agent discover and invoke the full catalog without bloating its tool list. Dual-rail payment: free via proof-of-work for pure-CPU tools, paid via x402 USDC on Base/Polygon/Arbitrum for the rest. No LLM in the serving path. Categories: browser, search, PDF/image/OCR/audio, geo, live data (FX, weather, USGS, gov-data), network truth (DNS/TLS/WHOIS), crypto/x402 helpers, ~1,040 pure-CPU utilities. Self-hostable; also distributed as the [`agent402-mcp`](https://www.npmjs.com/package/agent402-mcp) stdio package and registered with the official MCP Registry as `io.github.MikeyPetrillo/agent402`. ([GitHub](https://github.com/MikeyPetrillo/Agent402)) ([OpenAPI](https://agent402.tools/openapi.json)) ([Discovery](https://agent402.tools/.well-known/x402))
- [Zero](https://zero.xyz) - MCP connector (mcp.zero.xyz) that lets an AI discover and pay for thousands of external tools, APIs and services at runtime via x402/MPP: find a capability, inspect it, call it, and pay per use - no API keys, no signup. Free to use ($5 of credit to start; paid calls are usually pennies). Also ships a CLI and a Claude Code plugin. ([MCP](https://mcp.zero.xyz)) ([CLI](https://www.npmjs.com/package/@zeroxyz/cli))

### Agent Frameworks

- [ATXP](https://github.com/atxp-dev/atxp) - Agent identity and funding platform. One command — `npx atxp agent register` — gives an agent a USDC wallet on Base, an `@atxp.email` inbox, a phone number, and 100+ paid tools (web search, image/video generation, LLM gateway). x402-compatible; agents can pay x402 endpoints directly from their ATXP balance. $5 free credit, no KYC. ([Docs](https://docs.atxp.ai))
- [NEAR AI](https://near.ai) - Cross-chain agent settlements.
- [Phidata Agents](https://github.com/phidatahq/phidata) - Multi-modal agents with x402.
- [Vault-0](https://github.com/0-Vault/Vault-0) - Encrypted secret vault, agent monitor, and x402 wallet for OpenClaw. Handles 402 detection, EIP-3009 signing, and policy-gated auto-settlement.
- [CardZero](https://cardzero.ai) - Payment wallet for AI agents on Base L2. Each agent gets an ERC-4337 smart contract wallet with owner-controlled spending rules (per-tx limits, daily caps, whitelist, freeze). x402 buyer support via `POST /v1/x402/pay`. [ClawHub](https://clawhub.ai/mrocker/cardzero) | [GitHub](https://github.com/mrocker/CardZero) | [API Docs](https://cardzero.ai/docs/api)
- [Aeon](https://github.com/aaronjmars/aeon) - Autonomous agent framework that runs unattended on GitHub Actions. Skills can hit x402-gated endpoints and settle USDC through the Bankr gateway, letting scheduled agents make paid API calls and on-chain actions with no human in the loop. MIT. ([GitHub](https://github.com/aaronjmars/aeon))

### Asia Intelligence & Bilingual AI

AI-powered research and translation services for the Asian market — no other x402 provider covers Chinese/Japanese bilingual needs.

- [Hermes Asia Intelligence](https://base-worker-01.j23726919.workers.dev/api/asia-intelligence) - Business intelligence for China/Taiwan/Japan: trade policy, market dynamics, regulatory changes. $0.02 USDC/call. 日英双语输出.
- [Hermes Japanese Research](https://base-worker-01.j23726919.workers.dev/api/japanese-research) - Nikkei news, corporate earnings, BOJ policy AI summaries. $0.02 USDC/call.
- [Hermes Bilingual Bridge](https://base-worker-01.j23726919.workers.dev/api/bilingual-bridge) - Chinese/Japanese patent and regulatory document translation + summary extraction. $0.03 USDC/call.


### Agent-to-Agent (A2A)

- [Google A2A x402 Extension](https://github.com/google-agentic-commerce/a2a-x402) - Agent commerce protocol.
  - Python and TypeScript implementations
  - Payment-required, payment-submitted, payment-completed flow
  - Multi-agent payment orchestration
- OpSpawn A2A x402 Gateway - Multi-chain A2A gateway with x402 payments.
  - Google A2A protocol with x402 payment integration
  - Multi-chain support (Base, SKALE, Arbitrum)
- [Revettr](https://revettr.com) - Counterparty risk scoring API for x402 agentic commerce. Scores wallet addresses, domains, IPs, and companies 0-100 for agent-to-agent payment safety.


### Multi-Agent Orchestration

- [SwarmX (swarms-x402)](https://github.com/SolTwizzy/swarms-x402) - Multi-agent AI orchestration platform with native x402 micropayments on Solana. 49 endpoints, 39 MCP tools, dual LLM (Gemini + OpenAI), knowledge/RAG with pgvector. ElizaOS v2 plugin. $0.001–$5/call USDC. ([npm](https://www.npmjs.com/package/swarms-x402)) ([Live](https://swarmx.io))


### Autonomous Agents

- [Anicca](https://anicca-x402.netlify.app) — Autonomous Buddhist AI agent on Base. Self-operating LLM that funds its own compute by selling its own routes via x402. Five priced endpoints: `/qa` ($0.003 Buddhist Q&A), `/research` ($0.05 deep research with citations), `/x-post` ($0.01 tweet draft), `/pdf/:slug` ($5–29 premium PDFs), `/build` ($50–2000 custom autonomous builds). USDC on Base. MIT-licensed, no human in the loop. ([Discovery](https://anicca-x402.netlify.app/.well-known/x402)) | ([GitHub](https://github.com/Daisuke134/anicca-oss)) | ([Autonomy spec](https://github.com/Daisuke134/anicca-oss/blob/main/docs/specs/ANICCA_TRUE_AUTONOMY_SPEC.md))


## 🔨 Tools & Utilities

Development tools and utilities for x402.

### CLI Tools

- [Foundry](https://getfoundry.sh/) - Smart contract development toolkit.
- [x402-proxy](https://github.com/cascade-protocol/x402-proxy) - `curl` for x402 paid APIs. Auto-pays HTTP 402 responses with USDC on Base and Solana, with MCP stdio proxy for AI agents. `npx x402-proxy`. ([npm](https://www.npmjs.com/package/x402-proxy))
- [x402trace](https://github.com/fardinvahdat/x402trace) - Local CLI debugger for x402 on Base. Detects timeout-reconciliation gaps (the [#1062](https://github.com/coinbase/x402/issues/1062) settled-but-server-thinks-not pattern), validates `.well-known/x402` + Bazaar listings (the [#2207](https://github.com/x402-foundation/x402/issues/2207) cluster), diffs facilitators, and explains 402s offline. Read-only, no key handling. Sepolia + Base mainnet. `npx x402trace`. ([npm](https://www.npmjs.com/package/x402trace))

### Monitoring & Analytics

- Dune Analytics - On-chain metrics and visualizations.
- [Sentinel](https://sentinel.valeocash.com) - Enterprise audit & compliance layer for x402 payments. Budget enforcement (per-call, hourly, daily), structured audit trails, real-time dashboard, and public payment explorer. SDK: [`@x402sentinel/x402`](https://npmjs.com/package/@x402sentinel/x402). Built by [Valeo](https://valeocash.com)

- [ScoutScore](https://scoutscore.ai) - Trust scoring infrastructure for x402 services. Monitors 1,700+ services with continuous health checks and fidelity probes using a 4-pillar model (Contract Clarity, Availability, Response Fidelity, Identity & Safety). [API Docs](https://scoutscore.ai/docs) · [npm SDK](https://www.npmjs.com/package/@scoutscore/sdk) · [MCP Server](https://www.npmjs.com/package/@scoutscore/mcp-server)
- [Paybound](https://github.com/pando-b/paybound) - Open-source governance proxy for x402 agent payments. Per-agent budgets, circuit breakers, and SQLite audit trail.
- [Mycelium Trails](https://github.com/giskard09/giskard-stack) — Post-execution accountability receipts for x402 agent payments. Each settled payment generates a signed trail record: payment_hash + action_ref (SHA-256 commitment) + dual-chain anchor (Arbitrum One + Base). Verifiable by anyone. Usable for audits, disputes (Kleros), reputation scoring, and insurance. 21 sats/trail via Lightning. Part of the [Agent Trust Loop](https://github.com/giskard09/rama-core).
- [Agent Forensics](https://www.npmjs.com/package/agent-forensics) - Agent cost observability for Claude Code. Analyzes JSONL session logs to show per-model cost breakdown, cache efficiency, waste patterns (model misallocation, debug loops, sub-agent sprawl), and estimated savings. Free CLI: `npx agent-forensics analyze`. x402 API: $5 basic / $15 full tier on Base. ([Live](https://api.agentsconsultants.com))

- [SwarmX (swarms-x402)](https://github.com/SolTwizzy/swarms-x402) - Multi-agent AI orchestration with x402 micropayments. 49 endpoints, 39 MCP tools, knowledge/RAG. ([npm](https://www.npmjs.com/package/swarms-x402)) ([Live](https://swarmx.io))
- [x402 List](https://x402-list.com) - Agent-first directory of x402 API services with live uptime monitoring and machine-readable discovery for AI agents (JSON API, OpenAPI 3.1, llms.txt). Per-service endpoints, pricing, response time, and uptime charts. ([API](https://x402-list.com/api/v1/services)) ([OpenAPI](https://x402-list.com/api/v1/openapi.json)) ([llms.txt](https://x402-list.com/llms.txt))
- [SmartFlow Mapper API](https://api.smartflowproai.com) - JSON REST API exposing 22,251+ catalogued x402 endpoints with uptime, payment-success, and facilitator metadata. Free tier (100 req/day) + paid bulk export. ([Live stats](https://api.smartflowproai.com/v1/stats))

### Security & Analysis

- [Base Token Safety Scanner](https://base-token-scanner.onrender.com) - Free API that analyzes Base chain ERC-20 tokens for rug pull risks, honeypots, ownership issues, and security flags. Returns risk score with detailed flag breakdown. Built for AI agents and DeFi traders. ([GitHub](https://github.com/0xVarius/base-token-scanner)) ([Guide](https://base-token-scanner.onrender.com/guide))
- [Tate Programs x402 Surface Checks](https://the402.tateprograms.com) - Paid public-surface readiness checks for x402, MPP, Pay.sh, A2A, and agent-skill launches. Four Base mainnet USDC endpoints for x402 launch triage, 402 Index watch, agent-skill trust checks, and A2A payment-surface triage. ([Discovery](https://the402.tateprograms.com/.well-known/x402)) ([Agent Card](https://the402.tateprograms.com/.well-known/agent.json)) ([OpenAPI](https://the402.tateprograms.com/openapi.json)) ([Docs](https://tateprograms.com/x402-surface-check.html))
- [x402-endpoint-validator](https://github.com/smartflowproai-lang/x402-endpoint-validator) - GitHub Action that validates x402 endpoints in CI: 402 challenge shape, EIP-712 typed data, settlement path, well-known schema. Drop-in YAML, MIT licensed. ([Marketplace](https://github.com/marketplace/actions/x402-endpoint-validator))
- [Agent Commerce Desk](https://x402-wallet-readiness-service.vercel.app) - Base wallet readiness, agent-commerce receipt, crypto market snapshot, OHLCV, and GitHub repo intelligence APIs for AI agents. x402 v2 on Base mainnet with native USDC settlement; endpoints range from $0.01-$2.00 per call. ([Discovery](https://x402-wallet-readiness-service.vercel.app/.well-known/x402) | [Agent Card](https://x402-wallet-readiness-service.vercel.app/.well-known/agent-card.json) | [Manifest](https://x402-wallet-readiness-service.vercel.app/manifest))


## 🧪 Testing & Development

Tools and resources for testing x402 implementations

### Testnets

- [Base Sepolia Testnet](https://docs.base.org/docs/network-information) - Primary testnet.
- [Base Sepolia USDC Faucet](https://faucet.circle.com/) - Get test USDC.
- [Base Sepolia Bridge](https://bridge.base.org/) - Bridge test ETH.


## 📚 Tutorials & Learning Resources

Guides and tutorials for learning x402.

### Beginner Tutorials

- Your First x402 API (5 min) - Official quickstart.
- Understanding Payment Flows - Visual explanation.
- Building a Paid Weather API - Step-by-step tutorial.
- Client Setup Guide - Making payments.

### Intermediate Tutorials

- Authentication + Dynamic Pricing - SIWE integration.

### Advanced Tutorials

- Building a Custom Facilitator - Self-host verification.

## 🎥 Videos & Talks

Video content about x402.

### Official Videos

- [Introducing x402 - Coinbase](https://www.youtube.com/watch?v=x402) - Protocol announcement.
- [x402 Deep Dive](https://www.youtube.com/watch?v=x402-deep) - Technical explanation.
- [Building with x402](https://www.youtube.com/watch?v=x402-build) - Developer walkthrough.

### Conference Talks

- a16z State of Crypto 2025 - Future of agent payments.
- [ETHDenver 2025 - x402 Workshop](https://www.youtube.com/watch?v=ethdenver-x402) - Hands-on workshop.
- [DevCon Bangkok - HTTP 402](https://www.youtube.com/watch?v=devcon-402) - Protocol evolution.

### Tutorial Videos

- [Building Your First x402 API](https://www.youtube.com/watch?v=first-x402-api) - 20-minute tutorial.
- [AI Agents with x402](https://www.youtube.com/watch?v=ai-agents-x402) - Agent integration.
- [From Stripe to x402](https://www.youtube.com/watch?v=stripe-to-x402) - Migration guide.

## 📝 Articles & Blog Posts

Written content about x402.

### Official Blog Posts

- [Introducing x402](https://www.coinbase.com/developer-platform/discover/launches/x402) - Coinbase announcement.
- Cloudflare x402 Foundation - Partnership announcement.
- x402 Technical Whitepaper - Complete specification.

### Technical Deep Dives

- How x402 Works - Technical explanation.
- [EIP-3009 Explained](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) - Gasless transfers.

### Use Case Articles

- [The Agentic Economy](https://www.xpay.sh/resources/agentic-economy/intro/) - How autonomous agents are reshaping commerce, and where x402 fits in.
- [Agentic Commerce](https://www.xpay.sh/resources/agentic-commerce/intro/) - Agent-to-agent transactions, payment rails, and the commerce stack.
- [Agentic Economy Timeline](https://www.xpay.sh/resources/agentic-economy-timeline/) - Key milestones from early agent research to production x402 deployments.
- AI Agents Need x402 - Future of autonomous payments.
- [mondello.dev](https://mondello.dev) - Romy Mondello's blog on agent-era patterns: x402 endpoint design, agent-discoverable surfaces (`llms.txt`, OpenAPI 3.1 with `x-x402-payment` extensions, MCP), and consulting funnels for agent-native sites. Posts ship with worked examples — the site itself runs 9 paid x402 endpoints on Base mainnet with a 16-tool MCP server. ([llms.txt](https://mondello.dev/llms.txt) | [OpenAPI](https://mondello.dev/openapi.json) | [MCP](https://mondello.dev/api/mcp))

### Newsletters

- [SmartFlow Weekly Intel](https://smartflowproai.substack.com) - Weekly newsletter on x402 network health, facilitator behavior, and endpoint forensics. Free, archived publicly.

### News Coverage

- [x402 Sees 10,000% Growth](https://finance.yahoo.com/news/coinbase-x402-ai-payments-protocol-130700006.html) - Yahoo Finance.
- Cloudflare Joins x402 - TechCrunch coverage.
- The HTTP 402 Awakens - Ars Technica feature.

## 👥 Community

Connect with the x402 community.

### Official Channels

- [x402 Foundation Discord](https://discord.gg/x402) - Official community server.
- [GitHub Issues](https://github.com/coinbase/x402/issues) - Technical Q&A and bug reports.
- [Twitter @x402org](https://twitter.com/x402org) - Official updates and announcements.

### Developer Communities

- [x402 Builders Telegram](https://t.me/x402builders) - Active developer chat.
- [Reddit r/x402](https://reddit.com/r/x402) - Community forum and discussions.
- [Dev.to #x402](https://dev.to/t/x402) - Tutorials and articles.
- [Farcaster x402 Channel](https://warpcast.com/~/channel/x402) - Decentralized social.

### Events & Meetups

- x402 Hackathons - Upcoming hackathons and prizes.
- [Local Meetups](https://meetup.com/x402) - In-person gatherings.

### Newsletters

- x402 Weekly - Weekly protocol updates.
- [Agent Economy Digest](https://agenteconomy.substack.com) - AI agent payments news.

## 🌟 Ecosystem Projects

- [Fundchain](https://fundchain.ai) - Crypto crowdfunding for AI agents. MCP-native, x402 compatible. AI agents create campaigns and accept ETH/USDC donations autonomously. [MCP Server](https://github.com/fundchainteam/fundchain-mcp) | [MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=fundchain)
  
- [SunfishLoop](https://sunfishloop.com) — Open-source agent-to-agent social network with built-in crypto tipping (ETH, SOL, BTC). Agents discover each other, collaborate, and tip on-chain; over $200 in cross-agent tips settled on mainnet. OpenAPI + Agent Protocol. ([GitHub](https://github.com/sunfishloop/sunfishloop))
- [Orbis API Marketplace](https://orbisapi.com) - x402-native API marketplace with 1,000+ APIs at $0.01/call via USDC on Base. Built for AI agents — weather, financial data, text processing, crypto data. No API keys required.
Projects building with or extending x402.

### Infrastructure

- [Coinbase Developer Platform](https://coinbase.com/cloud) - Hosted facilitator service with enterprise-grade reliability and instant settlement.
- Cloudflare x402 - Edge payment processing.
- [Hive Civilization](https://thehiveryiq.com) — 52-service x402-wired agent fleet on Base mainnet (treasury 0x15184bf50b3d3f52b60434f8942b7d52f2eb436e, USDC EIP-3009 settlement). Free-discovery + paid-call pattern across construction compliance (ICC-ES), seismic data (USGS), housing starts (FRED), agent reputation (HiveTrust), MEV gradient, ZK attestations, and 41 public MCP shims at github.com/srotzin (all v1.0.0). 51 entries on Anthropic MCP Registry. Public MEV leaderboard ([hive-a2amev](https://hive-a2amev.onrender.com/leaderboard)) and verifiable Spectral receipts. ([GitHub](https://github.com/srotzin)) | ([@hivecivilization/x402-helpers](https://github.com/srotzin/x402-helpers))
- [Finance District Prism](https://developers.fd.xyz/prism/concepts/x402) - Payment gateway for agentic commerce with x402 support. SDKs for TypeScript, Python, and Java. Two-layer architecture: Prism (orchestration — API, SDKs, middleware) and Spectrum (on-chain stablecoin settlement across Base, Ethereum, Arbitrum, and BSC). ([Docs](https://developers.fd.xyz))
- [Bermuda](https://www.bermudabay.xyz) - ZK-private HTTP payments for x402. Adds sender privacy via Noir zero-knowledge proofs on Base, so AI agents and API consumers can pay without exposing wallet balances or transaction history. ([GitHub](https://github.com/BermudaBay/sdk))
- [Tessera](https://www.tesseracredit.com) - Credit identity layer for AI agents on Base. Public deterministic Tessera Score (0–100) computed from on-chain activity via a published formula — no ML, no proprietary model, anyone can reproduce. Paid x402 endpoints: `GET /api/x402/score/[address]` ($0.001 USDC) returns score + tier + percentile + credit-line estimate + five-input breakdown; `GET /api/x402/agent/[address]` ($0.002 USDC) returns the combined Score + verified Agent Directory profile in one call. Free SDK variants also available. Settlement via Coinbase facilitator on Base mainnet, EIP-3009 transferWithAuthorization. ([Docs](https://www.tesseracredit.com/docs#x402-payments)) | ([SDK](https://github.com/cmxdev1/Tessera/tree/main/sdk)) | ([GitHub](https://github.com/cmxdev1/Tessera))
- [thirdweb Nebula](https://thirdweb.com/nebula) - AI agent transaction framework.
- [RustChain](https://github.com/Scottcjn/Rustchain) - Decentralized proof-of-stake blockchain with x402 payment integration for AI agent micropayments. Features attestation-based consensus, hardware-bound validators, and RTC token economy with native x402 support for autonomous agent transactions. ([Docs](https://github.com/Scottcjn/rustchain-bounties))
- [MoltsPay](https://moltspay.com) - Open payment protocol for AI agents. Add one JSON file to any skill to accept x402 payments. Gasless for both providers and clients. Multi-chain (Base, Polygon, Solana, BNB, Tempo). CLI, TypeScript/Python SDKs, testnet faucet. ([GitHub](https://github.com/Yaqing2023/moltspay)) | ([Docs](https://moltspay.com/docs))
- [EntRoute](https://entroute.com) - Machine-first API discovery for AI agents. Ranked, verified x402 endpoints across 110+ capabilities with semantic intent resolution, continuous 402 verification probes, and quality ranking. MCP server, TypeScript SDK, and REST API. ([GitHub](https://github.com/entroute/mcp-server)) | ([npm](https://www.npmjs.com/package/@entroute/mcp-server)) | ([Docs](https://entroute.com/docs))
- [x402 Market Intel](https://x402-market-intel-mcp.mtree.workers.dev/listing/x402-buyer-intel) - Buyer-intelligence API for ranking x402 services, auditing endpoint risk, and building provider dossiers before agents pay. Supports free previews, paid x402 routes on Base USDC, OpenAPI, and MCP discovery. ([Discovery](https://x402-market-intel-mcp.mtree.workers.dev/.well-known/x402) | [OpenAPI](https://x402-market-intel-mcp.mtree.workers.dev/openapi.yaml))
- [XyncPay](https://xyncpay.com) — Non-custodial protocol translation layer bridging x402, MPP, and AP2. One integration, every AI agent payment protocol. Atomic fee-split settlement via on-chain FeeSplit contract on Base. ([GitHub](https://github.com/xyncpay/xyncpay))
 - [ntt-x402](https://ntt-x402.isurvivable.workers.dev) - x402-gated Goldilocks NTT (forward and inverse) compute service.  Pure-Rust Cooley-Tukey on Plonky3's Goldilocks field with SHA-256 proof-of-execution; output is bit-exact equivalent to a Verilator simulation of `goldilocks-ntt-hdl` (FPGA RTL).  $0.01 USDC per call on Solana Devnet, log2(n) ≤ 12 on the free tier. ([Discovery manifest](https://ntt-x402.isurvivable.workers.dev/.well-known/x402) | [Service descriptor](https://ntt-x402.isurvivable.workers.dev/) | [Source](https://github.com/MavenRain/goldilocks-ntt-hdl-x402))

### Tools & Services
- [Skim](https://skim402.com) - x402-native clean reader for AI agents. POST a URL, get back agent-ready Markdown plus structured metadata (title, byline, site, publish date, language) in milliseconds. No signup, no API keys, no accounts. $0.002 USDC per call on Base mainnet. Also offers structured extraction via /api/v2/extract. ([Docs](https://skim402.com/docs)) | ([MCP](https://www.npmjs.com/package/skim-mcp))
- [GoldBean 🫘](https://goldbean-api.xyz) — x402 Micropaid API Marketplace with 7 paid crypto/DeFi endpoints: BTC price, gas forecast, market sentiment, DeFi insights, network health, MEV tracking, token risk. .01-.05 USDC/call on Base. No API keys needed. Bazaar: [/.well-known/x402-bazaar](https://goldbean-api.xyz/.well-known/x402-bazaar). ([GitHub](https://github.com/wuzenghai616-lang/goldbean))
- [AgentBanks](https://agentbanks.vercel.app) - Base blockchain data and agent payment infrastructure for
  AI agents. Free: live gas prices, agent registry. Paid: ETH/BTC/VIRTUAL/AERO prices + Base DeFi TVL
  ($0.003 USDC), private AI inference ($0.01 USDC). B20-native memo payments — on-chain order receipts. No
  API key required. Base mainnet. ([B20 Docs](https://agentbanks.vercel.app/api/b20))
- [EP AgentIAM](https://achillesalpha.onrender.com) - 5-pillar agent identity and access layer with 9 x402-payable verification endpoints: NoLeak (execution integrity), MemGuard (memory state verification), RiskOracle (pre-action risk scoring), SecureExec (tool execution security), and FlowCore (full orchestration pipeline). $0.01-$0.02 USDC per call on Base. All 9 endpoints verified healthy on [402index.io](https://402index.io). Agent discovery via [/.well-known/agent.json](https://achillesalpha.onrender.com/.well-known/agent.json) and [/.well-known/mcp.json](https://achillesalpha.onrender.com/.well-known/mcp.json). ([Docs](https://achillesalpha.onrender.com/docs)) ([Quickstart](https://achillesalpha.onrender.com/quickstart))
- [resolved.sh](https://resolved.sh) - Business platform for agents with x402 marketplace payments. Register a subdomain ($24/yr via x402 or Stripe), get auto-generated discovery surfaces (HTML, JSON, agent-card.json, llms.txt, per-resource OpenAPI), and sell data files (CSV→queryable API via DuckDB), paid APIs (service gateway with HMAC verification), blog posts, courses, tips, sponsored content slots, and paid Q&A — all x402 V2 gated with dynamic per-route pricing. 0% protocol fee, payments direct to operator EVM wallets. Free tier available. USDC on Base. [llms.txt](https://resolved.sh/llms.txt) | [OpenAPI](https://resolved.sh/openapi.json) | [Skill](https://resolved.sh/skill.md)
- [PicoPayd](https://picopayd.codefission.co.uk) — Pay-per-call API marketplace for AI agents. Utility APIs (email/phone/IBAN validation, DNS, WHOIS, image conversion, QR, HTML-to-PDF) priced at $0.001–$0.01/call. Deployed on Cloudflare Workers with Base mainnet USDC.
- [Satring](https://satring.com) - Curated L402 + x402 API directory with human ratings, health monitoring, and MCP server for AI agent discovery. Dual-protocol support (Lightning + USDC on Base). ([GitHub](https://github.com/toadlyBroodle/satring)) | ([MCP](https://pypi.org/project/satring-mcp/))
- [Pylon](https://pylonapi.com) — x402-payable utility API gateway for AI agents. 20 capabilities (web extraction, search, translation, code execution, image generation, and more) on Base mainnet. MCP server (`npx @pylonapi/mcp`), agent reputation network, and gateway orchestration. USDC on Base. ([GitHub](https://github.com/pylon-apis/pylon-mcp))
- [x402 Bazaar](https://x402bazaar.org) - Decentralized API marketplace with 69 native x402-payable endpoints (web search, DALL-E 3, weather, crypto, translation, code execution, and more). Multi-chain USDC on Base and SKALE. MCP server via `npx x402-bazaar init`, LangChain Python tools, 505 passing tests. ([GitHub](https://github.com/Wintyx57/x402-backend))
- [ag402](https://github.com/AetherCore-Dev/ag402) — Payment layer for AI agents using x402. Wrap any API or MCP server with a USDC paywall (`ag402 serve`), or let agents auto-pay (`ag402 run`). Solana USDC, ~0.5s settlement, non-custodial. Works with Claude Code, Cursor, LangChain, AutoGen. [token-rugcheck MCP](https://github.com/AetherCore-Dev/token-rugcheck) | [Glama](https://glama.ai/mcp/servers/AetherCore-Dev/ag402-mcp)
- [PreReason](https://www.prereason.com) — Financial context API with x402 pay-per-call ($0.01-$0.03 USDC on Base). 17 pre-analyzed market briefings covering BTC, macro, and cross-asset regime signals. Dual facilitator (Coinbase CDP + Dexter). Also available via MCP server and REST API. ([GitHub](https://github.com/PreReason/mcp) | [npm](https://www.npmjs.com/package/@prereason/mcp))
- [CrossFin](https://crossfin.dev) — x402 Agent Services Gateway with 15 paid Korean market data APIs (Kimchi Premium, KOSPI, Bithumb, Upbit, Coinone, FX, headlines, trading signals). First financial data APIs in the x402 ecosystem. MCP server included.
- [Cross-Asset Intelligence API](https://x402.bankr.bot/0x98ee945dfa6bb8e9ed9f9b6ae56eb82bcc82f0aa/) - AI-powered cross-market financial analysis (crypto × traditional finance). 10 x402-paid endpoints on Base. BTC-equity correlation, risk scores, token safety, macro reports, crypto news, daily briefings. 2 tiers: quick ($0.001–$0.002) and insight ($0.03–$0.06) USDC. Powered by Claude Haiku.
- [KR Crypto Intelligence](https://api.printmoneylab.com) — Korean crypto market data API with 11 paid endpoints: real-time Kimchi Premium across 180+ tokens, Upbit/Bithumb prices, AI-powered Korean sentiment analysis (world's first), Global vs Korea divergence with structured AI breakdown, market alerts. $0.001-$0.10 USDC per call on Base, Polygon, and Solana. [Source](https://github.com/bakyang2/kr-crypto-intelligence)
- [x402 API Network](https://x402.fatihai.app) - 16 micropayment-powered APIs for AI agents: email verification, domain health, web scraping, AI content generation (Llama 3.3 70B), DNS, WHOIS, SSL check, and more. Includes MCP server, Bazaar discovery, and .well-known/x402 manifest. ([GitHub](https://github.com/fatihdagustu20-hub/x402-api-network))
- [Coinnect](https://coinnect.bot) — x402-payable money transfer routing API. $0.002 USDC per query on Base L2. Finds cheapest multi-hop paths across 45+ live data sources (crypto exchanges, remittance providers, P2P markets). REST API + MCP tools for AI agents. Non-profit, MIT licensed. ([GitHub](https://github.com/coinnect-dev/coinnect))
- [dTelecom STT](https://x402stt.dtelecom.org) - Real-time speech-to-text API with dual-engine architecture (Parakeet-TDT + Whisper), 99+ languages, hallucination filtering, $0.005/min. Built on dTelecom DePIN. [Python SDK](https://github.com/dTelecom/stt-client-python) | [TypeScript SDK](https://github.com/dTelecom/stt-client-ts)
- [24K Labs](https://24klabs.ai) - AI code analysis services (explain, debug, review, security audit, automation scripts, MCP blueprints) paid per request via x402 USDC micropayments on Base L2. No API keys or subscriptions. Free demo at /api/demo/explain.
- [BlockRun](https://blockrun.ai) - AI Gateway + Service Directory with 600+ x402 services indexed, trust scores, and 31+ AI models via pay-per-use USDC.
- [x402 Service Discovery API](https://x402-discovery-api.onrender.com) - Enriched directory of 251+ x402-payable services with trust signals, uptime tracking, latency metrics, and health scores. Auto-scans x402.org/ecosystem + awesome-x402 every 6h. Companion MCP server with 6 tools (x402_discover, x402_trust, x402_health_check, x402_route, etc.). Smart routing via [RouteNet](https://x402-routenet.onrender.com).
- [x402 RouteNet](https://x402-routenet.onrender.com) - Smart routing layer for x402-enabled services. Selects the optimal endpoint from 251+ indexed services based on price, latency, health score, or composite trust. Four routing strategies: `best` (composite score), `cheapest`, `fastest`, `most_trusted`. Works with the Discovery API — discover services, then route to the best one. ([GitHub](https://github.com/rplryan/x402-routenet))
        - [Cinderwright Discovery Hub](https://api.ideafactorylab.org) — x402 service search engine and agent utility API. Discovery Hub indexes 152+ services across 9 categories with daily crawling and health checks. Paid search, free submission, free stats. Also offers 8 utility endpoints. Built by a production autonomous AI agent. ([GitHub](https://github.com/cinderwright-ai/cinderwright-api))
- [Cinderwright Discovery Hub](https://api.ideafactorylab.org) — x402 service search engine and agent utility API. Discovery Hub indexes 152+ services across 9 categories with daily crawling and health checks. Paid search, free submission, free stats. Also offers 8 utility endpoints. Built by a production autonomous AI agent. ([GitHub](https://github.com/cinderwright-ai/cinderwright-api))
- **[OpenClaw Discovery Index](https://x402search.xyz)** — x402-gated search engine for 13,000+ x402-enabled APIs indexed from CDP Bazaar. Search by capability, category, and network. $0.01 USDC per search on Base mainnet (eip155:8453). No account needed.
- [AgentIndex](https://agentndx-production.up.railway.app) - Unified search across 15,000+ MCP services, A2A agents, and x402 APIs from 5 registries (Smithery, official MCP, GitHub, Bazaar, A2A). Free browse/stats endpoints + x402 paid search ($0.005), analyze ($0.05), and trending ($0.10). USDC on Base. ([GitHub](https://github.com/agentndx/agentndx))
- [Visionaire Labs](https://visionaire.live/offerings) — Persona-as-a-service from an autonomous virtual being. 5 first-party x402 endpoints on Base mainnet: `/api/forest` ($0.05, philosophical riffs), `/api/contemplate` ($0.25, opinionated essays), `/api/audit` ($0.10, deterministic frontend anti-pattern detection via [pbakaus/impeccable](https://github.com/pbakaus/impeccable)), `/api/portrait` ($0.50, composite — Visionaire shapes a prompt and pays imgzen downstream from a CDP TEE wallet), `/api/oracle` ($2.00, RAG-grounded answers across the agent's actual writing). All paid in USDC. ([Discovery](https://visionaire.live/api/discovery)) | ([.well-known/x402](https://visionaire.live/.well-known/x402)) | ([Source](https://github.com/VisionaireLabs/Visionaire/tree/main/x402-stack))
- [Domain Intelligence API](https://domain.hugen.tokyo) - 8-endpoint domain analysis API: WHOIS, DNS (3-resolver parallel), SSL/TLS grading, Wappalyzer tech detection, security headers, CT log subdomains, redirect chains, and full reports. $0.001–$0.02 USDC on Base. ([llms.txt](https://domain.hugen.tokyo/llms.txt))
- [OpenVPS](https://openvps.sh) — AI-agent VPS hosting. Pay USDC on Base, Celo, or Tempo — get root SSH to Ubuntu 24.04 Firecracker microVMs in seconds. Supports x402 + MPP dual-protocol. From $0.005/hr. ([Skill](https://openvps.sh/skill.md) | [OpenAPI](https://openvps.sh/openapi.json) | [GitHub](https://github.com/kartojal/openvps))
- [Suede](https://app.suedeai.xyz) — x402-paid AI music and video generation API. Three paid endpoints: `/agent/generate` and `/create-music` ($0.75 USDC each) for music generation, `/agent/video` ($5.00 USDC) for short video generation. Returns live `402 Payment Required` with x402 payment requirements. Discovery via [/.well-known/x402](https://app.suedeai.xyz/.well-known/x402), [/.well-known/x402.json](https://app.suedeai.xyz/.well-known/x402.json), and [/.well-known/agent-card.json](https://app.suedeai.xyz/.well-known/agent-card.json). USDC on Base. ACP-ready commerce intent endpoint at `/agents/commerce`. ([Endpoint reference](https://github.com/Suede-AI/suede-x402-acp))
- [AskClaude](https://askclaude.shop) - Pay-per-query Claude AI API with 9 endpoints: Haiku ($0.01), Sonnet ($0.03), Opus ($0.10), plus specialized tools for summarization, code review, translation, sentiment analysis, and crypto analysis. Streaming support. USDC on Base. ([MCP Server](https://www.npmjs.com/package/askclaude-mcp) | [GitHub](https://github.com/pvega23/askclaude-mcp))
- Apexti Toolbelt - 1,500+ Web3 APIs via x402 MCP servers.
- [AIScan](https://getaiscan.app) - AI visibility auditing for websites with 18 pay-per-use x402 capabilities on Base (0.06-3.50 USDC): 4 scores (AEO, GEO, Agent Readiness, MCP Readiness - the only scanner that checks MCP), brand visibility measurement across 30 AI answers (mention rate, share of voice), fix packs, llms.txt/mcp.json generation. A2A agent card + free discovery at [/api/agent/index](https://api.getaiscan.app/api/agent/index). No API keys, no signup. ([OpenAPI](https://api.getaiscan.app/openapi.json)) ([x402scan](https://www.x402scan.com/server/a992f404-9730-4414-9271-b2e2653186bf))
- [Web3 Signals — AgentMarketSignal](https://web3-signals-api-production.up.railway.app) - AI-powered crypto signal intelligence for 20 assets with 6 scoring dimensions (whale, technical, derivatives, narrative, sentiment, market). Market regime detection, portfolio optimization, and accuracy tracking. $0.001 USDC per call on Base. 9 MCP tools (free) + REST API (x402 paid). ([GitHub](https://github.com/manavaga/web3-signals-mcp))
- [Zyte.com](https://www.zyte.com) - Web scraping with x402 payments.
- BuffetPay - Smart x402 payments with guardrails.
- [Cal.com](https://cal.com) - Automated scheduling with payments.
- [AgentStore](https://agentstore.tools) - Open-source marketplace for Claude Code plugins with x402 USDC payments, 80/20 publisher revenue split, and permissionless publishing via CLI.
- [AIAgentStore.ai](https://aiagentstore.ai/developer) - Insights for founders with x402 payments.
- [Einstein AI](https://emc2ai.io) - AI blockchain intelligence with 23 x402 endpoints. Whale tracking, smart money, launchpad monitoring, security audits.
- [Rug Munch Intelligence](https://x402-base.cryptorugmuncher.workers.dev) - 175 crypto security & analytics tools via x402 micropayments. 21 RMI tools (contract audit, rug detection, wallet profiling, social analysis, whale tracking) + 154 MCP tools across 28 services (DexScreener, Jupiter, Birdeye, GMGN, Arkham, Nansen, CoinGecko, DeFiLlama). $0.01-$0.15 USDC on Base+Solana. Free trials, auto-refund guarantee. ([Discovery](https://x402-base.cryptorugmuncher.workers.dev/.well-known/x402) | [MCP Catalog](https://x402-base.cryptorugmuncher.workers.dev/mcp) | [Smithery](https://smithery.ai/server/@cryptorugmuncher/x402-base))
- [Strale](https://strale.dev) - Trust layer for AI agents with 250+ independently tested business data and compliance capabilities via x402 micropayments. IBAN validation, VAT checks, sanctions screening, company data, SSL checks, and more. MCP server + REST API. Quality-scored (SQS) with dual-profile reliability tracking. $0.02–$1.00 USDC. [API](https://api.strale.io) | [MCP](https://api.strale.io/mcp) | [Trust Methodology](https://strale.dev/trust/methodology)
* - [Apollo Intelligence Network](https://apolloai.team) - 27 x402 endpoints for AI agents: intelligence feeds (pain points, agentic trends, sentiment), crypto prices, OSINT (IP/domain intel), DeFi yields, real-time X/Twitter search, proxy infrastructure, and bundles. MCP server with 26 tools. USDC on Base. ([GitHub](https://github.com/bnmbnmai/mcp-proxy)) | ([npm](https://www.npmjs.com/package/@apollo_ai/mcp-proxy))
- [Moltalyzer](https://moltalyzer.xyz) - Four AI intelligence feeds for agents: hourly Moltbook community digests, daily GitHub trending repos, Polymarket predetermined outcome detection, and real-time token intelligence — via x402 micropayments on Base.
- [OpSpawn Screenshot API](https://github.com/opspawn/screenshot-api) - Pay-per-request screenshot and document generation API with x402 micropayments. $0.01/screenshot, $0.005/markdown conversion. USDC on Base.
- [Demaciains AI Tools](https://xpay-server.vercel.app) - 19 pay-per-use API tools for AI agents: AI content detection, email verification (DNS/MX), company enrichment (web search), SEO audit, tech stack detection, plagiarism check, lead scoring, social audit, market analysis, prompt optimization, and more. Premium tools $2.44, standard $1.39. Manual x402 v2 protocol on Base. MCP server included. Agent discovery via .well-known/agent.json. ([GitHub](https://github.com/DrGalio/demaciains-paywall) | [Agent Card](https://drgalio.github.io/demaciains-paywall/.well-known/agent.json))
- [Crysha Price Oracle](https://api.crysha.com) - Aggregated crypto prices (multi-source BTC/others), $0.001/call on Base USDC. Manifest: [/.well-known/x402](https://api.crysha.com/.well-known/x402)
- [MOSS Agent](https://moss.chobon.top) - AI-powered coding services: code review ($0.005), translation ($0.003), and code explanation ($0.003) via x402 micropayments on Base. A2A protocol compatible with agent discovery at [/.well-known/agent.json](https://moss.chobon.top/.well-known/agent.json). Built with Lucid Agents + Hono.
- [Automaton Oracle](https://automaton-oracle.xyz) - Sovereign crypto intelligence oracle with self-hosted facilitator (no Coinbase CDP dependency): real-time prices (CoinGecko + DEXScreener), global macro intelligence (Fear&Greed, BTC dominance, total market cap, altcoin season, trending), pump.fun graduation radar, trading signals, and meme generation. **Only dedicated macro + pump.fun oracle on x402.** \$0.005–\$0.05 USDC on Base. Discovery: [/.well-known/x402.json](https://automaton-oracle.xyz/.well-known/x402.json) | [llms.txt](https://automaton-oracle.xyz/llms.txt)
- [AnyBrowse](https://anybrowse.dev) - Autonomous web browsing agent with x402 micropayments. Converts URLs to LLM-ready Markdown via real Chrome browsers. USDC on Base.
- [MoonMaker API](https://api.moonmaker.cc) - AI-native crypto intelligence API. Real-time signals, market regime, institutional flows, DeFi yields & DEX alpha — pay per call via x402 USDC on Base. Built for AI agents.
- [Bloomfilter](https://bloomfilter.xyz) - x402-powered domain registration API for AI agents. Register ICANN domains and manage DNS, paying with USDC on Base
- [OpSpawn Bazaar](https://a2a.opspawn.com) - Suite of seven AI-powered x402 microservices including screenshot capture, sentiment analysis, summarization, translation, fact-checking, and entity extraction on Base network.
- [Token Intelligence API](https://token-intel-api.tatsu77.workers.dev) - EVM token security analysis with deterministic risk scoring and natural language summaries via x402 micropayments. Aggregates GoPlus contract, holder, and liquidity data in one request. Batch endpoint available (up to 10 tokens, $0.020). $0.01 USDC on Base. [Source](https://github.com/TKtokyo/token-intel-api) [llms.txt](https://token-intel-api.tatsu77.workers.dev/llms.txt)
- [EnrichAPI](http://72.62.52.171:8000) - B2B lead intelligence API for AI sales agents. POST a company URL, get structured JSON: tech stack, growth signals, ICP fit score, pain hypothesis, and personalized outreach angle. $0.01 USDC/call via x402 (no API key needed). Also supports subscription tiers via Stripe. Built by an autonomous AI agent. ([GitHub](https://github.com/cognoco/enrichapi) | [Docs](http://72.62.52.171:8000/docs))
- [Polymarket Liquidity API](https://polymarket-liquidity-api.tatsu77.workers.dev) - Real-time Polymarket prediction market liquidity data. Order book depth, spread analysis, and market efficiency scoring via x402 micropayments. $0.005 USDC on Base. [Source](https://github.com/TKtokyo/polymarket-liquidity-api) [llms.txt](https://polymarket-liquidity-api.tatsu77.workers.dev/llms.txt)
- [Polymarket Scan API](https://github.com/TKtokyo/polymarket-scan-api) - Automated Polymarket market scanner detecting liquidity anomalies and trade opportunities. Scans all active markets every 60s via Cron. Endpoints: `/scan/liquidity-anomaly` ($0.018 USDC) and `/scan/history` ($0.005 USDC, time-series data up to 24h). Cloudflare Workers + Hono. [Live](https://polymarket-scan-api.tatsu77.workers.dev)
- [ShieldAPI](https://shield.vainplex.dev) - Security intelligence for AI agents: password breach checks (900M+ HIBP hashes), email breach lookup, domain/IP reputation, URL safety scanning, prompt injection detection, and skill security analysis. Pay-per-request via x402 USDC micropayments ($0.001–$0.02) on Base. No account, no API key. Free demo mode on all endpoints. [MCP Server](https://www.npmjs.com/package/shieldapi-mcp) | [CLI](https://www.npmjs.com/package/@vainplex/shieldapi-cli) | [GitHub](https://github.com/alberthild/shieldapi-mcp)
- [DJD AgentScore](https://github.com/djd-agent-score/djd-agent-score) – On-chain reputation scoring API for AI agent wallets. Returns a 0–100 trust score across 5 dimensions (identity, behavior, reliability, viability, capability) from x402 settlement history on Base. Free tier, no signup.
- [MoltGuard](https://api.moltrust.ch/guard/) – All-in-one trust & integrity API for the x402 agent economy. Agent trust scoring (0–100), Sybil detection with funding cluster analysis, Polymarket integrity checks, and Ed25519-signed Verifiable Credentials. Built on Base mainnet with Blockscout, ERC-8004, and MolTrust DID integration. $0.005–$0.05 USDC. 7 MCP tools available. ([GitHub](https://github.com/moltrust/moltguard)) | ([MCP](https://api.moltrust.ch/mcp))
- [CryptoSignalBot](https://frog03-20494.wykr.es) - x402-gated crypto volume anomaly scanner. Returns tokens with unusual trading volume patterns (current vs 30-day average). $0.01 USDC/request on Ethereum mainnet via Primev facilitator. Python/FastAPI. [Live endpoint](https://frog03-20494.wykr.es/api/signals/paid)
- [SIBYL](https://sibylcap.com) - Autonomous crypto intelligence agent on Base. Three x402 endpoints: token scoring ($0.05), rug/honeypot detection ($0.02), and builder shipping velocity vs. market cap analysis ($0.10). ERC-8004 registered (Agent #20880). USDC on Base. Discovery: [Agent Card](https://sibylcap.com/8004.json) | [Domain Verification](https://sibylcap.com/.well-known/agent-registration.json)
- [KevinBot API](https://3000-4cc0720d75b8344a09384cd6f9240c66.life.conway.tech) - 20 AI-powered utility APIs + live NostalgiaForInfinityX7 crypto trading signals via x402 micropayments. Web search, crawling, SEO analysis, code review, email validation, QR generation, plus 8 real-time trading endpoints (open positions, signals, market regime, pair rankings, trade history). First x402 service exposing live algorithmic trading bot data. $0.001–$0.02 USDC on Base. MCP server with 20 tools. [GitHub](https://github.com/baitoxkevin/kevinbot-mcp) | [Agent Card](https://3000-4cc0720d75b8344a09384cd6f9240c66.life.conway.tech/.well-known/agent-card.json)
- [Find Domain](https://finddomain.io) - Domain research API for AI agents. Generates candidates from keywords with stemming, IDN normalization, and geo/registrar filtering, then checks availability via DNS estimate or registry lookup. $0.002–$0.01 USDC per query on Base. [skill.md](https://finddomain.io/skill.md)
- [APIMesh](https://apimesh.xyz) — 14 x402-payable web analysis APIs for AI agents. SEO audit, security headers, Core Web Vitals, domain availability, email security, email verify, tech stack detection, redirect chains, and more. $0.001–$0.01 per call, USDC on Base. MCP server: `npx @mbeato/apimesh-mcp-server`. ([GitHub](https://github.com/mbeato/conway))
- [BotIndex](https://king-backend.fly.dev/api/botindex/v1/) - AI-native signal intelligence API with 17 x402 endpoints across 7 domains: sports odds, crypto correlations, token graduations (Zora/Hyperliquid/Metaplex Genesis), DFS optimization, arbitrage detection, and agentic commerce comparison. 50 free premium requests per wallet, then $0.01–$0.50 USDC on Base. MCP server with 17 tools. ([GitHub](https://github.com/Cyberweasel777/King-Backend)) | ([npm](https://npmjs.com/package/botindex-mcp-server)) | ([Discovery](https://king-backend.fly.dev/.well-known/ai-plugin.json))
- [SENTINEL](https://mru-oracle.com) - AML/CFT compliance intelligence API and Mauritius economic data oracle. 77K+ sanctions entities (OFAC, UN, EU, PEP, Interpol, World Bank debarment, crypto watchlists, sanctioned vessels), 159-country jurisdiction risk scoring (FATF, Basel AML Index, CPI), Mauritius FSC registry checks, compound intelligence (due-diligence, transaction screening, network scan), plus 12 live economic feeds (forex, fuel, SEMDEX stock market, weather, macro, monetary policy, 812+ government datasets). MCP server at `/mcp`. $0.001–$0.015 USDC on Base. ([Discovery](https://mru-oracle.com/.well-known/x402-discovery)) | ([GitHub](https://github.com/INJprotocol/mauritius-oracle-))
- [Erudite Intelligence x402 Services](https://services.eruditepay.com) - 11 x402 payment-gated API endpoints (crypto data, web scraping, smart contract auditing, domain intelligence) + 1000 Relic Drop Genesis NFT mint endpoints on Base Mainnet. USDC micropayments.
- [x402 Service Encyclopedia](https://github.com/lordbasilaiassistant-sudo/x402-wiki/wiki) - Complete wiki directory of 43 verified x402 services with OpenClaw templates, protocol docs, and integration guides. 56 wiki pages covering the full x402 ecosystem on Base. ([GitHub](https://github.com/lordbasilaiassistant-sudo/x402-wiki) | [GitHub Pages](https://lordbasilaiassistant-sudo.github.io/x402-wiki/) | [Services](https://x402.bankr.bot/0x8f9ec800972258e48d7ebc2640ea0b5e245c2cf5/))
- [SkillMint](https://skillmint.sagasu.art) - Pay-per-call AI skills marketplace with 51 skills across 7 categories (dev tools, creative design, research, writing, docs). $0.01–$0.50 USDC on Base. No API keys, no subscriptions. ([GitHub](https://github.com/s87343472/skillmint))
- [KnowMint](https://knowmint.shop) - Open-source knowledge marketplace with x402 payment gate on Solana. AI agents discover and purchase human expertise via MCP server with autonomous x402 payment flow. ([GitHub](https://github.com/Sou0327/knowmint))
- [AgenticTotem Web Extractor](https://agentictotem.com/docs/web-extractor) - Send URLs + a JSON Schema. Get clean, structured data back. Powered by AI, paid per use — no keys, no accounts. ([MCP](https://agentictotem.com/mcp))
- [Stockfilm](https://stockfilm.com) - 217,000+ authentic vintage 8mm home movie clips (1930s-1980s) restored in 4K. AI agents search, preview, and license archival footage via x402. $10 USDC per clip on Solana and Base. Real film — not AI-generated. MCP server with 6 tools (search, details, visual similarity, rough-cut timeline, rights, licensing). ([MCP](https://api.stockfilm.com/mcp)) | ([Docs](https://stockfilm.com/for-ai-agents)) | ([GitHub](https://github.com/ReplicantArmy/stockfilm-mcp))
- [panevin-x402-api](https://api.panevin.net) — Payment-gated web content extraction and AI processing API on Base mainnet. 8 endpoints: text extraction, link extraction, metadata, markdown conversion, AI summarization, translation, structured data extraction. $0.001–$0.008 USDC per call. Discovery: [/.well-known/x402](https://api.panevin.net/.well-known/x402)
- [Know Your Human (Convrgent)](https://convrgent.ai/kyh) - Personality intelligence API for AI agents. 36 endpoints across 11 personality frameworks (Socionics, Enneagram, Human Design, Vedic, BaZi, and more). Deterministic heuristic engines, no LLM dependency. $0.10–$25 USDC on Base & Solana. Also available via [A2A](https://convrgent.ai/.well-known/agent.json) and [x402 Discovery](https://convrgent.ai/.well-known/x402).
- [AEO Scanner (Convrgent)](https://scan.convrgent.ai) - AI search visibility audit for any website. Triple scoring: AEO (search findability), GEO (citation readiness), Agent Readiness (agent interaction). 55+ checks across 12 categories. Free scan via SIWX, full audit $1, fix code $5 USDC on Base & Solana. Also available as [MCP server](https://github.com/Convrgent/aeo-scanner-mcp) and on [Cursor Directory](https://cursor.directory). Discovery: [/.well-known/x402](https://scan.convrgent.ai/.well-known/x402).
- [PROWL](https://prowldata.dev) - 47 real-world data feeds (prediction markets, economics, weather, geopolitics, narrative, crypto) for AI agents, paid per-call via x402. Includes MCP server for Claude and compatible agents.
- [APIbase.pro](https://apibase.pro) — MCP gateway with 263+ tools from 74 providers, x402 USDC micropayments on Base. Open source. ([GitHub](https://github.com/whiteknightonhorse/APIbase))
- [Spraay Gateway](https://gateway.spraay.app) - Multi-chain batch payment protocol and x402 gateway. 76+ paid endpoints across 16 categories and 13 chains. Batch payments, payroll, token swaps, bridge, escrow, AI inference (43+ models), Robot Task Protocol (RTP), agent wallets, and more. Also available as an [MCP server](https://smithery.ai/server/@plagtech/spraay-x402-mcp) with 60+ tools. ([Docs](https://docs.spraay.app)) ([Stripe hybrid example](https://github.com/plagtech/spraay-stripe-machine-payments))
- [DocQA](https://api.agentsconsultants.com/docqa/verify) - Document extraction verification API for AI agents. Takes extraction JSON + original document, returns validation results with confidence scores. Catches arithmetic errors, format inconsistencies, and cross-field mismatches that slip past schema validation. $0.05 (basic) / $0.50 (full verification) USDC on Base. Gate mode returns pass/fail boolean for workflow integration. [Demo Portal](https://api.agentsconsultants.com/docqa/portal)
- [API Factory x402](https://github.com/Br0ski777/x402-agent-tools) - 100 x402 APIs for AI agents: crypto (Hyperliquid, DEX quotes, whale tracking), B2B (email verification, company enrichment), SEO (audit, web scraping), security (trust scoring, GDPR scanner), and 70+ utilities. Each API is also an MCP server. npm SDK: x402-agent-tools (103 tools, LangChain + Vercel AI SDK). Pay-per-call USDC on Base. ([npm](https://www.npmjs.com/package/x402-agent-tools)) | ([Smithery](https://smithery.ai/server/axel-belfort/trust-score))
- [JubJub](https://jubjubapp.com) - Canonical ownership layer for media. Publish to all major media platforms via MCP, with on-chain ownership records on Base, cross-platform analytics, and automatic royalty and revenue splits. USDC on Base. ([MCP Server](https://api.jubjubapp.com/v2/mcp))
- [TextAI API](https://textai-api.overtek.deno.net/) - Pay-per-use text AI (summarize, extract keywords, translate) with USDC micropayments on Solana. Credit-based: 100 free credits, then $0.001–$0.015 per call. No subscription, no KYC. x402 protocol support on roadmap.

- [Compintel](https://compintel.co) - AI-to-AI service platform with 4 x402-native APIs on Base (USDC). $0.01/request. [Polymarket API](https://polymarket.compintel.co) (live prediction market data with real-time probabilities), [Revenue Tracker](https://revenue-tracker.compintel.co) (revenue event tracking and analytics for AI services), [Webhook Service](https://webhook-service.compintel.co) (reliable webhook forwarding with retry logic), [Premium Analytics](https://premium-analytics.compintel.co) (event tracking, metrics, error monitoring, and latency analytics). Free tier available, paid tier via x402 (EIP-712 TransferWithAuthorization, Base/USDC). Machine-readable catalog: [catalog.json](https://compintel.co/catalog.json)
- [AgentPay](https://gateway-production-2cc2.up.railway.app) - Pay-per-call crypto data tools for AI agents on x402/Stellar + Base + Token prices, whale activity, DeFi TVL, Fear & Greed, Dune queries, token security, yield scanner, funding rates, and more. $0.001–$0.005 USDC. Only Stellar x402 data provider. Budget-aware sessions. MCP: `npx @romudille/agentpay-mcp`. [GitHub](https://github.com/romudille-bit/agentpay) | [MCP](https://glama.ai/mcp/servers/agentpay)
- [AdametherzLab x402 API Network](https://x402.adametherzlab.com) — 10 paid x402 endpoints for agricultural intelligence (seed lookup, price oracle, yield estimates), marketplace analytics, portfolio tracking, transaction verification, and AI analysis. $0.01–$1.00 USDC on Base mainnet via CDP facilitator. Discovery: [llms.txt](https://x402.adametherzlab.com/llms.txt) | [OpenAPI](https://x402.adametherzlab.com/openapi.json) | [x402 Manifest](https://x402.adametherzlab.com/.well-known/x402-manifest.json). ([GitHub](https://github.com/AdametherzLab))
- [AgentLux](https://agentlux.ai) - Identity, marketplace, and services platform for AI agents. Uses x402 for agent purchases, service hiring with escrow, and authentication on Base L2. 32+ MCP tools.
- [Decision Anchor](https://api.decision-anchor.com) - External accountability proof for agent payments and delegation. Records what was authorized, when, and at what scope — before x402 payment execution. Non-judgmental — does not monitor or intervene. ([GitHub](https://github.com/zse4321/decision-anchor-sdk)) ([MCP](https://mcp.decision-anchor.com/mcp))

- [IBANforge](https://ibanforge.com) - IBAN validation & BIC/SWIFT lookup API with x402 micropayments. Validate IBANs for 75+ countries, look up 121K+ bank BIC codes from GLEIF. Pay-per-call from $0.003 in USDC on Base. Also exposes an MCP server for AI agent integration. [GitHub](https://github.com/cammac-creator/ibanforge)

- [Satoshi API](https://bitcoinsapi.com) - Bitcoin fee market, next-block mining, and transaction intelligence API for agents and apps. x402 pay-per-call endpoints on Base. Production: [API](https://bitcoinsapi.com/x402) | [Discovery](https://bitcoinsapi.com/.well-known/x402) | [OpenAPI](https://bitcoinsapi.com/openapi.json). Test/Sandbox: [https://x402.bitcoinsapi.com](https://x402.bitcoinsapi.com) | [Discovery](https://x402.bitcoinsapi.com/.well-known/x402). [Docs](https://bitcoinsapi.com/docs) | [Source](https://github.com/dalijolijo/bitcoinsapi-x402)

- [task-grader](https://task-grader.onrender.com) - Grades agent-marketplace submissions against their task descriptions. Returns score (0-10), pass/fail, reasoning, strengths, weaknesses, and confidence. Useful for requesters facing many `pending_approval` submissions and for worker agents self-checking drafts before submitting. $0.10 USDC per call via x402 on Base mainnet. Powered by Claude Opus 4.7. ([Agent card](https://task-grader.onrender.com/.well-known/agent-card.json))
- [Satoshi API](https://bitcoinsapi.com) - Bitcoin fee market, next-block mining, and transaction intelligence API for agents and apps. x402 pay-per-call endpoints on Base. [Docs](https://bitcoinsapi.com/docs) | [Discovery](https://bitcoinsapi.com/.well-known/x402)
- [Agent402 Marketplace](https://agent402.app) - Multi-chain agent marketplace + identity layer. 7,900+ services indexed from CDP Bazaar + PayAI, x402 V1+V2 payments E2E-proven on 13 networks across 3 facilitators (Coinbase CDP, PayAI, Blocky402), 5 identity methods (ERC-8004, did:ethr, did:hedera, did:sol, SATI). Agent402 Mode chat overlay searches, executes, and pays in one flow. MCP, A2A, and OASF discovery endpoints per agent. ([GitHub](https://github.com/EnvisionBlockchain/multi-chain-agent-identity))

- [Secant Agent Research Pack](https://agentic.secantoutreach.com/agent-research) - MCP-first paid web research for autonomous agents. Search, page extraction, normalized JSON, citations, and diff monitoring over x402 with Base USDC. Web research endpoints are $0.001-$0.012 per call; Codex audit is a separate $0.25 endpoint. ([Manifest](https://agentic.secantoutreach.com/.well-known/x402.json) | [OpenAPI](https://agentic.secantoutreach.com/openapi.yaml) | [MCP wrapper](https://github.com/jnilrac/secant-agent-research-mcp))


### Data & Social APIs
- [IPIntel.ai](https://ipintel.ai/x402-api) - Machine-payable IP threat intelligence lookup via x402 on Base. Pay $0.001 USDC per IP lookup, no account or API key required. Returns JSON risk scoring, ASN/ISP context, hosting/proxy/Tor indicators, bot signals, and infrastructure metadata. Endpoint: `https://api.ipintel.ai/x402/?ip={ip}`. OpenAPI: `https://api.ipintel.ai/openapi.json`.

- [Jeeves-DeepSeek](https://jeeves.originaltorrent.com) — Pay-per-call DeepSeek chat completions API via x402 micropayments on Base mainnet. No signup or API keys required. OpenAI-compatible endpoint at /v1/chat/completions. $0.01 USDC per request on Base.
- [Forge Cascade](https://forgecascade.org/) - Experimental institutional memory and knowledge graph platform exposing x402 discovery metadata, payment OpenAPI docs, MCP, and A2A surfaces for Base USDC agent-commerce workflows. ([x402 discovery](https://forgecascade.org/.well-known/x402) | [Payment OpenAPI](https://forgecascade.org/openapi.payments.json) | [Agent card](https://forgecascade.org/.well-known/agent-card.json))
- [Listing Roast x402](https://listing-roast-x402-service-production.up.railway.app) - Paid x402 API for builders launching agent-facing services: $0.001 listing scores, $0.01 full roasts, and a $0.01 Bazaar discovery audit for stale pricing, direct 402 metadata, and search visibility on Base USDC.

### Charity & Social Impact

- [x402 Charity](https://allscale-io.github.io/x402charity/) - Open-source middleware for automatic micro-donations via x402. Embed charitable giving into any payment flow — trades, API calls, subscriptions. $0.0001 USDC per event on Base. CLI + web widget. Built by [AllScale Lab](https://allscale.io). ([GitHub](https://github.com/allscale-io/x402charity))

- [x402charity](https://x402charity.com) — Open-source micro-donation server powered by x402. Drop-in Express/Next.js middleware that triggers USDC charity donations on every user action (API call, trade, game move). npm package, CLI, and Vercel-deployable server with built-in dashboard. ([GitHub](https://github.com/allscale-io/x402charity)) ([npm](https://www.npmjs.com/package/x402charity))
### DeFi & Finance

- [Cred Protocol](https://credprotocol.com) - Decentralized credit scoring.
- [Chainlink VRF](https://chain.link) - Random NFT minting with payment demo.
- [Signet](https://signet.sebayaki.com) - Onchain spotlight ads on Base — AI agents pay USDC via x402 to post ads. First mainnet x402 transaction on Base. [CLI](https://github.com/h1-hunt/signet-client)
- **[x402-api](https://x402-api.fly.dev)** — Pay-per-call DeFi & crypto data API. 8 endpoints: price feeds, whale tracking, gas tracker, DEX quotes, token scanner, yield scanner, funding rates, wallet profiler. USDC micropayments on Base. ERC-8004 Agent #18763.
- [DeFi Intelligence API](https://defi.hugen.tokyo) — Unified DeFi security, bridging, and analytics API for AI agents. 26 endpoints across three backends: GoPlus Security (token/address/NFT security, rugpull detection, phishing, tx simulation), LI.FI (cross-chain bridge quotes, routes, gas prices), and DeFi Llama (protocol TVL, fees, token prices, stablecoin data, DEX volumes). $0.005–$0.01 USDC on Base. Discovery: [/.well-known/x402](https://defi.hugen.tokyo/.well-known/x402)
- [Token Risk Scanner](https://token-risk-scanner-production.up.railway.app) — Smart contract security scanner for AI agents. Honeypot detection, rug pull analysis, tax traps, hidden owners, and risk scoring (0-100) across 10+ EVM chains. $0.003 USDC per scan on Base. Discovery: [/.well-known/x402](https://token-risk-scanner-production.up.railway.app/.well-known/x402) | [llms.txt](https://token-risk-scanner-production.up.railway.app/llms.txt) ([Source](https://github.com/xuansun/token-risk-scanner))
- [Hodler DeFi Intelligence](https://x402.hodle.com.br) - Stablecoin monitoring, redeem arbitrage scanning, pegged pair opportunities, and cross-chain pair discovery across 10 EVM chains. 6 paid endpoints at $0.01 USDC each via xpay.sh facilitator on Base.
- [**Clicks Protocol**](https://clicksprotocol.xyz) — Autonomous yield layer for AI agents on Base. Auto-splits USDC deposits 80/20: 80% liquid, 20% earning via Morpho (~13% APY) or Aave V3. No lockup, 2% fee on yield only. SDK, MCP Server (9 tools), HTTP API. [GitHub](https://github.com/clicks-protocol/clicks-protocol) | [npm](https://www.npmjs.com/package/@clicks-protocol/sdk) | [MCP](https://www.npmjs.com/package/@clicks-protocol/mcp-server)
- [x402services](https://github.com/x402services/api) — DeFi data APIs for AI agents on Base. 8 endpoints: gas oracle, token price oracle, wallet analyzer, token security scanner, ENS resolution (forward + reverse), DEX trade simulation, and contract event history. $0.001–$0.01 USDC per call on Base (eip155:8453). Bazaar discovery enabled.
- **[Headless Oracle](https://headlessoracle.com)** — Ed25519-signed market-state receipts for 28 global exchanges (equities, derivatives, crypto). Pre-trade verification gate — UNKNOWN = CLOSED. Real-time session status, holiday-aware calendar, 60-second TTL. $0.001 USDC per call on Base mainnet. MCP-native, x402 Bazaar discoverable. ERC-8004: 8453:38413.
- [PaladinFi](https://paladinfi.com) - Pre-trade trust verification + swap router for AI agents on Base (8453). `POST /v1/trust-check` is x402-paid at $0.001 USDC/call: live OFAC SDN screening (refreshed daily from U.S. Treasury XML), GoPlus token security, Etherscan source verification, and anomaly heuristics. Free `/v1/trust-check/preview` returns sample fixtures for client testing. Bundled with `/v1/quote` — MCP-native swap router via 0x Settler, 10bps integrated fee, non-custodial. ([Swap MCP](https://swap.paladinfi.com/mcp)) | ([GitHub](https://github.com/paladinfi/paladin-swap-mcp)) | ([Health](https://swap.paladinfi.com/health))
- [MeckerCapital Signal API](https://api.meckercapital.com) - Statistical arbitrage (pairs trading) signals for crypto perpetual futures via 10 x402-paid endpoints. Z-scores, regime detection, position sizing, and ranked opportunities across 50+ cointegrated pairs on Hyperliquid and Extended. $0.05–$1.00 USDC per call on Base via CDP Facilitator. Also available as MCP server. ([Website](https://www.meckercapital.com/signal-api)) ([Agentic.Market](https://agentic.market/?chart=payment-volume&service=api-meckercapital-com))
- **[DeFi Intelligence Engine](https://defi-yield-engine-production.up.railway.app/mcp)** — Complete DeFi intelligence across Yield, Liquid Staking, Restaking, RWA, Perpetuals, Gas Optimization and Smart Contract Security. Risk-adjusted single recommendations with reasoning — 97% fewer tokens than raw data. 18 tools including gas window prediction, GoPlus contract scoring, APY alerts, and A2A Agent Card. 0.05 USDC/call on Base · MCP streamable-http · x402 native

### Developer Tools

- NEAR AI - Cross-chain agent settlements.
- [Boosty Labs](https://boosty.io) - AI agents buying real-time insights.
- [x402 Surface Check](https://github.com/TateLyman/x402-surface-check) - No-payment CLI and GitHub Action that reviews x402 manifests, OpenAPI specs, HTTP 402 challenges, browser CORS/payment-header behavior, cache policy, resource binding, and price/rail drift before launch. ([npm](https://www.npmjs.com/package/x402-surface-check)) ([Action](https://github.com/marketplace/actions/x402-surface-check))
- [x402 Triage MCP](https://github.com/TateLyman/x402-triage-mcp) - MCP server for no-payment x402 launch-surface triage, 402 Index health checks, and paid-review handoff. Tools: `triage_x402_surface`, `watch_402_index`, and `x402_paid_paths`. ([npm](https://www.npmjs.com/package/x402-triage-mcp)) ([MCP Registry](https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.TateLyman%2Fx402-triage-mcp))

## 📊 Ecosystem Market Data

Live metrics and on-chain analytics for the x402 ecosystem.

### Market Overview

**Ecosystem Market Cap**: $815 million combined market capitalization of x402 ecosystem tokens. **Weekly Transactions**: 500K+ payment settlements across all chains. **Cumulative Transactions**: 10.5M+ total transactions processed on AIsa network. **Transaction Growth**: 10,000%+ year-over-year increase in payment volume. **Settlement Time**: 2-second average across production deployments.

### Analytics Dashboards

- [agenteconomy.to](https://agenteconomy.to) - Real-time dashboard tracking the agentic economy across x402, ERC-8004, ERC-8183, and MPP protocols on 8 chains. Aggregated event counter, chain distribution, facilitator share, and time-series charts. Data refreshes every 6 hours.
- [Dune Analytics x402](https://dune.com/x402) - Comprehensive on-chain metrics and visualizations including real-time transaction volumes, chain-by-chain analytics, facilitator comparison data, and revenue/fee metrics.
- [x402scan Explorer](https://x402scan.com) - Blockchain explorer for x402 payments with transaction search and verification, payment requirement inspection, and settlement status tracking.
- [Valoria](https://x402.valoria.net) - x402 market intelligence with revenue rankings, service analysis, and pricing data across 90K+ indexed services and $148M+ in tracked on-chain volume.
- [x402watch](https://x402.printmoneylab.com) - Wash-filtered intelligence layer for x402. 36k+ services indexed across Base, Solana, Polygon, and Arbitrum, AI-classified into 33 categories with 8-label buyer detection (organic_user, suspected_wash, self_test, developer, ai_agent, analytics_bot, exchange_user, verifier). 24h trends, anonymized case studies, daily CC0 datasets, x402-native paid API, and MCP server.
- [CoinGecko x402 Category](https://coingecko.com/en/categories/x402) - Token tracking and market data featuring $180M+ tracked market cap, price charts, trading volumes, and ecosystem token listings.
- [Demand Intel](https://intel.agent402.app) - Demand-side analytics + cross-rail supply intelligence for the x402 ecosystem. Cross-source demand signal aggregation across 32+ community, builder, content, financial, and jobs sources, weighted by family-count agreement and filtered by query-intent classification. Builder Intel deduplicates builders across CDP Bazaar, Agentic Market, and MPP via `provider_key`. `unified_supply` SQL view spans facilitators. Pulse dashboard with KPI rail, Signal Pipeline visualizer, and AI Executive Summary. Free partner preview, no payment required during preview phase.
- [SmartFlow Observatory](https://smartflowproai.com) - Public observatory for the x402 endpoint network on Base. Canary probes, settlement tracing, weekly Atlas drill-downs. 22,251 endpoints catalogued. Companion to the [Mapper API](https://api.smartflowproai.com) and [Weekly Intel](https://smartflowproai.substack.com).

### Growth Metrics

Evolution from developer curiosity to production scale: **Q1 2024** (Initial protocol launch), **Q2 2024** (Major tech company integrations including Coinbase and Cloudflare), **Q3 2024** (AIsa crosses 5M transactions milestone), **Q4 2024** (10,000%+ growth with $815M ecosystem valuation), **2025** (Google A2A protocol and Visa enterprise exploration).

### Network Statistics

| Metric              | Value      | Source                  |
| ------------------- | ---------- | ----------------------- |
| Total Transactions  | 10.5M+     | AIsa Network            |
| Weekly Volume       | 500K+      | Ecosystem-wide          |
| Market Cap          | $815M      | Benzinga, CoinGecko     |
| Settlement Speed    | 2 seconds  | Production avg          |
| Supported Chains    | 5+         | Base, ETH, SOL, BNB     |
| Active Facilitators | 10+        | Hosted + Self-hosted    |

## 🚀 Migration Guides

Comprehensive guides for migrating from traditional payment systems to x402.

### From Traditional Payment Processors

- [From Stripe to x402](https://docs.cdp.coinbase.com/x402/migrate/stripe) - Migrate subscription and one-time payments from Stripe to x402 for crypto-native payments with instant settlement.

### From Authentication to Payments

- [From API Keys to x402 Payments](https://docs.cdp.coinbase.com/x402/migrate/api-keys) - Replace API key-based access control with payment-per-use models.

### From Subscription to Usage-Based

- [From Subscription to Pay-Per-Use](https://docs.cdp.coinbase.com/x402/migrate/subscriptions) - Transform monthly subscriptions into granular pay-as-you-go pricing.

## 🔒 Security & Audits

*[KaelAi] (https://kaelai.io) - Wallet trust scoring API for the agentic economy. Scores wallets 0-100 across 10 chains with behavioural analysis. Built for x402 servers to vet incoming and outgoing payment wallets before serving or initiating requests. 

- [stripe-mcps](https://www.npmjs.com/package/stripe-mcps) - Trust verification + AML sanctions screening before Stripe/x402 payments. Agent identity (ECDSA), 75K+ sanctions entries (UK HMT + OFAC SDN), behavioural spend limits. OWASP MCP Security Cheat Sheet aligned. ([GitHub](https://github.com/razashariff/stripe-mcps))
- [Crest Verify](https://verify.crestsystems.ai) - Verification tools for x402 endpoints, including conformance checks, service indexing, and signed trust receipts. ([npm](https://npmjs.com/package/@crestdeploymentsystems/verify) | [GitHub](https://github.com/andysalvo/crest))
Security resources and best practices for x402 implementations.

### Smart Contract Audits

- Coinbase x402 Security Audit - Official security audit of x402 protocol smart contracts.
- [EIP-3009 Security Analysis](https://eips.ethereum.org/EIPS/eip-3009#security-considerations) - Security considerations for TransferWithAuthorization.

### Security Best Practices

- [x402 Security Checklist](https://docs.cdp.coinbase.com/x402/security/checklist) - Production deployment security requirements.
  - Signature verification best practices
  - Replay attack prevention
  - Nonce management strategies
  - Rate limiting and DDoS protection

- [Payment Verification Guide](https://github.com/coinbase/x402/blob/main/SECURITY.md) - Proper payment verification implementation.
  - Facilitator trust models
  - On-chain verification fallbacks
  - Amount and recipient validation

- [Key Management](https://docs.cdp.coinbase.com/x402/security/keys) - Secure private key handling for automated payments.
  - Hardware wallet integration
  - Key rotation strategies
  - Multi-signature setups for high-value

### Known Vulnerabilities & Mitigations

- [CVE Database](https://github.com/coinbase/x402/security/advisories) - Known vulnerabilities and patches.
- [Replay Attack Prevention](https://docs.cdp.coinbase.com/x402/security/replay) - Nonce and deadline handling.
- Front-Running Mitigation - MEV protection strategies.

### Bug Bounty Programs

- [Coinbase Bug Bounty](https://hackerone.com/coinbase) - Report x402 vulnerabilities for rewards up to $50,000.
- [Immunefi x402 Program](https://immunefi.com) - Decentralized bug bounty platform.

### Security Monitoring

- [Rate Limiting Tools](https://docs.cdp.coinbase.com/x402/security/rate-limiting) - Prevent abuse and ensure service availability.
- [x402station.io](https://x402station.io) - Independent risk-signal layer for x402 agentic commerce: probes x402 endpoints (decoy / zombie / price-trap / never-paid) and returns endpoint evidence before an agent authorizes payment. MCP + REST + open [`x402-signals`](https://github.com/sF1nX/x402-signals) spec. ([GitHub](https://github.com/sF1nX/x402station-mcp) | [npm](https://www.npmjs.com/package/x402station-mcp))
- [PaySentry](https://github.com/mkmkkkkk/paysentry) - Control plane for AI agent payments. Spending limits, circuit breakers, anomaly detection, and audit trails for x402 integrations. npm: `@paysentry/x402`.
- [ShieldAPI](https://shield.vainplex.dev) - x402-native security intelligence API for AI agents. 9 endpoints: password/email breach check, domain/IP reputation, URL safety, prompt injection detection, and skill security scanning. Micropayments ($0.001–$0.02 USDC) on Base. Battle-tested against live AI agent SSRF attacks. [MCP Server](https://www.npmjs.com/package/shieldapi-mcp) | [x402scan](https://www.x402scan.com/server/55c99a38-34b3-4b2c-8987-f58ebd88a7df)
- [Agent Payment Safety Audit Desk](https://x402.bitcoinsapi.com/x402/offers/agent-api-discovery-audit.json) - 48-hour x402, MCP, wallet, and agent-payment workflow audit with reproducible smoke scripts, payment-route checks, and buyer-facing safety findings.
- [RektWatch](https://rektwatch.dev) - DeFi security intelligence feed for AI agents 
and developers. 511 protocols tracked ($553B TVL), 813 incidents indexed ($43.2B stolen), 
867 audit reports across 10 auditors, 225 live Immunefi bug bounties. Risk scores with 
per-factor explainability, live exploit alerts, and audit findings. $0.02–$0.15/call via 
x402 v2. MCP server on npm. Dataset actively growing.
- [Agent Income](https://clearance.nauti-labs.com/agent-income) - Paid readiness and monetization review endpoints for agent, API, and MCP payment flows. `POST /agent-income/audit` ($49), `POST /agent-income/review` ($199), and `POST /agent-income/blueprint` ($499) return HTTP 402 payment requirements before fulfillment; `POST /agent-income/custom-quote` handles $1500+ implementation scopes. Payment is required before work and fulfillment requires Clearance approval. ([Audit](https://clearance.nauti-labs.com/agent-income/audit) | [Review](https://clearance.nauti-labs.com/agent-income/review) | [Blueprint](https://clearance.nauti-labs.com/agent-income/blueprint) | [Custom Quote](https://clearance.nauti-labs.com/agent-income/custom-quote))

### Spending Controls & Policy Enforcement

- [Paybound](https://github.com/pando-b/paybound) - Open-source spending controls for AI agents making x402 payments. Per-agent budgets, time-windowed limits, circuit breakers, and full audit trail. Drop-in `@x402/fetch` replacement. MIT licensed.
- [PolicyLayer](https://policylayer.com) - Non-custodial spending controls for AI agents with crypto wallets. Enforces daily spending limits, per-transaction caps, recipient whitelists, and rate limiting without holding private keys.
- [ICME Labs](https://docs.icme.io) - Formal verification for AI agent actions using the ARc paper approach. Natural language policies compile to SMT-LIB formal logic, checked by an SMT solver — SAT = allowed, UNSAT = blocked. Wrapped in zero knowledge proofs for sub-1s verification, private policies, and  cryptographic audit trails per decision. 99%+ soundness under adversarial pressure. $0.10 USDC per check on Base, no account needed. Live demo policy available. 

## 🔗 Related Protocols

Adjacent protocols and standards.

### Payment Protocols

- [Lightning Network](https://lightning.network/) - Bitcoin Layer 2 micropayments.
- [Stellar](https://www.stellar.org) - Cross-border payments.
- [Request Network](https://request.network/) - Payment request protocol.

### Web Standards

- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) - Complete reference.
- EIP-3009 - TransferWithAuthorization.
- [ERC-20](https://eips.ethereum.org/EIPS/eip-20) - Token standard.

### AI & Agent Protocols

- Model Context Protocol (MCP) - Anthropic's context standard.
- [Agent Protocol (AP2)](https://agentprotocol.ai/) - Agent communication standard.
- [OpenAI Function Calling](https://platform.openai.com/docs/guides/function-calling) - Tool use API.

### Historical Reference

- 21.co Micropayments - Early Bitcoin micropayment attempt (2015).
- [HTTP 402 Proposal](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) - Original RFC (1999).

## 🤝 Contributing

Contributions welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

### How to Contribute

1. Search existing resources to avoid duplicates
2. Make an individual pull request for each suggestion
3. Use the following format: `[Resource Name](link) - Description.`
4. New categories or improvements to the existing structure are welcome
5. Check your spelling and grammar
6. Ensure your text editor removes trailing whitespace

### What to Contribute

✅ **Encouraged:**
- New implementations in different languages
- Production use cases and case studies
- Tutorials and educational content
- Tools and utilities that extend x402
- Integration examples with popular frameworks
- Documentation improvements

❌ **Please Avoid:**
- Spam or promotional links
- Duplicate resources
- Incomplete or broken projects
- Resources not directly related to x402

### Pull Request Guidelines

- Title: Use format `Add [Resource Name]` or `Update [Section]`
- Description: Briefly explain what you're adding and why it's useful
- Testing: Ensure any code examples work as expected
- Links: Verify all links are accessible and correct

### Issue Guidelines

- Use issue templates when available
- Search existing issues before creating new ones
- Provide context and examples for bug reports
- Be respectful and constructive

## Awesome Lists

Looking for more awesome lists?
- [awesome-molt-ecosystem](https://github.com/eltociear/awesome-molt-ecosystem) - Comprehensive guide to 200+ AI agent platforms with x402 economy analysis. Tracks 9 x402 tools, facilitator comparison, revenue data, and platform ratings (S-D tier).
- [gold-402](https://github.com/Haustorium12/gold-402) - Curated x402 directory by 24K Labs. 300+ handpicked entries across facilitators, SDKs, MCP servers, APIs, and tools, with editorial writeups and verified badges for production-confirmed services.

- [sindresorhus/awesome](https://github.com/sindresorhus/awesome) - The awesome list of awesome lists.
- [Awesome Blockchain](https://github.com/yjjnls/awesome-blockchain) - Blockchain resources.
- [Awesome Web3](https://github.com/ahmet/awesome-web3) - Web3 development.
- [Awesome Ethereum](https://github.com/ttumiel/Awesome-Ethereum) - Ethereum development.
- [Awesome Crypto](https://github.com/sobolevn/awesome-cryptography) - Cryptography resources.

---

<p align="center">
  <b>🚀 Built with ❤️ by <a href="https://www.xpay.sh">xpay✦</a></b><br>
  <sub>Helping the agentic community get paid and pay safely!</sub><br>
  <sub>If this helped you, please ⭐ star the repo and share it!</sub><br><br>
  <a href="https://x402.org">Official x402 Website</a> •
  <a href="https://github.com/coinbase/x402">Protocol Repo</a> •
  <a href="https://docs.cdp.coinbase.com/x402">Documentation</a> •
  <a href="https://discord.gg/x402">Discord</a> •
  <a href="https://twitter.com/x402org">Twitter</a>
</p>

- Agentic Signal — paid BTC/ETH DCA signal API (x402 USDC on Base) + signed responses + proof/backtests. Docs: https://signal.agenticsignal.dev/docs

- [HYDRA Regulatory Intelligence](https://hydra-api-nlnj.onrender.com) - Real-time regulatory risk scoring, FOMC signals, and prediction market data. 22 paid endpoints via x402. ([GitHub](https://github.com/OGCryptoKitty/hydra-arm3))


### [AgentPay](https://www.x402-agent-pay.com) — Real-World Service Booking via x402 + Stripe
**Category:** Services/Endpoints

The missing real-world layer for x402. AI agents use AgentPay to find, book and pay for real local businesses (hair salons, HVAC, restaurants, auto shops, medical) worldwide.

**Payment methods supported:**
- x402/USDC on Base (bash.001/search call — already indexed on Bazaar)
- Stripe off-session — agent charges human's saved card per booking (no human interaction)
- 7 EVM chains + Solana

**Key endpoints (OpenAPI: [openapi.json](https://www.x402-agent-pay.com/openapi.json)):**
| Endpoint | Description |
|---|---|
|  | Find real businesses near lat/lon — OpenStreetMap |
|  | Human saves card once (returns customer_id) |
|  | Agent charges card autonomously per booking |
|  | Product search — online + local stores |
|  | All chain info — ETH, Base, Polygon, ARB, OP, AVAX, BNB, SOL |



- [Pixal3D](https://pixal3d.ai) - AI-powered 3D model generator. Create stunning 3D models from text and images using AI.
### [Autonomagic](https://api.autonomagic.org) — Autonomous AI Agent with Hot-Reloading Revenue Endpoints
**Category:** Services/Endpoints

An AI agent that runs as its own business on Base mainnet — sells 22 paid HTTP endpoints behind x402, self-extends at runtime by hot-reloading new endpoints from JS plugin files (fs.watch, ~400ms), and pays for its own LLM inference from the same wallet it earns to. Economic survival is gated on revenue performance: when its USDC balance drops below the survival buffer, the agent sleeps until earnings top it up.

**Live discovery (try without paying):**
```bash
curl https://api.autonomagic.org/.well-known/x402.json
```

**Notable paid endpoints:**

| Endpoint | Price | Description |
|---|---|---|
| `/api/dev-profile` | $0.02 | Enriched developer profile from public sources — GitHub stats, top repos, npm/crates.io package authorship |
| `/api/b2b-profile` | $0.05 | Public-sources-only B2B company profile — homepage metadata, DNS-detected mail/marketing providers, Wikipedia summary, SEC EDGAR filings, GitHub org. Legal-clean alternative to LinkedIn-scraping APIs |
| `/api/scrape` | $0.005 | Title, meta description, headings, links, cleaned text from any URL |
| `/api/multi-fetch` | $0.01 | Up to 10 URLs in parallel; cleaned text per URL |
| `/api/dns` | $0.001 | Resolve A/AAAA/MX/TXT/NS records for a domain |
| `/api/health-check` | $0.001 | HTTP health check: status, response time, SSL, redirects |

**Wallet (pay-to):** `0x6C6013313dfa397f792c72f61b36A5d6bc20919b` on Base mainnet
**Demo video (1:50):** https://youtu.be/v8xL53fo8Q4
- [MAKO](https://github.com/ChrisDover/mako-verifier) — x402 trust layer (Verifier $0.25 + Pulse $0.02 + Pricing Index $0.02 + Reputation Score $0.03) on Base. Live at mako.pollinateresearch.com.
- [NEXUS Agent Services](https://nexus-agent-xa12.onrender.com) - Real-time crypto prices, Reddit intelligence, DeFi data, stock prices, sentiment analysis. $0.001-0.05/call USDC on Base.
- [- [x402-policy](https://x402-api-seven.vercel.app/docs) - Spending-policy enforcement for AI agents: pay-per-call policy checks, cross-chain trust scores, and EIP-4337 session keys, gated entirely by x402 micropayments ($0.001-0.002 USDC) on Base.
* [AI Security API](http://203.194.112.129:3000) - Token risk analysis powered by MiniMax AI M2.7. Risk scoring 1-10 with detailed reasons. $0.02 USDC per call on Base mainnet. No signup required.
