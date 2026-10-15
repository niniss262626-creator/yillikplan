import React, { useState } from 'react';
import { 
  WeeklyPlanItem, 
  THEMES_DATA 
} from '../data/curriculumData';
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  Calendar, 
  Clock, 
  Wrench, 
  Target, 
  Bookmark, 
  Edit3, 
  Sparkles,
  Check
} from 'lucide-react';

interface WeeklyScheduleTabProps {
  weeklyPlan: WeeklyPlanItem[];
  selectedThemeId: number | null;
  onClearThemeFilter: () => void;
  onSelectThemeFilter: (themeId: number | null) => void;
  completedWeeks: Record<number, boolean>;
  onToggleWeekCompletion: (weekNum: number) => void;
  teacherNotes: Record<number, string>;
  onSaveTeacherNote: (weekNum: number, note: string) => void;
}

export const WeeklyScheduleTab: React.FC<WeeklyScheduleTabProps> = ({
  weeklyPlan,
  selectedThemeId,
  onClearThemeFilter,
  onSelectThemeFilter,
  completedWeeks,
  onToggleWeekCompletion,
  teacherNotes,
  onSaveTeacherNote
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [semesterFilter, setSemesterFilter] = useState<'all' | '1' | '2'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const [expandedWeeks, setExpandedWeeks] = useState<Record<number, boolean>>({});
  const [editingNoteWeek, setEditingNoteWeek] = useState<number | null>(null);
  const [tempNoteText, setTempNoteText] = useState('');

  // Expand or collapse all
  const toggleAllExpanded = (expand: boolean) => {
    const next: Record<number, boolean> = {};
    weeklyPlan.forEach((w) => {
      next[w.week] = expand;
    });
    setExpandedWeeks(next);
  };

  const toggleWeekExpand = (weekNum: number) => {
    setExpandedWeeks((prev) => ({
      ...prev,
      [weekNum]: !prev[weekNum]
    }));
  };

  const handleStartEditNote = (weekNum: number, currentNote: string = '') => {
    setEditingNoteWeek(weekNum);
    setTempNoteText(currentNote || '');
  };

  const handleSaveNote = (weekNum: number) => {
    onSaveTeacherNote(weekNum, tempNoteText);
    setEditingNoteWeek(null);
  };

  // Filter weekly items
  const filteredPlan = weeklyPlan.filter((item) => {
    // Theme filter
    if (selectedThemeId !== null && item.themeId !== selectedThemeId) {
      return false;
    }
    // Semester filter
    if (semesterFilter === '1' && item.semester !== 1) return false;
    if (semesterFilter === '2' && item.semester !== 2) return false;

    // Status filter
    const isCompleted = !!completedWeeks[item.week];
    if (statusFilter === 'completed' && !isCompleted) return false;
    if (statusFilter === 'pending' && isCompleted) return false;

    // Search term
    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      const matchTopic = item.topic.toLowerCase().includes(q);
      const matchOutcomes = item.outcomes.some((o) => o.toLowerCase().includes(q));
      const matchTools = item.toolsAndTech.some((t) => t.toLowerCase().includes(q));
      const matchMethods = item.methods.some((m) => m.toLowerCase().includes(q));
      const matchNotes = (item.specialDaysAndNotes || '').toLowerCase().includes(q);
      const matchTeacherNote = (teacherNotes[item.week] || '').toLowerCase().includes(q);
      return matchTopic || matchOutcomes || matchTools || matchMethods || matchNotes || matchTeacherNote;
    }

    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Filter Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Konu, kazanım, araç veya kodlama ara (örn: Scratch, KVKK, Prompt)..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Temizle
              </button>
            )}
          </div>

          {/* Quick Expand / Collapse Actions */}
          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={() => toggleAllExpanded(true)}
              className="px-3 py-1.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors font-medium whitespace-nowrap"
            >
              Tümünü Genişlet
            </button>
            <button
              onClick={() => toggleAllExpanded(false)}
              className="px-3 py-1.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors font-medium whitespace-nowrap"
            >
              Tümünü Daralt
            </button>
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100 text-xs">
          {/* Semester pills */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setSemesterFilter('all')}
              className={`px-3 py-1 rounded-md font-medium transition-colors ${
                semesterFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tüm Yıl (36 Hafta)
            </button>
            <button
              onClick={() => setSemesterFilter('1')}
              className={`px-3 py-1 rounded-md font-medium transition-colors ${
                semesterFilter === '1'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. Dönem (1-16. Hafta)
            </button>
            <button
              onClick={() => setSemesterFilter('2')}
              className={`px-3 py-1 rounded-md font-medium transition-colors ${
                semesterFilter === '2'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. Dönem (17-36. Hafta)
            </button>
          </div>

          {/* Status filter */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                statusFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tümü
            </button>
            <button
              onClick={() => setStatusFilter('completed')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                statusFilter === 'completed'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              İşlenenler
            </button>
            <button
              onClick={() => setStatusFilter('pending')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                statusFilter === 'pending'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Bekleyenler
            </button>
          </div>

          {/* Theme Dropdown / Pills */}
          <div className="flex items-center gap-1.5 ml-auto">
            <span className="text-slate-500 text-xs">Tema Filtresi:</span>
            <select
              value={selectedThemeId === null ? '' : selectedThemeId}
              onChange={(e) => {
                const val = e.target.value;
                onSelectThemeFilter(val === '' ? null : Number(val));
              }}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-sky-600"
            >
              <option value="">Tüm Temalar (6 Tema)</option>
              {THEMES_DATA.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.id}. Tema - {t.shortName} ({t.hours} Saat)
                </option>
              ))}
            </select>
            {selectedThemeId !== null && (
              <button
                onClick={onClearThemeFilter}
                className="text-xs text-sky-700 hover:underline font-medium"
              >
                Filtreyi Kaldır
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count & Information */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Toplam <strong>{filteredPlan.length}</strong> hafta listeleniyor
          {selectedThemeId !== null && ` (${selectedThemeId}. Tema seçili)`}
          {searchTerm && ` ("${searchTerm}" araması için)`}
        </span>
        <span className="text-slate-400">
          İşlenen haftaları sağdaki onay kutucuğuyla işaretleyebilirsiniz
        </span>
      </div>

      {/* Weekly Schedule List */}
      <div className="space-y-4">
        {filteredPlan.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-slate-500">
            <p className="font-semibold text-slate-800 text-base">Aradığınız kriterlere uygun hafta bulunamadı.</p>
            <p className="text-xs mt-1">Arama terimini veya filtre seçimlerini temizleyerek tekrar deneyebilirsiniz.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSemesterFilter('all');
                setStatusFilter('all');
                onClearThemeFilter();
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        ) : (
          filteredPlan.map((item) => {
            const isCompleted = !!completedWeeks[item.week];
            const isExpanded = expandedWeeks[item.week] ?? true;
            const theme = THEMES_DATA.find((t) => t.id === item.themeId);
            const teacherNote = teacherNotes[item.week];
            const isEditingThisNote = editingNoteWeek === item.week;

            return (
              <div
                key={item.week}
                className={`bg-white rounded-xl border transition-all ${
                  isCompleted 
                    ? 'border-emerald-200 shadow-xs bg-emerald-50/20' 
                    : 'border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Header row */}
                <div 
                  className="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
                  onClick={() => toggleWeekExpand(item.week)}
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    {/* Completion button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWeekCompletion(item.week);
                      }}
                      title={isCompleted ? "İşlenmedi olarak işaretle" : "İşlendi olarak işaretle"}
                      className={`p-1 rounded-full transition-colors shrink-0 mt-0.5 sm:mt-0 ${
                        isCompleted
                          ? 'text-emerald-600 bg-emerald-100 hover:bg-emerald-200'
                          : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                    </button>

                    {/* Week Number & Topic */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 text-xs mb-1">
                        <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded tabular-nums">
                          {item.week}. Hafta
                        </span>
                        <span className="text-slate-500 font-medium">
                          {item.dates}
                        </span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-slate-500 tabular-nums">
                          {item.semester}. Dönem ({item.hours} Saat)
                        </span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className={`font-semibold ${theme?.badgeText || 'text-slate-700'}`}>
                          {item.themeId}. Tema: {theme?.shortName}
                        </span>
                      </div>
                      
                      <h3 className={`text-sm sm:text-base font-bold text-slate-900 leading-snug truncate ${
                        isCompleted ? 'text-slate-700' : ''
                      }`}>
                        {item.topic}
                      </h3>
                    </div>
                  </div>

                  {/* Right side controls */}
                  <div className="flex items-center gap-2 shrink-0">
                    {teacherNote && !isEditingThisNote && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                        <Bookmark className="w-3 h-3" />
                        <span>Öğretmen Notu</span>
                      </span>
                    )}

                    <div className="text-slate-400 hover:text-slate-600 p-1">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100 space-y-4 text-xs">
                    {/* Öğrenme Çıktıları (Kazanımlar) */}
                    <div>
                      <span className="font-bold text-slate-900 block mb-1.5 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-sky-700" />
                        <span>Öğrenme Çıktıları (Maarif Modeli Kazanımları):</span>
                      </span>
                      <ul className="space-y-1 pl-5 list-disc text-slate-700">
                        {item.outcomes.map((outcome, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* İki Sütun: Yöntem-Teknik & Araç-Gereç */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50/70 p-3.5 rounded-lg border border-slate-100">
                      <div>
                        <span className="font-semibold text-slate-800 block mb-1">
                          Öğretim Yöntem ve Teknikleri:
                        </span>
                        <div className="flex flex-wrap gap-1 text-slate-600">
                          {item.methods.map((method, idx) => (
                            <span 
                              key={idx}
                              className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px]"
                            >
                              {method}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-semibold text-slate-800 block mb-1 flex items-center gap-1">
                          <Wrench className="w-3.5 h-3.5 text-slate-500" />
                          <span>Eğitim Teknolojileri ve Araçlar:</span>
                        </span>
                        <div className="flex flex-wrap gap-1 text-slate-600">
                          {item.toolsAndTech.map((tool, idx) => (
                            <span 
                              key={idx}
                              className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Ölçme & Belirli Günler */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="font-semibold text-slate-800 block mb-0.5">
                          Süreç Odaklı Ölçme ve Değerlendirme:
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {item.assessment}
                        </p>
                      </div>

                      {item.specialDaysAndNotes && (
                        <div>
                          <span className="font-semibold text-amber-800 block mb-0.5 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                            <span>Belirli Gün ve Haftalar / Açıklama:</span>
                          </span>
                          <p className="text-slate-600 leading-relaxed">
                            {item.specialDaysAndNotes}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Öğretmen Özel Notu Alanı */}
                    <div className="pt-2 border-t border-slate-100">
                      {isEditingThisNote ? (
                        <div className="space-y-2">
                          <label className="font-semibold text-slate-800 flex items-center gap-1.5">
                            <Edit3 className="w-3.5 h-3.5 text-sky-700" />
                            <span>Bu Hafta İçin Kişisel Öğretmen Notunuz / Hatırlatmanız:</span>
                          </label>
                          <textarea
                            value={tempNoteText}
                            onChange={(e) => setTempNoteText(e.target.value)}
                            placeholder="Örn: 5-B sınıfında ders laboratuvar yerine etkileşimli tahtada işlendi. Scratch projesinde X ve Y koordinatları tekrar edilecek."
                            rows={3}
                            className="w-full p-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                          />
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setEditingNoteWeek(null)}
                              className="px-3 py-1.5 text-slate-600 hover:text-slate-900 bg-slate-100 rounded-md font-medium"
                            >
                              İptal
                            </button>
                            <button
                              onClick={() => handleSaveNote(item.week)}
                              className="px-3 py-1.5 text-white bg-sky-700 hover:bg-sky-800 rounded-md font-medium flex items-center gap-1"
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>Notu Kaydet</span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between gap-3 bg-amber-50/40 p-2.5 rounded-lg border border-amber-100">
                          <div className="flex-1 min-w-0">
                            {teacherNote ? (
                              <p className="text-slate-700 italic">
                                <strong>Kişisel Not:</strong> {teacherNote}
                              </p>
                            ) : (
                              <span className="text-slate-400 italic">
                                Bu hafta için henüz özel öğretmen notu eklenmemiş.
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => handleStartEditNote(item.week, teacherNote)}
                            className="text-xs font-semibold text-sky-700 hover:text-sky-900 shrink-0 flex items-center gap-1 hover:underline"
                          >
                            <Edit3 className="w-3 h-3" />
                            <span>{teacherNote ? 'Düzenle' : 'Not Ekle'}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
