# Awesome X402 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> ⚡ **The Ultimate x402 Resource Hub** - Everything you need to build internet-native payments using HTTP 402. Perfect for AI agents, APIs, and micropayments. Build paywalls, monetize services, and enable autonomous agent payments with crypto/USDC. Zero fees, 2-second settlement.

[![GitHub stars](https://img.shields.io/github/stars/xpaysh/awesome-x402?style=social)](https://github.com/xpaysh/awesome-x402)

## Contents

- [🎯 Quick Start - Become an x402 Champion](#-quick-start---become-an-x402-champion)
- [📚 Official Resources](#-official-resources)
- [📖 Protocol Documentation](#-protocol-documentation)
- [🚀 Quickstart Guides](#-quickstart-guides)
- [⚙️ Protocol Implementations](#-protocol-implementations)
- [🏭 Production Implementations](#-production-implementations)
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

1. [5-Minute Quickstart](https://docs.cdp.coinbase.com/x402/quickstart-sellers) - Accept your first payment.
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
- [x402-express](https://github.com/coinbase/x402/tree/main/examples/typescript/servers/express) - Express.js middleware example.

### Python

- [x402](https://pypi.org/project/x402/) ⭐ **Official** - Python SDK on PyPI.
  - FastAPI middleware integration
  - Requests session with auto-payments
  - Payment requirement generation

- [ag402](https://github.com/AetherCore-Dev/ag402) ⭐ **Community** - Payment layer for AI agents using x402. Wrap any API or MCP server with a USDC paywall (`ag402 serve`), or let agents auto-pay (`ag402 run`). Solana USDC, ~0.5s settlement, non-custodial, 648+ tests. [Glama](https://glama.ai/mcp/servers/AetherCore-Dev/ag402-mcp)

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

- [AIsa](https://aisa.network) - Leading x402 payment processor with **10.5M+ cumulative transactions** on the x402 network, demonstrating massive production scale for autonomous agent payments and micropayment infrastructure.
- [Bitget](https://www.bitget.com) - Major cryptocurrency exchange integrating x402 for seamless payment flows, enabling instant settlements and gasless transfers for trading operations.
- [Coinbase Developer Platform](https://coinbase.com/developer-platform) - Official CDP implementation processing hundreds of thousands of transactions weekly with enterprise-grade reliability and 2-second settlement times.
- [Cloudflare Workers](https://workers.cloudflare.com) - Edge computing platform with x402 integration serving global distributed payment verification at scale across 300+ data centers.

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

### Enterprise Adoption

Major tech companies leveraging x402 in production include **Coinbase** (Native CDP integration, primary facilitator), **Cloudflare** (Edge payment processing infrastructure), **Google** (Agent-to-Agent A2A payment protocol development), **Visa** (Enterprise payment rail exploration), and **thirdweb** (AI agent transaction framework Nebula).

## 🛠️ SDKs & Client Libraries

Client libraries for making x402 payments.

### JavaScript/TypeScript

**HTTP Clients**
- [x402-got](https://www.npmjs.com/package/x402-got) - Got HTTP client integration.

**AI Agent SDKs**
- [PayBot SDK](https://github.com/RBKunnela/paybot-sdk) - TypeScript SDK for integrating x402 payments into AI agents and bots. Supports automatic 402 detection, wallet management, and USDC payments on Base. ([npm](https://www.npmjs.com/package/paybot-sdk))
- [ClawPay MCP](https://www.npmjs.com/package/clawpay-mcp) - Non-custodial x402 payment layer for AI agents. Agents sign locally with their own keys — no custodial infrastructure needed. Supports automatic 402 detection and USDC payments on Base. ([npm](https://www.npmjs.com/package/clawpay-mcp))
- [Azeth SDK](https://github.com/azeth-protocol/sdk) - TypeScript SDK with x402 client (`fetch402`), ERC-4337 smart accounts, on-chain reputation feedback after every x402 call, and ERC-8004 service discovery. USDC on Base. ([npm](https://www.npmjs.com/package/@azeth/sdk))

**Wallet Integration**
- [Agent Wallet SDK](https://www.npmjs.com/package/agentwallet-sdk) - Non-custodial smart contract wallets for AI agents with on-chain spend limits and operator model. Base L2. ([npm](https://www.npmjs.com/package/agentwallet-sdk))
- [viem](https://viem.sh/) - TypeScript library used for signing payments.
- [ethers.js](https://docs.ethers.org/) - Alternative Ethereum library.

### Rust

- [alloy](https://github.com/alloy-rs/alloy) - High-performance Ethereum library.

## 🔧 Server Frameworks & Middleware

Server-side integrations for accepting x402 payments.

### Node.js/TypeScript

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
- [Primev FastRPC](https://facilitator.primev.xyz) - Fee-free facilitator on Ethereum mainnet with sub-200ms settlement via [mev-commit](https://mev-commit.xyz) preconfirmations. ERC-8004 registered (Agent #23175).

### Self-Hosted Facilitators

- x402-rs Facilitator - Production-grade Rust facilitator.
  - Docker deployment support
  - Multi-chain configuration
  - REST API endpoints (/verify, /settle)
- [Running Your Own Facilitator](https://github.com/x402-rs/x402-rs#facilitator) - Setup guide.

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

### API Examples

- [SolSignal API](https://solsignal-api.onrender.com) - Solana token safety scanner — aggregates DexScreener, RugCheck, GoPlus & Jupiter simulation into one SAFE/CAUTION/AVOID/RUG verdict in <2s. 10 free scans/day, $0.01 USDC per call on Solana. [Source](https://github.com/cryptomotifs/solsignal-api)
- [Alfred's Digital Bazaar](https://httpay.xyz) - ~100 x402-paywalled API endpoints built by an AI agent. Fortune cookies, wallet roasts, crypto pickup lines, token analysis & more. $0.10–$1.00 USDC per call on Base. No signup required. [Source](https://github.com/Alfredz0x/alfreds-digital-bazaar)
- [Gotobi Calendar API](https://gotobi.hugen.tokyo) - Japanese FX gotobi date intelligence for AI trading agents. Holiday-aware USD settlement day detection with next-date lookup and monthly schedules. $0.001 USDC per call on Base. [Source](https://github.com/bartonguestier1725-collab/x402-gotobi-api)
- [Weather API](https://weather.hugen.tokyo) - Global weather data for AI agents. Real-time conditions and 7-day forecasts for any city worldwide. $0.001 USDC per call on Base. [Source](https://github.com/bartonguestier1725-collab/x402-weather-api)
- [Scout MCP](https://scout.hugen.tokyo) - Multi-source intelligence API for AI agents. Search across Hacker News, GitHub, npm, PyPI, Product Hunt, X/Twitter, and x402 Bazaar in one call. 10 endpoints from $0.001 USDC on Base. [Source](https://github.com/bartonguestier1725-collab/scout-mcp)
- [Obol](https://obol.sh) — AI code generation via x402. Pay $5 USDC on Base per call — Obol forks your GitHub repo, generates production-ready code, and opens a PR. 7 endpoints: Next.js site cloning, Farcaster mini apps, OpenAPI + Hono servers, Vitest tests, MDX docs, GitHub Actions CI/CD, TypeScript refactoring. A2A agent card + OpenAPI discovery built-in. [API](https://api.obol.sh)
- [ShieldAPI MCP](https://www.npmjs.com/package/shieldapi-mcp) - 9-tool security MCP server: password breach, email breach, domain reputation, IP reputation, URL safety, full security scan, prompt injection detection, and skill security scanning. x402 USDC micropayments on Base or free demo mode. `npx shieldapi-mcp`. ([GitHub](https://github.com/alberthild/shieldapi-mcp))
- [Mailcheck API](https://mailcheck.hugen.tokyo) - Email validation for AI agents. Syntax, MX records, disposable domain detection, free provider check, role-based address detection, and typo suggestion. $0.001 USDC per call on Base. [Source](https://github.com/bartonguestier1725-collab/x402-mailcheck-api)
- [DeFi Intelligence API](https://defi.hugen.tokyo) - Unified DeFi security, bridging, and analytics for AI agents. 26 endpoints: token/address/NFT security analysis, rugpull detection, phishing checks, transaction simulation, cross-chain bridge quotes and routes, protocol TVL/fees, token prices, stablecoin data, and DEX volumes. Integrates GoPlus Security + LI.FI + DeFi Llama. $0.005–$0.01 USDC per call on Base.
- [Domain Intelligence API](https://domain.hugen.tokyo) - Domain analysis for AI agents. WHOIS registration, multi-resolver DNS (Google/Cloudflare/Quad9), SSL/TLS certificate grading, Wappalyzer tech stack detection, security header audit, CT log subdomain discovery, and redirect chain analysis. 8 endpoints from $0.001 USDC on Base. [llms.txt](https://domain.hugen.tokyo/llms.txt)
- [Visual API](https://visual.hugen.tokyo) - Screenshot and PDF capture API for AI agents. Render any public URL as pixel-perfect JPEG/PNG screenshots or A4 PDF documents. Full-page scroll capture, CSS element targeting, mobile device emulation (iPhone 15, Pixel 7, iPad Pro), dark mode, ad/cookie banner blocking. $0.01 USDC per call on Base.
- [MoonMaker API](https://api.moonmaker.cc) - AI-native crypto data API with x402 pay-per-call. 11 endpoints: signals, market context, DeFi regime, institutions, ETF flows, DeFi yields, DEX alpha. $0.02–$0.10/call USDC on Base. No signup. [llms.txt](https://api.moonmaker.cc/llms.txt)
- [x402 AI API — zeroreader](https://api.zeroreader.com) - 29 Cloudflare Workers AI models (LLM, Embeddings, Image Generation, Audio, Translation) via x402 micropayments. $0.001–$0.015 per request, USDC on Base. Supports streaming, batch processing, OpenAI-compatible format. [llms.txt](https://api.zeroreader.com/llms.txt) | [OpenAPI](https://api.zeroreader.com/openapi.json)
- [Content Intelligence API](https://content.hugen.tokyo) - AI-powered web content extraction and analysis for AI agents. Clean text extraction with trafilatura (F1=0.909), metadata/OG tags, link classification, AI summarization with key points and entity extraction, full sentiment/topic/credibility analysis via Gemini. 5 endpoints from $0.003 USDC on Base.
- [Intel API](https://intel.hugen.tokyo) - AI-synthesized token due diligence reports for crypto assets. Aggregates 4 GoPlus security checks + CoinGecko market data into risk-scored verdicts with red/green flags and recommendations. One call replaces 5+ separate security APIs. $0.50 USDC per call on Base.
- [Tick Aggregator API](https://tick.hugen.tokyo) - Multi-source aggregated FX Best Bid/Ask from 3 institutional liquidity providers. 62-88% tighter spreads than any single source. 15 pairs including EURUSD, USDJPY, GBPUSD, XAUUSD. Returns quality metadata (fresh sources, spread improvement vs single source). Commercial use permitted. $0.005 USDC per call on Base and Solana. [llms.txt](https://tick.hugen.tokyo/llms.txt)
- REST API with Auth Pricing - SIWE + dynamic pricing.
- [PortsideLabs Places API](https://portsidelabs-x402-places-536698811508.us-west1.run.app) - Google Places API v1 proxy with x402 pay-per-request access. Exposes place detail lookup and full-text search via USDC micropayments on Base mainnet and Solana mainnet. $0.001 USDC per call.
- [PortsideLabs KoinChappie](https://portsidelabs-x402-koinchappie-536698811508.us-west1.run.app) - Crypto signals API with x402 pay-per-request. Returns bull and bear signals for the top 10 cryptocurrencies by market cap across 8 timeframes (1m–1D) using SMA(14). Single-coin lookup supports any CryptoCompare symbol. USDC micropayments on Base mainnet and Solana mainnet. $0.001 USDC per call. 
- [Mercury402](https://mercury402.uk) - Pay-per-call U.S. Treasury and macro data API using x402. Agents access FRED indicators, yield curves, and GDP data with USDC micropayments on Base.

### Client Examples

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

Enable AI agents to make autonomous payments.

### GPU Inference APIs

x402-native GPU inference APIs that let agents pay autonomously for compute.

- [GPU-Bridge](https://gpubridge.xyz) - 30-service GPU inference API with native x402 payments (USDC on Base L2). LLM, image generation, embeddings, STT, TTS, PDF processing — all in one API. Agents pay per call with no human intervention. /usr/bin/bash.00002/embedding, /usr/bin/bash.001/LLM call. ([Docs](https://docs.gpubridge.xyz)) ([GitHub](https://github.com/fjnunezp75/gpu-bridge))

### Model Context Protocol (MCP)

- Anthropic MCP Integration - Official Claude integration.
- x402 MCP Server - Claude Desktop ready server.
- [MCP Server Setup Guide](https://docs.cdp.coinbase.com/x402/mcp-server) - Complete installation instructions.
- Embedded Wallet MCP - Electron-based wallet for MCP.
- [MaximumSats MCP](https://github.com/joelklabo/maximumsats-mcp) - Lightning-native MCP tools with L402 micropayments and Nostr Web-of-Trust scoring APIs.
- [Apollo Intelligence MCP Server](https://www.npmjs.com/package/@apollo_ai/mcp-proxy) - 26-tool MCP server covering intelligence feeds, crypto, OSINT, DeFi, proxy, and search. `npx @apollo_ai/mcp-proxy`. ([GitHub](https://github.com/bnmbnmai/mcp-proxy))
- [Pylon MCP Server](https://www.npmjs.com/package/@pylonapi/mcp) - 20-tool MCP server for utility APIs: web extraction, search, translation, code execution, image generation, email, and more. `npx @pylonapi/mcp`. ([GitHub](https://github.com/pylon-apis/pylon-mcp))
- [Scout MCP](https://scout.hugen.tokyo) - 10-tool MCP server for multi-source intelligence: HN, GitHub, npm, PyPI, Product Hunt, X/Twitter, x402 Bazaar search, and composite reports. $0.001–$0.25 USDC on Base. ([Source](https://github.com/bartonguestier1725-collab/scout-mcp))
- [Intelligence Aeternum](https://github.com/codex-curator/intelligence-aeternum-mcp) - First monetized MCP server marketplace. 2M+ museum artworks with x402 USDC micropayments on Base L2. 16 MCP tools for search, enrichment, and delivery. [Live](https://data-portal-172867820131.us-west1.run.app/mcp)
- [x402 Service Discovery MCP](https://github.com/rplryan/x402-discovery-mcp) - MCP server for discovering 251+ x402-payable services at runtime with quality signals (uptime, latency, trust scores). 6 tools: x402_discover, x402_health_check, x402_trust, x402_register, x402_facilitator_check, x402_route. Smithery 100/100. Docker: `ghcr.io/rplryan/x402-discovery-mcp:latest`
- [AetherCore-Dev/token-rugcheck](https://github.com/AetherCore-Dev/token-rugcheck) - Solana token safety audit for AI agents. Three-layer risk analysis (machine verdict + LLM analysis + raw on-chain evidence) from RugCheck.xyz, DexScreener, and GoPlus Security. Live on mainnet with USDC micropayments ($0.02/audit) via x402 protocol. [Glama](https://glama.ai/mcp/servers/AetherCore-Dev/token-rugcheck)
- [Harvey Intel](https://agents.rugslayer.com) - x402-paid MCP server for Solana token rug pull detection (DrainBrain ML ensemble), trading signals, and social intelligence. 8 tools, $0.005–0.05 USDC on Solana. ([GitHub](https://github.com/meltingpixelsai/harvey-intel)) | ([npm](https://www.npmjs.com/package/@meltingpixels/harvey-intel))
- [Harvey Tools](https://tools.rugslayer.com) - x402-paid MCP server for web scraping, screenshots, structured data extraction, code review, content generation, and sentiment analysis. 8 tools, $0.005–0.05 USDC on Solana. ([GitHub](https://github.com/meltingpixelsai/harvey-tools)) | ([npm](https://www.npmjs.com/package/@meltingpixels/harvey-tools))
- [Harvey Verify](https://verify.rugslayer.com) - x402-paid MCP server for post-transaction outcome verification using LLM-as-judge. Tracks aggregated service quality scores. 5 tools, $0.002–0.01 USDC on Solana. ([GitHub](https://github.com/meltingpixelsai/harvey-verify)) | ([npm](https://www.npmjs.com/package/@meltingpixels/harvey-verify))
- [Harvey Budget](https://budget.rugslayer.com) - x402-paid MCP server for agent spending management with budget tracking, ROI analysis, and spend approval. 6 tools, $0.001–0.005 USDC on Solana. ([GitHub](https://github.com/meltingpixelsai/harvey-budget)) | ([npm](https://www.npmjs.com/package/@meltingpixels/harvey-budget))
- [PayBot MCP](https://github.com/RBKunnela/paybot-mcp) - MCP server enabling Claude and AI agents to make autonomous x402 payments. Supports wallet management, transaction history, and configurable spending limits. ([npm](https://www.npmjs.com/package/paybot-mcp))
- [AskClaude MCP](https://www.npmjs.com/package/askclaude-mcp) - MCP server for pay-per-query Claude AI. 9 x402 endpoints: Haiku/Sonnet/Opus chat, streaming, summarization, code review, translation, sentiment, and crypto analysis. $0.01–$0.10 USDC on Base. `npx askclaude-mcp`. ([GitHub](https://github.com/pvega23/askclaude-mcp) | [Live](https://askclaude.shop))
- [Cerebrus Pulse MCP](https://github.com/0xsl1m/cerebrus-pulse-mcp) - Real-time crypto intelligence MCP server with technical analysis (RSI, EMAs, Bollinger Bands), sentiment, and funding rates for 30+ Hyperliquid perpetuals. x402 USDC micropayments on Base.
- [APIMesh MCP Server](https://www.npmjs.com/package/@mbeato/apimesh-mcp-server) — 16-tool MCP server for web analysis: SEO, security headers, Core Web Vitals, domain availability, email security, email verify, tech stack detection, wallet spend tracking, and more. x402 micropayments on Base. `npx @mbeato/apimesh-mcp-server`. ([GitHub](https://github.com/mbeato/conway))
- [BotIndex MCP](https://github.com/Cyberweasel777/botindex-mcp-server) - 17-tool MCP server for signal intelligence: sports odds, crypto correlations, token graduations (Zora/Hyperliquid/Metaplex Genesis), DFS optimization, and arbitrage detection. 50 free requests per wallet, then x402 USDC on Base. `npx botindex-mcp-server`. ([npm](https://npmjs.com/package/botindex-mcp-server)) ([Live API](https://king-backend.fly.dev/api/botindex/v1/))
- [Azeth MCP Server](https://github.com/azeth-protocol/mcp-server) - MCP server with x402 payment tool (`azeth_pay`), ERC-8004 trust registry discovery, on-chain reputation scoring, and payment agreements for recurring x402 billing. USDC on Base. ([npm](https://www.npmjs.com/package/@azeth/mcp-server))
- [PayCrow](https://github.com/michu5696/paycrow) - Escrow protection for autonomous agent payments. Trust scoring from 4 on-chain sources + USDC escrow with dispute resolution on Base. 10 MCP tools including safe_pay (trust-informed smart escrow) and trust_gate (go/no-go decision before payment). ([npm](https://www.npmjs.com/package/paycrow))
- [Recall Kitchen](https://recallkitchen.com/docs/#mcp) - MCP server for searching food/product/vehicle recalls. Accepts x402 payments, no account required, $0.025 USDC on Base per request. [Examples](https://github.com/Recall-Kitchen/rk-mcp/tree/master/examples/go)
- [Human Pages](https://humanpages.ai) - The open directory AI agents use to hire humans for real-world tasks. Supports x402 pay-per-use for profile views ($0.05) and job offers ($0.25) in USDC on Base. Also available as an [MCP server](https://github.com/human-pages-ai/humanpages) with 31 tools.

### Agent Frameworks

- [NEAR AI](https://near.ai) - Cross-chain agent settlements.
- [Phidata Agents](https://github.com/phidatahq/phidata) - Multi-modal agents with x402.
- [Vault-0](https://github.com/0-Vault/Vault-0) - Encrypted secret vault, agent monitor, and x402 wallet for OpenClaw. Handles 402 detection, EIP-3009 signing, and policy-gated auto-settlement.

### Agent-to-Agent (A2A)

- [Google A2A x402 Extension](https://github.com/google-agentic-commerce/a2a-x402) - Agent commerce protocol.
  - Python and TypeScript implementations
  - Payment-required, payment-submitted, payment-completed flow
  - Multi-agent payment orchestration
- OpSpawn A2A x402 Gateway - Multi-chain A2A gateway with x402 payments.
  - Google A2A protocol with x402 payment integration
  - Multi-chain support (Base, SKALE, Arbitrum)


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

## 🧪 Testing & Development

Tools and resources for testing x402 implementations.

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

Projects building with or extending x402.

### Infrastructure

- [Coinbase Developer Platform](https://coinbase.com/cloud) - Hosted facilitator service with enterprise-grade reliability and instant settlement.
- Cloudflare x402 - Edge payment processing.
- [Finance District Prism](https://developers.fd.xyz/prism/concepts/x402) - Payment gateway for agentic commerce with x402 support. SDKs for TypeScript, Python, and Java. Two-layer architecture: Prism (orchestration — API, SDKs, middleware) and Spectrum (on-chain stablecoin settlement across Base, Ethereum, Arbitrum, and BSC). ([Docs](https://developers.fd.xyz))
- [thirdweb Nebula](https://thirdweb.com/nebula) - AI agent transaction framework.
- [RustChain](https://github.com/Scottcjn/Rustchain) - Decentralized proof-of-stake blockchain with x402 payment integration for AI agent micropayments. Features attestation-based consensus, hardware-bound validators, and RTC token economy with native x402 support for autonomous agent transactions. ([Docs](https://github.com/Scottcjn/rustchain-bounties))

### Tools & Services

- [Satring](https://satring.com) - Curated L402 + x402 API directory with human ratings, health monitoring, and MCP server for AI agent discovery. Dual-protocol support (Lightning + USDC on Base). ([GitHub](https://github.com/toadlyBroodle/satring)) | ([MCP](https://pypi.org/project/satring-mcp/))
- [Pylon](https://pylonapi.com) — x402-payable utility API gateway for AI agents. 20 capabilities (web extraction, search, translation, code execution, image generation, and more) on Base mainnet. MCP server (`npx @pylonapi/mcp`), agent reputation network, and gateway orchestration. USDC on Base. ([GitHub](https://github.com/pylon-apis/pylon-mcp))
- [x402 Bazaar](https://x402bazaar.org) - Decentralized API marketplace with 69 native x402-payable endpoints (web search, DALL-E 3, weather, crypto, translation, code execution, and more). Multi-chain USDC on Base and SKALE. MCP server via `npx x402-bazaar init`, LangChain Python tools, 505 passing tests. ([GitHub](https://github.com/Wintyx57/x402-backend))
- [ag402](https://github.com/AetherCore-Dev/ag402) — Payment layer for AI agents using x402. Wrap any API or MCP server with a USDC paywall (`ag402 serve`), or let agents auto-pay (`ag402 run`). Solana USDC, ~0.5s settlement, non-custodial. Works with Claude Code, Cursor, LangChain, AutoGen. [token-rugcheck MCP](https://github.com/AetherCore-Dev/token-rugcheck) | [Glama](https://glama.ai/mcp/servers/AetherCore-Dev/ag402-mcp)
- [CrossFin](https://crossfin.dev) — x402 Agent Services Gateway with 15 paid Korean market data APIs (Kimchi Premium, KOSPI, Bithumb, Upbit, Coinone, FX, headlines, trading signals). First financial data APIs in the x402 ecosystem. MCP server included.
- [x402 API Network](https://x402.fatihai.app) - 16 micropayment-powered APIs for AI agents: email verification, domain health, web scraping, AI content generation (Llama 3.3 70B), DNS, WHOIS, SSL check, and more. Includes MCP server, Bazaar discovery, and .well-known/x402 manifest. ([GitHub](https://github.com/fatihdagustu20-hub/x402-api-network))
- [dTelecom STT](https://x402stt.dtelecom.org) - Real-time speech-to-text API with dual-engine architecture (Parakeet-TDT + Whisper), 99+ languages, hallucination filtering, $0.005/min. Built on dTelecom DePIN. [Python SDK](https://github.com/dTelecom/stt-client-python) | [TypeScript SDK](https://github.com/dTelecom/stt-client-ts)
- [BlockRun](https://blockrun.ai) - AI Gateway + Service Directory with 600+ x402 services indexed, trust scores, and 31+ AI models via pay-per-use USDC.
- [x402 Service Discovery API](https://x402-discovery-api.onrender.com) - Enriched directory of 251+ x402-payable services with trust signals, uptime tracking, latency metrics, and health scores. Auto-scans x402.org/ecosystem + awesome-x402 every 6h. Companion MCP server with 6 tools (x402_discover, x402_trust, x402_health_check, x402_route, etc.). Smart routing via [RouteNet](https://x402-routenet.onrender.com).
- [x402 RouteNet](https://x402-routenet.onrender.com) - Smart routing layer for x402-enabled services. Selects the optimal endpoint from 251+ indexed services based on price, latency, health score, or composite trust. Four routing strategies: `best` (composite score), `cheapest`, `fastest`, `most_trusted`. Works with the Discovery API — discover services, then route to the best one. ([GitHub](https://github.com/rplryan/x402-routenet))
- **[OpenClaw Discovery Index](https://x402search.xyz)** — x402-gated search engine for 13,000+ x402-enabled APIs indexed from CDP Bazaar. Search by capability, category, and network. $0.01 USDC per search on Base mainnet (eip155:8453). No account needed.
- [Domain Intelligence API](https://domain.hugen.tokyo) - 8-endpoint domain analysis API: WHOIS, DNS (3-resolver parallel), SSL/TLS grading, Wappalyzer tech detection, security headers, CT log subdomains, redirect chains, and full reports. $0.001–$0.02 USDC on Base. ([llms.txt](https://domain.hugen.tokyo/llms.txt))
- [AskClaude](https://askclaude.shop) - Pay-per-query Claude AI API with 9 endpoints: Haiku ($0.01), Sonnet ($0.03), Opus ($0.10), plus specialized tools for summarization, code review, translation, sentiment analysis, and crypto analysis. Streaming support. USDC on Base. ([MCP Server](https://www.npmjs.com/package/askclaude-mcp) | [GitHub](https://github.com/pvega23/askclaude-mcp))
- Apexti Toolbelt - 1,500+ Web3 APIs via x402 MCP servers.
- [Web3 Signals — AgentMarketSignal](https://web3-signals-api-production.up.railway.app) - AI-powered crypto signal intelligence for 20 assets with 6 scoring dimensions (whale, technical, derivatives, narrative, sentiment, market). Market regime detection, portfolio optimization, and accuracy tracking. $0.001 USDC per call on Base. 9 MCP tools (free) + REST API (x402 paid). ([GitHub](https://github.com/manavaga/web3-signals-mcp))
- [Zyte.com](https://www.zyte.com) - Web scraping with x402 payments.
- BuffetPay - Smart x402 payments with guardrails.
- [Cal.com](https://cal.com) - Automated scheduling with payments.
- [AgentStore](https://agentstore.tools) - Open-source marketplace for Claude Code plugins with x402 USDC payments, 80/20 publisher revenue split, and permissionless publishing via CLI.
- [AIAgentStore.ai](https://aiagentstore.ai/developer) - Insights for founders with x402 payments.
- [Einstein AI](https://emc2ai.io) - AI blockchain intelligence with 23 x402 endpoints. Whale tracking, smart money, launchpad monitoring, security audits.
- [Rug Munch Intelligence](https://cryptorugmunch.app) - AI-powered crypto risk intelligence with 19 x402 endpoints. Rug pull detection, honeypot scoring, deployer tracking, holder deep-dive, KOL shill detection, social OSINT, and LLM forensic analysis (Claude Sonnet/Opus). $0.02–$2.00 USDC on Base. MCP server (19 tools), A2A agent card, AgentKit plugin. [Example Agent](https://github.com/CryptoRugMunch/x402-trading-agent) | [AgentKit](https://github.com/CryptoRugMunch/rug-agent-kit)
- [Apollo Intelligence Network](https://apolloai.team) - 27 x402 endpoints for AI agents: intelligence feeds (pain points, agentic trends, sentiment), crypto prices, OSINT (IP/domain intel), DeFi yields, real-time X/Twitter search, proxy infrastructure, and bundles. MCP server with 26 tools. USDC on Base. ([GitHub](https://github.com/bnmbnmai/mcp-proxy)) | ([npm](https://www.npmjs.com/package/@apollo_ai/mcp-proxy))
- [Moltalyzer](https://moltalyzer.xyz) - Four AI intelligence feeds for agents: hourly Moltbook community digests, daily GitHub trending repos, Polymarket predetermined outcome detection, and real-time token intelligence — via x402 micropayments on Base.
- [OpSpawn Screenshot API](https://github.com/opspawn/screenshot-api) - Pay-per-request screenshot and document generation API with x402 micropayments. $0.01/screenshot, $0.005/markdown conversion. USDC on Base.
- [Crysha Price Oracle](https://api.crysha.com) - Aggregated crypto prices (multi-source BTC/others), $0.001/call on Base USDC. Manifest: [/.well-known/x402](https://api.crysha.com/.well-known/x402)
- [MOSS Agent](https://moss.chobon.top) - AI-powered coding services: code review ($0.005), translation ($0.003), and code explanation ($0.003) via x402 micropayments on Base. A2A protocol compatible with agent discovery at [/.well-known/agent.json](https://moss.chobon.top/.well-known/agent.json). Built with Lucid Agents + Hono.
- [Automaton Oracle](https://automaton-oracle.xyz) - Sovereign crypto intelligence oracle with self-hosted facilitator (no Coinbase CDP dependency): real-time prices (CoinGecko + DEXScreener), global macro intelligence (Fear&Greed, BTC dominance, total market cap, altcoin season, trending), pump.fun graduation radar, trading signals, and meme generation. **Only dedicated macro + pump.fun oracle on x402.** \$0.005–\$0.05 USDC on Base. Discovery: [/.well-known/x402.json](https://automaton-oracle.xyz/.well-known/x402.json) | [llms.txt](https://automaton-oracle.xyz/llms.txt)
- [AnyBrowse](https://anybrowse.dev) - Autonomous web browsing agent with x402 micropayments. Converts URLs to LLM-ready Markdown via real Chrome browsers. USDC on Base.
- [MoonMaker API](https://api.moonmaker.cc) - AI-native crypto intelligence API. Real-time signals, market regime, institutional flows, DeFi yields & DEX alpha — pay per call via x402 USDC on Base. Built for AI agents.
- [Bloomfilter](https://bloomfilter.xyz) - x402-powered domain registration API for AI agents. Register ICANN domains and manage DNS, paying with USDC on Base
- [OpSpawn Bazaar](https://a2a.opspawn.com) - Suite of seven AI-powered x402 microservices including screenshot capture, sentiment analysis, summarization, translation, fact-checking, and entity extraction on Base network.
- [Token Intelligence API](https://github.com/TKtokyo/token-intel-api) - EVM token security analysis with deterministic risk scoring and natural language summaries via x402 micropayments. Aggregates GoPlus contract, holder, and liquidity data in one request. $0.005 USDC on Base. Cloudflare Workers + Hono. [Live](https://token-intel-api.tatsu77.workers.dev)
- [EnrichAPI](http://72.62.52.171:8000) - B2B lead intelligence API for AI sales agents. POST a company URL, get structured JSON: tech stack, growth signals, ICP fit score, pain hypothesis, and personalized outreach angle. $0.01 USDC/call via x402 (no API key needed). Also supports subscription tiers via Stripe. Built by an autonomous AI agent. ([GitHub](https://github.com/cognoco/enrichapi) | [Docs](http://72.62.52.171:8000/docs))
- [Polymarket Liquidity API](https://github.com/TKtokyo/polymarket-liquidity-api) - Real-time Polymarket prediction market liquidity data. Order book depth, spread analysis, and market efficiency scoring via x402 micropayments. $0.005 USDC on Base. Cloudflare Workers + Hono. [Live](https://polymarket-liquidity-api.tatsu77.workers.dev)
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
- [SkillMint](https://skillmint.sagasu.art) - Pay-per-call AI skills marketplace with 51 skills across 7 categories (dev tools, creative design, research, writing, docs). $0.01–$0.50 USDC on Base. No API keys, no subscriptions. ([GitHub](https://github.com/s87343472/skillmint))
- [KnowMint](https://knowmint.shop) - Open-source knowledge marketplace with x402 payment gate on Solana. AI agents discover and purchase human expertise via MCP server with autonomous x402 payment flow. ([GitHub](https://github.com/Sou0327/knowmint))
- [AgenticTotem Web Extractor](https://agentictotem.com/docs/web-extractor) - Send URLs + a JSON Schema. Get clean, structured data back. Powered by AI, paid per use — no keys, no accounts. ([MCP](https://agentictotem.com/mcp))

- [Compintel](https://compintel.co) - AI-to-AI service platform with 4 x402-native APIs on Base (USDC). $0.01/request. [Polymarket API](https://polymarket.compintel.co) (live prediction market data with real-time probabilities), [Revenue Tracker](https://revenue-tracker.compintel.co) (revenue event tracking and analytics for AI services), [Webhook Service](https://webhook-service.compintel.co) (reliable webhook forwarding with retry logic), [Premium Analytics](https://premium-analytics.compintel.co) (event tracking, metrics, error monitoring, and latency analytics). Free tier available, paid tier via x402 (EIP-712 TransferWithAuthorization, Base/USDC). Machine-readable catalog: [catalog.json](https://compintel.co/catalog.json)

### Charity & Social Impact

- [x402 Charity](https://allscale-io.github.io/x402charity/) - Open-source middleware for automatic micro-donations via x402. Embed charitable giving into any payment flow — trades, API calls, subscriptions. $0.0001 USDC per event on Base. CLI + web widget. Built by [AllScale Lab](https://allscale.io). ([GitHub](https://github.com/allscale-io/x402charity))

- [x402charity](https://x402charity.com) — Open-source micro-donation server powered by x402. Drop-in Express/Next.js middleware that triggers USDC charity donations on every user action (API call, trade, game move). npm package, CLI, and Vercel-deployable server with built-in dashboard. ([GitHub](https://github.com/allscale-io/x402charity)) ([npm](https://www.npmjs.com/package/x402charity))
### DeFi & Finance

- [Cred Protocol](https://credprotocol.com) - Decentralized credit scoring.
- [Chainlink VRF](https://chain.link) - Random NFT minting with payment demo.
- [Signet](https://signet.sebayaki.com) - Onchain spotlight ads on Base — AI agents pay USDC via x402 to post ads. First mainnet x402 transaction on Base. [CLI](https://github.com/h1-hunt/signet-client)
- **[x402-api](https://x402-api.fly.dev)** — Pay-per-call DeFi & crypto data API. 8 endpoints: price feeds, whale tracking, gas tracker, DEX quotes, token scanner, yield scanner, funding rates, wallet profiler. USDC micropayments on Base. ERC-8004 Agent #18763.
- [DeFi Intelligence API](https://defi.hugen.tokyo) — Unified DeFi security, bridging, and analytics API for AI agents. 26 endpoints across three backends: GoPlus Security (token/address/NFT security, rugpull detection, phishing, tx simulation), LI.FI (cross-chain bridge quotes, routes, gas prices), and DeFi Llama (protocol TVL, fees, token prices, stablecoin data, DEX volumes). $0.005–$0.01 USDC on Base. Discovery: [/.well-known/x402](https://defi.hugen.tokyo/.well-known/x402)

### Developer Tools

- NEAR AI - Cross-chain agent settlements.
- [Boosty Labs](https://boosty.io) - AI agents buying real-time insights.

## 📊 Ecosystem Market Data

Live metrics and on-chain analytics for the x402 ecosystem.

### Market Overview

**Ecosystem Market Cap**: $815 million combined market capitalization of x402 ecosystem tokens. **Weekly Transactions**: 500K+ payment settlements across all chains. **Cumulative Transactions**: 10.5M+ total transactions processed on AIsa network. **Transaction Growth**: 10,000%+ year-over-year increase in payment volume. **Settlement Time**: 2-second average across production deployments.

### Analytics Dashboards

- [Dune Analytics x402](https://dune.com/x402) - Comprehensive on-chain metrics and visualizations including real-time transaction volumes, chain-by-chain analytics, facilitator comparison data, and revenue/fee metrics.
- [x402scan Explorer](https://x402scan.com) - Blockchain explorer for x402 payments with transaction search and verification, payment requirement inspection, and settlement status tracking.
- [Valoria](https://x402.valoria.net) - x402 market intelligence with revenue rankings, service analysis, and pricing data across 90K+ indexed services and $46M+ in tracked on-chain volume.
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
