import React from 'react';
import { WeeklyPlanItem } from '../data/curriculumData';
import { SchoolConfig } from './SchoolSettingsModal';
import { Printer, Download, FileText, Settings, School, Check } from 'lucide-react';

interface OfficialPrintViewProps {
  weeklyPlan: WeeklyPlanItem[];
  config: SchoolConfig;
  onOpenSettings: () => void;
  onTriggerPrint: () => void;
}

export const OfficialPrintView: React.FC<OfficialPrintViewProps> = ({
  weeklyPlan,
  config,
  onOpenSettings,
  onTriggerPrint
}) => {
  // Export as CSV (with UTF-8 BOM so Excel opens Turkish characters correctly)
  const handleExportCSV = () => {
    const headers = [
      'Hafta',
      'Tarih',
      'Saat',
      'Dönem',
      'Tema',
      'Konu ve Alt Konular',
      'Öğrenme Çıktıları (Kazanımlar)',
      'Yöntem ve Teknikler',
      'Eğitim Teknolojileri, Araç ve Gereçler',
      'Ölçme ve Değerlendirme',
      'Belirli Gün ve Haftalar / Açıklamalar'
    ];

    const rows = weeklyPlan.map((w) => [
      `"${w.week}. Hafta"`,
      `"${w.dates}"`,
      `"${w.hours}"`,
      `"${w.semester}. Dönem"`,
      `"${w.themeId}. Tema: ${w.themeTitle}"`,
      `"${w.topic.replace(/"/g, '""')}"`,
      `"${w.outcomes.join('; ').replace(/"/g, '""')}"`,
      `"${w.methods.join(', ').replace(/"/g, '""')}"`,
      `"${w.toolsAndTech.join(', ').replace(/"/g, '""')}"`,
      `"${w.assessment.replace(/"/g, '""')}"`,
      `"${(w.specialDaysAndNotes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map((r) => r.join(';'))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `5_Sinif_Bilisim_Yillik_Plan_${config.academicYear.replace(/[^a-zA-Z0-9]/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export as Word-compatible HTML (.doc)
  const handleExportWord = () => {
    const headerHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>5. Sınıf Bilişim Teknolojileri ve Yazılım Yıllık Planı</title>
        <style>
          body { font-family: 'Times New Roman', serif; font-size: 10pt; }
          table { width: 100%; border-collapse: collapse; margin-top: 15px; }
          th, td { border: 1px solid black; padding: 4px; font-size: 8.5pt; text-align: left; }
          th { background-color: #f2f2f2; font-weight: bold; }
          h2, h3, h4 { text-align: center; margin: 2px 0; }
        </style>
      </head>
      <body>
        <h2>T.C. MİLLÎ EĞİTİM BAKANLIĞI</h2>
        <h3>${config.schoolName ? config.schoolName.toUpperCase() : 'OKUL ADI'}</h3>
        <h4>${config.academicYear} EĞİTİM VE ÖĞRETİM YILI 5. SINIFLAR BİLİŞİM TEKNOLOJİLERİ VE YAZILIM DERSİ ÇERÇEVE YILLIK PLANI</h4>
        <p style="text-align:center; font-size: 9pt;">Haftalık Ders Saati: 2 | Toplam Yıllık Süre: 72 Saat | Maarif Modeli</p>
        <table>
          <thead>
            <tr>
              <th style="width:5%;">Hafta</th>
              <th style="width:10%;">Tarih</th>
              <th style="width:4%;">Saat</th>
              <th style="width:12%;">Tema</th>
              <th style="width:15%;">Konu</th>
              <th style="width:22%;">Öğrenme Çıktıları (Kazanımlar)</th>
              <th style="width:10%;">Yöntem-Teknik</th>
              <th style="width:10%;">Araç-Gereç</th>
              <th style="width:12%;">Ölçme-Değerlendirme & Açıklamalar</th>
            </tr>
          </thead>
          <tbody>
            ${weeklyPlan.map((w) => `
              <tr>
                <td style="text-align:center;">${w.week}</td>
                <td>${w.dates}</td>
                <td style="text-align:center;">${w.hours}</td>
                <td>${w.themeTitle}</td>
                <td><strong>${w.topic}</strong></td>
                <td>${w.outcomes.join('<br>• ')}</td>
                <td>${w.methods.join(', ')}</td>
                <td>${w.toolsAndTech.join(', ')}</td>
                <td>${w.assessment} ${w.specialDaysAndNotes ? `<br><em>${w.specialDaysAndNotes}</em>` : ''}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <br><br>
        <table style="border:none; width:100%;">
          <tr style="border:none;">
            <td style="border:none; text-align:center; width:33%;">
              <strong>${config.teacherName || 'Ders Öğretmeni'}</strong><br>
              Bilişim Teknolojileri Öğretmeni
            </td>
            <td style="border:none; text-align:center; width:33%;">
              <strong>${config.headOfDepartment || 'Zümre Başkanı'}</strong><br>
              Zümre Başkanı
            </td>
            <td style="border:none; text-align:center; width:33%;">
              UYGUNDUR<br>
              ... / ... / 2026<br><br>
              <strong>${config.principalName || 'Okul Müdürü'}</strong><br>
              Okul Müdürü
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const blob = new Blob(['\uFEFF' + headerHtml], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `5_Sinif_Bilisim_Yillik_Plan_${config.academicYear.replace(/[^a-zA-Z0-9]/g, '_')}.doc`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Action Bar (Hidden in print) */}
      <div className="no-print bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <School className="w-5 h-5 text-sky-700" />
            <span>MEB Standart Resmi Yıllık Plan Çıktı Görünümü</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Bu sayfa Millî Eğitim Bakanlığı resmi formatına göre düzenlenmiştir. Doğrudan A4 yatay yazdırabilir veya Excel/Word olarak indirebilirsiniz.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={onOpenSettings}
            className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Okul / Öğretmen Bilgisi</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Excel (.CSV)</span>
          </button>

          <button
            onClick={handleExportWord}
            className="px-3 py-2 text-xs font-semibold text-indigo-800 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Word (.DOC)</span>
          </button>

          <button
            onClick={onTriggerPrint}
            className="px-4 py-2 text-xs font-bold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Yazdır / PDF Kaydet</span>
          </button>
        </div>
      </div>

      {/* Official MEB Document Paper Layout */}
      <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-6 sm:p-8 lg:p-10 text-slate-900 print:border-none print:shadow-none print:p-0">
        {/* Document Header */}
        <div className="text-center pb-4 border-b-2 border-slate-900 space-y-1">
          <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-700">
            T.C. MİLLÎ EĞİTİM BAKANLIĞI
          </div>
          <div className="text-sm sm:text-base font-extrabold uppercase text-slate-900">
            {config.schoolName || 'ATATÜRK ORTAOKULU MÜDÜRLÜĞÜ'}
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-800 uppercase">
            {config.academicYear} EĞİTİM VE ÖĞRETİM YILI
          </div>
          <div className="text-sm sm:text-base font-extrabold text-slate-900 uppercase">
            BİLİŞİM TEKNOLOJİLERİ VE YAZILIM DERSİ (5. SINIFLAR) ÇERÇEVE YILLIK PLANI
          </div>
          <div className="text-xs font-medium text-slate-600 pt-1 flex flex-wrap items-center justify-center gap-3">
            <span><strong>Seviye:</strong> 5. Sınıf ({config.classBranches || '5-A, 5-B'})</span>
            <span aria-hidden="true">·</span>
            <span><strong>Haftalık Ders Saati:</strong> 2 Saat</span>
            <span aria-hidden="true">·</span>
            <span><strong>Yıllık Toplam:</strong> 72 Saat (36 Hafta)</span>
            <span aria-hidden="true">·</span>
            <span><strong>Model:</strong> Türkiye Yüzyılı Maarif Modeli</span>
          </div>
        </div>

        {/* Official Annual Table */}
        <div className="mt-4 overflow-x-auto">
          <table className="print-table w-full border-collapse border border-slate-900 text-[11px] leading-tight">
            <thead>
              <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-900 text-center">
                <th className="border border-slate-900 p-1.5 w-10">HAFTA</th>
                <th className="border border-slate-900 p-1.5 w-20">TARİH</th>
                <th className="border border-slate-900 p-1.5 w-8">SAAT</th>
                <th className="border border-slate-900 p-1.5 w-24">TEMA</th>
                <th className="border border-slate-900 p-1.5 w-36">KONU VE ALT KONULAR</th>
                <th className="border border-slate-900 p-1.5 min-w-[200px]">ÖĞRENME ÇIKTILARI (KAZANIMLAR)</th>
                <th className="border border-slate-900 p-1.5 w-24">YÖNTEM VE TEKNİKLER</th>
                <th className="border border-slate-900 p-1.5 w-28">ARAÇ-GEREÇ & TEKNOLOJİ</th>
                <th className="border border-slate-900 p-1.5 w-32">ÖLÇME VE DEĞERLENDİRME</th>
                <th className="border border-slate-900 p-1.5 w-32">BELİRLİ GÜNLER / AÇIKLAMALAR</th>
              </tr>
            </thead>
            <tbody>
              {weeklyPlan.map((row) => (
                <tr key={row.week} className="page-break-inside-avoid hover:bg-slate-50">
                  <td className="border border-slate-900 p-1.5 text-center font-bold tabular-nums">
                    {row.week}
                  </td>
                  <td className="border border-slate-900 p-1.5 text-center whitespace-nowrap text-[10px]">
                    {row.dates}
                  </td>
                  <td className="border border-slate-900 p-1.5 text-center font-bold tabular-nums">
                    {row.hours}
                  </td>
                  <td className="border border-slate-900 p-1.5 font-semibold text-[10px]">
                    {row.themeId}. Tema: {row.themeTitle}
                  </td>
                  <td className="border border-slate-900 p-1.5 font-bold">
                    {row.topic}
                  </td>
                  <td className="border border-slate-900 p-1.5">
                    <ul className="list-disc pl-3.5 space-y-0.5">
                      {row.outcomes.map((oc, i) => (
                        <li key={i}>{oc}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="border border-slate-900 p-1.5 text-[10px]">
                    {row.methods.join(', ')}
                  </td>
                  <td className="border border-slate-900 p-1.5 text-[10px]">
                    {row.toolsAndTech.join(', ')}
                  </td>
                  <td className="border border-slate-900 p-1.5 text-[10px]">
                    {row.assessment}
                  </td>
                  <td className="border border-slate-900 p-1.5 text-[10px] italic text-slate-700">
                    {row.specialDaysAndNotes || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Official Signatures Section */}
        <div className="page-break-inside-avoid mt-8 pt-6 border-t border-slate-400 grid grid-cols-3 text-center text-xs">
          <div>
            <div className="font-bold uppercase text-slate-900">
              {config.teacherName || 'Ders Öğretmeni Adı'}
            </div>
            <div className="text-slate-600 mt-1">Bilişim Teknolojileri Öğretmeni</div>
            <div className="mt-8 text-slate-400">İmza</div>
          </div>

          <div>
            <div className="font-bold uppercase text-slate-900">
              {config.headOfDepartment || 'Zümre Başkanı Adı'}
            </div>
            <div className="text-slate-600 mt-1">Zümre Başkanı</div>
            <div className="mt-8 text-slate-400">İmza</div>
          </div>

          <div>
            <div className="font-bold text-slate-800">UYGUNDUR</div>
            <div className="text-slate-500 text-[11px] mt-0.5">... / ... / 2026</div>
            <div className="font-bold uppercase text-slate-900 mt-2">
              {config.principalName || 'Okul Müdürü Adı'}
            </div>
            <div className="text-slate-600 mt-0.5">Okul Müdürü</div>
            <div className="mt-6 text-slate-400">İmza / Mühür</div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-[10px] text-slate-500 border-t border-slate-200 pt-2 print:mt-4">
          Bu plan Millî Eğitim Bakanlığı Talim ve Terbiye Kurulu Başkanlığı Türkiye Yüzyılı Maarif Modeli çerçevesinde hazırlanmıştır.
        </div>
      </div>
    </div>
  );
};
