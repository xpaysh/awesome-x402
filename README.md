# Awesome X402 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> ⚡ **The Ultimate x402 Resource Hub** - Everything you need to build internet-native payments using HTTP 402. Perfect for AI agents, APIs, and micropayments. Build paywalls, monetize services, and enable autonomous agent payments with crypto/USDC. Zero fees, 2-second settlement.

[![GitHub stars](https://img.shields.io/github/stars/xpaysh/awesome-x402?style=social)](https://github.com/xpaysh/awesome-x402)
![Weekly transactions](https://img.shields.io/badge/transactions-500K%2Fweek-brightgreen)
![Settlement time](https://img.shields.io/badge/settlement-2%20seconds-blue)

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

🚀 **Start building in 5 minutes** | 📈 **500K+ transactions/week** | 💰 **$180M+ ecosystem** | ⚡ **2-second settlement**

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
- [Production Deployment Checklist](https://github.com/coinbase/x402/blob/main/DEPLOYMENT.md) - Go live on Base mainnet.

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

### Rust

- [x402-rs](https://github.com/x402-rs/x402-rs) ⭐ **Community** - Production-grade Rust implementation.
  - Axum middleware
  - Reqwest client wrapper
  - Self-hostable facilitator
  - Multi-chain support
- [x402-axum](https://github.com/x402-rs/x402-rs/tree/main/x402-axum) - Axum web framework integration.
- [x402-reqwest](https://github.com/x402-rs/x402-rs/tree/main/x402-reqwest) - Reqwest HTTP client wrapper.


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

**Wallet Integration**
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
- [Mainnet production example](https://github.com/coinbase/x402/tree/main/examples/typescript/fullstack/mainnet) - Base mainnet ready.

**Hono**
- [Browser wallet example](https://github.com/coinbase/x402/tree/main/examples/typescript/fullstack/browser-wallet-example) - React + Hono full-stack.

### Python

**FastAPI**
- [FastAPI example](https://github.com/coinbase/x402/tree/main/examples/python) - Complete implementation.

### Rust

**Axum**
- [Axum server example](https://github.com/x402-rs/x402-rs/tree/main/x402-axum-example) - Full implementation.

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
- [Farcaster Mini App](https://github.com/coinbase/x402/tree/main/examples/typescript/fullstack/farcaster-miniapp) - Social app integration.
- [x402 Boilerplate — Conflux eSpace](https://github.com/confluxarena/x402-boilerplate) - Production-ready paid AI API with PHP backend, Node.js facilitator, CLI agent, Docker, 87 tests, and multi-wallet demo. EIP-3009 USDT0 settlement. [Live Demo](https://confluxarena.org/x402-demo).

### API Examples

- [Alfred's Digital Bazaar](https://httpay.xyz) - ~100 x402-paywalled API endpoints built by an AI agent. Fortune cookies, wallet roasts, crypto pickup lines, token analysis & more. $0.10–$1.00 USDC per call on Base. No signup required. [Source](https://github.com/Alfredz0x/alfreds-digital-bazaar)
- [REST API with Auth Pricing](https://github.com/coinbase/x402/tree/main/examples/typescript/fullstack/auth_based_pricing) - SIWE + dynamic pricing.

### Client Examples

- [Axios Client](https://github.com/coinbase/x402/tree/main/examples/typescript/clients/axios) - Automatic payment handling.
- [Fetch Client](https://github.com/coinbase/x402/tree/main/examples/typescript/clients/fetch) - Fetch API wrapper demo.
- [Python Requests](https://github.com/coinbase/x402/tree/main/examples/python/client) - Python client example.

## 🎨 Use Cases & Patterns

Real-world use cases and implementation patterns. The x402 protocol has seen **10,000%+ transaction growth**, evolving from a developer curiosity to a full-blown market narrative with production deployments across major tech companies including **Coinbase, Cloudflare, Google, and Visa**.

### By Industry

**AI & Autonomous Agents**
- Context purchasing (Anthropic MCP)
- Tool marketplace access
- Real-time data feeds for trading bots
- Compute resource allocation

**Content & Media**
- Per-article paywalls
- Video streaming (pay-per-view)
- Music licensing per play
- Premium podcast episodes

**Data & APIs**
- Weather data services
- Financial market data
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

### Model Context Protocol (MCP)

- Anthropic MCP Integration - Official Claude integration.
- x402 MCP Server - Claude Desktop ready server.
- [MCP Server Setup Guide](https://docs.cdp.coinbase.com/x402/mcp-server) - Complete installation instructions.
- Embedded Wallet MCP - Electron-based wallet for MCP.
- [Apollo Intelligence MCP Server](https://www.npmjs.com/package/@apollo_ai/mcp-proxy) - 26-tool MCP server covering intelligence feeds, crypto, OSINT, DeFi, proxy, and search. `npx @apollo_ai/mcp-proxy`. ([GitHub](https://github.com/bnmbnmai/mcp-proxy))

### Agent Frameworks

- [NEAR AI](https://near.ai) - Cross-chain agent settlements.
- [Phidata Agents](https://github.com/phidatahq/phidata) - Multi-modal agents with x402.
- [Vault-0](https://github.com/0-Vault/Vault-0) - Encrypted secret vault, agent monitor, and x402 wallet for OpenClaw. Handles 402 detection, EIP-3009 signing, and policy-gated auto-settlement.

### Agent-to-Agent (A2A)

- [Google A2A x402 Extension](https://github.com/google-agentic-commerce/a2a-x402) - Agent commerce protocol.
  - Python and TypeScript implementations
  - Payment-required, payment-submitted, payment-completed flow
  - Multi-agent payment orchestration
- [OpSpawn A2A x402 Gateway](https://a2a.opspawn.com) - Multi-chain A2A gateway with x402 payments.
  - Google A2A protocol with x402 payment integration
  - Multi-chain support (Base, SKALE, Arbitrum)
  - 11,800+ tasks processed, 52 tests


## 🔨 Tools & Utilities

Development tools and utilities for x402.

### CLI Tools

- [Foundry](https://getfoundry.sh/) - Smart contract development toolkit.

### Monitoring & Analytics

- Dune Analytics - On-chain metrics and visualizations.

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
- [Understanding Payment Flows](https://blog.thirdweb.com/what-is-x402-protocol) - Visual explanation.
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

- [a16z State of Crypto 2025](https://a16z.com/state-of-crypto-2025/) - Future of agent payments.
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

- [AI Agents Need x402](https://a16z.com/ai-agent-payments/) - Future of autonomous payments.

### News Coverage

- [x402 Sees 10,000% Growth](https://finance.yahoo.com/news/coinbase-x402-ai-payments-protocol-130700006.html) - Yahoo Finance.
- [Cloudflare Joins x402](https://techcrunch.com/cloudflare-x402) - TechCrunch coverage.
- [The HTTP 402 Awakens](https://arstechnica.com/http-402) - Ars Technica feature.

## 👥 Community

Connect with the x402 community.

### Official Channels

- [x402 Foundation Discord](https://discord.gg/x402) - Official community server.
- [GitHub Discussions](https://github.com/coinbase/x402/discussions) - Technical Q&A and RFCs.
- [Twitter @x402org](https://twitter.com/x402org) - Official updates and announcements.

### Developer Communities

- [x402 Builders Telegram](https://t.me/x402builders) - Active developer chat.
- [Reddit r/x402](https://reddit.com/r/x402) - Community forum and discussions.
- [Dev.to #x402](https://dev.to/t/x402) - Tutorials and articles.
- [Farcaster x402 Channel](https://warpcast.com/~/channel/x402) - Decentralized social.

### Events & Meetups

- [x402 Hackathons](https://x402.org/hackathons) - Upcoming hackathons and prizes.
- [Weekly Office Hours](https://calendar.x402.org) - Live Q&A with core team.
- [Local Meetups](https://meetup.com/x402) - In-person gatherings.

### Newsletters

- [x402 Weekly](https://x402.org/newsletter) - Weekly protocol updates.
- [Agent Economy Digest](https://agenteconomy.substack.com) - AI agent payments news.

## 🌟 Ecosystem Projects

Projects building with or extending x402.

### Infrastructure

- [Coinbase Developer Platform](https://coinbase.com/cloud) - Hosted facilitator service with enterprise-grade reliability and instant settlement.
- Cloudflare x402 - Edge payment processing.
- [thirdweb Nebula](https://thirdweb.com/nebula) - AI agent transaction framework.

### Tools & Services

- [CrossFin](https://crossfin.dev) — x402 Agent Services Gateway with 15 paid Korean market data APIs (Kimchi Premium, KOSPI, Bithumb, Upbit, Coinone, FX, headlines, trading signals). First financial data APIs in the x402 ecosystem. MCP server included.
- [x402 API Network](https://x402.fatihai.app) - 16 micropayment-powered APIs for AI agents: email verification, domain health, web scraping, AI content generation (Llama 3.3 70B), DNS, WHOIS, SSL check, and more. Includes MCP server, Bazaar discovery, and .well-known/x402 manifest. ([GitHub](https://github.com/fatihdagustu20-hub/x402-api-network))
- [dTelecom STT](https://x402stt.dtelecom.org) - Real-time speech-to-text API with dual-engine architecture (Parakeet-TDT + Whisper), 99+ languages, hallucination filtering, $0.005/min. Built on dTelecom DePIN. [Python SDK](https://github.com/dTelecom/stt-client-python) | [TypeScript SDK](https://github.com/dTelecom/stt-client-ts)
- [BlockRun](https://blockrun.ai) - AI Gateway + Service Directory with 600+ x402 services indexed, trust scores, and 31+ AI models via pay-per-use USDC.
- [Apexti Toolbelt](https://apexti.io) - 1,500+ Web3 APIs via x402 MCP servers.
- [Zyte.com](https://www.zyte.com) - Web scraping with x402 payments.
- [BuffetPay](https://buffetpay.com) - Smart x402 payments with guardrails.
- [Cal.com](https://cal.com) - Automated scheduling with payments.
- [AgentStore](https://agentstore.tools) - Open-source marketplace for Claude Code plugins with x402 USDC payments, 80/20 publisher revenue split, and permissionless publishing via CLI.
- [AIAgentStore.ai](https://aiagentstore.ai/developer) - Insights for founders with x402 payments.
- [Einstein AI](https://emc2ai.io) - AI blockchain intelligence with 23 x402 endpoints. Whale tracking, smart money, launchpad monitoring, security audits.
- [Apollo Intelligence Network](https://apolloai.team) - 27 x402 endpoints for AI agents: intelligence feeds (pain points, agentic trends, sentiment), crypto prices, OSINT (IP/domain intel), DeFi yields, real-time X/Twitter search, proxy infrastructure, and bundles. MCP server with 26 tools. USDC on Base. ([GitHub](https://github.com/bnmbnmai/mcp-proxy)) | ([npm](https://www.npmjs.com/package/@apollo_ai/mcp-proxy))
- [Moltalyzer](https://moltalyzer.xyz) - Three AI intelligence feeds for agents: hourly Moltbook community digests, daily GitHub trending repos, and daily Polymarket insider detection via x402 micropayments on Base.
- [OpSpawn Screenshot API](https://github.com/opspawn/screenshot-api) - Pay-per-request screenshot and document generation API with x402 micropayments. $0.01/screenshot, $0.005/markdown conversion. USDC on Base.

### DeFi & Finance

- [Cred Protocol](https://credprotocol.com) - Decentralized credit scoring.
- [Chainlink VRF](https://chain.link) - Random NFT minting with payment demo.
- [Signet](https://signet.sebayaki.com) - Onchain spotlight ads on Base — AI agents pay USDC via x402 to post ads. First mainnet x402 transaction on Base. [CLI](https://github.com/h1-hunt/signet-client)

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

- [Coinbase x402 Security Audit](https://github.com/coinbase/x402/blob/main/audits/coinbase-audit-2024.pdf) - Official security audit of x402 protocol smart contracts.
- [Circle USDC Audits](https://www.circle.com/en/usdc/security-audits) - Comprehensive audits of USDC contracts used in x402 settlements.
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
- [Front-Running Mitigation](https://github.com/coinbase/x402/blob/main/docs/frontrunning.md) - MEV protection strategies.

### Bug Bounty Programs

- [Coinbase Bug Bounty](https://hackerone.com/coinbase) - Report x402 vulnerabilities for rewards up to $50,000.
- [Immunefi x402 Program](https://immunefi.com) - Decentralized bug bounty platform.

### Security Monitoring

- [Rate Limiting Tools](https://docs.cdp.coinbase.com/x402/security/rate-limiting) - Prevent abuse and ensure service availability.
- [PaySentry](https://github.com/mkmkkkkk/paysentry) - Control plane for AI agent payments. Spending limits, circuit breakers, anomaly detection, and audit trails for x402 integrations. npm: `@paysentry/x402`.

### Spending Controls & Policy Enforcement

- [PolicyLayer](https://policylayer.com) - Non-custodial spending controls for AI agents with crypto wallets. As AI agents increasingly need to make on-chain payments (buying APIs, paying for services, executing trades), they need financial guardrails. PolicyLayer enforces daily spending limits, per-transaction caps, recipient whitelists, and rate limiting — all without holding private keys. Prevents wallet drains from bugs, prompt injection attacks, or infinite loops. [GitHub](https://github.com/PolicyLayer/PolicyLayer) | [npm](https://www.npmjs.com/package/@policylayer/sdk)

## 🔗 Related Protocols

Adjacent protocols and standards.

### Payment Protocols

- [Lightning Network](https://lightning.network/) - Bitcoin Layer 2 micropayments.
- [Stellar Anchors](https://www.stellar.org/learn/anchors) - Cross-border payments.
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

- [21.co Micropayments](https://21.co) - Early Bitcoin micropayment attempt (2015).
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
  <b>🚀 Built with ❤️ by xPay</b><br>
  <sub>Helping the agentic community get paid and pay safely!</sub><br>
  <sub>If this helped you become an x402 champion, please ⭐ star the repo and share it!</sub><br><br>
  <a href="https://x402.org">Official x402 Website</a> •
  <a href="https://github.com/coinbase/x402">Protocol Repo</a> •
  <a href="https://docs.cdp.coinbase.com/x402">Documentation</a> •
  <a href="https://discord.gg/x402">Discord</a> •
  <a href="https://twitter.com/x402org">Twitter</a>
</p>
