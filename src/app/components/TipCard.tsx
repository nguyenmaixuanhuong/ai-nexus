import { motion } from 'motion/react';
import { ThumbsUp, Flame, Rocket, Heart, Sparkles } from 'lucide-react';

interface TipCardProps {
  category: string;
  title: string;
  content: string;
  author: string;
  authorAvatar: string;
  reactions: {
    like: number;
    fire: number;
    rocket: number;
  };
}

const reactionIcons = {
  like: ThumbsUp,
  fire: Flame,
  rocket: Rocket,
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Coding: { bg: 'from-blue-500/20 to-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/50' },
  Searching: { bg: 'from-purple-500/20 to-pink-500/20', text: 'text-pink-400', border: 'border-pink-500/50' },
  Workflow: { bg: 'from-emerald-500/20 to-green-500/20', text: 'text-emerald-400', border: 'border-emerald-500/50' },
  Security: { bg: 'from-amber-500/20 to-orange-500/20', text: 'text-amber-400', border: 'border-amber-500/50' },
};

export default function TipCard({ category, title, content, author, authorAvatar, reactions }: TipCardProps) {
  const colorScheme = categoryColors[category] || categoryColors.Coding;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:border-white/30 transition-all">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${colorScheme.bg} border ${colorScheme.border} ${colorScheme.text}`}>
            #{category}
          </span>
        </div>

        <h3 className="text-white mb-2">{title}</h3>
        <p className="text-sm text-white/70 mb-4 leading-relaxed">{content}</p>

        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs">
              {authorAvatar}
            </div>
            <span className="text-xs text-white/60">{author}</span>
          </div>

          <div className="flex items-center gap-3">
            {(Object.entries(reactions) as [keyof typeof reactions, number][]).map(([type, count]) => {
              const Icon = reactionIcons[type];
              return (
                <button
                  key={type}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors group/reaction"
                >
                  <Icon size={14} className="text-white/50 group-hover/reaction:text-white transition-colors" />
                  <span className="text-xs text-white/60">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
