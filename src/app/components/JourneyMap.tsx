import {
  Shield,
  Lock,
  Eye,
  MessageSquare,
  FileCode,
  Settings,
  Workflow,
  Terminal,
  Boxes,
  Zap,
} from "lucide-react";
import { useState } from "react";
import SkillNode from "./SkillNode";
import SkillContentModal from "./SkillContentModal";
import ShootingStars from "./ShootingStars";

export default function JourneyMap() {
  const [selectedSkill, setSelectedSkill] = useState<{
    title: string;
    tier: number;
    type: string;
  } | null>(null);

  const tiers = [
    {
      id: 1,
      name: "SAFE VOYAGER",
      subtitle: "Foundation & Security",
      color: "from-orange-500/20 to-amber-500/20",
      glowColor: "#F97316",
      skills: [
        {
          title: "Data Security",
          description: "Protect sensitive information in AI interactions",
          icon: Shield,
          type: "security",
        },
        {
          title: "Anonymization",
          description: "Techniques to remove PII from your data",
          icon: Lock,
          type: "security",
        },
        {
          title: "Hallucination Detection",
          description: "Identify and mitigate AI-generated misinformation",
          icon: Eye,
          type: "security",
        },
      ],
    },
    {
      id: 2,
      name: "EFFECTIVE PILOT",
      subtitle: "Intermediate Skills",
      color: "from-purple-500/20 to-violet-500/20",
      glowColor: "#A855F7",
      skills: [
        {
          title: "Chain of Thought",
          description: "Guide AI reasoning with structured thinking patterns",
          icon: MessageSquare,
          type: "prompting",
        },
        {
          title: "CO-STAR Method",
          description: "Master the CO-STAR framework for perfect prompts",
          icon: FileCode,
          type: "prompting",
        },
        {
          title: "Context Management",
          description: "Learn to manage and optimize conversation context",
          icon: Settings,
          type: "prompting",
        },
        {
          title: "Custom Instructions",
          description: "Create reusable prompt templates and configurations",
          icon: FileCode,
          type: "prompting",
        },
      ],
    },
    {
      id: 3,
      name: "MASTER ARCHITECT",
      subtitle: "Advanced Mastery",
      color: "from-blue-500/20 to-cyan-500/20",
      glowColor: "#3B82F6",
      skills: [
        {
          title: "Multi-AI Workflows",
          description:
            "Orchestrate multiple AI agents working together seamlessly",
          icon: Workflow,
          type: "architecture",
        },
        {
          title: "CLI Mastery",
          description: "Command-line tools and automation for AI development",
          icon: Terminal,
          type: "cli",
        },
        {
          title: "MCP Protocol",
          description:
            "Master the Model Context Protocol for advanced integrations",
          icon: Boxes,
          type: "architecture",
        },
        {
          title: "Token Management",
          description:
            "Optimize costs and performance through smart token usage",
          icon: Zap,
          type: "optimization",
        },
      ],
    },
  ];

  const pathData = [
    { x: 50, y: 5, tier: 1, index: 0 },
    { x: 35, y: 12, tier: 1, index: 1 },
    { x: 65, y: 18, tier: 1, index: 2 },
    { x: 50, y: 25, tier: 2, index: 0 },
    { x: 30, y: 35, tier: 2, index: 1 },
    { x: 70, y: 45, tier: 2, index: 2 },
    { x: 45, y: 55, tier: 2, index: 3 },
    { x: 55, y: 65, tier: 3, index: 0 },
    { x: 35, y: 75, tier: 3, index: 1 },
    { x: 65, y: 85, tier: 3, index: 2 },
    { x: 50, y: 95, tier: 3, index: 3 },
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="min-h-screen bg-gradient-to-b from-[#0B0E14] via-[#1a0f2e] to-[#2d1b4e] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

        <ShootingStars />

        <div className="relative z-10 py-16 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl mb-2 bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Your AI Mastery Journey
              </h1>
              <p className="text-white/60">
                Start from the top and progress through mastery
              </p>
            </div>

            <div className="relative" style={{ height: "2000px" }}>
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 0 }}
              >
                {pathData.slice(0, -1).map((point, index) => {
                  const nextPoint = pathData[index + 1];
                  return (
                    <line
                      key={index}
                      x1={`${point.x}%`}
                      y1={`${point.y}%`}
                      x2={`${nextPoint.x}%`}
                      y2={`${nextPoint.y}%`}
                      stroke="url(#pathGradient)"
                      strokeWidth="3"
                      strokeDasharray="8 4"
                      opacity="0.4"
                    />
                  );
                })}
                <defs>
                  <linearGradient
                    id="pathGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#F97316" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>

              {tiers.map((tier) => (
                <div key={tier.id}>
                  {tier.skills.map((skill, skillIndex) => {
                    const pathPoint = pathData.find(
                      (p) => p.tier === tier.id && p.index === skillIndex,
                    );
                    if (!pathPoint) return null;

                    return (
                      <div
                        key={skillIndex}
                        className="absolute"
                        style={{
                          left: `${pathPoint.x}%`,
                          top: `${pathPoint.y}%`,
                          transform: "translate(-50%, -50%)",
                          zIndex: 10,
                        }}
                      >
                        {skillIndex === 0 && (
                          <div className="absolute -top-20 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <div className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full">
                              <span className="text-sm text-white/80">
                                Tier {tier.id}
                              </span>
                            </div>
                            <h3 className="text-lg text-white mt-2 text-center mb-2">
                              {tier.name}
                            </h3>
                          </div>
                        )}

                        <SkillNode
                          title={skill.title}
                          description={skill.description}
                          icon={skill.icon}
                          color={tier.color}
                          glowColor={tier.glowColor}
                          completed={Math.random() > 0.3}
                          onClick={() =>
                            setSelectedSkill({
                              title: skill.title,
                              tier: tier.id,
                              type: skill.type,
                            })
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              ))}

              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: "98%", zIndex: 20 }}
              >
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-sky-500/30 backdrop-blur-md border border-blue-500/50 rounded-2xl shadow-xl shadow-blue-500/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-white">Master Architect</p>
                    <p className="text-xs text-white/70">Journey Complete!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SkillContentModal
        isOpen={selectedSkill !== null}
        onClose={() => setSelectedSkill(null)}
        skill={selectedSkill}
      />
    </div>
  );
}
