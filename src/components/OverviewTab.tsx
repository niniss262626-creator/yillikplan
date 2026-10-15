import React from 'react';
import { 
  THEMES_DATA, 
  ThemeInfo 
} from '../data/curriculumData';
import { 
  Layers, 
  Clock, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  PenTool, 
  Network, 
  ShieldCheck, 
  Bot, 
  Code2,
  Compass,
  Sparkles
} from 'lucide-react';

interface OverviewTabProps {
  onSelectTheme: (themeId: number) => void;
  onNavigateToSchedule: () => void;
  onNavigateToOfficial: () => void;
  completedHours: number;
  totalHours: number;
  completedWeeksCount: number;
}

const THEME_ICONS: Record<number, React.ReactNode> = {
  1: <Cpu className="w-5 h-5 text-sky-600" />,
  2: <PenTool className="w-5 h-5 text-indigo-600" />,
  3: <Network className="w-5 h-5 text-emerald-600" />,
  4: <ShieldCheck className="w-5 h-5 text-amber-600" />,
  5: <Bot className="w-5 h-5 text-rose-600" />,
  6: <Code2 className="w-5 h-5 text-purple-600" />
};

export const OverviewTab: React.FC<OverviewTabProps> = ({
  onSelectTheme,
  onNavigateToSchedule,
  onNavigateToOfficial,
  completedHours,
  totalHours,
  completedWeeksCount
}) => {
  const percentComplete = Math.round((completedHours / totalHours) * 100);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Hero Section with High-Fidelity Visual */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
                <span>T.C. Millî Eğitim Bakanlığı</span>
                <span aria-hidden="true">·</span>
                <span>Türkiye Yüzyılı Maarif Modeli</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi Çerçeve Yıllık Planı
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Yeni Maarif Modeli felsefesiyle hazırlanmış; süreç odaklı ölçme, erdem-değer-eylem çerçevesi, 
                yapay zekâ okuryazarlığı ve blok tabanlı kodlama odaklı 36 haftalık tam yıllık müfredat.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <span className="block text-xs font-medium text-slate-500">Sınıf Seviyesi</span>
                <span className="text-base sm:text-lg font-bold text-slate-900 tabular-nums">5. Sınıf</span>
              </div>
              <div>
                <span className="block text-xs font-medium text-slate-500">Haftalık Ders</span>
                <span className="text-base sm:text-lg font-bold text-slate-900 tabular-nums">2 Saat</span>
              </div>
              <div>
                <span className="block text-xs font-medium text-slate-500">Yıllık Toplam</span>
                <span className="text-base sm:text-lg font-bold text-slate-900 tabular-nums">72 Saat</span>
              </div>
              <div>
                <span className="block text-xs font-medium text-slate-500">Hafta Sayısı</span>
                <span className="text-base sm:text-lg font-bold text-slate-900 tabular-nums">36 Hafta</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onNavigateToSchedule}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-sm transition-colors flex items-center gap-2"
              >
                <span>36 Haftalık Planı İncele</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onNavigateToOfficial}
                className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-2"
              >
                <span>MEB Resmi Yazdır / İndir</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative bg-slate-100 min-h-[260px] lg:min-h-full">
            <img
              src="/src/assets/images/hero_maarif_tech_1792052146299.jpg"
              alt="5. Sınıf Bilişim Teknolojileri Maarif Sınıfı"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-3 left-4 right-4 lg:hidden text-white text-xs font-medium">
              Türkiye Yüzyılı Maarif Modeli Bilişim Laboratuvarı
            </div>
          </div>
        </div>
      </div>

      {/* Progress & Quick Stats Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
              <Compass className="w-4 h-4 text-sky-600" />
              <span>Yıllık Müfredat İlerleme Durumu</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              İşlenen haftaları '36 Haftalık Plan' sekmesinden işaretleyerek dönem ilerlemenizi takip edebilirsiniz.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-slate-600 shrink-0">
            <div>
              <span className="text-slate-400">Tamamlanan Hafta: </span>
              <strong className="text-slate-900 tabular-nums">{completedWeeksCount} / 36</strong>
            </div>
            <div className="border-l border-slate-200 pl-4">
              <span className="text-slate-400">İşlenen Saat: </span>
              <strong className="text-slate-900 tabular-nums">{completedHours} / {totalHours} Saat</strong>
            </div>
          </div>
        </div>
        <div className="mt-3 w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
          <div 
            className="bg-sky-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentComplete}%` }}
          />
        </div>
      </div>

      {/* Tema ve Saat Dağılımı Özeti Tablosu */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-700" />
            <h2 className="text-base font-bold text-slate-900">Tema ve Saat Dağılımı Özeti</h2>
          </div>
          <span className="text-xs text-slate-500">TYMM Bilişim Teknolojileri ve Yazılım Dersi</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                <th className="py-3 px-4 w-28">Tema No</th>
                <th className="py-3 px-4">Tema Adı</th>
                <th className="py-3 px-4 w-40">Tahmini Zaman</th>
                <th className="py-3 px-4 w-28 text-center">Süre (Saat)</th>
                <th className="py-3 px-4 w-28 text-center">Hafta</th>
                <th className="py-3 px-4 w-28 text-center">Oran</th>
                <th className="py-3 px-4 w-32 text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {THEMES_DATA.map((t) => {
                const percentage = Math.round((t.hours / 72) * 100);
                return (
                  <tr 
                    key={t.id} 
                    className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                    onClick={() => onSelectTheme(t.id)}
                  >
                    <td className="py-3.5 px-4 font-semibold text-slate-800">
                      <div className="flex items-center gap-2">
                        {THEME_ICONS[t.id]}
                        <span>{t.id}. Tema</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-900 font-medium">
                      {t.title.replace(`${t.id}. Tema: `, '')}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 text-xs">
                      {t.timeRange.split('(')[0]}
                    </td>
                    <td className="py-3.5 px-4 text-center font-bold text-slate-800 tabular-nums">
                      {t.hours} Saat
                    </td>
                    <td className="py-3.5 px-4 text-center text-slate-600 text-xs tabular-nums">
                      {t.weeksCount} Hafta
                    </td>
                    <td className="py-3.5 px-4 text-center text-xs font-medium text-slate-500 tabular-nums">
                      %{percentage}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectTheme(t.id);
                        }}
                        className="text-xs font-semibold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1 group-hover:underline"
                      >
                        <span>Haftaları Gör</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="bg-slate-50 border-t-2 border-slate-200 font-bold text-slate-900 text-xs">
                <td colSpan={3} className="py-3 px-4 text-right">
                  YILLIK TOPLAM:
                </td>
                <td className="py-3 px-4 text-center tabular-nums text-sm text-sky-800">
                  72 Saat
                </td>
                <td className="py-3 px-4 text-center tabular-nums text-sm">
                  36 Hafta
                </td>
                <td className="py-3 px-4 text-center tabular-nums text-sm">
                  %100
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Detaylı Tema İçerikleri */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg font-bold text-slate-900">Detaylı Tema İçerikleri ve Öğrenme Çıktıları</h2>
          <p className="text-xs text-slate-500">
            Türkiye Yüzyılı Maarif Modeli kapsamında 5. sınıf düzeyine özel belirlenen öğrenme çıktıları, süreç odaklı etkinlikler ve değerler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {THEMES_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    {THEME_ICONS[t.id]}
                    <h3 className="text-base font-bold text-slate-900">
                      {t.id}. Tema: {t.shortName}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md tabular-nums">
                    {t.hours} Saat · {t.weeksCount} Hafta
                  </span>
                </div>

                <div className="space-y-3 text-xs leading-relaxed">
                  <div>
                    <span className="font-semibold text-slate-800 block mb-0.5">Öğrenme Çıktıları:</span>
                    <p className="text-slate-600">{t.learningOutcomes}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-800 block mb-0.5">İçerik ve Konular:</span>
                    <p className="text-slate-600">{t.content}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-800 block mb-0.5">Beceriler & Maarif Değerleri:</span>
                    <p className="text-slate-600">{t.skillsAndValues}</p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {t.coreConcepts.map((concept, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{t.timeRange}</span>
                <button
                  onClick={() => onSelectTheme(t.id)}
                  className="font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 group"
                >
                  <span>Haftalık Detaylar</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Maarif Modeli Yaklaşımı Bilgi Kutusu */}
      <div className="bg-sky-50/60 rounded-xl border border-sky-200 p-6">
        <h3 className="text-sm font-bold text-sky-900 mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-sky-700" />
          <span>Türkiye Yüzyılı Maarif Modeli (TYMM) Bilişim Eğitimi İlkeleri</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700 mt-3">
          <div className="bg-white p-4 rounded-lg border border-sky-100">
            <strong className="block text-sky-900 mb-1">1. Süreç Odaklı Ölçme</strong>
            Sadece klasik sınavlar yerine tanılayıcı dallanmış ağaçlar, dereceli puanlama anahtarları (rubrikler), gözlem formları ve öğrenci dijital ürün portfolyosu esas alınır.
          </div>
          <div className="bg-white p-4 rounded-lg border border-sky-100">
            <strong className="block text-sky-900 mb-1">2. Erdem-Değer-Eylem Bütünlüğü</strong>
            Teknolojik araçlar yalnızca teknik beceri için değil; adalet, mahremiyet, sabır, dürüstlük ve siber nezaket değerlerini kazandırmak için bir vasıta olarak ele alınır.
          </div>
          <div className="bg-white p-4 rounded-lg border border-sky-100">
            <strong className="block text-sky-900 mb-1">3. Çağdaş Yetkinlikler & Yapay Zekâ</strong>
            5. sınıf seviyesinde yapay zekâ mantığı, istem (prompt) yazımı temelleri, blok tabanlı kodlama ve millî işletim sistemi Pardus ile teknolojik bağımsızlık bilinci kazandırılır.
          </div>
        </div>
      </div>
    </div>
  );
};
