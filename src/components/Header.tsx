import React from 'react';
import { 
  BookOpen, 
  Printer, 
  Calendar, 
  FileSpreadsheet, 
  Award, 
  Sparkles,
  School,
  Settings
} from 'lucide-react';

interface HeaderProps {
  activeTab: 'overview' | 'schedule' | 'official' | 'rubrics' | 'workshop';
  setActiveTab: (tab: 'overview' | 'schedule' | 'official' | 'rubrics' | 'workshop') => void;
  onOpenSettings: () => void;
  onTriggerPrint: () => void;
  schoolName: string;
  teacherName: string;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSettings,
  onTriggerPrint,
  schoolName,
  teacherName
}) => {
  return (
    <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-sky-700 flex items-center justify-center text-white shadow-sm">
              <BookOpen className="w-5 h-5" />
            </div>
            <a 
              href="#overview" 
              onClick={(e) => { e.preventDefault(); setActiveTab('overview'); }}
              className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-sky-700 transition-colors"
            >
              5. Sınıf Bilişim Maarif Planı
            </a>
          </div>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('overview')}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'border-sky-600 text-sky-700 font-semibold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Genel Bakış</span>
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 flex items-center gap-1.5 ${
                activeTab === 'schedule'
                  ? 'border-sky-600 text-sky-700 font-semibold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>36 Haftalık Plan</span>
            </button>
            <button
              onClick={() => setActiveTab('official')}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 flex items-center gap-1.5 ${
                activeTab === 'official'
                  ? 'border-sky-600 text-sky-700 font-semibold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              <School className="w-4 h-4" />
              <span>MEB Resmi Tablo</span>
            </button>
            <button
              onClick={() => setActiveTab('rubrics')}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 flex items-center gap-1.5 ${
                activeTab === 'rubrics'
                  ? 'border-sky-600 text-sky-700 font-semibold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Süreç Rubrikleri</span>
            </button>
            <button
              onClick={() => setActiveTab('workshop')}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 flex items-center gap-1.5 ${
                activeTab === 'workshop'
                  ? 'border-sky-600 text-sky-700 font-semibold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Maarif Atölyesi</span>
            </button>
          </nav>

          {/* Zone 3: 1 primary action + subtle profile trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSettings}
              title="Okul ve Öğretmen Bilgilerini Düzenle"
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline text-slate-700 max-w-[120px] truncate">{schoolName || 'Okul Bilgisi'}</span>
            </button>

            <button
              onClick={onTriggerPrint}
              className="px-4 py-2 text-xs font-medium text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>Resmi Çıktı / Yazdır</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto py-2.5 border-t border-slate-100 scrollbar-none text-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium transition-colors ${
              activeTab === 'overview' ? 'bg-sky-100 text-sky-800' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Genel Bakış
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium transition-colors ${
              activeTab === 'schedule' ? 'bg-sky-100 text-sky-800' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            36 Hafta
          </button>
          <button
            onClick={() => setActiveTab('official')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium transition-colors ${
              activeTab === 'official' ? 'bg-sky-100 text-sky-800' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            MEB Tablosu
          </button>
          <button
            onClick={() => setActiveTab('rubrics')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium transition-colors ${
              activeTab === 'rubrics' ? 'bg-sky-100 text-sky-800' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Rubrikler
          </button>
          <button
            onClick={() => setActiveTab('workshop')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium transition-colors ${
              activeTab === 'workshop' ? 'bg-sky-100 text-sky-800' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Atölye & Prompt
          </button>
        </div>
      </div>
    </header>
  );
};
