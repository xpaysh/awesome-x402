# Contributing to awesome-x402

We love your input! We want to make contributing to awesome-x402 as easy and transparent as possible, whether it's:

- Adding new x402 resources
- Improving existing content
- Reporting issues with links or descriptions
- Suggesting new categories or sections

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

---

## Quick Start for Contributors

1. **🔍 Search first** - Check if your resource already exists
2. **🎯 One change per PR** - Keep pull requests focused
3. **📝 Follow the format** - Use `[Resource Name](link) - Description.`
4. **✅ Test your links** - Ensure everything works
5. **📋 Use our template** - Follow the PR template

---

## Table of Contents

- [Adding Resources](#adding-resources)
- [Quality Standards](#quality-standards)
- [Contribution Guidelines](#contribution-guidelines)
- [PR Process](#pr-process)
- [What Makes a Great Contribution](#what-makes-a-great-contribution)

## Adding Resources

### Format Requirements

Use this exact format for all additions:
```markdown
- [Resource Name](https://example.com) - Brief description explaining value to x402 developers.
```

### Where to Add

- **Bottom of relevant category** - Add new items at the end of their category
- **New categories** - Propose new sections if your resource doesn't fit existing ones
- **Multiple categories** - Resources should only appear in one category (choose the most relevant)

### Description Guidelines

✅ **Good descriptions:**
- "Complete TypeScript implementation with multi-chain support."
- "Step-by-step tutorial for integrating x402 with FastAPI."
- "Production-grade Rust facilitator with Docker deployment."

❌ **Avoid:**
- "Amazing x402 tool!" (too vague)
- "The best implementation ever 🔥" (marketing speak)
- "Tool" (too generic)

## Quality Standards

To maintain the high quality of awesome-x402, resources should meet these criteria:

### ✅ Include
- **Actively maintained** projects (or historically significant)
- **Well-documented** resources with clear usage instructions
- **Production-ready** implementations (or clearly marked as experimental)
- **x402-specific** content (not just general blockchain/payment resources)
- **Value-driven** resources that help developers build with x402

### ❌ Exclude
- Dead links or abandoned projects
- Duplicate resources (check existing entries first)
- General blockchain content not specific to x402
- Promotional or spam content
- Personal projects without documentation or community value

### Special Categories

**Community Projects**: Mark with ⭐ if it's an official implementation
**Experimental**: Mark clearly if the project is not production-ready
**Historical**: Include important historical projects with context

## Contribution Guidelines

### Pull Request Requirements

1. **Search existing resources** before adding new ones
2. **One resource per pull request** (makes review easier)
3. **Clear PR title**: `Add [Resource Name]` or `Update [Section Name]`
4. **Descriptive PR description** explaining the value
5. **Working links** - verify all URLs before submitting
6. **Spell check** - ensure proper grammar and spelling

### Link Requirements

- **Use HTTPS** when available
- **Link to source** - prefer original sources over aggregators
- **No shorteners** - avoid bit.ly, t.co, etc.
- **Permanent links** - avoid links that might break
- **Accessible** - ensure links work without special access

### Description Requirements

- **Concise but informative** (max 1-2 sentences)
- **Start with capital letter**, end with period
- **No emojis** in descriptions (unless part of official name)
- **Neutral tone** - objective, not promotional
- **Focus on value** - explain why it's useful for x402 developers

## PR Process

### 1. Fork & Branch
```bash
git clone https://github.com/your-username/awesome-x402.git
cd awesome-x402
git checkout -b add-awesome-resource
```

### 2. Make Changes
- Add your resource following the format
- Double-check spelling and links
- Ensure proper placement in correct category

### 3. Commit & Push
```bash
git add README.md
git commit -m "Add [Resource Name]"
git push origin add-awesome-resource
```

### 4. Create Pull Request
Use our template and include:
- **What**: Brief description of the resource
- **Why**: Explain its value to the x402 community
- **Quality**: Confirm it meets our standards
- **Testing**: Verify the link works

### PR Template
```markdown
## Add [Resource Name]

**What:** [Brief description of what you're adding]

**Why:** [Explain why it's valuable for x402 developers]

**Quality Checklist:**
- [ ] Resource is actively maintained or historically significant
- [ ] Well-documented with clear usage instructions
- [ ] Directly related to x402 protocol
- [ ] Link is working and accessible
- [ ] Follows contribution format

**Category:** [Which section you're adding it to]
```

## What Makes a Great Contribution

### 🌟 Excellent Contributions
- **New implementations** in different languages
- **Production case studies** showing real x402 usage
- **Comprehensive tutorials** that teach x402 concepts
- **Tools and utilities** that extend x402 functionality
- **Integration examples** with popular frameworks
- **Documentation improvements** that help developers

### 📈 Good Contributions
- Working code examples
- Links to quality blog posts about x402
- Developer tools and utilities
- Conference talks and presentations
- Academic papers or research

### ⚠️ Contributions to Improve
- Resources without clear documentation
- Links to general blockchain content
- Personal projects without community value
- Duplicate resources
- Broken or outdated links

## Review Process

1. **Automatic checks** - Links and format validation
2. **Maintainer review** - Quality and relevance check
3. **Community feedback** - Input from other contributors
4. **Merge** - Usually within 24-48 hours for quality submissions

## Recognition

Contributors are recognized through:
- GitHub contributors list
- Special thanks in release notes
- Community shout-outs for significant contributions

## Need Help?

- **Questions about contributing?** Open an issue with the `question` label
- **Not sure if your resource fits?** Open an issue to discuss before submitting
- **Found a broken link?** Open an issue or submit a fix PR
- **Want to suggest improvements?** We welcome meta-contributions to this guide!

## Examples

### ✅ Good Examples

**Adding a new implementation:**
```markdown
- [x402-go](https://github.com/x402-protocol/x402-go) - Go implementation with Gin and Echo middleware support.
```

**Adding a tutorial:**
```markdown
- [Building x402 Microservices](https://dev.to/author/x402-microservices) - Complete guide to creating paid microservices with x402.
```

**Adding a tool:**
```markdown
- [x402-cli](https://github.com/tools/x402-cli) - Command-line interface for testing and debugging x402 implementations.
```

### ❌ Examples to Avoid

```markdown
- [My x402 Project](https://github.com/user/project) - Cool project I made.
```
*Issues: Too vague, promotional tone, unclear value*

```markdown
- [Awesome Blockchain Tool](https://example.com) - Does blockchain stuff with payments.
```
*Issues: Not x402-specific, unclear functionality*

---

## License

By contributing to awesome-x402, you agree that your contributions will be licensed under the same CC0 license that covers the project.

---

<p align="center">
  <b>Thank you for helping make x402 more awesome! 🚀</b><br>
  <sub>Together we're building the future of agent payments</sub>
</p>