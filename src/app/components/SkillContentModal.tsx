import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Terminal, GitBranch, Zap } from 'lucide-react';
import { useState } from 'react';

interface SkillContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  skill: {
    title: string;
    tier: number;
    type: string;
  } | null;
}

export default function SkillContentModal({ isOpen, onClose, skill }: SkillContentModalProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [badPrompt, setBadPrompt] = useState('');
  const [improvedPrompt, setImprovedPrompt] = useState('');

  if (!skill) return null;

  const renderTier1Content = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl text-white mb-2">Security Quiz</h3>
        <p className="text-white/60">Test your knowledge about AI data security</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <p className="text-white mb-4">
          Which of the following should you NEVER include in an AI prompt?
        </p>

        <div className="space-y-3">
          {[
            'Public product names and features',
            'API keys and authentication tokens',
            'General coding patterns',
            'Documentation examples',
          ].map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(index)}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                selectedAnswer === index
                  ? index === 1
                    ? 'bg-emerald-500/20 border-emerald-500 text-white'
                    : 'bg-red-500/20 border-red-500 text-white'
                  : 'bg-white/5 border-white/20 text-white/80 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index
                      ? index === 1
                        ? 'border-emerald-500 bg-emerald-500'
                        : 'border-red-500 bg-red-500'
                      : 'border-white/40'
                  }`}
                >
                  {selectedAnswer === index && <Check size={16} className="text-white" />}
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-4 rounded-lg ${
              selectedAnswer === 1
                ? 'bg-emerald-500/20 border border-emerald-500/50'
                : 'bg-red-500/20 border border-red-500/50'
            }`}
          >
            <p className="text-sm text-white">
              {selectedAnswer === 1
                ? '✓ Correct! API keys and tokens should never be shared in prompts. Always use placeholders like {{API_KEY}}.'
                : '✗ Try again. Think about what information could compromise security if exposed.'}
            </p>
          </motion.div>
        )}
      </div>

      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
        <h4 className="text-sm text-cyan-400 mb-2">💡 Best Practice</h4>
        <p className="text-xs text-white/70">
          Always sanitize sensitive data before sharing with AI. Use environment variables, placeholders, or
          synthetic data for testing.
        </p>
      </div>
    </div>
  );

  const renderTier2Content = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl text-white mb-2">Prompt Improvement Workshop</h3>
        <p className="text-white/60">Transform vague prompts into structured ones</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white text-xs">✗</div>
            <h4 className="text-sm text-red-400">Bad Prompt</h4>
          </div>
          <textarea
            value={badPrompt}
            onChange={(e) => setBadPrompt(e.target.value)}
            placeholder="Example: Write code for login"
            className="w-full h-32 bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white/80 placeholder:text-white/30 resize-none focus:outline-none focus:border-red-500/50"
          />
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-white text-xs">
              ✓
            </div>
            <h4 className="text-sm text-emerald-400">Improved Prompt</h4>
          </div>
          <textarea
            value={improvedPrompt}
            onChange={(e) => setImprovedPrompt(e.target.value)}
            placeholder="Apply CO-STAR framework..."
            className="w-full h-32 bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white/80 placeholder:text-white/30 resize-none focus:outline-none focus:border-emerald-500/50"
          />
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <h4 className="text-white mb-4">CO-STAR Framework Example</h4>
        <div className="space-y-2 text-sm">
          <div className="flex gap-3">
            <span className="text-cyan-400 font-mono w-24">Context:</span>
            <span className="text-white/70">Building a React authentication system</span>
          </div>
          <div className="flex gap-3">
            <span className="text-emerald-400 font-mono w-24">Objective:</span>
            <span className="text-white/70">Create secure login component with JWT</span>
          </div>
          <div className="flex gap-3">
            <span className="text-purple-400 font-mono w-24">Style:</span>
            <span className="text-white/70">Functional React with TypeScript</span>
          </div>
          <div className="flex gap-3">
            <span className="text-amber-400 font-mono w-24">Tone:</span>
            <span className="text-white/70">Production-ready, secure code</span>
          </div>
          <div className="flex gap-3">
            <span className="text-pink-400 font-mono w-24">Audience:</span>
            <span className="text-white/70">Experienced developers</span>
          </div>
          <div className="flex gap-3">
            <span className="text-blue-400 font-mono w-24">Response:</span>
            <span className="text-white/70">Complete component with error handling</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTier3Content = () => {
    if (skill.title.includes('Multi-AI')) {
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl text-white mb-2">Multi-AI Workflow Architecture</h3>
            <p className="text-white/60">Orchestrating multiple AI agents</p>
          </div>

          <div className="bg-black/40 border border-white/10 rounded-lg p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <GitBranch className="text-white" size={24} />
                </div>
                <span className="text-xs text-cyan-400">Coordinator</span>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500 to-emerald-500" />
              </div>

              <div className="flex gap-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                    <Terminal className="text-white" size={20} />
                  </div>
                  <span className="text-xs text-emerald-400">Coder Agent</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Check className="text-white" size={20} />
                  </div>
                  <span className="text-xs text-purple-400">Review Agent</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Zap className="text-white" size={20} />
                  </div>
                  <span className="text-xs text-amber-400">Test Agent</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white/5 border-l-2 border-cyan-500 p-3 rounded">
                <div className="text-xs text-cyan-400 mb-1">Step 1: Task Distribution</div>
                <div className="text-xs text-white/70">Coordinator analyzes request and assigns to specialists</div>
              </div>
              <div className="bg-white/5 border-l-2 border-emerald-500 p-3 rounded">
                <div className="text-xs text-emerald-400 mb-1">Step 2: Parallel Execution</div>
                <div className="text-xs text-white/70">Agents work simultaneously on their domains</div>
              </div>
              <div className="bg-white/5 border-l-2 border-purple-500 p-3 rounded">
                <div className="text-xs text-purple-400 mb-1">Step 3: Integration</div>
                <div className="text-xs text-white/70">Results merged and validated by coordinator</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (skill.title.includes('CLI')) {
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl text-white mb-2">CLI Mastery Guide</h3>
            <p className="text-white/60">Essential command-line operations</p>
          </div>

          <div className="bg-black border border-emerald-500/30 rounded-lg p-4 font-mono">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 text-xs text-white/50">terminal</span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-emerald-400">$</span>
                <span className="text-white">claude-cli init</span>
              </div>
              <div className="text-white/50 ml-4">✓ Configuration initialized</div>

              <div className="flex gap-2 mt-3">
                <span className="text-emerald-400">$</span>
                <span className="text-white">claude-cli analyze --file app.tsx</span>
              </div>
              <div className="text-cyan-400 ml-4">Analyzing codebase...</div>
              <div className="text-white/50 ml-4">Found 3 potential improvements</div>

              <div className="flex gap-2 mt-3">
                <span className="text-emerald-400">$</span>
                <span className="text-white">claude-cli generate --template component</span>
              </div>
              <div className="text-white/50 ml-4">Component generated: NewComponent.tsx</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { cmd: 'init', desc: 'Initialize project config' },
              { cmd: 'analyze', desc: 'Code analysis & suggestions' },
              { cmd: 'generate', desc: 'Generate boilerplate code' },
              { cmd: 'optimize', desc: 'Performance optimization' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-3">
                <div className="text-emerald-400 text-sm font-mono mb-1">{item.cmd}</div>
                <div className="text-xs text-white/60">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl text-white mb-2">Token Management Dashboard</h3>
            <p className="text-white/60">Monitor and optimize token usage</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg p-4">
              <div className="text-2xl text-white mb-1">8,450</div>
              <div className="text-xs text-cyan-400">Input Tokens</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-lg p-4">
              <div className="text-2xl text-white mb-1">12,230</div>
              <div className="text-xs text-emerald-400">Output Tokens</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg p-4">
              <div className="text-2xl text-white mb-1">$0.42</div>
              <div className="text-xs text-amber-400">Total Cost</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h4 className="text-white text-sm mb-3">Optimization Tips</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs">
                <Check size={14} className="text-emerald-400 mt-0.5" />
                <span className="text-white/70">Use prompt caching for repeated context</span>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <Check size={14} className="text-emerald-400 mt-0.5" />
                <span className="text-white/70">Compress long conversations with summaries</span>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <Check size={14} className="text-emerald-400 mt-0.5" />
                <span className="text-white/70">Set max_tokens limits for controlled responses</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] bg-gradient-to-br from-[#0B0E14] to-[#1a0f2e] border border-white/20 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="sticky top-0 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-amber-500/10 border-b border-white/10 p-6 flex items-center justify-between backdrop-blur-md z-10">
              <div>
                <h2 className="text-2xl text-white mb-1">{skill.title}</h2>
                <p className="text-sm text-white/60">
                  Tier {skill.tier} •{' '}
                  {skill.tier === 1 ? 'Foundation' : skill.tier === 2 ? 'Intermediate' : 'Advanced'}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <X size={20} className="text-white" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-100px)] p-6">
              {skill.tier === 1 && renderTier1Content()}
              {skill.tier === 2 && renderTier2Content()}
              {skill.tier === 3 && renderTier3Content()}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
