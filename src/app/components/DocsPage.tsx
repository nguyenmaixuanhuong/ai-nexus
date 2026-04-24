import { FileText, Download, Copy } from 'lucide-react';

const templates = [
  {
    title: 'CO-STAR Prompt Template',
    description: 'Context, Objective, Style, Tone, Audience, Response format',
    category: 'Prompting',
    content: `Context: [Background information]
Objective: [What you want to achieve]
Style: [Writing style preference]
Tone: [Desired tone]
Audience: [Target audience]
Response: [Expected format]`,
  },
  {
    title: 'Code Review Agent Config',
    description: 'Configuration for automated code review AI agent',
    category: 'Agent Setup',
    content: `{
  "role": "Senior Code Reviewer",
  "focus": ["security", "performance", "maintainability"],
  "output": "markdown checklist",
  "severity_levels": ["critical", "warning", "suggestion"]
}`,
  },
  {
    title: 'Chain-of-Thought Template',
    description: 'Structured reasoning for complex problem solving',
    category: 'Prompting',
    content: `Let's approach this step by step:

1. Problem Understanding
   - What is being asked?
   - What are the constraints?

2. Analysis
   - Break down the problem
   - Identify key components

3. Solution Design
   - Propose approach
   - Consider alternatives

4. Implementation
   - Execute the solution
   - Verify correctness`,
  },
  {
    title: 'CLI Tool Configuration',
    description: 'Setup guide for AI-powered command line tools',
    category: 'CLI Setup',
    content: `# AI CLI Setup

## Installation
npm install -g ai-cli-tools

## Configuration
export OPENAI_API_KEY="your-key"
export MODEL="gpt-4"

## Usage Examples
ai-help "how to optimize this query"
ai-review --file main.py`,
  },
  {
    title: 'Context Management Strategy',
    description: 'Best practices for managing conversation context',
    category: 'Context',
    content: `## Context Window Management

1. Prioritize Information
   - Most recent context first
   - Critical system info always included
   - Historical context summarized

2. Chunking Strategy
   - 2000 tokens per chunk
   - Overlap 200 tokens between chunks
   - Semantic boundary awareness

3. Memory Systems
   - Short-term: Last 5 interactions
   - Long-term: Summarized key points
   - Episodic: Important decisions`,
  },
  {
    title: 'MCP Protocol Example',
    description: 'Model Context Protocol implementation guide',
    category: 'Advanced',
    content: `// MCP Server Setup
const server = new MCPServer({
  name: "my-context-provider",
  version: "1.0.0"
});

server.registerTool("search_docs", {
  description: "Search documentation",
  parameters: {
    query: { type: "string" },
    limit: { type: "number" }
  },
  handler: async (params) => {
    // Implementation
  }
});`,
  },
];

export default function DocsPage() {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="min-h-screen bg-gradient-to-b from-[#0B0E14] via-[#1a0f2e] to-[#2d1b4e] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

        <div className="relative z-10 p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl mb-2 bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                Tài liệu & Templates
              </h1>
              <p className="text-white/60">Prompt templates, agent configs, and setup guides</p>
            </div>

            <div className="grid gap-6">
              {templates.map((template, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-lg flex items-center justify-center">
                        <FileText size={24} className="text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-white mb-1">{template.title}</h3>
                        <p className="text-sm text-white/60">{template.description}</p>
                        <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400">
                          {template.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                        <Copy size={18} className="text-white/70" />
                      </button>
                      <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                        <Download size={18} className="text-white/70" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <pre className="text-xs text-white/80 font-mono whitespace-pre-wrap leading-relaxed">
                      {template.content}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
