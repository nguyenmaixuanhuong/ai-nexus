import { useState } from 'react';
import Sidebar from './components/Sidebar';
import JourneyMap from './components/JourneyMap';
import TipsHub from './components/TipsHub';
import DocsPage from './components/DocsPage';

export default function App() {
  const [activePage, setActivePage] = useState<'map' | 'tips' | 'docs'>('map');

  return (
    <div className="size-full flex bg-[#0B0E14]">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />

      {activePage === 'map' && <JourneyMap />}
      {activePage === 'tips' && <TipsHub />}
      {activePage === 'docs' && <DocsPage />}
    </div>
  );
}