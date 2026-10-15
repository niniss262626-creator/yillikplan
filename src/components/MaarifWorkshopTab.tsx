import React, { useState } from 'react';
import { CLASSROOM_ACTIVITIES, ClassroomActivity } from '../data/curriculumData';
import { 
  Sparkles, 
  Bot, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Lightbulb, 
  BookOpen, 
  Clock, 
  HeartHandshake, 
  ChevronRight,
  Code2
} from 'lucide-react';

export const MaarifWorkshopTab: React.FC = () => {
  const [activeActivityId, setActiveActivityId] = useState<string>(CLASSROOM_ACTIVITIES[0].id);

  // Prompt Lab state
  const [roleInput, setRoleInput] = useState('Eğlenceli bir robotik ve uzay bilimcisisin');
  const [taskInput, setTaskInput] = useState('Mars gezegeninde su bulunup bulunmadığını ve neden kızıl renkli olduğunu anlat');
  const [contextInput, setContextInput] = useState('5. sınıf bilişim ve fen öğrencileri için, anlaşılır ve merak uyandırıcı olsun');
  const [formatInput, setFormatInput] = useState('4 kısa madde ve 1 merak uyandırıcı soru şeklinde');

  const [simulatedResult, setSimulatedResult] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const selectedActivity = CLASSROOM_ACTIVITIES.find((a) => a.id === activeActivityId) || CLASSROOM_ACTIVITIES[0];

  const assembledPrompt = `${roleInput}. ${taskInput}. ${contextInput}. Çıktıyı ${formatInput} hazırla.`;

  // Evaluate prompt quality score
  const scoreCriteria = [
    { title: 'Rol Tanımı', valid: roleInput.trim().length > 10 },
    { title: 'Somut Görev', valid: taskInput.trim().length > 15 },
    { title: 'Hedef Kitle / Bağlam', valid: contextInput.trim().length > 10 },
    { title: 'Çıktı Biçimi / Kısıt', valid: formatInput.trim().length > 8 }
  ];

  const validCount = scoreCriteria.filter((c) => c.valid).length;
  const promptQualityPercent = validCount * 25;

  const handleSimulatePrompt = () => {
    setIsSimulating(true);
    setSimulatedResult(null);

    setTimeout(() => {
      setIsSimulating(false);
      setSimulatedResult(`Merhaba Genç Kâşifler! Ben uzay laboratuvarınızdan Selim Hoca. İşte merak ettiğiniz Mars'ın sırları:

1. 🔴 Paslı Bir Dünya: Mars'ın yüzeyinde çok miktarda demir oksit bulunur. Tıpkı eski bisikletlerin zincirlerinin paslanması gibi, Mars toprağı da paslandığı için gökyüzünden kızıl ve turuncu görünür.
2. 🧊 Donmuş Gizemler: Mars'ta sıvı halde göller şimdilik akmıyor; fakat kutuplarında ve yerin metrelerce altında devasa su buzulları keşfedildi!
3. 🌋 Güneş Sisteminin En Yükseği: Mars'taki Olympus Mons yanardağı, bizim Everest Dağı'mızdan tam 3 kat daha yüksektir!
4. 🤖 Yalnız Değil: Şu anda Mars üzerinde 'Perseverance' (Azim) ve 'Curiosity' (Merak) isimli robotik araçlar, eski yaşam izlerini aramak için kaya örnekleri topluyor.

❓ Merak Sorusu: Eğer yarın Mars'a gönderilecek ilk öğrenci araştırma ekibine seçilseydin, yanına alacağın tek teknolojik alet ne olurdu?`);
    }, 600);
  };

  const handleLoadSample = (sampleType: 'mars' | 'cyber' | 'coding') => {
    if (sampleType === 'mars') {
      setRoleInput('Eğlenceli bir robotik ve uzay bilimcisisin');
      setTaskInput('Mars gezegeninde su bulunup bulunmadığını ve neden kızıl renkli olduğunu anlat');
      setContextInput('5. sınıf bilişim ve fen öğrencileri için, anlaşılır ve merak uyandırıcı olsun');
      setFormatInput('4 kısa madde ve 1 merak uyandırıcı soru şeklinde');
    } else if (sampleType === 'cyber') {
      setRoleInput('Dijital güvenlik uzmanı ve çocuk hakları savunucususun');
      setTaskInput('Güçlü parola oluşturmanın 3 altın kuralını ve şifrelerin neden arkadaşla paylaşılmayacağını açıkla');
      setContextInput('5. sınıf öğrencilerine yönelik, sıkıcı olmayan ve günlük hayattan örneklerle');
      setFormatInput('Örnek parola modeli ile birlikte 3 maddelik liste halinde');
    } else if (sampleType === 'coding') {
      setRoleInput('Deneyimli bir blok tabanlı Scratch kodlama eğitmenisin');
      setTaskInput('Klavyedeki yön tuşlarıyla hareket eden bir kedi kuklasının duvara çarptığında başa dönmesi algoritmasını açıkla');
      setContextInput('Yeni kodlama öğrenen 5. sınıf öğrencileri için');
      setFormatInput('Adım adım akış sırası ve kullanılacak blok isimleriyle');
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-700" />
            <span>Maarif Atölyesi: Yapay Zekâ İstem Stüdyosu & Sınıf Etkinlikleri</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            5. sınıf öğrencileriyle derste doğrudan uygulayabileceğiniz 'Rol-Görev-Bağlam-Biçim' istem simülatörü ve adım adım TYMM etkinlik planları.
          </p>
        </div>
      </div>

      {/* Interactive Prompt Lab */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-sky-400" />
            <div>
              <h3 className="text-sm font-bold">5. Sınıf İstem (Prompt) Simülatörü: RGB-B Formülü</h3>
              <p className="text-[11px] text-slate-300">
                Öğrencilere yapay zekâya doğru soru sorma ve komut verme yetkinliğini kazandırın.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Hızlı Örnekler:</span>
            <button
              onClick={() => handleLoadSample('mars')}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-200 transition-colors"
            >
              Mars ve Robot
            </button>
            <button
              onClick={() => handleLoadSample('cyber')}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-200 transition-colors"
            >
              Güçlü Parola
            </button>
            <button
              onClick={() => handleLoadSample('coding')}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-200 transition-colors"
            >
              Scratch Algoritma
            </button>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>1. Rol (Sen Kimsin?)</span>
                  <span className="text-[10px] text-slate-400 font-normal">Karakter / Uzmanlık</span>
                </label>
                <input
                  type="text"
                  value={roleInput}
                  onChange={(e) => setRoleInput(e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>2. Görev (Ne Yapacaksın?)</span>
                  <span className="text-[10px] text-slate-400 font-normal">Somut Eylem</span>
                </label>
                <input
                  type="text"
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>3. Bağlam & Kitle (Kimin İçin?)</span>
                  <span className="text-[10px] text-slate-400 font-normal">5. Sınıf Seviyesi</span>
                </label>
                <input
                  type="text"
                  value={contextInput}
                  onChange={(e) => setContextInput(e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>4. Biçim & Sınır (Format)</span>
                  <span className="text-[10px] text-slate-400 font-normal">Madde / Tablo</span>
                </label>
                <input
                  type="text"
                  value={formatInput}
                  onChange={(e) => setFormatInput(e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:outline-none"
                />
              </div>
            </div>

            {/* Assembled prompt preview */}
            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                Oluşturulan Nihai İstem (Yapay Zekâya Giden Metin):
              </span>
              <p className="text-xs text-slate-800 font-mono leading-relaxed bg-white p-2.5 rounded border border-slate-200 select-all">
                "{assembledPrompt}"
              </p>
            </div>

            {/* Quality Score Meter */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-700">İstem Kalite Skoru:</span>
                <span className="text-xs font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 tabular-nums">
                  %{promptQualityPercent} ({validCount}/4 Kriter)
                </span>
              </div>

              <button
                onClick={handleSimulatePrompt}
                disabled={isSimulating}
                className="px-4 py-2 text-xs font-bold text-white bg-sky-700 hover:bg-sky-800 disabled:bg-slate-400 rounded-lg shadow-sm transition-colors flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSimulating ? 'Yanıt Oluşturuluyor...' : 'İstemi Simüle Et'}</span>
              </button>
            </div>
          </div>

          {/* Simulation Output Area (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-slate-100 rounded-xl p-4 flex flex-col justify-between border border-slate-800">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-xs">
                <span className="font-semibold text-sky-400 flex items-center gap-1.5">
                  <Bot className="w-4 h-4" />
                  <span>Örnek Model Yanıtı</span>
                </span>
                <span className="text-[10px] text-slate-500">5. Sınıf Eğitsel Düzey</span>
              </div>

              <div className="text-xs text-slate-200 leading-relaxed font-sans whitespace-pre-line min-h-[220px]">
                {isSimulating ? (
                  <div className="h-48 flex items-center justify-center text-slate-400 gap-2">
                    <Sparkles className="w-4 h-4 animate-spin text-sky-400" />
                    <span>Yapay zekâ yanıt hazırlıyor...</span>
                  </div>
                ) : simulatedResult ? (
                  simulatedResult
                ) : (
                  <div className="h-48 flex flex-col items-center justify-center text-slate-500 text-center p-4">
                    <Bot className="w-8 h-8 text-slate-700 mb-2" />
                    <span>Sol taraftan istem bileşenlerini düzenleyip 'İstemi Simüle Et' butonuna tıklayınız.</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Öğrencilere: Çıkan bilgileri mutlaka ders kitabınızdan ve güvenilir kaynaklardan teyit edin.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Classroom Activity Guides */}
      <div className="space-y-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Uygulamalı Maarif Bilişim Ders Etkinlikleri</h3>
          <p className="text-xs text-slate-500">
            Ders içi grup çalışmaları, problem çözme senaryoları ve değer temelli rol oynama planları.
          </p>
        </div>

        {/* Activity Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {CLASSROOM_ACTIVITIES.map((act) => (
            <button
              key={act.id}
              onClick={() => setActiveActivityId(act.id)}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                activeActivityId === act.id
                  ? 'bg-sky-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{act.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Activity Detail Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
                {selectedActivity.targetAudience} · {selectedActivity.duration}
              </span>
              <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                {selectedActivity.title}
              </h4>
            </div>
            <div className="flex flex-wrap gap-1.5 self-start sm:self-auto">
              {selectedActivity.maarifValues.map((val, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <span className="font-bold text-slate-800 block mb-1">Etkinlik Özeti:</span>
              <p className="text-slate-600 leading-relaxed">{selectedActivity.overview}</p>
            </div>

            <div>
              <span className="font-bold text-slate-800 block mb-1">Gerekli Materyaller:</span>
              <ul className="list-disc pl-5 text-slate-600 space-y-0.5">
                {selectedActivity.materials.map((mat, i) => (
                  <li key={i}>{mat}</li>
                ))}
              </ul>
            </div>

            {/* Steps Timeline */}
            <div>
              <span className="font-bold text-slate-800 block mb-3">Uygulama Basamakları:</span>
              <div className="space-y-3">
                {selectedActivity.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <strong className="block text-slate-900 mb-0.5">{step.title}</strong>
                      <p className="text-slate-600 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prompt Example if exists */}
            {selectedActivity.promptExample && (
              <div className="bg-amber-50/60 p-4 rounded-lg border border-amber-200 space-y-2">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>Sınıf İçi Karşılaştırma Örneği: Zayıf İstem vs Maarif İstemi</span>
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div className="bg-white p-3 rounded border border-rose-200">
                    <span className="text-[11px] font-bold text-rose-700 block mb-1">❌ Zayıf / Yetersiz İstem:</span>
                    <p className="text-slate-700 italic">"{selectedActivity.promptExample.badPrompt}"</p>
                    <span className="text-[10px] text-slate-500 block mt-1">Eksikler: Rol yok, kitle belirsiz, format yok.</span>
                  </div>
                  <div className="bg-white p-3 rounded border border-emerald-200">
                    <span className="text-[11px] font-bold text-emerald-700 block mb-1">✅ Güçlü Maarif İstemi:</span>
                    <p className="text-slate-700 font-medium">"{selectedActivity.promptExample.goodPrompt}"</p>
                    <span className="text-[10px] text-emerald-700 block mt-1">{selectedActivity.promptExample.tip}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
