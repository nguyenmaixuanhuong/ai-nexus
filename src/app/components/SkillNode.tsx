import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SkillNodeProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  glowColor: string;
  completed?: boolean;
  onClick?: () => void;
}

export default function SkillNode({
  title,
  description,
  icon: Icon,
  color,
  glowColor,
  completed = false,
  onClick,
}: SkillNodeProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative group"
    >
      <div
        className={`relative w-32 h-32 bg-gradient-to-br ${color} rounded-2xl p-4 flex flex-col items-center justify-center gap-2 backdrop-blur-md border border-white/20 transition-all`}
        style={{
          boxShadow: `0 8px 32px ${glowColor}40, 0 0 20px ${glowColor}30`,
        }}
      >
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: `radial-gradient(circle at center, ${glowColor}40, transparent 70%)`,
          }}
        />

        <Icon size={32} className="relative z-10 text-white" strokeWidth={1.5} />

        <span className="relative z-10 text-xs text-center text-white/90 leading-tight">
          {title}
        </span>

        {completed && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-[#0B0E14]">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg p-3 pointer-events-none z-20"
      >
        <p className="text-xs text-white/80">{description}</p>
      </motion.div>
    </motion.button>
  );
}
