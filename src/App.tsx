import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { OverviewTab } from './components/OverviewTab';
import { WeeklyScheduleTab } from './components/WeeklyScheduleTab';
import { OfficialPrintView } from './components/OfficialPrintView';
import { RubricsTab } from './components/RubricsTab';
import { MaarifWorkshopTab } from './components/MaarifWorkshopTab';
import { SchoolSettingsModal, SchoolConfig } from './components/SchoolSettingsModal';
import { INITIAL_WEEKLY_PLAN, WeeklyPlanItem } from './data/curriculumData';

const DEFAULT_SCHOOL_CONFIG: SchoolConfig = {
  schoolName: 'Atatürk Ortaokulu',
  districtCity: 'Çankaya / Ankara',
  academicYear: '2026-2027',
  teacherName: 'Bilişim Teknolojileri Öğretmeni',
  headOfDepartment: 'Zümre Başkanı',
  principalName: 'Okul Müdürü',
  classBranches: '5-A, 5-B, 5-C'
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'schedule' | 'official' | 'rubrics' | 'workshop'>('overview');
  const [selectedThemeId, setSelectedThemeId] = useState<number | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Load school config from localStorage
  const [schoolConfig, setSchoolConfig] = useState<SchoolConfig>(() => {
    try {
      const saved = localStorage.getItem('maarif_school_config');
      return saved ? JSON.parse(saved) : DEFAULT_SCHOOL_CONFIG;
    } catch {
      return DEFAULT_SCHOOL_CONFIG;
    }
  });

  // Load completed weeks from localStorage
  const [completedWeeks, setCompletedWeeks] = useState<Record<number, boolean>>(() => {
    try {
      const saved = localStorage.getItem('maarif_completed_weeks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Load teacher notes from localStorage
  const [teacherNotes, setTeacherNotes] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem('maarif_teacher_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('maarif_school_config', JSON.stringify(schoolConfig));
    } catch (e) {
      console.warn('localStorage save failed', e);
    }
  }, [schoolConfig]);

  useEffect(() => {
    try {
      localStorage.setItem('maarif_completed_weeks', JSON.stringify(completedWeeks));
    } catch (e) {
      console.warn('localStorage save failed', e);
    }
  }, [completedWeeks]);

  useEffect(() => {
    try {
      localStorage.setItem('maarif_teacher_notes', JSON.stringify(teacherNotes));
    } catch (e) {
      console.warn('localStorage save failed', e);
    }
  }, [teacherNotes]);

  const handleToggleWeekCompletion = (weekNum: number) => {
    setCompletedWeeks((prev) => ({
      ...prev,
      [weekNum]: !prev[weekNum]
    }));
  };

  const handleSaveTeacherNote = (weekNum: number, note: string) => {
    setTeacherNotes((prev) => ({
      ...prev,
      [weekNum]: note
    }));
  };

  const handleSelectThemeFromOverview = (themeId: number) => {
    setSelectedThemeId(themeId);
    setActiveTab('schedule');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTriggerPrint = () => {
    if (activeTab !== 'official' && activeTab !== 'rubrics') {
      setActiveTab('official');
      setTimeout(() => {
        window.print();
      }, 300);
    } else {
      window.print();
    }
  };

  // Calculations
  const completedWeeksCount = Object.values(completedWeeks).filter(Boolean).length;
  const completedHours = completedWeeksCount * 2;
  const totalHours = 72;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Navbar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onTriggerPrint={handleTriggerPrint}
        schoolName={schoolConfig.schoolName}
        teacherName={schoolConfig.teacherName}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'overview' && (
          <OverviewTab
            onSelectTheme={handleSelectThemeFromOverview}
            onNavigateToSchedule={() => {
              setSelectedThemeId(null);
              setActiveTab('schedule');
            }}
            onNavigateToOfficial={() => setActiveTab('official')}
            completedHours={completedHours}
            totalHours={totalHours}
            completedWeeksCount={completedWeeksCount}
          />
        )}

        {activeTab === 'schedule' && (
          <WeeklyScheduleTab
            weeklyPlan={INITIAL_WEEKLY_PLAN}
            selectedThemeId={selectedThemeId}
            onClearThemeFilter={() => setSelectedThemeId(null)}
            onSelectThemeFilter={setSelectedThemeId}
            completedWeeks={completedWeeks}
            onToggleWeekCompletion={handleToggleWeekCompletion}
            teacherNotes={teacherNotes}
            onSaveTeacherNote={handleSaveTeacherNote}
          />
        )}

        {activeTab === 'official' && (
          <OfficialPrintView
            weeklyPlan={INITIAL_WEEKLY_PLAN}
            config={schoolConfig}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onTriggerPrint={handleTriggerPrint}
          />
        )}

        {activeTab === 'rubrics' && (
          <RubricsTab />
        )}

        {activeTab === 'workshop' && (
          <MaarifWorkshopTab />
        )}
      </main>

      {/* Footer (Hidden when printing) */}
      <footer className="no-print bg-white border-t border-slate-200 py-6 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">5. Sınıf Bilişim ve Yazılım Maarif Yıllık Planı</span>
            <span aria-hidden="true">·</span>
            <span>Türkiye Yüzyılı Maarif Modeli (TYMM)</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Haftalık: 2 Saat · Yıllık: 72 Saat</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="text-sky-700 hover:underline font-medium"
            >
              Okul Bilgilerini Güncelle
            </button>
          </div>
        </div>
      </footer>

      {/* Settings Modal */}
      <SchoolSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={schoolConfig}
        onSave={setSchoolConfig}
      />
    </div>
  );
}
