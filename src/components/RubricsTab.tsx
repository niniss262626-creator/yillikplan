import React, { useState } from 'react';
import { RUBRICS_DATA, RubricTemplate } from '../data/curriculumData';
import { Award, Check, Printer, RotateCcw, User, CheckCircle, FileText, Sparkles } from 'lucide-react';

export const RubricsTab: React.FC = () => {
  const [selectedRubricId, setSelectedRubricId] = useState<string>(RUBRICS_DATA[0].id);
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('5-A');
  const [studentNumber, setStudentNumber] = useState('');
  const [selectedScores, setSelectedScores] = useState<Record<string, number>>({});
  const [teacherFeedback, setTeacherFeedback] = useState('');

  const activeRubric = RUBRICS_DATA.find((r) => r.id === selectedRubricId) || RUBRICS_DATA[0];

  // Calculate live total score
  const totalScore = Object.values(selectedScores).reduce((acc, curr) => acc + curr, 0);

  const handleSelectLevel = (criterionId: string, score: number) => {
    setSelectedScores((prev) => ({
      ...prev,
      [criterionId]: score
    }));
  };

  const handleReset = () => {
    setSelectedScores({});
    setStudentName('');
    setStudentNumber('');
    setTeacherFeedback('');
  };

  const handlePrintRubric = () => {
    window.print();
  };

  // Performance qualitative level
  const getPerformanceBadge = (score: number) => {
    if (score >= 85) return { label: 'İleri Düzey (Pekiyi)', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (score >= 70) return { label: 'Yeterli (İyi)', color: 'text-sky-700 bg-sky-50 border-sky-200' };
    if (score >= 55) return { label: 'Gelişmekte (Orta)', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    return { label: 'Başlangıç / Destek Gerekli', color: 'text-rose-700 bg-rose-50 border-rose-200' };
  };

  const badge = getPerformanceBadge(totalScore);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="no-print bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-sky-700" />
            <span>Süreç Odaklı Ölçme & Dereceli Puanlama Anahtarları (Rubrikler)</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Türkiye Yüzyılı Maarif Modeli'ne uygun olarak hazırlanmış etkileşimli puanlama araçları. Öğrenci değerlendirmesi yapıp çıktısını portfolyoya ekleyebilirsiniz.
          </p>
        </div>

        <button
          onClick={handlePrintRubric}
          className="px-4 py-2 text-xs font-bold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-sm transition-colors flex items-center gap-1.5 self-start md:self-auto"
        >
          <Printer className="w-4 h-4" />
          <span>Rubriği Yazdır / Kaydet</span>
        </button>
      </div>

      {/* Rubric Selector Tabs (no-print) */}
      <div className="no-print flex flex-wrap gap-2">
        {RUBRICS_DATA.map((rubric) => (
          <button
            key={rubric.id}
            onClick={() => {
              setSelectedRubricId(rubric.id);
              setSelectedScores({});
            }}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
              selectedRubricId === rubric.id
                ? 'bg-sky-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{rubric.title}</span>
          </button>
        ))}
      </div>

      {/* Main Rubric Paper Form */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        {/* Rubric Header */}
        <div className="border-b border-slate-200 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
                {activeRubric.themeName}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                {activeRubric.title}
              </h3>
            </div>
            <div className="text-right shrink-0">
              <span className="text-xs text-slate-500">Maksimum Puan</span>
              <div className="text-xl font-extrabold text-slate-900 tabular-nums">
                {activeRubric.maxScore} Puan
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            <strong>Kullanım Amacı:</strong> {activeRubric.purpose}
          </p>
        </div>

        {/* Student Information Form (Interactive) */}
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Öğrenci Adı Soyadı
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Örn: Ayşe Yılmaz"
              className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-sky-600"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Sınıf / Şube
            </label>
            <input
              type="text"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              placeholder="5-A"
              className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-sky-600"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Öğrenci Numarası
            </label>
            <input
              type="text"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
              placeholder="Örn: 248"
              className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-sky-600"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Değerlendirme Tarihi
            </label>
            <input
              type="text"
              defaultValue={new Date().toLocaleDateString('tr-TR')}
              className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-sky-600 text-slate-700"
            />
          </div>
        </div>

        {/* Criteria Matrix */}
        <div className="space-y-5">
          {activeRubric.criteria.map((criterion, idx) => {
            const currentScore = selectedScores[criterion.id];

            return (
              <div
                key={criterion.id}
                className="border border-slate-200 rounded-lg p-4 bg-white hover:border-slate-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {idx + 1}. Kriter: {criterion.name}
                    </h4>
                    <p className="text-xs text-slate-500">{criterion.description}</p>
                  </div>
                  <div className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded self-start sm:self-auto tabular-nums">
                    Seçilen: {currentScore ? `${currentScore} Puan` : 'Seçilmedi'}
                  </div>
                </div>

                {/* Levels Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-3">
                  {criterion.levels.map((lvl) => {
                    const isSelected = currentScore === lvl.score;

                    return (
                      <div
                        key={lvl.score}
                        onClick={() => handleSelectLevel(criterion.id, lvl.score)}
                        className={`p-3 rounded-lg border text-xs cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-sky-50 border-sky-600 ring-2 ring-sky-600/20 text-sky-950 font-medium'
                            : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-bold text-slate-900">{lvl.title}</span>
                            {isSelected && (
                              <CheckCircle className="w-4 h-4 text-sky-700 shrink-0" />
                            )}
                          </div>
                          <p className="text-[11px] leading-relaxed text-slate-600">
                            {lvl.description}
                          </p>
                        </div>
                        <div className="mt-2 text-right">
                          <span className="text-[11px] font-bold tabular-nums text-slate-800">
                            {lvl.score} Puan
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Score Summary Banner */}
        <div className="bg-slate-900 text-white rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs text-slate-400 font-medium">Toplam Başarı Puanı</div>
            <div className="text-3xl font-extrabold tabular-nums flex items-center justify-center sm:justify-start gap-2">
              <span>{totalScore}</span>
              <span className="text-slate-500 text-lg">/ {activeRubric.maxScore}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${badge.color}`}>
              {badge.label}
            </span>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sıfırla</span>
            </button>
          </div>
        </div>

        {/* Teacher Feedback / Development Notes */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-800">
            Öğretmen Geri Bildirimi ve Gelişim Tavsiyeleri (Süreç Odaklı):
          </label>
          <textarea
            value={teacherFeedback}
            onChange={(e) => setTeacherFeedback(e.target.value)}
            rows={3}
            placeholder="Örn: Algoritma kurgusu ve kukla etkileşimleri çok başarılı. Bir sonraki projede değişkenlerin sıfırlanmasına ve sahne arka planı kontrastına dikkat edebilirsin."
            className="w-full p-3 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
        </div>

        {/* Signatures for Portfolio Sheet */}
        <div className="pt-6 border-t border-slate-200 grid grid-cols-2 text-center text-xs">
          <div>
            <div className="font-bold text-slate-800">{studentName || 'Öğrenci İmzası'}</div>
            <div className="text-slate-500 text-[11px] mt-1">Öğrenci Öz Değerlendirme Onayı</div>
          </div>
          <div>
            <div className="font-bold text-slate-800">Ders Öğretmeni</div>
            <div className="text-slate-500 text-[11px] mt-1">İmza / Değerlendirme Tarihi</div>
          </div>
        </div>
      </div>
    </div>
  );
};
