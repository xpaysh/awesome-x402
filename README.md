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

- [Arch Tools](https://archtools.dev) - 58 production API tools for AI agents with x402 payments built in. Web scraping, AI generation, crypto data, OCR, browser automation, MCP compatible. Patent-pending agent auth. 15+ chains supported. ([GitHub](https://github.com/Deesmo/Arch-AI-Tools))
- [PayAPI Market](https://payapi.market) - First marketplace for x402-powered APIs. 10 APIs, 65 endpoints: UK property data, email verification, company enrichment, postcode lookup, currency/crypto rates, screenshots, DNS intelligence, web scraping, IP geolocation, QR codes. $0.001–$0.01 USDC on Base per request. MCP server discovery. ([GitHub](https://github.com/chetparker/x402-marketplace))
- [Rug Munch Intelligence](https://x402.rugmunch.io) - 117 MCP tools + 19 REST API endpoints for crypto data: DexScreener, Birdeye, GMGN, Arkham, Nansen, Dune, Jupiter, DeFiLlama, and more. $0.001-$0.02 USDC per call. Multi-chain (Base + Solana), free trial (1 call/IP), OpenAPI spec, no API keys, no signup. ([Discovery](https://x402.rugmunch.io/.well-known/x402) | [OpenAPI](https://x402.rugmunch.io/openapi.json) | [MCP Catalog](https://x402.rugmunch.io/mcp) | [Solana](https://x402-sol.rugmunch.io/.well-known/x402) | [GitHub](https://github.com/Rug-Munch-Media-LLC/))
- [AIsa](https://aisa.network) - Leading x402 payment processor with **10.5M+ cumulative transactions** on the x402 network, demonstrating massive production scale for autonomous agent payments and micropayment infrastructure.
- [Bitget](https://www.bitget.com) - Major cryptocurrency exchange integrating x402 for seamless payment flows, enabling instant settlements and gasless transfers for trading operations.
- [Stratalize](https://www.stratalize.com) — 100+ attested financial, healthcare, real estate, and governance intelligence tools with x402 micropayments on Base. Ed25519-signed outputs on every synthesis. $0.02–$1.00 USDC per tool call. MCP registry: com.stratalize. ([x402.json](https://www.stratalize.com/.well-known/x402.json))
- [Coinbase Developer Platform](https://coinbase.com/developer-platform) - Official CDP implementation processing hundreds of thousands of transactions weekly with enterprise-grade reliability and 2-second settlement times.
- [Cloudflare Workers](https://workers.cloudflare.com) - Edge computing platform with x402 integration serving global distributed payment verification at scale across 300+ data centers.
- [GigSoul AI Research Agent](https://gig-x402-api.jayson-be1.workers.dev) - 23-endpoint AI research API for consultants: SEC filings, earnings calls, competitor analysis, market research, and document intelligence. - [Cloudflare Workers](https://workers.cloudflare.com) - Edge computing platform with x402 integration serving global distributed payment verification at scale across 300+ data centers..01 USDC per call on Base mainnet. Wallet: x2b6c16fb557291b98222a570526ff2430848b723. ([OpenAPI](https://gig-x402-api.jayson-be1.workers.dev/openapi.json) | [.well-known/x402.json](https://gig-x402-api.jayson-be1.workers.dev/.well-known/x402.json))
- [Zuluworks AI — Sovereign Shaka PQC-Shield Factory](https://api.zuluworksai.com) - Autonomous A2A factory on Cloudflare Workers selling 5 post-quantum-hardened agent services via x402 USDC on Base L2: `quantum-shield` ($0.10, ML-KEM-768 PQC tunnel — NIST FIPS 203), `kya` ($0.01, agent trust scoring), `browser-rendering` ($0.03, headless browser extraction), `memory` ($0.05, semantic recall on a PQC knowledge index), `workers-ai` ($0.02, Llama 3.1 inference). All settlement routed through Coinbase CDP facilitator for Bazaar indexing. ([Agent Card](https://api.zuluworksai.com/.well-known/agent.json) | [Bazaar Manifest](https://api.zuluworksai.com/.well-known/x402-bazaar.json) | [MCP](https://api.zuluworksai.com/.well-known/mcp.json) | [Sitemap](https://api.zuluworksai.com/sitemap.xml))

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
- [Pyrimid](https://pyrimid.ai) - Agent commerce protocol for x402-style USDC payments on Base. Includes on-chain vendor/product registry, payment router, affiliate attribution, MCP endpoint, and live catalog API for agent-discoverable paid services. Current mainnet proof: 3 vendors, 8 on-chain products, 4 routed test payments. ([Catalog](https://pyrimid.ai/api/v1/catalog)) ([MCP](https://pyrimid.ai/api/mcp)) ([Skill](https://pyrimid.ai/skill.md))
- **[Polybot Arb Intelligence](https://github.com/packrvnner/polybot-arb-api)** — Real-time cross-platform prediction market arb data (Polymarket+Kalshi+Myriad). x402 USDC on Base. [Live API](https://governments-ruth-distribution-breaks.trycloudflare.com/free/market-pulse)

- [Aigregator](https://x402.aigregator.com) - Structured data on 5,336+ AI tools via REST API and MCP server. Search, compare, and retrieve tool profiles. USDC micropayments on Base. ([MCP Server](https://x402.aigregator.com/mcp))
- [Xquik](https://xquik.com) - Real-time X (Twitter) data API with 7 MPP/x402 pay-per-use endpoints — tweet lookup, tweet search, user lookup, follower check, article extraction, media download, and trends. No accounts or subscriptions required. ([GitHub](https://github.com/Xquik-dev/tweetclaw)) ([npm](https://www.npmjs.com/package/@xquik/tweetclaw)) ([MCP Server](https://xquik.com/mcp))
- [agentsvc.io](https://agentsvc.io) - 20 utility tools for AI agents via x402 USDC micropayments on Base. Tools: `ip-lookup`, `dns-lookup`, `qr-code`, `exchange-rates`, `email-validate`, `ssl-check`, `phone-validate`, `weather`, `translate`, `whois`, `crypto-prices`, `stock-prices`, `geocode`, `web-search`, `news-search`, `pdf-extract`, `screenshot`, `webpage-reader`, `html-to-pdf`, `ocr`. $0.001–$0.008 USDC per call. No API keys, no signup. Auto-discovery: [/.well-known/agent-services.json](https://agentsvc.io/.well-known/agent-services.json) | [Catalog](https://agentsvc.io/api/v1/services) | [OpenAPI](https://agentsvc.io/api/openapi.json) | [MCP Server](https://agentsvc.io/mcp-server.mjs) | ([GitHub](https://github.com/jakobautomation/agentsvc-mcp))
- [AgentData API](https://agentdata-api.com) - Real-time crypto market data for AI agents. 16 pay-per-request endpoints on Base Mainnet: prices, funding rates, volatility, liquidation levels, DeFi yields, cross-exchange arbitrage, technical indicators (RSI/MACD/BB/ATR), support/resistance, sentiment, stablecoin health, and historical OHLCV. Self-hosted facilitator, no accounts required. Supports x402 v2 with Bazaar discovery extension. ([Discovery](https://agentdata-api.com/discovery)) ([OpenAPI](https://agentdata-api.com/openapi.json))
- [Fly Labs Agentic Market](https://flylabs.fun/agents) - YouTube data APIs for AI agents, paid in USDC on Base. Two endpoints live: `POST /api/agents/transcribe` ($0.03) returns a stable v1.0 JSON payload with verbatim transcript, language, time-indexed paragraphs, creator chapters, and canonical metadata (captions when available, Whisper fallback otherwise, no LLM rewrites). `POST /api/agents/engagement` ($0.02) returns view/like/comment counts, derived ratios, a composite engagement score, channel info (subscribers included), and full video context (tags, categories, thumbnail, availability, live status). Transparent cache on every response (`cache.hit`, `cachedAt`, `ageSec`) — transcripts are permanent, engagement refreshes every 6 hours. Typed error codes, OpenAPI 3.1, no signup. ([OpenAPI 3.1](https://flylabs.fun/api/agents/openapi.json)) ([Manifest](https://flylabs.fun/api/agents))
- [NicheData KDP Intelligence](https://nichedata.dev) - Niche demand and competition intelligence for Kindle Direct Publishing authors. AI agents query keyword-level data including demand scores, competition intensity, BSR ranges, revenue estimates, and pricing analytics. $0.03 USDC per query on Base via CDP Facilitator. Free discovery endpoint lists all available niches. ([OpenAPI](https://nichedata.dev/openapi.json)) ([Docs](https://nichedata.dev/docs))
- [DevDrops](https://devdrops.run) - 22 pay-per-query data APIs for AI agents — prediction markets (Polymarket + Manifold), property intelligence, sports odds, regulatory filings, FX rates, weather, IP geolocation, academic papers, document summarisation (Claude), and more. $0.001–$0.10 USDC per query on Base. No API keys or subscriptions. ([OpenAPI](https://api.devdrops.run/openapi.json)) ([Catalog](https://api.devdrops.run/catalog))
- [Social Intel](https://socialintel.dev) — Instagram influencer search API for AI agents. Search by niche, country, demographics, or follower count → returns usernames, bios, follower counts, business categories, and public business emails. Single-profile lookup at $0.01; full search $0.50–$1.30 (100 leads). USDC on Base, Solana, Polygon, Arbitrum. No signup. ([OpenAPI](https://socialintel.dev/openapi.json)) ([MCP Server](https://socialintel.dev/mcp/)) ([Demo](https://socialintel.dev/v1/search?query=fitness&demo=true))
- [GlobalAPI](https://globalapi.dev) - Compliance and macro-economics API hub for AI agents across 43 endpoints. Crypto wallet sanctions screening checks any EVM, BTC, Solana, TRX, or XRP address against OFAC SDN, UK FCDO, and UN SC lists in <200ms ($0.002/check); unified DeFi counterparty check bundles sanctions + Tornado Cash labels + wallet age into a PASS/WARN/BLOCK verdict ($0.01). Economic indicators from official statistical agencies — BLS and FRED (US), ONS (UK), Eurostat (EU), Statistics Canada, ABS (AU), e-Stat (JP), IMF DataMapper (190 countries), World Bank (200 countries) — with AI commentary. Company registry lookups for Norway, Singapore, Ireland, France, Canada, and Denmark. No API key — x402 USDC on Base mainnet, $0.002–$0.10/call. ([OpenAPI](https://globalapi.dev/openapi.json) | [Discovery](https://globalapi.dev/.well-known/x402))
- [TOUGH LOVE SECURITY ImageGen](https://toughlovesec.win/imagegen) - Pay-per-image AI generation powered by Cloudflare Workers AI (Stable Diffusion XL Lightning + Flux-1-Schnell). Three tiers: $0.50 single, $1.99 12-pack, $7.99 100-bundle. Stripe Checkout for humans, x402 for agents at $0.04/image. No accounts, no expiring credits. ([Launch post](https://toughlovesec.win/blog/launch-imagegen-stripe-x402))
- [TOUGH LOVE SECURITY ClawWork](https://toughlovesec.win/work) - Instant AI labor marketplace with three tiers: $5 quick polish (90s turnaround), $25 deep brief (1.5K-3K word structured deliverable), $99 full deliverable (pitch decks, RFPs, content calendars). Stripe + x402 ($0.05/call on bulk). Powered by Claude 4.7 Sonnet. ([Launch post](https://toughlovesec.win/blog/launch-clawwork-ai-labor-marketplace))
- [TOUGH LOVE SECURITY Contract Risk Score](https://toughlovesec.win/api/contract-risk-score) - Smart contract risk scoring API for DeFi devs. Scores Ethereum / Base / Arbitrum / Optimism contracts across 10 risk categories (admin-key centralization, oracle exposure, honeypot indicators, known exploit signatures). $1.25 per 5-pack via Stripe, $0.25/call via x402. Triage layer between "free Etherscan glance" and "$50K formal audit." ([Launch post](https://toughlovesec.win/blog/launch-contract-risk-score-defi-security))
- [Deepnets](https://api.deepnets.ai) - Solana token intelligence: safety analysis, deep wallet-funding-network mapping, holder breakdowns, social/Twitter research, trending feed, streamflow/staking lockup data. 13+ pay-per-request endpoints on Solana mainnet: `/api/token-safety/{mint}`, `/api/token-details/{mint}` (full holder + network breakdown), `/api/holder-analysis/{mint}`, `/api/social_research/{mint}`, `/api/wallet-details/{address}`, `/api/network-details/{networkAddress}`, `/api/trending`, `/api/watchlist`, `/api/flagged-tokens`, and more. $0.01 basic / $0.15 holder analysis. USDC on Solana, gas sponsored by the facilitator — no SOL needed. v2 with Bazaar discovery extension. ([OpenAPI](https://api.deepnets.ai/openapi.json)) ([Docs](https://api.deepnets.ai/docs)) ([Marketing](https://deepnets.ai/agents))
- [OpenPulsechain](https://safety.openpulsechain.com) - PulseChain blockchain analytics API with 28 x402-paid endpoints: token safety scores (0-100), opportunity signals, whale alerts, pair analytics (price impact, volatility), deployer reputation, AML funding tree, smart money feed, gas price, OHLCV history. Covers 5,900+ tokens. $0.001–$0.03 USDC per call on Base. ([x402 Discovery](https://safety.openpulsechain.com/.well-known/x402)) ([npm MCP](https://www.npmjs.com/package/@openpulsechain/mcp-server)) ([GitHub](https://github.com/openpulsechain/public))
- [DataFood (TOUGH LOVE SECURITY)](https://toughlovesec.win/agent-mesh) - Universal data hub for AI agents — 17 cross-niche sources (crypto prices, ETH gas, weather, news, HN, GitHub trending, DeFi yield, token risk via GoPlus, HHS healthcare-breach feed, geocoding, more) behind one `POST /api/data/bundle` call. **Bundle micropayments save up to 92% vs per-API alternatives.** Day pass $0.99 unlimited 24h, week pass $4.99. Payable via x402 USDC OR Stripe Checkout — same `session_id` works across every tool call. Free 1-row preview at `/api/data/preview?type=…&q=…`. ([Live demo](https://toughlovesec.win/agent-mesh)) ([MCP server](https://github.com/atmflow55/datafood-mcp)) ([x402 descriptor](https://toughlovesec.win/.well-known/x402.json)) ([catalog](https://toughlovesec.win/api/v1/catalog))
- [Askew](https://x402.askew.network) - Security and DeFi intelligence for AI agents. 5 pay-per-call endpoints on Base mainnet: `/yields` ($0.002, live APY across 5 chains via DefiLlama), `/staking/router` ($0.003, SOL/ATOM native vs liquid staking routing), `/research/query` ($0.003, search agent-economy research and experiment corpus), `/intel/threats` ($0.002, Guardian security threat summary), `/intel/feed` ($0.005, combined research + threats + staking strategic feed). Free preview at `/yields/preview` and `/health`. Self-hosted facilitator (xpay.sh). Auto-discovery: ([/.well-known/x402.json](https://x402.askew.network/.well-known/x402.json) | [llms.txt](https://x402.askew.network/llms.txt) | [/offers](https://x402.askew.network/offers))
- [BitBooth](https://app.heinrichstech.com/bazaar.json) - 6 utility, content, and security endpoints for AI agents on Base mainnet, settling via Coinbase CDP Facilitator. Tools: `echo` (x402 reference impl), `json-repair` (LLM tool-output cleanup with optional JSON Schema validation), `faker` (synthetic test data via @faker-js/faker), `render-pro` (full Playwright JS rendering + Mozilla Readability extraction for SPAs), `web-diff` (rendered URL change detection vs caller-supplied previous markdown), `approval-safety` (ERC-20 `approve(spender, amount)` pre-flight risk check — flags unlimited approvals to fresh contracts, EOA spenders, copycat tokens). $0.001 USDC per call for utility tier, $0.05 for premium tier. No API keys, no subscriptions. Self-hosted discovery at [bazaar.json](https://app.heinrichstech.com/bazaar.json). ([GitHub](https://github.com/Drock91/bitbooth-gateway))
- [EconDash](https://econdash.org) - Global macroeconomic data API for AI agents: 753 indicators across 298 countries (World Bank, FRED, OECD). 15 x402-protected endpoints for GDP, inflation, employment, trade, country profiles, rankings, and metadata. $0.02 USDC/call on Base. Also supports MPP (Tempo + Solana). ([Docs](https://econdash.org/docs/quick-start)) ([OpenAPI](https://econdash.org/m2m-openapi.json))

### Games & On-Chain Apps
- **[Flipr](https://flipr-x402.fly.dev)** — On-chain coin flip game on Base (Chainlink VRF). Agents pay live USDC quote (~$1.23) per flip; pots paid in ETH. Two pots: 2-hour competitive (longest streak wins) and target-streak jackpot (hit N consecutive heads to win). Free decision endpoints (`/preview`, `/opportunity`) so agents can compute ROI before paying — no x402 wallet needed to evaluate. Speaks x402, MCP, and A2A simultaneously. ([OpenAPI](https://flipr-x402.fly.dev/openapi.json)) ([Agent Card](https://flipr-x402.fly.dev/.well-known/agent.json)) ([MCP Server](https://flipr-x402.fly.dev/mcp)) ([Game Info](https://flipr-x402.fly.dev/game-info))
- [Contract Risk Checker](https://contract-checker-572078894996.us-central1.run.app) - AI-powered legal contract analysis for autonomous agents. Detects killer clauses, calculates risk score 0–100 (RED/YELLOW/GREEN), generates negotiation scripts and exact fix suggestions. Supports PDF, DOCX, TXT up to ~600 pages. $10 USDC per analysis on Base + Solana. No subscription, no account. ([Docs](https://contract-checker-572078894996.us-central1.run.app/docs))
- [Invoice Parser](https://invoice-parser-572078894996.us-central1.run.app) - Structured invoice data extraction for finance automation agents. Extracts vendor, total, line items, dates, tax, and payment details from PDF/image invoices. Returns clean JSON ready for accounting systems. $0.10 USDC per parse on Base. No API keys, no signup. ([Docs](https://invoice-parser-572078894996.us-central1.run.app/docs))

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
- [Azeth SDK](https://github.com/azeth-protocol/sdk) - TypeScript SDK with x402 client (`fetch402`), ERC-4337 smart accounts, on-chain reputation feedback after every x402 call, and ERC-8004 service discovery. USDC on Base. ([npm](https://www.npmjs.com/package/@azeth/sdk))
- [MoltsPay](https://github.com/Yaqing2023/moltspay) - Payment infrastructure for AI agents with x402 support. CLI, TypeScript SDK, and LangChain/CrewAI integrations. Gasless payments on Base, Polygon, Solana, BNB, Tempo. Spending limits and multi-chain support. ([npm](https://www.npmjs.com/package/moltspay))

**Wallet Integration**
- [Agent Wallet SDK](https://www.npmjs.com/package/agentwallet-sdk) - Non-custodial smart contract wallets for AI agents with on-chain spend limits and operator model. Base L2. ([npm](https://www.npmjs.com/package/agentwallet-sdk))
- [viem](https://viem.sh/) - TypeScript library used for signing payments.
- [ethers.js](https://docs.ethers.org/) - Alternative Ethereum library.

### Rust

- [alloy](https://github.com/alloy-rs/alloy) - High-performance Ethereum library.

## 🔧 Server Frameworks & Middleware

Server-side integrations for accepting x402 payments.

### Node.js/TypeScript

**Multi-Framework**
- [monapi](https://monapi.dev) - One-line API monetization SDK. Wraps x402 setup into a single function call. Express, Next.js, and MCP support. Per-route pricing, Base/Arbitrum/Polygon, gas-free agent payments via EIP-3009. ([npm](https://www.npmjs.com/package/@monapi/sdk)) ([GitHub](https://github.com/DenisTheM/monapi))
- [autonomagic-marketplace](https://www.npmjs.com/package/autonomagic-marketplace) - Plugin marketplace primitive for x402. Drop a JS file in `endpoints/`, the loader registers it as a paid HTTP endpoint in ~400ms via fs.watch (no restart, no manifest edits). Generates Bazaar-shape 402 challenge with EIP-712 extras, `/.well-known/x402.json` manifest, agent-card, and OpenAPI spec automatically. Zero runtime dependencies. Production-extracted from api.autonomagic.org's 22 paid endpoints. ([npm](https://www.npmjs.com/package/autonomagic-marketplace)) ([GitHub](https://github.com/premsreelathasugeendran/autonomagic-marketplace))

**Express / Hono**
- [@moltrust/x402](https://www.npmjs.com/package/@moltrust/x402) - Trust score middleware for x402 endpoints. One line: `app.use(requireScore({ minScore: 60 }))`. Extracts paying wallet from X-Payment header, looks up MolTrust trust score, blocks agents below threshold with 403 + registration link. Zero dependencies. ([npm](https://www.npmjs.com/package/@moltrust/x402)) ([GitHub](https://github.com/MoltyCel/moltrust-x402))
- [@larkinsh/x402](https://www.npmjs.com/package/@larkinsh/x402) - Authorization middleware for x402 endpoints. One line: `preflight(handler, { minScore: 40 })`. Gates by a 5-dimension trust score (wallet age, tx history, counterparties, funding source, ERC-8004), returns Ed25519-signed receipts verifiable with only the public key, supports block / warn / surcharge modes. Hono / Express / Next adapters. ([npm](https://www.npmjs.com/package/@larkinsh/x402)) ([GitHub](https://github.com/larkin-dev/larkin))

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

**Client Libraries**
- [x402 Payment Harness](https://github.com/rplryan/x402-payment-harness) - Python library + CLI for x402 payments without requiring Coinbase CDP wallet. Works with any Ethereum EOA. Full HTTP 402 -> EIP-712 sign -> X-PAYMENT header flow. `pip install x402-payment-harness`. ([PyPI](https://pypi.org/project/x402-payment-harness/))
- [MoltsPay Python](https://github.com/Yaqing2023/moltspay-python) - Python SDK for x402 agent payments. LangChain compatible. Auto-creates wallets, discovers services, pays via x402. Multi-chain: Base, Polygon, Solana, BNB. ([PyPI](https://pypi.org/project/moltspay/))

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
- [AlgoVoi](https://api1.ilovechicken.co.uk/.well-known/agent.json) - Multi-chain x402 facilitator spanning EVM (Base, Tempo), SVM (Solana), AVM (Algorand, VOI), Stellar, and Hedera on a single endpoint. Native Solana Pay `reference` pubkey binding (cryptographic tx↔order correlation without memos). Also implements MPP and AP2 at the same URL. [Open-source MCP adapter](https://github.com/chopmob-cloud/AlgoVoi-Platform-Adapters).
- [x402-saas](https://x402-saas.surge.sh) - Hosted facilitator + zero-SDK onboarding proxy on Base. SIWE auth, slug-routed multi-tenant data plane, 1% of routed USDC volume. MIT-licensed self-host alternative at [x402-kit](https://github.com/kite-builds-erik/x402-kit). Live demo at [`/__x402/health`](https://x402-saas.onrender.com/__x402/health).

### Self-Hosted Facilitators

- x402-rs Facilitator - Production-grade Rust facilitator.
  - Docker deployment support
  - Multi-chain configuration
  - REST API endpoints (/verify, /settle)
- [Running Your Own Facilitator](https://github.com/x402-rs/x402-rs#facilitator) - Setup guide.
- [@facilitator/eip7702](https://github.com/melonask/facilitator) - Support for all EVM blockchains (BNB, Polygon, etc.), all tokens (USDT, DAI, WBTC, etc.), and all native coins (POL, AVAX, etc.).
- [agenticpay facilitator](https://github.com/krystiangw/agenticpay/tree/main/packages/facilitator) ([npm](https://www.npmjs.com/package/@agenticpay/facilitator)) - Open-source TypeScript facilitator for Solana (devnet + mainnet). Verify + settle via `@x402/svm/exact/facilitator`, fee_payer abstraction so payers only need USDC, persistent keypair via env var (Heroku/Fly-friendly). Hosted devnet endpoint: `https://agentpay-facilitator-e9b20a5fee6a.herokuapp.com`.

## 💡 Example Applications

Full working examples and templates.

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
- [Daizyx402 Security Research API](http://daizyx402.com:5402) - AI-powered smart contract security analysis and DeFi vulnerability research by autonomous agent. $0.05 USDC per query, $0.50 USDC deep analysis on Base mainnet. No signup required.

- [tx402.ai](https://tx402.ai) - Agent-native LLM inference gateway. 20+ EU-hosted models (DeepSeek, Qwen, Llama, GLM, Mixtral) via x402 USDC micropayments on Base. OpenAI-compatible API, SSE streaming, GDPR-compliant, zero data retention. No API keys — wallet is auth. [Models](https://tx402.ai/v1/models) | [OpenAPI](https://tx402.ai/openapi.json) | [llms.txt](https://tx402.ai/llms.txt) | [Source](https://github.com/Tensorix-ai/agent-gateway)
- [SolSignal API](https://solsignal-api.onrender.com) - Solana token safety scanner — aggregates DexScreener, RugCheck, GoPlus & Jupiter simulation into one SAFE/CAUTION/AVOID/RUG verdict in <2s. 10 free scans/day, $0.01 USDC per call on Solana. [Source](https://github.com/cryptomotifs/solsignal-api)
- [x402 Gateway](https://zoning-amsterdam-ends-disposition.trycloudflare.com) - Simple Node.js API gateway for AI agents. Weather ($0.01), crypto prices ($0.01), exchange rates ($0.005), news ($0.02). USDC on Polygon. HTTPS via Cloudflare Tunnel. [Source](https://github.com/863king/x402-gateway)
- [Alfred's Digital Bazaar](https://httpay.xyz) - ~100 x402-paywalled API endpoints built by an AI agent. Fortune cookies, wallet roasts, crypto pickup lines, token analysis & more. $0.10–$1.00 USDC per call on Base. No signup required. [Source](https://github.com/Alfredz0x/alfreds-digital-bazaar)
- [Banking Bodyguard](https://bodyguard.finance) - Real-time cbBTC whale movement signals on Base. Scored sentiment (1-10), impact vs 24h DEX volume, and HOLD/TIGHTEN_STOP/EXIT recommendations. ~500K signals indexed. x402 enforced — $0.10 USDC per call on Base. [Docs](https://bodyguard.finance/docs)
- * [Banking Bodyguard](https://bodyguard.finance) - Real-time cbBTC whale movement signals on Base. Scored sentiment (1-10), impact vs 24h DEX volume, and HOLD/TIGHTEN_STOP/EXIT recommendations. ~500K signals indexed. x402 infrastructure live ([first payment tx](https://basescan.org/tx/0x26253b9664c2710c7d6eb937e4083409d69d26d47eb9488b11ac256f0496bbd3)), currently in free pilot during CDP facilitator integration. $0.10 USDC per call on Base. [Docs](https://bodyguard.finance/docs)

- [Solana Trading Data API](https://x402-solana-data.onrender.com) - Real-time Solana ecosystem data for AI agents. `GET /api/trending` (hot tokens, new pairs, wallet flows), `GET /api/token/{mint}` (full token profile — holders, liquidity, transactions). x402 gated at $0.01 USDC per call on Solana mainnet. [.well-known/x402](https://x402-solana-data.onrender.com/.well-known/x402) | [.well-known/agent-card.json](https://x402-solana-data.onrender.com/.well-known/agent-card.json) | [Source](https://github.com/memegent-unofficial/solana-trading-data-api)
- [Gotobi Calendar API](https://gotobi.hugen.tokyo) - Japanese FX gotobi date intelligence for trading agents. Holiday-aware USD settlement day detection with next-date lookup and monthly schedules. $0.01 USDC on Base and Solana. [Source](https://github.com/bartonguestier1725-collab/x402-gotobi-api)
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
- [Whale Intelligence API](https://whale.hugen.tokyo) - On-chain whale tracking for AI agents. 412K+ labeled Ethereum addresses across 540 categories (exchanges, DeFi, bridges, MEV, exploits). Address label lookup, wallet activity profiling with balance and transfers, and large transfer detection with entity resolution. $0.01–$0.02 USDC per call on Base. [llms.txt](https://whale.hugen.tokyo/llms.txt)
- [COT Intelligence API](https://cot.hugen.tokyo) - CFTC Commitments of Traders data for FX trading agents. Weekly futures positioning with z-score analysis for JPY, EUR, GBP, CHF, CAD, AUD. Positioning extremes detection, yield-momentum cross signals, and 26-week z-score history. $0.01–$0.02 USDC per call on Base. [llms.txt](https://cot.hugen.tokyo/llms.txt)
- [Polymarket Intelligence API](https://polymarket.hugen.tokyo) - Prediction market anomaly signals for AI agents. Z-score detection on Polymarket odds — surfaces events where odds moved 2+ standard deviations from rolling mean. Covers fed rates, crypto prices, regulation, geopolitics, tariffs. $0.01 USDC per call on Base. [llms.txt](https://polymarket.hugen.tokyo/llms.txt)
- [Sanctions Screening API](https://sanctions.hugen.tokyo) - OFAC, EU, and UN Security Council sanctions screening for AI agents. 26,800+ sanctioned entities with fuzzy name matching and word-boundary filtering. Screen names or search with source filtering. $0.01 USDC per call on Base. [llms.txt](https://sanctions.hugen.tokyo/llms.txt)
- [CVE Intelligence API](https://cve.hugen.tokyo) - NVD vulnerability lookup, search, and recent CVEs for AI agents. CVSS v3.1/v4.0 score normalization, severity classification, affected product extraction from CPE trees, and CISA Known Exploited Vulnerabilities flags. $0.01 USDC per call on Base. [llms.txt](https://cve.hugen.tokyo/llms.txt)
- [FDA Intelligence API](https://fda.hugen.tokyo) - OpenFDA drug and device safety intelligence for AI agents. Drug adverse event aggregation with severity/outcome stats, label key section extraction, drug and device recall classification (Class I/II/III). 4 endpoints at $0.01 USDC per call on Base. [llms.txt](https://fda.hugen.tokyo/llms.txt)
- [Nutrition Intelligence API](https://nutrition.hugen.tokyo) - USDA FoodData Central nutrition data for AI agents. Search 350K+ foods, full nutrient profiles with %DV, and side-by-side comparison. Macros, vitamins, minerals categorized. $0.01 USDC per call on Base. [llms.txt](https://nutrition.hugen.tokyo/llms.txt)
- [EDGAR Intelligence API](https://edgar.hugen.tokyo) - SEC EDGAR corporate filing intelligence for AI agents. Company search with ticker/CIK, filing history by type (10-K/10-Q/8-K/20-F), and XBRL financial facts with YoY growth rates. Revenue, net income, EPS, assets. $0.01 USDC per call on Base. [llms.txt](https://edgar.hugen.tokyo/llms.txt)
- [DeepBlue Trading API](https://api.deepbluebase.xyz) - AI-powered crypto intelligence from an autonomous trading team running real money on Polymarket. 21 endpoints: live BTC/ETH/SOL/XRP signals, prediction market analytics, sentiment composites, whale tracking, and macro briefings. $0.01–$0.05 USDC per call on Base. [OpenAPI](https://api.deepbluebase.xyz/openapi.json)
- [MoonMaker API](https://api.moonmaker.cc) - AI-native crypto data API with x402 pay-per-call. 11 endpoints: signals, market context, DeFi regime, institutions, ETF flows, DeFi yields, DEX alpha. $0.02–$0.10/call USDC on Base. No signup. [llms.txt](https://api.moonmaker.cc/llms.txt)
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

### Client Examples
- [CentRake](https://centrake.biz) — AI-powered universal calculator with 3-layer self-correcting verification engine. 5-tier dynamic pricing: $0.01 basic solve, $0.05 verified solve (calculus/finance), $0.10 research solve (proofs/theorems), $0.15 AI action plans, $0.02 AI search. 438+ problem categories across math, finance, science, statistics, health, and everyday domains. Free for humans, paid for AI agents. USDC on Base. [Discovery](https://centrake.biz/api/.well-known/x402) | [Pricing](https://centrake.biz/api/x402/tiers) | [Info](https://centrake.biz/api/x402/info)
- [Axios Client](https://github.com/coinbase/x402/tree/main/examples/typescript/clients/axios) - Automatic payment handling.
- [Fetch Client](https://github.com/coinbase/x402/tree/main/examples/typescript/clients/fetch) - Fetch API wrapper demo.
- Python Requests - Python client example.

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

- [MYA / Monetize Your Agent](https://monetizeyouragent.fun) - AI agent launchpad and discovery hub connected to Pyrimid payment rails. Agents and vendors can publish `skill.md` manifests, discover services, and route paid actions through Pyrimid's Base USDC payment router. ([Skill](https://monetizeyouragent.fun/skill.md))
- [MAXIA](https://maxiaworld.app) - AI-to-AI marketplace implementing x402 V2 micropayments on Solana and Base for autonomous agent service payments.
- [WorkProtocol](https://workprotocol.ai) - Open job marketplace where AI agents find structured work, deliver artifacts, and get paid in USDC on Base. Escrow-backed with automated verification (CI-based for code jobs), portable on-chain reputation, and A2A + MCP discovery. Framework-agnostic — agents from LangChain, CrewAI, OpenClaw, or custom stacks can register and earn. ([GitHub](https://github.com/Atlaskos/workprotocol)) | ([Docs](https://workprotocol.ai/docs/quickstart))

Enable AI agents to make autonomous payments.
- [agentsvc.io MCP Server](https://agentsvc.io/mcp-server.mjs) - 20 pay-per-call utility tools via MCP + x402: screenshots (Playwright), OCR (Tesseract), PDF generation, webpage reader, web/news search, weather, forex/crypto/stock prices, DNS, IP geolocation, geocoding, translation, QR codes, email/phone/SSL validation, WHOIS. $0.001–$0.008 USDC per call on Base. Download: `curl -O https://agentsvc.io/mcp-server.mjs && npm install viem x402`. ([GitHub](https://github.com/jakobautomation/agentsvc-mcp)) ([Catalog](https://agentsvc.io/api/v1/services))
- [SelfHeal](https://selfheal.dev) - Self-healing API proxy for AI agents with x402 outcome-based pricing. Agents route HTTP calls through the proxy — successes pass through free, failures trigger x402 payment for LLM-powered error diagnosis + response normalization. $0.001-$0.005 USDC on Base, charged only on successful heal. Published SDKs on npm and PyPI with native x402 support. ([GitHub](https://github.com/carsonlabs/graceful-fail)) ([npm](https://www.npmjs.com/package/graceful-fail)) ([PyPI](https://pypi.org/project/graceful-fail/))
- [Strale MCP Server](https://api.strale.io/mcp) - 250+ business data and compliance tools for AI agents via MCP. IBAN validation, VAT format checks, sanctions screening, company lookups, SSL certificate checks, domain reputation, and more. Each capability independently tested with quality scores. x402 USDC micropayments on Base. Also available as REST API.
- [IBANforge](https://ibanforge.com) - Compliance API for AI agents focused on European banking: IBAN validation (mod-97 + BBAN), BIC/SWIFT lookup against 121,197 GLEIF entries with LEI enrichment, **Swiss BC-Nummer / QR-IID lookup** (1,190 SIX BankMaster entries — only API exposing this), EMI / vIBAN / neobank classification, SEPA Instant + VoP (EU 2024/886) reachability, OFAC/EU/UN sanctions + FATF risk scoring. Two transports: stdio via `npx -y ibanforge-mcp` and Streamable HTTP at [api.ibanforge.com/mcp](https://api.ibanforge.com/mcp). $0.003–$0.02 USDC per call on Base. Free tier 200 req/month with API key. ([GitHub](https://github.com/cammac-creator/ibanforge)) ([npm](https://www.npmjs.com/package/ibanforge-mcp)) ([MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=ibanforge)) ([x402 discovery](https://api.ibanforge.com/.well-known/x402))

### Agent Verification & Security

- [Achilles EP AgentIAM](https://achillesalpha.onrender.com/quickstart) — 5 AI agent verification endpoints (NoLeak, MemGuard, RiskOracle, SecureExec, FlowCore) on Base Mainnet. $0.01-$0.02 USDC per call via x402.
- [Boundary Guard](https://boundary-guard.vercel.app) - Pre-action checkpoint API for agents. Returns `allow`, `retry`, or `block` plus a deterministic receipt before downstream writes, sends, or other actions. Live docs and x402 inventory are published on the public host. ([GitHub](https://github.com/LarryLemonBot/boundary-guard))
- [Agent Passport System (APS)](https://github.com/aeoess/agent-passport-system) - Open-source governance and delegation layer for x402. Provides cryptographic agent identity, scoped delegation with spending caps, rotation-aware DID verification, and signed receipts with per-condition attestation. Apache 2.0.

### GPU Inference APIs

x402-native GPU inference APIs that let agents pay autonomously for compute.

- [GPU-Bridge](https://gpubridge.xyz) - 30-service GPU inference API with native x402 payments (USDC on Base L2). LLM, image generation, embeddings, STT, TTS, PDF processing — all in one API. Agents pay per call with no human intervention. /usr/bin/bash.00002/embedding, /usr/bin/bash.001/LLM call. ([Docs](https://docs.gpubridge.xyz)) ([GitHub](https://github.com/fjnunezp75/gpu-bridge))

### Model Context Protocol (MCP)

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
- [x402search MCP](https://github.com/x402-index/x402search-mcp) - Search 14,000+ x402-enabled HTTP APIs by keyword. The largest x402 API index available. Agents pay $0.01 USDC per search on Base mainnet — no API keys required. Available on npm and PyPI. Also live as ACP agent on Virtuals Protocol (ID 22531). ([npm](https://www.npmjs.com/package/x402search-mcp)) ([PyPI](https://pypi.org/project/x402search-mcp))
- [AetherCore-Dev/token-rugcheck](https://github.com/AetherCore-Dev/token-rugcheck) - Solana token safety audit for AI agents. Three-layer risk analysis (machine verdict + LLM analysis + raw on-chain evidence) from RugCheck.xyz, DexScreener, and GoPlus Security. Live on mainnet with USDC micropayments ($0.02/audit) via x402 protocol. [Glama](https://glama.ai/mcp/servers/AetherCore-Dev/token-rugcheck)
- [Harvey Intel](https://agents.rugslayer.com) - x402-paid MCP server for Solana token rug pull detection (DrainBrain ML ensemble), trading signals, and social intelligence. 8 tools, $0.005–0.05 USDC on Solana. ([GitHub](https://github.com/meltingpixelsai/harvey-intel)) | ([npm](https://www.npmjs.com/package/@meltingpixels/harvey-intel))
- [Harvey Tools](https://tools.rugslayer.com) - x402-paid MCP server for web scraping, screenshots, structured data extraction, code review, content generation, and sentiment analysis. 8 tools, $0.005–0.05 USDC on Solana. ([GitHub](https://github.com/meltingpixelsai/harvey-tools)) | ([npm](https://www.npmjs.com/package/@meltingpixels/harvey-tools))
- [Harvey Verify](https://verify.rugslayer.com) - x402-paid MCP server for post-transaction outcome verification using LLM-as-judge. Tracks aggregated service quality scores. 5 tools, $0.002–0.01 USDC on Solana. ([GitHub](https://github.com/meltingpixelsai/harvey-verify)) | ([npm](https://www.npmjs.com/package/@meltingpixels/harvey-verify))
- [Harvey Budget](https://budget.rugslayer.com) - x402-paid MCP server for agent spending management with budget tracking, ROI analysis, and spend approval. 6 tools, $0.001–0.005 USDC on Solana. ([GitHub](https://github.com/meltingpixelsai/harvey-budget)) | ([npm](https://www.npmjs.com/package/@meltingpixels/harvey-budget))
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
- [JubJub MCP](https://api.jubjubapp.com/v2/mcp) - 65-tool MCP server for media publishing, cross-platform analytics, and automated on-chain royalty splits. Agents publish content, track performance, and surface claimable USDC balances autonomously. api.jubjubapp.com/v2/mcp
- [Human Pages](https://humanpages.ai) - The open directory AI agents use to hire humans for real-world tasks. Supports x402 pay-per-use for profile views ($0.05) and job offers ($0.25) in USDC on Base. Also available as an [MCP server](https://github.com/human-pages-ai/humanpages) with 31 tools.
- [TweetClaw](https://xquik.com/mcp) - OpenClaw/MCP plugin for Xquik's real-time X (Twitter) data. 7 pay-per-use endpoints via MPP/x402 — tweet lookup, search, user lookup, follower check, article, media download, and trends. ([GitHub](https://github.com/Xquik-dev/tweetclaw)) ([npm](https://www.npmjs.com/package/@xquik/tweetclaw))
- [ZKProofport MCP](https://github.com/zkproofport/proofport-ai) - Zero-knowledge identity proof MCP server. Generates Coinbase KYC, Country, Google OIDC, Workspace, and MS 365 proofs without revealing personal data. AWS Nitro Enclave TEE proving, ERC-8004 registered (token ID 25331). x402 USDC payments on Base. NPM: `@zkproofport-ai/mcp`. Reference application [OpenStoa](https://github.com/zkproofport/openstoa) won 1st place at The Synthesis Hackathon ("Agents That Keep Secrets" track, April 2026).
- [Onyx Actions](https://onyx-actions.onrender.com) - Paid agent tools that unstick agents at signup walls and login flows. Captcha OCR via ddddocr (~30ms, 70-90% accuracy, $0.003 USDC) + SMS OTP delivered via real carrier SIM with demo-mode for testing ($0.05 USDC). MCP-native at `/mcp/`, REST fallback at `/v1/<tool>`, full Bazaar-discoverable manifest at `/.well-known/x402.json`. Base mainnet/sepolia. ([GitHub](https://github.com/dimitrilaouanis-tech/onyx-mcp)) ([Smithery](https://smithery.ai/servers/dimitrilaouanis/onyx-mcp))
- [TensorFeed MCP](https://www.npmjs.com/package/@tensorfeed/mcp-server) - 6 free + 15 paid MCP tools for AI industry intelligence: real-time AI news, service status, model pricing, model routing recommendations, news search, pricing/benchmark/uptime history series, snapshot diff, enriched agents directory, cost projection, forecasting, provider deep-dive, model comparison, and webhook watches with daily/weekly digest tier. $0.02 USDC per credit on Base, volume discounts at $5/$30/$200. x402 V2 discovery at `/.well-known/x402`. Already in the official MCP registry as `ai.tensorfeed/mcp-server` (DNS-verified `tensorfeed.ai`). `npx -y @tensorfeed/mcp-server`. ([GitHub](https://github.com/RipperMercs/tensorfeed/tree/main/mcp-server)) | ([Docs](https://tensorfeed.ai/developers/agent-payments)) | ([Discovery](https://tensorfeed.ai/.well-known/x402))
- [TensorFeed MCP](https://github.com/RipperMercs/tensorfeed/tree/main/mcp-server) - Real-time AI industry intelligence MCP server. 6 free tools (AI news from 15+ sources, service status, model pricing, today summary, agent activity) plus 13 paid premium tools (routing recommendations, news search, history series, cost projection, provider deep-dive, model comparison, agents directory, what's new brief, webhook watches with daily/weekly digest tier). Welcome bonus of 50 free credits on first wallet payment. Pay-per-call in USDC on Base mainnet, no accounts. `npx -y @tensorfeed/mcp-server`. ([npm](https://www.npmjs.com/package/@tensorfeed/mcp-server)) ([Docs](https://tensorfeed.ai/developers/agent-payments))
- [MoltPe MCP Server](https://github.com/umangbuilds/moltpe-agent-payments) - **MoltPe** — AI-native payment infrastructure with 11 MCP tools for autonomous USDC payments. Non-custodial agent wallets with Shamir key splitting, programmable spending policies (daily caps, per-tx caps, allowlists), and tri-rail support: x402 (HTTP-native), MPP (session-based), and fiat. Sub-second settlement on Polygon PoS, Base, and Tempo. Free tier, no credit card. ([Site](https://moltpe.com)) ([Repo](https://github.com/umangbuilds/moltpe-agent-payments))

### Agent Frameworks

- [ATXP](https://github.com/atxp-dev/atxp) - Agent identity and funding platform. One command — `npx atxp agent register` — gives an agent a USDC wallet on Base, an `@atxp.email` inbox, a phone number, and 100+ paid tools (web search, image/video generation, LLM gateway). x402-compatible; agents can pay x402 endpoints directly from their ATXP balance. $5 free credit, no KYC. ([Docs](https://docs.atxp.ai))
- [NEAR AI](https://near.ai) - Cross-chain agent settlements.
- [Phidata Agents](https://github.com/phidatahq/phidata) - Multi-modal agents with x402.
- [Vault-0](https://github.com/0-Vault/Vault-0) - Encrypted secret vault, agent monitor, and x402 wallet for OpenClaw. Handles 402 detection, EIP-3009 signing, and policy-gated auto-settlement.
- [CardZero](https://cardzero.ai) - Payment wallet for AI agents on Base L2. Each agent gets an ERC-4337 smart contract wallet with owner-controlled spending rules (per-tx limits, daily caps, whitelist, freeze). x402 buyer support via `POST /v1/x402/pay`. [ClawHub](https://clawhub.ai/mrocker/cardzero) | [GitHub](https://github.com/mrocker/CardZero) | [API Docs](https://cardzero.ai/docs/api)

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


## 🔨 Tools & Utilities

Development tools and utilities for x402.

### CLI Tools

- [Foundry](https://getfoundry.sh/) - Smart contract development toolkit.
- [x402-proxy](https://github.com/cascade-protocol/x402-proxy) - `curl` for x402 paid APIs. Auto-pays HTTP 402 responses with USDC on Base and Solana, with MCP stdio proxy for AI agents. `npx x402-proxy`. ([npm](https://www.npmjs.com/package/x402-proxy))

### Monitoring & Analytics

- Dune Analytics - On-chain metrics and visualizations.
- [Sentinel](https://sentinel.valeocash.com) - Enterprise audit & compliance layer for x402 payments. Budget enforcement (per-call, hourly, daily), structured audit trails, real-time dashboard, and public payment explorer. SDK: [`@x402sentinel/x402`](https://npmjs.com/package/@x402sentinel/x402). Built by [Valeo](https://valeocash.com)

- [ScoutScore](https://scoutscore.ai) - Trust scoring infrastructure for x402 services. Monitors 1,700+ services with continuous health checks and fidelity probes using a 4-pillar model (Contract Clarity, Availability, Response Fidelity, Identity & Safety). [API Docs](https://scoutscore.ai/docs) · [npm SDK](https://www.npmjs.com/package/@scoutscore/sdk) · [MCP Server](https://www.npmjs.com/package/@scoutscore/mcp-server)
- [Paybound](https://github.com/pando-b/paybound) - Open-source governance proxy for x402 agent payments. Per-agent budgets, circuit breakers, and SQLite audit trail.
- [Agent Forensics](https://www.npmjs.com/package/agent-forensics) - Agent cost observability for Claude Code. Analyzes JSONL session logs to show per-model cost breakdown, cache efficiency, waste patterns (model misallocation, debug loops, sub-agent sprawl), and estimated savings. Free CLI: `npx agent-forensics analyze`. x402 API: $5 basic / $15 full tier on Base. ([Live](https://api.agentsconsultants.com))

- [SwarmX (swarms-x402)](https://github.com/SolTwizzy/swarms-x402) - Multi-agent AI orchestration with x402 micropayments. 49 endpoints, 39 MCP tools, knowledge/RAG. ([npm](https://www.npmjs.com/package/swarms-x402)) ([Live](https://swarmx.io))

### Security & Analysis

- [Base Token Safety Scanner](https://base-token-scanner.onrender.com) - Free API that analyzes Base chain ERC-20 tokens for rug pull risks, honeypots, ownership issues, and security flags. Returns risk score with detailed flag breakdown. Built for AI agents and DeFi traders. ([GitHub](https://github.com/0xVarius/base-token-scanner)) ([Guide](https://base-token-scanner.onrender.com/guide))


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

- [Orbis API Marketplace](https://orbisapi.com) - x402-native API marketplace with 1,000+ APIs at $0.01/call via USDC on Base. Built for AI agents — weather, financial data, text processing, crypto data. No API keys required.
Projects building with or extending x402.

### Infrastructure

- [Coinbase Developer Platform](https://coinbase.com/cloud) - Hosted facilitator service with enterprise-grade reliability and instant settlement.
- Cloudflare x402 - Edge payment processing.
- [Hive Civilization](https://thehiveryiq.com) — 52-service x402-wired agent fleet on Base mainnet (treasury 0x15184bf50b3d3f52b60434f8942b7d52f2eb436e, USDC EIP-3009 settlement). Free-discovery + paid-call pattern across construction compliance (ICC-ES), seismic data (USGS), housing starts (FRED), agent reputation (HiveTrust), MEV gradient, ZK attestations, and 41 public MCP shims at github.com/srotzin (all v1.0.0). 51 entries on Anthropic MCP Registry. Public MEV leaderboard ([hive-a2amev](https://hive-a2amev.onrender.com/leaderboard)) and verifiable Spectral receipts. ([GitHub](https://github.com/srotzin)) | ([@hivecivilization/x402-helpers](https://github.com/srotzin/x402-helpers))
- [Finance District Prism](https://developers.fd.xyz/prism/concepts/x402) - Payment gateway for agentic commerce with x402 support. SDKs for TypeScript, Python, and Java. Two-layer architecture: Prism (orchestration — API, SDKs, middleware) and Spectrum (on-chain stablecoin settlement across Base, Ethereum, Arbitrum, and BSC). ([Docs](https://developers.fd.xyz))
- [Bermuda](https://www.bermudabay.xyz) - ZK-private HTTP payments for x402. Adds sender privacy via Noir zero-knowledge proofs on Base, so AI agents and API consumers can pay without exposing wallet balances or transaction history. ([GitHub](https://github.com/BermudaBay/sdk))
- [thirdweb Nebula](https://thirdweb.com/nebula) - AI agent transaction framework.
- [RustChain](https://github.com/Scottcjn/Rustchain) - Decentralized proof-of-stake blockchain with x402 payment integration for AI agent micropayments. Features attestation-based consensus, hardware-bound validators, and RTC token economy with native x402 support for autonomous agent transactions. ([Docs](https://github.com/Scottcjn/rustchain-bounties))
- [MoltsPay](https://moltspay.com) - Open payment protocol for AI agents. Add one JSON file to any skill to accept x402 payments. Gasless for both providers and clients. Multi-chain (Base, Polygon, Solana, BNB, Tempo). CLI, TypeScript/Python SDKs, testnet faucet. ([GitHub](https://github.com/Yaqing2023/moltspay)) | ([Docs](https://moltspay.com/docs))
- [EntRoute](https://entroute.com) - Machine-first API discovery for AI agents. Ranked, verified x402 endpoints across 110+ capabilities with semantic intent resolution, continuous 402 verification probes, and quality ranking. MCP server, TypeScript SDK, and REST API. ([GitHub](https://github.com/entroute/mcp-server)) | ([npm](https://www.npmjs.com/package/@entroute/mcp-server)) | ([Docs](https://entroute.com/docs))
- [XyncPay](https://xyncpay.com) — Non-custodial protocol translation layer bridging x402, MPP, and AP2. One integration, every AI agent payment protocol. Atomic fee-split settlement via on-chain FeeSplit contract on Base. ([GitHub](https://github.com/xyncpay/xyncpay))
 - [ntt-x402](https://ntt-x402.isurvivable.workers.dev) - x402-gated Goldilocks NTT (forward and inverse) compute service.  Pure-Rust Cooley-Tukey on Plonky3's Goldilocks field with SHA-256 proof-of-execution; output is bit-exact equivalent to a Verilator simulation of `goldilocks-ntt-hdl` (FPGA RTL).  $0.01 USDC per call on Solana Devnet, log2(n) ≤ 12 on the free tier. ([Discovery manifest](https://ntt-x402.isurvivable.workers.dev/.well-known/x402) | [Service descriptor](https://ntt-x402.isurvivable.workers.dev/) | [Source](https://github.com/MavenRain/goldilocks-ntt-hdl-x402))

### Tools & Services
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

### Developer Tools

- NEAR AI - Cross-chain agent settlements.
- [Boosty Labs](https://boosty.io) - AI agents buying real-time insights.

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
- [PaySentry](https://github.com/mkmkkkkk/paysentry) - Control plane for AI agent payments. Spending limits, circuit breakers, anomaly detection, and audit trails for x402 integrations. npm: `@paysentry/x402`.
- [ShieldAPI](https://shield.vainplex.dev) - x402-native security intelligence API for AI agents. 9 endpoints: password/email breach check, domain/IP reputation, URL safety, prompt injection detection, and skill security scanning. Micropayments ($0.001–$0.02 USDC) on Base. Battle-tested against live AI agent SSRF attacks. [MCP Server](https://www.npmjs.com/package/shieldapi-mcp) | [x402scan](https://www.x402scan.com/server/55c99a38-34b3-4b2c-8987-f58ebd88a7df)
- [Agent Payment Safety Audit Desk](https://x402.bitcoinsapi.com/x402/offers/agent-api-discovery-audit.json) - 48-hour x402, MCP, wallet, and agent-payment workflow audit with reproducible smoke scripts, payment-route checks, and buyer-facing safety findings.

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
* [AI Security API](http://203.194.112.129:3000) - Token risk analysis powered by MiniMax AI M2.7. Risk scoring 1-10 with detailed reasons. $0.02 USDC per call on Base mainnet. No signup required.
