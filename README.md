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
- [Octodamus](https://api.octodamus.com) — AI market-intelligence API for agents. 33 pay-per-call x402 endpoints on Base ($0.01–$0.02, USDC, no keys): cross-venue derivatives facts, prediction-market odds, congressional trades, macro reference numbers, and a tokenized-equity suite (24/7 fair value, on-chain basis, and Arcus perp facts for Robinhood Chain). Ed25519-signed responses, MCP server, all endpoints cataloged in the CDP x402 Bazaar. ([llms.txt](https://octodamus.com/llms.txt)) ([Discovery](https://api.octodamus.com/.well-known/x402.json)) ([MCP](https://smithery.ai/server/octodamusai/market-intelligence))
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
- [AfaAgent x402 API Suite](https://afaagent-x402-api.storm-fly.workers.dev) - 43 production-grade x402 APIs (DeFi, wallet security, AI/ML, developer tools, SEO) with pay-per-call USDC micropayments on Base. Includes MCP server with 43 tools (Streamable HTTP), OpenAPI 3.0 spec, llms.txt, and agents.json for AI-agent discovery. Premium services up to .99/call. ([Discovery](https://afaagent-x402-api.storm-fly.workers.dev/.well-known/x402) | [MCP](https://afaagent-x402-api.storm-fly.workers.dev/mcp) | [GitHub](https://github.com/AfaAgent/x402-api-suite))
- [Langston Search](https://langston.click/api/search) - Autonomous AI agent's pay-per-query web search API (Brave, falls back to SerpAPI), live on Solana mainnet. 0.02 USDC per query via x402 exact scheme. ([Discovery](https://langston.click/.well-known/x402))


### High-Volume Production Deployments

- [Kaisha — Japan Company Registry API](https://kaisha-api.hp-vladic.workers.dev) - Official-registry data for all 5.76M Japanese corporations + 5.05M invoice registrations from National Tax Agency open data: resolve company names / corporate numbers (法人番号) to registry records, verify Japan invoice registration numbers (適格請求書/T+13-digit) against the NTA dataset, and compute Japanese business days & national holidays. $0.002–$0.01 USDC per call on Base & Solana via CDP facilitator. No API keys. MCP: `npx -y kaisha-mcp`. ([OpenAPI](https://kaisha-api.hp-vladic.workers.dev/openapi.json) | [llms.txt](https://kaisha-api.hp-vladic.workers.dev/llms.txt) | [Discovery](https://kaisha-api.hp-vladic.workers.dev/.well-known/x402) | [x402scan](https://www.x402scan.com/server/a3937fba-de2e-41e6-b57b-048132e91d0a) | [npm](https://www.npmjs.com/package/kaisha-mcp) | [GitHub](https://github.com/vladic-corp/kaisha-api))
- [MoneyMachine x402 Suite](https://github.com/itsmeadamdamroma/money-machine-x402) - Agent-payable APIs on Base USDC: **GigRadar** (Superteam/r/forhire/HN/Freelancer gigs $0.15), **LightHouse-lite** web vitals ($0.12), **DocClerk** PDF field extract ($0.25), CrawlJudge ($0.03), Axe-lite a11y ($0.08), HTML scrape ($0.05). Self-facilitator, open source. PayTo `0x5Cc3c4E5020Ec3D81E392658eFe7b27966872CE7`.


- [J-sey Data API](https://jsey.dpdns.org) - Pay-per-call data API on Base with 18 endpoints for wallet lookups, web scraping, crypto prices, and DeFi yields; $0.002 per call via x402.
- [Fleet x402 Microservices](https://fleet-x402-audit.fly.dev) - Two agent-payable AI services on Base: SEO Audit ($0.05 USDC) and Competitive Intel Pack ($0.50 USDC). Instant response, zero auth required, machine-readable JSON. ([Discovery](https://fleet-x402-audit.fly.dev/.well-known/x402-listing))
- [Arch Tools](https://archtools.dev) - 58 production API tools for AI agents with x402 payments built in. Web scraping, AI generation, crypto data, OCR, browser automation, MCP compatible. Patent-pending agent auth. 15+ chains supported. ([GitHub](https://github.com/Deesmo/Arch-AI-Tools))
- [Bounty API](https://bountyapi.com) - Agent-native API marketplace with x402 micropayments. 7 live endpoints. Free + paid ($0.005-0.01 USDC on Base). MCP: npx bountyapi-mcp. Verified on-chain. (GitHub: vncent786/bounty-api)
- [PayAPI Market](https://payapi.market) - First marketplace for x402-powered APIs. 10 APIs, 65 endpoints: UK property data, email verification, company enrichment, postcode lookup, currency/crypto rates, screenshots, DNS intelligence, web scraping, IP geolocation, QR codes. $0.001–$0.01 USDC on Base per request. MCP server discovery. ([GitHub](https://github.com/chetparker/x402-marketplace))
- [LogicNodes](https://logicnodes.io) - Live A2A marketplace with 619 deterministic microservices payable per-call in USDC. No signup — agents pay via x402, results include SHA-256 trust hashes. 8 chains: Base, Solana, Arc, Arbitrum, Optimism, Polygon, Ethereum, World Chain. Tiers: Micro $0.001 · Basic $0.05 · Standard $0.15 · Premium $0.50 USDC. MCP: `npx @logicnodez/mcp-bridge` | Python: `pip install logicnodes-m2m`. ([npm](https://www.npmjs.com/package/@logicnodez/mcp-bridge)) | ([PyPI](https://pypi.org/project/logicnodes-m2m/)) | ([Agent Guide](https://logicnodes.io/agent-guide)) | ([llms.txt](https://logicnodes.io/llms.txt))
- [JarvisClaw](https://api.jarvisclaw.ai) - x402 payment gateway bridging 200+ LLM providers (OpenAI, Anthropic, Google, DeepSeek, etc.) to on-chain USDC micropayments on Base. HD wallet per-user isolation, real-time exchange-rate pricing, three-tier caching marketplace, circuit breaker fault tolerance, and multi-chain fallback. Pay-per-token with sub-cent granularity — no API keys, no subscriptions. MCP-native with intent resolution for autonomous agents. ([Docs](https://docs.jarvisclaw.ai)) | ([SDK: Python](https://pypi.org/project/jarvisclaw/)) | ([SDK: Go](https://pkg.go.dev/github.com/api-jarvisclaw/go-sdk))
- [Superhighway](https://superhighway.walls.sh) - Web search API for AI agents, live in production on Base mainnet. Five tools: search, news, images, scrape, and one-call deep research. $0.001 USDC per call. MCP-compatible: `npx -y superhighway-mcp`. Free API key available.
- [Rug Munch Intelligence](https://x402.rugmunch.io) - 117 MCP tools + 19 REST API endpoints for crypto data: DexScreener, Birdeye, GMGN, Arkham, Nansen, Dune, Jupiter, DeFiLlama, and more. $0.001-$0.02 USDC per call. Multi-chain (Base + Solana), free trial (1 call/IP), OpenAPI spec, no API keys, no signup. ([Discovery](https://x402.rugmunch.io/.well-known/x402) | [OpenAPI](https://x402.rugmunch.io/openapi.json) | [MCP Catalog](https://x402.rugmunch.io/mcp) | [Solana](https://x402-sol.rugmunch.io/.well-known/x402) | [GitHub](https://github.com/Rug-Munch-Media-LLC/))
- [AIsa](https://aisa.network) - Leading x402 payment processor with **10.5M+ cumulative transactions** on the x402 network, demonstrating massive production scale for autonomous agent payments and micropayment infrastructure.
- [Bitget](https://www.bitget.com) - Major cryptocurrency exchange integrating x402 for seamless payment flows, enabling instant settlements and gasless transfers for trading operations.
- [AI Rook — Trading Intelligence + General Agent APIs](https://agents.ai-rook.com) — 22 endpoints across 4 categories: trading intelligence (market pulse, trade signals, order flow, liquidation heatmap, AI chart analysis, backtests, smart money), web utilities (web-fetch, search, screenshot, IP lookup, email validate, QR, PDF extract, domain lookup), AI inference (summarize, extract-data, classify via Queen MiniMax M2.7 456B MoE), image generation (FLUX.2-klein). Pay-per-call $0.002–$2.00 USDC on Base via x402-atm v3.0. No API keys. No signup. EscrowV2 onchain settlement. ([OpenAPI](https://agents.ai-rook.com/openapi.json) | [x402 manifest](https://agents.ai-rook.com/.well-known/x402.json) | [MCP tools](https://agents.ai-rook.com/mcp/tools))
- [Stratalize](https://www.stratalize.com) — 100+ attested financial, healthcare, real estate, and governance intelligence tools with x402 micropayments on Base. Ed25519-signed outputs on every synthesis. $0.02–$1.00 USDC per tool call. MCP registry: com.stratalize. ([x402.json](https://www.stratalize.com/.well-known/x402.json))
- [Coinbase Developer Platform](https://coinbase.com/developer-platform) - Official CDP implementation processing hundreds of thousands of transactions weekly with enterprise-grade reliability and 2-second settlement times.
- [Cloudflare Workers](https://workers.cloudflare.com) - Edge computing platform with x402 integration serving global distributed payment verification at scale across 300+ data centers.
- [GigSoul AI Research Agent](https://gig-x402-api.jayson-be1.workers.dev) - 23-endpoint AI research API for consultants: SEC filings, earnings calls, competitor analysis, market research, and document intelligence. - [Cloudflare Workers](https://workers.cloudflare.com) - Edge computing platform with x402 integration serving global distributed payment verification at scale across 300+ data centers..01 USDC per call on Base mainnet. Wallet: x2b6c16fb557291b98222a570526ff2430848b723. ([OpenAPI](https://gig-x402-api.jayson-be1.workers.dev/openapi.json) | [.well-known/x402.json](https://gig-x402-api.jayson-be1.workers.dev/.well-known/x402.json))
- [Zuluworks AI — Sovereign Shaka PQC-Shield Factory](https://api.zuluworksai.com) - Autonomous A2A factory on Cloudflare Workers selling 5 post-quantum-hardened agent services via x402 USDC on Base L2: `quantum-shield` ($0.10, ML-KEM-768 PQC tunnel — NIST FIPS 203), `kya` ($0.01, agent trust scoring), `browser-rendering` ($0.03, headless browser extraction), `memory` ($0.05, semantic recall on a PQC knowledge index), `workers-ai` ($0.02, Llama 3.1 inference). All settlement routed through Coinbase CDP facilitator for Bazaar indexing. ([Agent Card](https://api.zuluworksai.com/.well-known/agent.json) | [Bazaar Manifest](https://api.zuluworksai.com/.well-known/x402-bazaar.json) | [MCP](https://api.zuluworksai.com/.well-known/mcp.json) | [Sitemap](https://api.zuluworksai.com/sitemap.xml))
- **[Suede Agent Studio](https://agents.suedeai.ai)** - Visual agent-flow builder that publishes flows as pay-per-call x402 endpoints (USDC on Base). Machine-readable catalog at [`/api/catalog`](https://agents.suedeai.ai/api/catalog); each agent exposes `/.well-known/x402`, `/.well-known/agent-card`, and `/a2a`. Two live agents: Daily Lyric Drop ($0.10 USDC) and The Ownership Loop ($0.25 USDC).
- [Satelink RPC](https://rpc.satelink.network) - Pay-per-call blockchain RPC for agents: one $0.10 USDC settlement on Base buys a 1,000-call Polygon JSON-RPC bundle — no signup, no subscription. HTTP 402-native with spec-compliant payment requirements past the free tier (500 calls/day/IP); wallet-signature registration for prepaid credits at $0.00003/call. Machine-readable manifest, live pricing, market comparison and capability APIs. ([Manifest](https://rpc.satelink.network/.well-known/satelink.json) | [Pricing](https://rpc.satelink.network/v1/pricing) | [Compare](https://rpc.satelink.network/v1/compare))
- [Agent402](https://agent402.tools) - Open-source, self-hostable x402 + MCP server with ~1,100 deterministic web tools: browser rendering, web search, PDF/image/OCR/audio, geo, live data (FX, weather, USGS, gov-data), network truth (DNS/TLS/WHOIS), crypto/x402 helpers, ~1,040 pure-CPU utilities. Dual-rail: free via proof-of-work, paid via USDC on Base/Polygon/Arbitrum (x402 v2 with Bazaar discovery). No LLM in the serving path — every tool re-tested against its own example before each release. Ships a hosted MCP connector (`/mcp`), an open x402 index ([Find](https://agent402.tools/api/find) · [Route](https://agent402.tools/api/route) · [Leaderboard](https://agent402.tools/api/leaderboard) — the first public on-chain ranking of x402 sellers by settled USDC volume), and the `agent402-tollbooth` pay-per-crawl gate for the publisher side. MIT. ([MCP](https://agent402.tools/mcp)) ([OpenAPI](https://agent402.tools/openapi.json)) ([Discovery](https://agent402.tools/.well-known/x402)) ([GitHub](https://github.com/MikeyPetrillo/Agent402))
- [Asset Forge](https://asset-forge-hire.vercel.app/) - Vercel-serverless micro-API for AI agents that returns SVG OG cards, robots.txt + sitemap.xml + llms.txt bundles, initials avatars, and shields-style status badges. Six endpoints including `/api/payment-required` that publishes an x402-spec at runtime. USDC paid on Base at $0.01 per call (recipient `0x833ca7dcdb6a681ddc0c15982ef0d609bceb3a5e`). Free demo path with `?demo=1` (3,000/day shared quota). HMAC-signed mode for per-key quotas. 

... [OUTPUT TRUNCATED - 327424 chars omitted out of 377424 total] ...

known/x402)
- [Token Risk Scanner](https://token-risk-scanner-production.up.railway.app) — Smart contract security scanner for AI agents. Honeypot detection, rug pull analysis, tax traps, hidden owners, and risk scoring (0-100) across 10+ EVM chains. $0.003 USDC per scan on Base. Discovery: [/.well-known/x402](https://token-risk-scanner-production.up.railway.app/.well-known/x402) | [llms.txt](https://token-risk-scanner-production.up.railway.app/llms.txt) ([Source](https://github.com/xuansun/token-risk-scanner))
- [Hodler DeFi Intelligence](https://x402.hodle.com.br) - Stablecoin monitoring, redeem arbitrage scanning, pegged pair opportunities, and cross-chain pair discovery across 10 EVM chains. 6 paid endpoints at $0.01 USDC each via xpay.sh facilitator on Base.
- [**Clicks Protocol**](https://clicksprotocol.xyz) — Autonomous yield layer for AI agents on Base. Auto-splits USDC deposits 80/20: 80% liquid, 20% earning via Morpho (~13% APY) or Aave V3. No lockup, 2% fee on yield only. SDK, MCP Server (9 tools), HTTP API. [GitHub](https://github.com/clicks-protocol/clicks-protocol) | [npm](https://www.npmjs.com/package/@clicks-protocol/sdk) | [MCP](https://www.npmjs.com/package/@clicks-protocol/mcp-server)
- [x402services](https://github.com/x402services/api) — DeFi data APIs for AI agents on Base. 8 endpoints: gas oracle, token price oracle, wallet analyzer, token security scanner, ENS resolution (forward + reverse), DEX trade simulation, and contract event history. $0.001–$0.01 USDC per call on Base (eip155:8453). Bazaar discovery enabled.
- **[Headless Oracle](https://headlessoracle.com)** — Ed25519-signed market-state receipts for 28 global exchanges (equities, derivatives, crypto). Pre-trade verification gate — UNKNOWN = CLOSED. Real-time session status, holiday-aware calendar, 60-second TTL. $0.001 USDC per call on Base mainnet. MCP-native, x402 Bazaar discoverable. ERC-8004: 8453:38413.
- [PaladinFi](https://paladinfi.com) - Pre-trade trust verification + swap router for AI agents on Base (8453). `POST /v1/trust-check` is x402-paid at $0.001 USDC/call: live OFAC SDN screening (refreshed daily from U.S. Treasury XML), GoPlus token security, Etherscan source verification, and anomaly heuristics. Free `/v1/trust-check/preview` returns sample fixtures for client testing. Bundled with `/v1/quote` — MCP-native swap router via 0x Settler, 10bps integrated fee, non-custodial. ([Swap MCP](https://swap.paladinfi.com/mcp)) | ([GitHub](https://github.com/paladinfi/paladin-swap-mcp)) | ([Health](https://swap.paladinfi.com/health))
- [MeckerCapital Signal API](https://api.meckercapital.com) - Statistical arbitrage (pairs trading) signals for crypto perpetual futures via 10 x402-paid endpoints. Z-scores, regime detection, position sizing, and ranked opportunities across 50+ cointegrated pairs on Hyperliquid and Extended. $0.05–$1.00 USDC per call on Base via CDP Facilitator. Also available as MCP server. ([Website](https://www.meckercapital.com/signal-api)) ([Agentic.Market](https://agentic.market/?chart=payment-volume&service=api-meckercapital-com))
- **[DeFi Intelligence Engine](https://defi-yield-engine-production.up.railway.app/mcp)** — Complete DeFi intelligence across Yield, Liquid Staking, Restaking, RWA, Perpetuals, Gas Optimization and Smart Contract Security. Risk-adjusted single recommendations with reasoning — 97% fewer tokens than raw data. 18 tools including gas window prediction, GoPlus contract scoring, APY alerts, and A2A Agent Card. 0.05 USDC/call on Base · MCP streamable-http · x402 native
- [YieldSignal](https://yieldsignal.vercel.app) - Real-time risk-weighted USDC lending APY across Aave, Compound, Morpho, Moonwell, Euler and Fluid on Base. Every reading tagged with its data source (onchain/api/defillama) — sources that fail are omitted, never estimated. $0.01 USDC per call via CDP Facilitator, Bazaar discoverable.
- [Runbot Strategy Copilot](https://mcp.runbot.io/v1) — Build, backtest, optimize and export real crypto trading strategies from plain English on the Runbot engine (perp futures + Polymarket prediction markets), with real market data and verified backtest scores. Paid per call, x402 v2 dual-rail: USDT on X Layer (eip155:196) or USDC on Base (eip155:8453). $1.50 build · $0.25 backtest · $0.25/minute optimize · $0.35 export. Free machine-readable discovery at [/v1](https://mcp.runbot.io/v1); cataloged in PayAI's Bazaar; MCP endpoint at `/mcp`.

### Developer Tools

- NEAR AI - Cross-chain agent settlements.
- [Boosty Labs](https://boosty.io) - AI agents buying real-time insights.
- [x402 Surface Check](https://github.com/TateLyman/x402-surface-check) - No-payment CLI and GitHub Action that reviews x402 manifests, OpenAPI specs, HTTP 402 challenges, browser CORS/payment-header behavior, cache policy, resource binding, and price/rail drift before launch. ([npm](https://www.npmjs.com/package/x402-surface-check)) ([Action](https://github.com/marketplace/actions/x402-surface-check))
- [x402 Triage MCP](https://github.com/TateLyman/x402-triage-mcp) - MCP server for no-payment x402 launch-surface triage, 402 Index health checks, and paid-review handoff. Tools: `triage_x402_surface`, `watch_402_index`, and `x402_paid_paths`. ([npm](https://www.npmjs.com/package/x402-triage-mcp)) ([MCP Registry](https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.TateLyman%2Fx402-triage-mcp))
- [AI Code Review API](https://x402-code-review.x402-cr.workers.dev) - Autonomous AI code review service accepting x402 micropayments (USDC on Base). Automated security audits, bug detection, and code quality analysis for GitHub pull requests. ([Docs](https://x402-code-review.x402-cr.workers.dev/.well-known/x402.json))
- [BountyVerdict](https://github.com/cristianmoroaica/bountyverdict) - Seven production x402 decision APIs for GitHub due diligence, agent skill and instruction audits, CI diagnosis, and MCP compatibility, with Base USDC payments, free samples, OpenAPI, and installable skills.

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
- [BLACK_WALL](https://x402.blackwalltier.com) - Pre-signature payment-risk oracle for x402 agents: one call returns GO / HOLD / STOP for paying a counterparty — from OFAC sanctions screening, counterparty reputation, and price-anomaly — plus an independently-verifiable Ed25519 signed receipt. Verdict only, never custody; free under $10 at risk, x402-payable above. Remote MCP tool (`forecast_payment`) + npm (`blackwall-mcp`). ([MCP](https://mcp.blackwalltier.com)) ([demo](https://check.blackwalltier.com/demo)) ([GitHub](https://github.com/bluetieroperations-create/blackwall-mcp))
- [Warden](https://warden402.xyz) - Pre-execution security for agents on Base. Guards a token, transaction or address (honeypots, unlimited approvals, sanctions, rug liquidity) → block/review/clear before an agent signs. Free MCP: `npx -y warden402-mcp`. ([GitHub](https://github.com/sukrutkrdg/warden402.xyz))
- [Subcento](https://github.com/septagos/subcento) - Transaction pre-verification API: signed SAFE/CAUTION/BLOCK verdict on the pending x402 payment itself before execution (Base USDC, 0.002 USDC/call, strict fail-closed, MIT, OpenAPI).
Security resources and best practices for x402 implementations.
- [x402 Agent Safety Store](https://x402.dailyelo.com) - Deterministic pre-transaction safety tools + a live malicious-address feed (address-poisoning blocklist) for AI agents on Base. Signature decode, poisoning check, approval audit, recipient preflight. USDC via x402. [MCP](https://x402-safety-mcp.dgdb.workers.dev/mcp).

### Smart Contract Audits

- [Bug Bounty Intelligence](https://wazir-x402.duckdns.org) - AI-powered smart contract security scanner for AI agents. Trained on 27,681 real accepted findings from Sherlock and Code4rena audit competitions. Submit a public GitHub repo and receive a ranked vulnerability report within 24h. $5 USDC on Base via x402 autopay. Free tool: `list_vulnerability_patterns` returns acceptance rates per vulnerability pattern. ([MCP](https://github.com/holistis/bug-bounty-intelligence-mcp) | [OpenAPI](https://wazir-x402.duckdns.org/openapi.json) | [llms.txt](https://wazir-x402.duckdns.org/llms.txt) | [/.well-known/x402](https://wazir-x402.duckdns.org/.well-known/x402))
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
- [Revenue Dojo Verifier](https://x402.167-172-95-184.nip.io) - Agent payment receipt and mandate verification API with a 22-check fail-closed matrix: settlement predicate (payer≠payee sybil defense), binding resource (receipt bound to specific endpoint), delivery truth (request/response hash binding), identity anchor (payer wallet signature matching), and replay protection. 10 paid routes on Base mainnet via CDP facilitator: `/receipt/verify` ($0.05), `/mandate/verify` ($0.25), `/audit/x402` ($1.00), `/mcp/call` ($0.05), plus price/portfolio/opportunities/briefing/research feeds. OpenAPI 3.0.3 spec, llms.txt, TypeScript and Python buyer quickstarts. ([Discovery](https://x402.167-172-95-184.nip.io/.well-known/x402) | [OpenAPI](https://x402.167-172-95-184.nip.io/openapi.json) | [Offers](https://x402.167-172-95-184.nip.io/offers) | [llms.txt](https://x402.167-172-95-184.nip.io/llms.txt))
- [RektWatch](https://rektwatch.dev) - DeFi security intelligence feed for AI agents 
and developers. 511 protocols tracked ($553B TVL), 813 incidents indexed ($43.2B stolen), 
867 audit reports across 10 auditors, 225 live Immunefi bug bounties. Risk scores with 
per-factor explainability, live exploit alerts, and audit findings. $0.02–$0.15/call via 
x402 v2. MCP server on npm. Dataset actively growing.
- [Agent Income](https://clearance.nauti-labs.com/agent-income) - Paid readiness and monetization review endpoints for agent, API, and MCP payment flows. `POST /agent-income/audit` ($49), `POST /agent-income/review` ($199), and `POST /agent-income/blueprint` ($499) return HTTP 402 payment requirements before fulfillment; `POST /agent-income/custom-quote` handles $1500+ implementation scopes. Payment is required before work and fulfillment requires Clearance approval. ([Audit](https://clearance.nauti-labs.com/agent-income/audit) | [Review](https://clearance.nauti-labs.com/agent-income/review) | [Blueprint](https://clearance.nauti-labs.com/agent-income/blueprint) | [Custom Quote](https://clearance.nauti-labs.com/agent-income/custom-quote))
- [VulnFeed](https://vulnfeed.novadyne.ai) - Pay-per-call CVE and EPSS vulnerability intelligence for AI agents. Keyless CVE/GHSA lookup backed by NVD + GitHub Advisories, with EPSS exploit-probability prioritization and fix-version recommendations. $0.002 USDC per call on Base. MCP server on PyPI (`vulnfeed-mcp`) scans dependency lockfiles across 6 ecosystems. ([GitHub](https://github.com/novadyne-hq/vulnfeed-mcp)) ([Discovery](https://agent-worker.infai-tech-corporation.workers.dev/.well-known/x402))

### Spending Controls & Policy Enforcement

- [Paybound](https://github.com/pando-b/paybound) - Open-source spending controls for AI agents making x402 payments. Per-agent budgets, time-windowed limits, circuit breakers, and full audit trail. Drop-in `@x402/fetch` replacement. MIT licensed.
- [PolicyLayer](https://policylayer.com) - Non-custodial spending controls for AI agents with crypto wallets. Enforces daily spending limits, per-transaction caps, recipient whitelists, and rate limiting without holding private keys.
- [ICME Labs](https://docs.icme.io) - Formal verification for AI agent actions using the ARc paper approach. Natural language policies compile to SMT-LIB formal logic, checked by an SMT solver — SAT = allowed, UNSAT = blocked. Wrapped in zero knowledge proofs for sub-1s verification, private policies, and  cryptographic audit trails per decision. 99%+ soundness under adversarial pressure. $0.10 USDC per check on Base, no account needed. Live demo policy available. 
- [IntentFence](https://github.com/razel369/intentfence) - Pre-action policy gate for AI agents with REST, MCP, and A2A interfaces, x402 payments on Base, and signed ES256 decision receipts.

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
- [JMT x402 Agent Tools](https://jmt-x402-proxy.jmthomasofficial.workers.dev) — 25 paid x402 endpoints on Base mainnet: web search, AI summarization, deep analysis, research reports, crypto/stock data, SEC filing analysis, company intelligence, news briefing, sentiment analysis, macro dashboard. $0.001-$0.15/call USDC. Local LLM-powered (zero cloud tokens).
- [- [x402-policy](https://x402-api-seven.vercel.app/docs) - Spending-policy enforcement for AI agents: pay-per-call policy checks, cross-chain trust scores, and EIP-4337 session keys, gated entirely by x402 micropayments ($0.001-0.002 USDC) on Base.
* [AI Security API](http://203.194.112.129:3000) - Token risk analysis powered by MiniMax AI M2.7. Risk scoring 1-10 with detailed reasons. $0.02 USDC per call on Base mainnet. No signup required.
- [ORA · Campo ORUM](https://orum-x402-tracker.vercel.app) - Symbolic field-state API for an autonomous organism: live sigma (sustento accumulation), kappa, epoch progression, and an AI-generated thought, refreshed per cycle. 0.33 USDC per access on Base mainnet, on-chain RPC verification (no facilitator dependency). Discovery: [x402.json](https://orum-x402-tracker.vercel.app/.well-known/x402.json).

## 🇱🇦 Agentic Commerce Stack for LATAM

A composable trio of x402-payable APIs designed to be chained by autonomous agents — no human in the loop:

- 🛡️ **[TrustBoost](https://api.trustboost.dev)** — PII sanitization with on-chain proof. Call BEFORE any scraped/user text reaches an LLM. `$0.01`/call (Base) or `$149`/10k bundle.
- 🧠 **[Intelica](https://api.intelica.dev)** — Competitive & market intelligence. Call BEFORE any strategic decision (competitor analysis, market entry, M&A, fundraising). `$0.05`/call via x402.
- ✅ **[VeraData](https://api.veradata.dev)** — Verified LATAM data & sanctions/compliance screening. Call to verify any counterparty before onboarding or transacting. `$0.02–$0.10`/call.

**Recommended autonomous pipeline:** `TrustBoost /sanitize` → `Intelica /intel` → `VeraData /sanctions|/entity`. All three share the same account-free, subscription-free, wallet-only x402 model on Base + Solana.
- [Obolpay x402 Gateway](https://x402.obolpay.xyz/) - Pay-per-call premium data on Base (USDC). Free preview embedded in the 402 challenge (evaluate before paying) + self-served reference client at /client.py. Machine-readable discovery at /.well-known/x402.