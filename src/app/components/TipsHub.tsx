import Masonry from 'react-responsive-masonry';
import TipCard from './TipCard';
import { SlidersHorizontal } from 'lucide-react';

const mockTips = [
  {
    category: 'Coding',
    title: 'Use Chain-of-Thought for Complex Logic',
    content: 'When asking AI to solve complex problems, explicitly ask it to "think step by step" or "show your reasoning". This dramatically improves accuracy for logical tasks.',
    author: 'Sarah Chen',
    authorAvatar: 'SC',
    reactions: { like: 42, fire: 18, rocket: 9 },
  },
  {
    category: 'Searching',
    title: 'Context Window Management',
    content: 'Break large documents into chunks and use semantic search to find relevant sections. This keeps your prompts focused and saves tokens.',
    author: 'Alex Kumar',
    authorAvatar: 'AK',
    reactions: { like: 35, fire: 24, rocket: 12 },
  },
  {
    category: 'Workflow',
    title: 'Custom Instructions for Consistency',
    content: 'Create a library of custom instructions for different tasks. For code reviews, I have a template that checks security, performance, and maintainability every time.',
    author: 'Jordan Lee',
    authorAvatar: 'JL',
    reactions: { like: 67, fire: 31, rocket: 15 },
  },
  {
    category: 'Security',
    title: 'Never Paste API Keys Directly',
    content: 'Use placeholder variables like {{API_KEY}} in your prompts. Replace them programmatically in your code. This prevents accidental leaks in chat history.',
    author: 'Maya Patel',
    authorAvatar: 'MP',
    reactions: { like: 89, fire: 45, rocket: 23 },
  },
  {
    category: 'Coding',
    title: 'Multi-Shot Examples Work Best',
    content: 'Instead of one example, provide 2-3 diverse examples of the pattern you want. AI picks up on the pattern much faster this way.',
    author: 'Chris Wong',
    authorAvatar: 'CW',
    reactions: { like: 28, fire: 12, rocket: 7 },
  },
  {
    category: 'Workflow',
    title: 'Version Your Prompts',
    content: 'Keep a changelog of your best-performing prompts. When I improved my code review prompt from v1 to v3, bug detection went up 40%.',
    author: 'Taylor Smith',
    authorAvatar: 'TS',
    reactions: { like: 51, fire: 22, rocket: 11 },
  },
  {
    category: 'Searching',
    title: 'Use Metadata in RAG Systems',
    content: 'Tag your documents with timestamps, authors, and topics. This metadata helps AI filter and prioritize the most relevant information.',
    author: 'Priya Sharma',
    authorAvatar: 'PS',
    reactions: { like: 44, fire: 19, rocket: 8 },
  },
  {
    category: 'Security',
    title: 'Implement Output Validation',
    content: 'Always validate AI-generated code or data before using it. I run generated SQL through a parser to prevent injection attacks.',
    author: 'David Kim',
    authorAvatar: 'DK',
    reactions: { like: 73, fire: 38, rocket: 19 },
  },
];

export default function TipsHub() {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="min-h-screen bg-gradient-to-b from-[#0B0E14] via-[#1a0f2e] to-[#2d1b4e] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

        <div className="relative z-10 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl mb-2 bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                  AI Tips Hub
                </h1>
                <p className="text-white/60">Community-shared insights and best practices</p>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg transition-all text-white">
                <SlidersHorizontal size={18} />
                <span className="text-sm">Most Reacted</span>
              </button>
            </div>

            <Masonry columnsCount={3} gutter="1.5rem">
              {mockTips.map((tip, index) => (
                <TipCard key={index} {...tip} />
              ))}
            </Masonry>
          </div>
        </div>
      </div>
    </div>
  );
}
