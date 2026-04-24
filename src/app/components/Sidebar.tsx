import { Map, Lightbulb, FileText } from 'lucide-react';

interface SidebarProps {
  activePage: 'map' | 'tips' | 'docs';
  onPageChange: (page: 'map' | 'tips' | 'docs') => void;
}

export default function Sidebar({ activePage, onPageChange }: SidebarProps) {
  const menuItems = [
    { id: 'map' as const, icon: Map, label: 'Lộ trình' },
    { id: 'tips' as const, icon: Lightbulb, label: 'Tips Hub' },
    { id: 'docs' as const, icon: FileText, label: 'Tài liệu' },
  ];

  return (
    <div className="w-64 h-screen bg-[#0B0E14] border-r border-white/10 flex flex-col p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          AI NEXUS
        </h1>
        <p className="text-xs text-white/50 mt-1">Master AI Journey</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-white/10 text-white shadow-lg shadow-cyan-500/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="pt-4 border-t border-white/10">
        <div className="text-xs text-white/40">
          <p>Progress: 18/27 Skills</p>
          <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
