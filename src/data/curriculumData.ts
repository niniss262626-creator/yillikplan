/**
 * Türkiye Yüzyılı Maarif Modeli (TYMM)
 * 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi Müfredat ve Çerçeve Yıllık Plan Verisi
 */

export interface ThemeInfo {
  id: number;
  title: string;
  shortName: string;
  hours: number;
  weeksCount: number;
  timeRange: string;
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  learningOutcomes: string;
  content: string;
  skillsAndValues: string;
  coreConcepts: string[];
}

export interface WeeklyPlanItem {
  week: number;
  semester: 1 | 2;
  dates: string;
  hours: number;
  themeId: number;
  themeTitle: string;
  topic: string;
  outcomes: string[];
  methods: string[];
  toolsAndTech: string[];
  assessment: string;
  specialDaysAndNotes?: string;
}

export interface RubricCriterion {
  id: string;
  name: string;
  description: string;
  levels: {
    score: number;
    title: string;
    description: string;
  }[];
}

export interface RubricTemplate {
  id: string;
  title: string;
  themeName: string;
  purpose: string;
  maxScore: number;
  criteria: RubricCriterion[];
}

export interface ClassroomActivity {
  id: string;
  themeId: number;
  title: string;
  duration: string;
  targetAudience: string;
  overview: string;
  materials: string[];
  steps: { title: string; detail: string }[];
  maarifValues: string[];
  promptExample?: {
    badPrompt: string;
    goodPrompt: string;
    tip: string;
  };
}

export const THEMES_DATA: ThemeInfo[] = [
  {
    id: 1,
    title: "1. Tema: Bilişim Teknolojileri (Donanım, Yazılım, İşletim Sistemleri)",
    shortName: "Bilişim Teknolojileri",
    hours: 14,
    weeksCount: 7,
    timeRange: "Eylül - Kasım (Hafta 1 - 7)",
    accentColor: "sky",
    badgeBg: "bg-sky-50 dark:bg-sky-950/40",
    badgeBorder: "border-sky-200 dark:border-sky-800",
    badgeText: "text-sky-700 dark:text-sky-300",
    learningOutcomes: "Bilişim teknolojilerinin temel kavramlarını, donanım ve yazılım bileşenlerini tanır. Fiziksel güvenlik ve beden/ruh sağlığı ile ilişkisini analiz eder.",
    content: "Bilişim Teknolojisi kavramı, Geçmişten Günümüze Teknolojik Gelişim, Donanım ve Yazılım, İşletim Sistemleri, Klavye/Fare Becerileri ve Sorun Giderme.",
    skillsAndValues: "Dijital Okuryazarlık, Sorumluluk, Problem Çözme, Sağlıklı Yaşam Bilinci, Sabır.",
    coreConcepts: ["İç/Dış Donanım", "İşletim Sistemleri", "Pardus", "Ergonomi", "Klavye Becerileri", "Temel Arıza Tespiti"]
  },
  {
    id: 2,
    title: "2. Tema: Dijital Ürün Tasarımı (Görsel Düzenleme, Kelime İşlemci)",
    shortName: "Dijital Ürün Tasarımı",
    hours: 12,
    weeksCount: 6,
    timeRange: "Kasım - Ocak (Hafta 8 - 13)",
    accentColor: "indigo",
    badgeBg: "bg-indigo-50 dark:bg-indigo-950/40",
    badgeBorder: "border-indigo-200 dark:border-indigo-800",
    badgeText: "text-indigo-700 dark:text-indigo-300",
    learningOutcomes: "Görsel ve metin içerikli dijital ürünler tasarlar, uygun araçları seçer ve arayüzlerini verimli şekilde kullanır.",
    content: "Görsel düzenleme araçları (arayüz, katmanlar, temel düzenlemeler), Kelime İşlemci Programları (biçimlendirme, hizalama, tablo oluşturma).",
    skillsAndValues: "Estetik, Özgünlük, Dijital Okuryazarlık, İletişim, Tasarım Odaklı Düşünme.",
    coreConcepts: ["Katman (Layer) Mantığı", "Piksel ve Vektör", "Metin Biçimlendirme", "Afiş Tasarımı", "Tablo & Görsel Ekleme"]
  },
  {
    id: 3,
    title: "3. Tema: Ağlar ve İletişim (İnternet, Ağ Teknolojileri)",
    shortName: "Ağlar ve İletişim",
    hours: 6,
    weeksCount: 3,
    timeRange: "Ocak - Şubat (Hafta 14 - 16)",
    accentColor: "emerald",
    badgeBg: "bg-emerald-50 dark:bg-emerald-950/40",
    badgeBorder: "border-emerald-200 dark:border-emerald-800",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    learningOutcomes: "Bilgisayar ağlarını ve internet yapılarını kavrar, dijital iletişim araçlarını doğru amaçlar için kullanır.",
    content: "Bilgisayar Ağları (Yerel ve Geniş Alan Ağları), İnternet ve Web Kavramları, Dijital İletişim Araçları.",
    skillsAndValues: "Bilgi Okuryazarlığı, İş Birliği, Kültürlerarası Farkındalık, Etkili İletişim.",
    coreConcepts: ["Yerel Ağ (LAN)", "Geniş Alan Ağı (WAN)", "Sunucu-İstemci", "E-Posta Kuralları", "Bulut Depolama"]
  },
  {
    id: 4,
    title: "4. Tema: Bilişim Etiği ve Güvenlik (Dijital Yurttaşlık, Ayak İzi, Güvenlik)",
    shortName: "Bilişim Etiği ve Güvenlik",
    hours: 8,
    weeksCount: 4,
    timeRange: "Şubat - Mart (Hafta 17 - 20)",
    accentColor: "amber",
    badgeBg: "bg-amber-50 dark:bg-amber-950/40",
    badgeBorder: "border-amber-200 dark:border-amber-800",
    badgeText: "text-amber-700 dark:text-amber-300",
    learningOutcomes: "Dijital ayak izinin etkilerini açıklar, dijital vatandaşlık ilkelerine ve etik kurallara uygun davranır.",
    content: "Dijital Kimlik ve Dijital Ayak İzi, Güçlü Parola Oluşturma, Kişisel Verilerin Korunması, Siber Zorbalık ve Bilişim Etiği.",
    skillsAndValues: "Mahremiyet, Saygı, Sorumluluk, Dijital Okuryazarlık, Öz Denetim, Adalet.",
    coreConcepts: ["Dijital Ayak İzi", "Güçlü Parola", "Kişisel Veri (KVKK)", "Siber Zorbalık", "Telif Hakkı & Lisanslar"]
  },
  {
    id: 5,
    title: "5. Tema: Yapay Zekâ (Temel Kavramlar, Prompt Yazımı, Etkileri)",
    shortName: "Yapay Zekâ",
    hours: 8,
    weeksCount: 4,
    timeRange: "Mart - Nisan (Hafta 21 - 24)",
    accentColor: "rose",
    badgeBg: "bg-rose-50 dark:bg-rose-950/40",
    badgeBorder: "border-rose-200 dark:border-rose-800",
    badgeText: "text-rose-700 dark:text-rose-300",
    learningOutcomes: "Yapay zekâ ile ilgili temel kavramları ve kullanım alanlarını sorgular, yapay zekânın olası etkilerine ilişkin çıkarım yapar.",
    content: "Yapay Zekâ Nedir? Günlük Hayattaki Yapay Zekâ Uygulamaları, Prompt (İstem) Yazımı Temelleri, Yapay Zekânın Etik ve Toplumsal Etkileri.",
    skillsAndValues: "Eleştirel Düşünme, Bilimsel Etik, Sürdürülebilirlik Okuryazarlığı, Merak, Sorgulama.",
    coreConcepts: ["Makine Öğrenmesi Mantığı", "Doğal Dil İşleme", "İstem (Prompt) Mühendisliği", "Veri Yanlılığı", "Geleceğin Meslekleri"]
  },
  {
    id: 6,
    title: "6. Tema: Programlama ve Problem Çözme (Algoritma, Blok Kodlama)",
    shortName: "Programlama ve Problem Çözme",
    hours: 24,
    weeksCount: 12,
    timeRange: "Nisan - Haziran (Hafta 25 - 36)",
    accentColor: "purple",
    badgeBg: "bg-purple-50 dark:bg-purple-950/40",
    badgeBorder: "border-purple-200 dark:border-purple-800",
    badgeText: "text-purple-700 dark:text-purple-300",
    learningOutcomes: "Karmaşık problemleri alt adımlara böler, algoritmik düşünme becerisi geliştirir ve görsel (blok tabanlı) programlama ortamlarında özgün projeler geliştirir.",
    content: "Problem Çözme Adımları, Algoritma ve Akış Şemaları, Blok Tabanlı Programlama Araçları (hareket, görünüm, ses, döngüler, koşul yapıları ve değişkenler).",
    skillsAndValues: "Mantıksal Düşünme, Problem Çözme, Azim, Yaratıcılık, Takım Çalışması, Algoritmik Zihin.",
    coreConcepts: ["Algoritma", "Akış Şeması", "Blok Kodlama (Scratch/mBlock)", "Döngüler", "Koşullar (Eğer/İse)", "Değişkenler", "Hata Ayıklama"]
  }
];

export const INITIAL_WEEKLY_PLAN: WeeklyPlanItem[] = [
  // 1. TEMA (Hafta 1 - 7: 14 Saat)
  {
    week: 1,
    semester: 1,
    dates: "08 - 12 Eylül 2026",
    hours: 2,
    themeId: 1,
    themeTitle: "Bilişim Teknolojileri",
    topic: "Bilişim Teknolojilerine Giriş ve Temel Kavramlar",
    outcomes: [
      "BTY.5.1.1. Bilişim ve bilişim teknolojileri kavramlarının anlamını açıklar.",
      "BTY.5.1.2. Bilişim teknolojilerinin günlük yaşamdaki ve eğitimdeki önemini fark eder."
    ],
    methods: ["Anlatım", "Soru-Cevap", "Beyin Fırtınası", "Örnek Olay İnceleme"],
    toolsAndTech: ["Etkileşimli Tahta", "EBA Portali", "Ders Kitabı / Çalışma Kağıdı"],
    assessment: "Diyalog temelli sözlü değerlendirme, Tanılayıcı giriş testi.",
    specialDaysAndNotes: "İlköğretim Haftası. Bilişim sınıfı kullanım kuralları ve güvenlik sözleşmesi imzalatılır."
  },
  {
    week: 2,
    semester: 1,
    dates: "15 - 19 Eylül 2026",
    hours: 2,
    themeId: 1,
    themeTitle: "Bilişim Teknolojileri",
    topic: "Geçmişten Günümüze Teknolojinin Gelişimi ve Değişimi",
    outcomes: [
      "BTY.5.1.3. Teknolojik araçların tarihsel gelişim evrelerini karşılaştırır.",
      "BTY.5.1.4. Bilişim teknolojilerinin insan hayatına getirdiği kolaylıkları ve sınırılıkları değerlendirir."
    ],
    methods: ["Görsel Sunum", "Zaman Çizelgesi Oluşturma", "Grup Tartışması"],
    toolsAndTech: ["İnteraktif Zaman Çizelgesi", "Tarihi Bilgisayar Fotoğrafları ve Videoları"],
    assessment: "Kavram haritası doldurma, Süreç odaklı çalışma yaprağı.",
    specialDaysAndNotes: "Öğrencilerden dedelerinin dönemindeki teknolojilerle bugünü kıyaslayan mini röportaj istenir."
  },
  {
    week: 3,
    semester: 1,
    dates: "22 - 26 Eylül 2026",
    hours: 2,
    themeId: 1,
    themeTitle: "Bilişim Teknolojileri",
    topic: "Donanım Bileşenleri: Kasanın İçi (Dahili Donanım)",
    outcomes: [
      "BTY.5.1.5. Bilgisayar kasası içindeki temel donanım birimlerini tanır ve görevlerini açıklar.",
      "BTY.5.1.6. Anakart, işlemci (CPU), RAM bellek ve sabit disk (HDD/SSD) ilişkisini modelleştirir."
    ],
    methods: ["Gösterip Yaptırma", "Model/Parça İnceleme", "Benzetim (Metafor) Yöntemi"],
    toolsAndTech: ["Açık Bilgisayar Kasası / Gerçek Parçalar", "İnteraktif Donanım Simülatörü"],
    assessment: "Parça eşleştirme etkinliği, Öğrenci gözlem formu.",
    specialDaysAndNotes: "İnsan vücudu - bilgisayar donanımı analojisi yapılır (İşlemci = Beyin, Anakart = İskelet vb.)."
  },
  {
    week: 4,
    semester: 1,
    dates: "29 Eylül - 03 Ekim 2026",
    hours: 2,
    themeId: 1,
    themeTitle: "Bilişim Teknolojileri",
    topic: "Donanım Bileşenleri: Harici Birimler (Giriş/Çıkış) ve Bağlantı Noktaları",
    outcomes: [
      "BTY.5.1.7. Giriş ve çıkış birimlerini ayırt eder.",
      "BTY.5.1.8. Donanım aygıtlarının doğru bağlantı noktalarına (USB, HDMI, Ses vb.) takılmasını uygular."
    ],
    methods: ["Uygulamalı Laboratuvar Çalışması", "Problem Senaryoları", "Soru-Cevap"],
    toolsAndTech: ["Giriş-Çıkış Aygıtları (Klavye, Fare, Yazıcı, Tarayıcı, Kulaklık)", "Bağlantı Kabloları"],
    assessment: "Uygulama kontrol listesi (Port eşleştirme), Akran kontrolü.",
    specialDaysAndNotes: "Depolama birimleri (Flash bellek, harici disk) güvenli çıkarılma pratiği yapılır."
  },
  {
    week: 5,
    semester: 1,
    dates: "06 - 10 Ekim 2026",
    hours: 2,
    themeId: 1,
    themeTitle: "Bilişim Teknolojileri",
    topic: "Yazılım Kavramı ve İşletim Sistemleri (Pardus, Masaüstü ve Mobil)",
    outcomes: [
      "BTY.5.1.9. Donanım ve yazılım arasındaki ilişkiyi açıklar.",
      "BTY.5.1.10. İşletim sisteminin temel işlevlerini ve açık kaynak kodlu yerli işletim sistemi Pardus'u tanır."
    ],
    methods: ["Karşılaştırmalı İnceleme", "Arayüz Gezintisi", "Doğrudan Öğretim"],
    toolsAndTech: ["Pardus GNU/Linux İşletim Sistemi", "Masaüstü ve Mobil Arayüz Örnekleri"],
    assessment: "Tanılayıcı dallanmış ağaç testi, Sözlü geri bildirim.",
    specialDaysAndNotes: "Kodlama Haftası (CodeWeek) başlangıcı. Yerli ve milli teknoloji hamlesi vurgulanır."
  },
  {
    week: 6,
    semester: 1,
    dates: "13 - 17 Ekim 2026",
    hours: 2,
    themeId: 1,
    themeTitle: "Bilişim Teknolojileri",
    topic: "Ergonomi, Sağlık ve Klavye/Fare Becerileri",
    outcomes: [
      "BTY.5.1.11. Bilişim araçlarını kullanırken doğru oturma duruşunu ve ergonomi kurallarını uygular.",
      "BTY.5.1.12. On parmak klavye ve fare kullanım tekniklerinde temel becerileri geliştirir."
    ],
    methods: ["Canlandırma / Rol Oynama", "Klavye Hız ve Doğruluk Alıştırmaları"],
    toolsAndTech: ["Ergonomik Sandalye/Masa Düzeni", "Eğitsel Klavye Çalışma Yazılımı / EBA"],
    assessment: "Ergonomi kontrol listesi, Klavye doğruluk takip formu.",
    specialDaysAndNotes: "Göz sağlığı ve 20-20-20 kuralı (Her 20 dakikada 20 saniye uzağa bakma) öğretilir."
  },
  {
    week: 7,
    semester: 1,
    dates: "20 - 24 Ekim 2026",
    hours: 2,
    themeId: 1,
    themeTitle: "Bilişim Teknolojileri",
    topic: "Temel Sorun Giderme, Bakım ve Tema Sonu Değerlendirmesi",
    outcomes: [
      "BTY.5.1.13. Bilgisayarda karşılaşılan basit donanımsal ve yazılımsal problemleri tespit ederek çözüm üretir.",
      "BTY.5.1.14. 1. Tema öğrenmelerini bütünsel olarak yapılandırır."
    ],
    methods: ["Sorun Çözme Simülasyonu", "Örnek Olay", "İstasyon Tekniği"],
    toolsAndTech: ["Arıza Senaryoları Kartları", "Bilişim Laboratuvarı"],
    assessment: "1. Tema Süreç Değerlendirme Testi, Performans görevi rubriği.",
    specialDaysAndNotes: "29 Ekim Cumhuriyet Bayramı hazırlıkları: Bilişimde bağımsızlık ve millî teknoloji teması işlenir."
  },

  // 2. TEMA (Hafta 8 - 13: 12 Saat)
  {
    week: 8,
    semester: 1,
    dates: "03 - 07 Kasım 2026",
    hours: 2,
    themeId: 2,
    themeTitle: "Dijital Ürün Tasarımı",
    topic: "Görsel Düzenleme Araçlarına Giriş ve Arayüz Tanıma",
    outcomes: [
      "BTY.5.2.1. Görsel düzenleme programlarının temel arayüz bileşenlerini tanır.",
      "BTY.5.2.2. Dijital görsellerde çözünürlük, en-boy oranı ve dosya formatlarını (JPG, PNG) ayırt eder."
    ],
    methods: ["Gösterip Yaptırma", "Gözlem", "Rehberli Uygulama"],
    toolsAndTech: ["Pardus Görsel Düzenleyici / Çevrim İçi Görsel Araçları", "Örnek Görseller"],
    assessment: "Arayüz tanıma çalışma kağıdı, Başlangıç uygulama kontrolü.",
    specialDaysAndNotes: "1. Dönem Ara Tatili öncesi. 10 Kasım Atatürk'ü Anma Günü için görsel seçimi yapılır."
  },
  {
    week: 9,
    semester: 1,
    dates: "17 - 21 Kasım 2026",
    hours: 2,
    themeId: 2,
    themeTitle: "Dijital Ürün Tasarımı",
    topic: "Görsellerde Katman (Layer) Mantığı ve Temel Düzenlemeler",
    outcomes: [
      "BTY.5.2.3. Katman mantığını kavrayarak çok katmanlı görsel kompozisyonlar oluşturur.",
      "BTY.5.2.4. Kırpma, döndürme, renk tonu ve seçim araçlarını amaca uygun kullanır."
    ],
    methods: ["Uygulamalı Atölye", "Bireysel Proje Geliştirme", "Akran Eğitimi"],
    toolsAndTech: ["Görsel Düzenleme Programı", "Şeffaf Katmanlar ve Örnek Arka Planlar"],
    assessment: "Katman oluşturma kontrol listesi, Süreç değerlendirme rubriği.",
    specialDaysAndNotes: "Ara Tatil dönüşü ilk hafta. 24 Kasım Öğretmenler Günü için tebrik kartı çalışması başlatılır."
  },
  {
    week: 10,
    semester: 1,
    dates: "24 - 28 Kasım 2026",
    hours: 2,
    themeId: 2,
    themeTitle: "Dijital Ürün Tasarımı",
    topic: "Özgün Dijital Afiş Tasarımı (Tipografi ve Görsel Uyumu)",
    outcomes: [
      "BTY.5.2.5. Belirli bir tema doğrultusunda estetik ve özgün afiş tasarlar.",
      "BTY.5.2.6. Yazı tipi, renk paleti ve görsel yerleşiminde görsel hiyerarşi kurallarına dikkat eder."
    ],
    methods: ["Proje Tabanlı Öğrenme", "Tasarım Atölyesi", "Galeri Yürüyüşü"],
    toolsAndTech: ["Grafik Tasarım Yazılımı / Web2.0 Tasarım Aracı", "Etkileşimli Tahta"],
    assessment: "Dijital Ürün Tasarımı Dereceli Puanlama Anahtarı (Rubrik).",
    specialDaysAndNotes: "24 Kasım Öğretmenler Günü haftası: 'Geleceğin Öğretmeni ve Bilişim' afiş çalışması sergilenir."
  },
  {
    week: 11,
    semester: 1,
    dates: "01 - 05 Aralık 2026",
    hours: 2,
    themeId: 2,
    themeTitle: "Dijital Ürün Tasarımı",
    topic: "Kelime İşlemci Programları: Belge Oluşturma ve Metin Biçimlendirme",
    outcomes: [
      "BTY.5.2.7. Kelime işlemci programında yeni belge oluşturur, kaydeder ve açar.",
      "BTY.5.2.8. Metinleri biçimlendirir (yazı tipi boyutu, renk, kalın, eğik, paragraf hizalama)."
    ],
    methods: ["Uygulamalı Laboratuvar", "Adım Adım Yönerge Takibi"],
    toolsAndTech: ["LibreOffice Writer / Kelime İşlemci Programı", "Uygulama Metin Dosyası"],
    assessment: "Biçimlendirme kontrol listesi, Bireysel uygulama çıktısı.",
    specialDaysAndNotes: "Klavye kısayolları (Ctrl+C, Ctrl+V, Ctrl+S vb.) aktif kullanılır."
  },
  {
    week: 12,
    semester: 1,
    dates: "08 - 12 Aralık 2026",
    hours: 2,
    themeId: 2,
    themeTitle: "Dijital Ürün Tasarımı",
    topic: "Kelime İşlemcide Tablo, Liste ve Görsel Yerleşimi",
    outcomes: [
      "BTY.5.2.9. Belge içerisine tablo ekler, hücreleri birleştirir ve biçimlendirir.",
      "BTY.5.2.10. Metinle uyumlu görsel ve şekil ekleyerek sayfa düzenini optimize eder."
    ],
    methods: ["Problem Çözme", "Uygulama Görevi"],
    toolsAndTech: ["Kelime İşlemci Programı", "Ders Programı ve Kulüp Bilgi Şablonları"],
    assessment: "Uygulama ürün dosyası incelemesi, Öz değerlendirme formu.",
    specialDaysAndNotes: "Haftalık ders programı veya kulüp bülteni hazırlama etkinliği yapılır."
  },
  {
    week: 13,
    semester: 1,
    dates: "15 - 19 Aralık 2026",
    hours: 2,
    themeId: 2,
    themeTitle: "Dijital Ürün Tasarımı",
    topic: "Entegre Dijital Ürün Sunumu ve 2. Tema Değerlendirmesi",
    outcomes: [
      "BTY.5.2.11. Görsel ve metin bileşenlerini birleştirerek çoklu ortam bülteni üretir.",
      "BTY.5.2.12. Ürettiği dijital ürünü etik ve telif kurallarına uygun biçimde dışa aktarır (PDF/Yazdır)."
    ],
    methods: ["Sunum", "Akran Değerlendirme", "Bütünleştirici Proje"],
    toolsAndTech: ["Bilişim Laboratuvarı", "Yazıcı / Dijital Pano"],
    assessment: "Akran değerlendirme ölçeği, 2. Tema portfolyo puanlaması.",
    specialDaysAndNotes: "Üretilen bültenler okul web sitesinde veya okul koridor panosunda paylaşılır."
  },

  // 3. TEMA (Hafta 14 - 16: 6 Saat)
  {
    week: 14,
    semester: 1,
    dates: "22 - 26 Aralık 2026",
    hours: 2,
    themeId: 3,
    themeTitle: "Ağlar ve İletişim",
    topic: "Bilgisayar Ağları: Yerel Alan Ağı (LAN) ve Geniş Alan Ağı (WAN)",
    outcomes: [
      "BTY.5.3.1. Bilgisayar ağı kavramını ve oluşturulma amaçlarını açıklar.",
      "BTY.5.3.2. Yerel Alan Ağı (LAN) ile Geniş Alan Ağı (WAN) arasındaki farkları örneklerle açıklar."
    ],
    methods: ["Ağ Simülasyonu", "Fiziksel Canlandırma Oyunu", "Görsel Anlatım"],
    toolsAndTech: ["Bilişim Sınıfı Ağ Cihazları (Modem, Switch/Anahtar, Kablo)", "Ağ Şeması"],
    assessment: "Ağ türleri eşleştirme testi, Çalışma yaprağı.",
    specialDaysAndNotes: "Öğrenciler aralarında ip yumaklarıyla sembolik ağ kurarak veri iletimini canlandırır."
  },
  {
    week: 15,
    semester: 1,
    dates: "29 Aralık 2026 - 02 Ocak 2027",
    hours: 2,
    themeId: 3,
    themeTitle: "Ağlar ve İletişim",
    topic: "İnternet Nasıl Çalışır? Sunucular, Web Siteleri ve Alan Adları",
    outcomes: [
      "BTY.5.3.3. İnternetin çalışma prensibini, sunucu ve istemci kavramlarını açıklar.",
      "BTY.5.3.4. URL ve alan adı uzantılarının (.gov, .edu, .org, .k12.tr) anlamlarını ve güvenilirliklerini sorgular."
    ],
    methods: ["İnceleme-Araştırma", "Örnek Olay", "Soru-Cevap"],
    toolsAndTech: ["İnternet Tarayıcısı", "Güvenilir Web Siteleri Veritabanı"],
    assessment: "URL analiz formu, Kavram bulmacası.",
    specialDaysAndNotes: "Resmi devlet siteleri (.gov.tr) ve eğitim kurumları (.edu / .k12.tr) güvenilirlik analizi yapılır."
  },
  {
    week: 16,
    semester: 1,
    dates: "05 - 09 Ocak 2027",
    hours: 2,
    themeId: 3,
    themeTitle: "Ağlar ve İletişim",
    topic: "Dijital İletişim Araçları ve Çevrim İçi İş Birliği (1. Dönem Kapanışı)",
    outcomes: [
      "BTY.5.3.5. E-posta ve dijital iletişim araçlarını nezaket kurallarına (netiket) uygun kullanır.",
      "BTY.5.3.6. Bulut depolama ve çevrim içi iş birliği araçlarıyla güvenli dosya paylaşımı yapar."
    ],
    methods: ["Uygulamalı Görev", "Örnek E-posta Yazımı", "Grup Çalışması"],
    toolsAndTech: ["MEB E-posta Simülatörü / EBA Portali", "Ortak Belge Düzenleme"],
    assessment: "1. Dönem genel süreç değerlendirme rubriği, E-posta yazım kontrol listesi.",
    specialDaysAndNotes: "1. Dönem sonu: Dönem boyunca yapılan projelerin portfolyoda toplanması ve yarıyıl tatili rehberliği."
  },

  // 4. TEMA (Hafta 17 - 20: 8 Saat - 2. Dönem Başlangıcı)
  {
    week: 17,
    semester: 2,
    dates: "09 - 13 Şubat 2027",
    hours: 2,
    themeId: 4,
    themeTitle: "Bilişim Etiği ve Güvenlik",
    topic: "Dijital Kimlik ve Dijital Ayak İzi (Güvenli İnternet Günü)",
    outcomes: [
      "BTY.5.4.1. Dijital ayak izi kavramını açıklar ve geride bıraktığı izlerin kalıcılığını fark eder.",
      "BTY.5.4.2. Çevrim içi ortamlarda kişisel kimliğini ve mahremiyetini koruma stratejileri geliştirir."
    ],
    methods: ["Örnek Olay Analizi", "Görsel Hikâyeleştirme", "Büyük Grup Tartışması"],
    toolsAndTech: ["Güvenli İnternet Günü (SID) Eğitim Materyalleri", "Eğitsel Kısa Animasyonlar"],
    assessment: "Dijital ayak izi dedektifi çalışma yaprağı, Açık uçlu değerlendirme.",
    specialDaysAndNotes: "Dünya Güvenli İnternet Günü (Safer Internet Day - SID) etkinlikleri gerçekleştirilir."
  },
  {
    week: 18,
    semester: 2,
    dates: "16 - 20 Şubat 2027",
    hours: 2,
    themeId: 4,
    themeTitle: "Bilişim Etiği ve Güvenlik",
    topic: "Güçlü Parola Oluşturma ve Hesap Güvenliği",
    outcomes: [
      "BTY.5.4.3. Tahmin edilmesi zor, güçlü parola kriterlerini açıklar ve özgün parola üretir.",
      "BTY.5.4.4. Parolaların gizli tutulması ve iki faktörlü kimlik doğrulamanın önemini gerekçelendirir."
    ],
    methods: ["Parola Laboratuvarı", "Kriptoloji / Şifreleme Oyunu", "İstasyon Tekniği"],
    toolsAndTech: ["Eğitsel Parola Gücü Ölçüm Yazılımı", "Kripto Kartları"],
    assessment: "Parola güvenliği kontrol listesi, Akran geri bildirimi.",
    specialDaysAndNotes: "Kişisel parolaların kimseyle paylaşılmaması gerektiği, ailenin rehberliği vurgulanır."
  },
  {
    week: 19,
    semester: 2,
    dates: "23 - 27 Şubat 2027",
    hours: 2,
    themeId: 4,
    themeTitle: "Bilişim Etiği ve Güvenlik",
    topic: "Kişisel Verilerin Korunması (KVKK) ve Çevrim İçi Tehditler",
    outcomes: [
      "BTY.5.4.5. Kişisel veri kavramını tanımlar ve hangi bilgilerin kişisel veri olduğunu açıklar.",
      "BTY.5.4.6. Zararlı yazılımlar (virüs, truva atı, fidye yazılımı) ve oltalama (phishing) tuzaklarına karşı tedbir alır."
    ],
    methods: ["Vaka İnceleme", "Doğru-Yanlış İstasyonu", "Rol Oynama"],
    toolsAndTech: ["KVKK Eğitsel Karikatürleri", "Örnek Oltalama E-postaları İnceleme Panosu"],
    assessment: "Vaka analiz formu, Bilgi güvenliği test kağıdı.",
    specialDaysAndNotes: "Kişisel Verileri Koruma Günü farkındalığı; TC kimlik, telefon, adres paylaşımının riskleri işlenir."
  },
  {
    week: 20,
    semester: 2,
    dates: "02 - 06 Mart 2027",
    hours: 2,
    themeId: 4,
    themeTitle: "Bilişim Etiği ve Güvenlik",
    topic: "Siber Zorbalık, Telif Hakları ve Bilişim Etiği",
    outcomes: [
      "BTY.5.4.7. Siber zorbalık davranışlarını tanır, maruz kaldığında veya tanık olduğunda izleyeceği adımları belirler.",
      "BTY.5.4.8. Fikri mülkiyet, telif hakkı ve açık lisanslı (Creative Commons) içerik kullanım kurallarına uyar."
    ],
    methods: ["Dilemma / İkilem Senaryoları", "Çözüm Odaklı Drama", "Grup Bildirgesi"],
    toolsAndTech: ["Etik Senaryo Kartları", "Siber Zorbalıkla Mücadele Rehberi"],
    assessment: "Bilişim Etiği Tutum Ölçeği, Süreç değerlendirme formu.",
    specialDaysAndNotes: "Bilim ve Teknoloji Haftası hazırlığı. 'Siber Zorba Olma, Akranına Destek Ol' sınıf manifestosu hazırlanır."
  },

  // 5. TEMA (Hafta 21 - 24: 8 Saat - Yapay Zekâ)
  {
    week: 21,
    semester: 2,
    dates: "09 - 13 Mart 2027",
    hours: 2,
    themeId: 5,
    themeTitle: "Yapay Zekâ",
    topic: "Yapay Zekâ Nedir? Doğal Zekâ ile Yapay Zekâ Karşılaştırması",
    outcomes: [
      "BTY.5.5.1. Yapay zekâ kavramını ve temel çalışma prensibini açıklar.",
      "BTY.5.5.2. İnsan zekâsı ile yapay zekâ arasındaki benzerlik ve farkları analiz eder."
    ],
    methods: ["Buluş Yoluyla Öğretim", "Turing Testi Simülasyonu", "Soru-Cevap"],
    toolsAndTech: ["Eğitsel Yapay Zekâ Tanıtım Videoları", "Karşılaştırma Tabloları"],
    assessment: "Venn şeması (İnsan Zekâsı vs Yapay Zekâ), Sözlü değerlendirme.",
    specialDaysAndNotes: "Bilim ve Teknoloji Haftası. Geleceğin akıllı teknolojileri üzerine beyin fırtınası yapılır."
  },
  {
    week: 22,
    semester: 2,
    dates: "16 - 20 Mart 2027",
    hours: 2,
    themeId: 5,
    themeTitle: "Yapay Zekâ",
    topic: "Günlük Hayattaki Yapay Zekâ ve Makine Öğrenmesi Mantığı",
    outcomes: [
      "BTY.5.5.3. Çevresinde kullanılan yapay zekâ uygulamalarını (navigasyon, öneri sistemleri, görüntü tanıma) listeler.",
      "BTY.5.5.4. Bilgisayarların verilerden nasıl öğrendiğini (makine öğrenmesi) basit deneylerle kavrar."
    ],
    methods: ["Deney ve Keşif", "Görsel Nesne Tanıma Atölyesi", "Örnek Olay"],
    toolsAndTech: ["Teachable Machine / Eğitsel Makine Öğrenmesi Aracı", "Web Kamerası"],
    assessment: "Deney gözlem kağıdı, Öğrenci katılım formu.",
    specialDaysAndNotes: "Sınıf içi nesneleri (kalem, defter, elma) tanıyan basit bir sınıflandırma modeli eğitilir."
  },
  {
    week: 23,
    semester: 2,
    dates: "23 - 27 Mart 2027",
    hours: 2,
    themeId: 5,
    themeTitle: "Yapay Zekâ",
    topic: "İstem (Prompt) Yazımı Temelleri: Yapay Zekâ ile Doğru İletişim",
    outcomes: [
      "BTY.5.5.5. Yapay zekâ modellerine net, açık ve amaca uygun komutlar (istem/prompt) yazar.",
      "BTY.5.5.6. Eksik veya hatalı istemleri iyileştirerek daha kaliteli çıktılar elde eder."
    ],
    methods: ["Uygulamalı Prompt Atölyesi", "Karşılaştırmalı Deneme", "Adım Adım Geri Bildirim"],
    toolsAndTech: ["MEB Onaylı / Eğitsel Prompt Simülatörü", "İstem Tasarım Şablonları"],
    assessment: "İstem Yazma ve Çıktı Değerlendirme Rubriği, Akran incelemesi.",
    specialDaysAndNotes: "Rol-Görev-Bağlam (RGB) kuralı ile 5. sınıf seviyesinde hikâye ve görsel promptu kurgulanır."
  },
  {
    week: 24,
    semester: 2,
    dates: "30 Mart - 03 Nisan 2027",
    hours: 2,
    themeId: 5,
    themeTitle: "Yapay Zekâ",
    topic: "Yapay Zekânın Etik, Toplumsal Etkileri ve Geleceğin Meslekleri",
    outcomes: [
      "BTY.5.5.7. Yapay zekânın karar alma süreçlerindeki önyargı ve doğruluk payını sorgular.",
      "BTY.5.5.8. Yapay zekâ çağında erdemli insan, sorumluluk ve mesleki dönüşüm üzerine çıkarım yapar."
    ],
    methods: ["Münazara / Forum", "Senaryo Analizi", "Felsefi Soruşturma (P4C)"],
    toolsAndTech: ["Etik İkilem Videoları", "Geleceğin Meslekleri Görsel Kartları"],
    assessment: "5. Tema Değerlendirme Formu, Öz yansıtma günlüğü.",
    specialDaysAndNotes: "2. Dönem Ara Tatili öncesi. 'Yapay Zekâ Benim Yerime Ödevimi Yapmalı mı?' tartışması açılır."
  },

  // 6. TEMA (Hafta 25 - 36: 24 Saat - Programlama ve Problem Çözme)
  {
    week: 25,
    semester: 2,
    dates: "13 - 17 Nisan 2027",
    hours: 2,
    themeId: 6,
    themeTitle: "Programlama ve Problem Çözme",
    topic: "Problem Çözme Adımları ve Problemi Alt Parçalara Ayırma (Ayrıştırma)",
    outcomes: [
      "BTY.5.6.1. Bir problemi çözmek için gerekli adımları sıralar.",
      "BTY.5.6.2. Karmaşık bir problemi yönetilebilir küçük alt parçalara (ayrıştırma/dekompozisyon) ayırır."
    ],
    methods: ["Problem Temelli Öğrenme", "Beyin Fırtınası", "Kart Eşleştirme"],
    toolsAndTech: ["Problem Senaryoları", "Zihin Haritası Uygulaması"],
    assessment: "Problem ayrıştırma çalışma kağıdı, Grup değerlendirme formu.",
    specialDaysAndNotes: "Ara Tatil dönüşü ilk hafta. 23 Nisan Ulusal Egemenlik ve Çocuk Bayramı kutlama hazırlıkları."
  },
  {
    week: 26,
    semester: 2,
    dates: "20 - 24 Nisan 2027",
    hours: 2,
    themeId: 6,
    themeTitle: "Programlama ve Problem Çözme",
    topic: "Algoritma Kavramı, Günlük Hayat Algoritmaları ve Akış Şemaları",
    outcomes: [
      "BTY.5.6.3. Algoritma kavramını açıklar ve günlük hayattan adım adım çözüm süreçleri yazar.",
      "BTY.5.6.4. Temel akış şeması sembollerini (Başla/Dur, Girdi/Çıktı, İşlem, Karar) kullanarak algoritmayı görselleştirir."
    ],
    methods: ["Akış Şeması Çizimi", "Robot Öğretmen Canlandırması", "Akran Kontrolü"],
    toolsAndTech: ["Akış Şeması Kartları", "Çevrim İçi Şema Çizim Aracı / Tahta"],
    assessment: "Akış şeması oluşturma rubriği, Süreç odaklı kontrol listesi.",
    specialDaysAndNotes: "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı. 'Çocuk Bayramı Tören Algoritması' hazırlanır."
  },
  {
    week: 27,
    semester: 2,
    dates: "27 Nisan - 01 Mayıs 2027",
    hours: 2,
    themeId: 6,
    themeTitle: "Programlama ve Problem Çözme",
    topic: "Blok Tabanlı Programlama Ortamına Giriş (Scratch / mBlock Arayüzü)",
    outcomes: [
      "BTY.5.6.5. Blok tabanlı kodlama aracının arayüzünü (sahne, kukla, kod blokları, kostümler) tanır.",
      "BTY.5.6.6. Sahneye yeni dekor ve kukla ekleyerek özelliklerini değiştirir."
    ],
    methods: ["Gösterip Yaptırma", "Rehberli Uygulama", "Serbest Keşif"],
    toolsAndTech: ["Blok Tabanlı Kodlama Yazılımı (Scratch / mBlock / EBA Kodlama)", "Projeler"],
    assessment: "Arayüz tanıma testi, Uygulama gözlem formu.",
    specialDaysAndNotes: "Öğrenciler kendi avatarlarını veya hayvan kuklalarını oluşturup sahnede konumlandırır."
  },
  {
    week: 28,
    semester: 2,
    dates: "04 - 08 Mayıs 2027",
    hours: 2,
    themeId: 6,
    themeTitle: "Programlama ve Problem Çözme",
    topic: "Olaylar ve Hareket Blokları ile İlk Animasyon",
    outcomes: [
      "BTY.5.6.7. Programın başlama olaylarını (Yeşil bayrağa tıklandığında, tuşa basıldığında) yapılandırır.",
      "BTY.5.6.8. Kuklanın koordinat sisteminde (X, Y) hareket etmesini ve yön değiştirmesini sağlar."
    ],
    methods: ["Uygulamalı Kodlama", "Hata Arama (Böcek Avı)", "Küçük Grup Projesi"],
    toolsAndTech: ["Blok Kodlama Platformu", "Koordinat Düzlemi Sahnesi"],
    assessment: "Hareket blokları kontrol listesi, Bireysel kod analizi.",
    specialDaysAndNotes: "Klavyedeki yön tuşları ile kuklayı hareket ettirme etkinliği uygulanır."
  },
  {
    week: 29,
    semester: 2,
    dates: "11 - 15 Mayıs 2027",
    hours: 2,
    themeId: 6,
    themeTitle: "Programlama ve Problem Çözme",
    topic: "Görünüm ve Ses Blokları ile Etkileşimli Hikâye Tasarımı",
    outcomes: [
      "BTY.5.6.9. Kostüm değiştirme ve konuşma balonları ile kuklalar arası diyalog kurar.",
      "BTY.5.6.10. Sahneye uygun ses efektleri ve fon müzikleri ekleyerek multimedya hikâye üretir."
    ],
    methods: ["Hikâyeleştirme (Storytelling)", "Tasarım Atölyesi", "Akran Değerlendirme"],
    toolsAndTech: ["Ses Kayıt Aracı", "Kukla Kostüm Editörü", "Blok Kodlama Ortamı"],
    assessment: "Etkileşimli hikâye rubriği, Akran geri bildirim formu.",
    specialDaysAndNotes: "19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı: 'Bandırma Vapuru Yolculuğu' animasyonu."
  },
  {
    week: 30,
    semester: 2,
    dates: "18 - 22 Mayıs 2027",
    hours: 2,
    themeId: 6,
    themeTitle: "Programlama ve Problem Çözme",
    topic: "Kontrol Yapıları: Döngüler (Sürekli Tekrar ve Belirli Sayıda Tekrar)",
    outcomes: [
      "BTY.5.6.11. Kodların tekrarlanması gereken durumlarda döngü bloklarını (10 defa tekrarla, sürekli) kullanır.",
      "BTY.5.6.12. Döngülerin kod verimliliği ve zaman tasarrufundaki önemini fark eder."
    ],
    methods: ["Algoritmik Karşılaştırma", "Problem Çözme Görevleri", "Kod İyileştirme"],
    toolsAndTech: ["Blok Kodlama Platformu", "Geometrik Şekil Çizdirme Blokları (Kalem Eklentisi)"],
    assessment: "Döngü blokları performans rubriği, Kod optimizasyonu değerlendirmesi.",
    specialDaysAndNotes: "19 Mayıs haftası. Kare, üçgen ve çokgen çizdiren döngü algoritmaları kodlanır."
  },
  {
    week: 31,
    semester: 2,
    dates: "25 - 29 Mayıs 2027",
    hours: 2,
    themeId: 6,
    themeTitle: "Programlama ve Problem Çözme",
    topic: "Kontrol Yapıları: Koşullu Durumlar (Eğer - İse, Algılama Blokları)",
    outcomes: [
      "BTY.5.6.13. Karar anlarını kodlamak için koşul bloklarını (eğer ... ise, eğer ... ise değilse) kullanır.",
      "BTY.5.6.14. Algılama blokları (rengine dokunuyor mu, fareye değdi mi) ile ortam etkileşimi kurar."
    ],
    methods: ["Örnek Olay Kodlaması", "Labirent Oyunu Tasarımı", "Rehberli Uygulama"],
    toolsAndTech: ["Labirent Sahne Şablonu", "Algılama Kod Blokları"],
    assessment: "Koşul yapıları kontrol listesi, Labirent görevi kontrolü.",
    specialDaysAndNotes: "Kuklanın labirent duvarına çarptığında başa dönmesi algoritması kurulur."
  },
  {
    week: 32,
    semester: 2,
    dates: "01 - 05 Haziran 2027",
    hours: 2,
    themeId: 6,
    themeTitle: "Programlama ve Problem Çözme",
    topic: "Değişkenler: Puan, Can, Zaman ve Sayaç Mantığı",
    outcomes: [
      "BTY.5.6.15. Programda değişen değerleri tutmak için değişken oluşturur ve değer atar.",
      "BTY.5.6.16. Oyun veya simülasyonda puan artırma, can azaltma ve süre geri sayımı kurgular."
    ],
    methods: ["Oyun Tabanlı Öğrenme", "Uygulamalı Kodlama", "Hata Ayıklama"],
    toolsAndTech: ["Değişken Blokları", "Gökten Düşen Nesneleri Yakalama Oyun Projesi"],
    assessment: "Değişken kullanımı uygulama ölçeği, Anlık gözlem formu.",
    specialDaysAndNotes: "Öğrenciler kendi belirledikleri bir meyve veya yıldız yakalama oyunu geliştirir."
  },
  {
    week: 33,
    semester: 2,
    dates: "08 - 12 Haziran 2027",
    hours: 2,
    themeId: 6,
    themeTitle: "Programlama ve Problem Çözme",
    topic: "Kapsamlı Oyun Tasarımı ve Hata Ayıklama (Debugging)",
    outcomes: [
      "BTY.5.6.17. Döngü, koşul, değişken ve olay bloklarını birleştirerek çalışan bir 2D oyun kurgular.",
      "BTY.5.6.18. Kodlarda oluşan mantıksal hataları (bug) tespit eder ve sistematik olarak düzeltir."
    ],
    methods: ["Proje Tabanlı Öğrenme", "Böcek Avcısı (Debugging Challenge)", "Takım Çalışması"],
    toolsAndTech: ["Hatalı Kod Örnekleri Şablonu", "Bilişim Sınıfı Laboratuvarı"],
    assessment: "Hata ayıklama performans kartı, Blok Kodlama Rubriği (Ara Değerlendirme).",
    specialDaysAndNotes: "Öğrencilere bilerek bozulmuş kodlar verilir ve en hızlı düzelten gruplar ödüllendirilir."
  },
  {
    week: 34,
    semester: 2,
    dates: "15 - 19 Haziran 2027",
    hours: 2,
    themeId: 6,
    themeTitle: "Programlama ve Problem Çözme",
    topic: "Özgün Blok Kodlama Projesi Geliştirme Çalışmaları (Takım / Bireysel)",
    outcomes: [
      "BTY.5.6.19. Toplumsal bir probleme veya eğitim ihtiyacına yönelik özgün bir kodlama projesi planlar.",
      "BTY.5.6.20. Proje tasarımını adımlar halinde geliştirerek test eder."
    ],
    methods: ["Tasarım Odaklı Düşünme", "Proje Atölyesi", "Öğretmen Danışmanlığı"],
    toolsAndTech: ["Proje Planlama Formu", "Scratch / mBlock Geliştirme Ortamı"],
    assessment: "Proje Geliştirme Süreç Takip Formu, Öğrenci öz değerlendirme anketi.",
    specialDaysAndNotes: "Çevre kirliliği, trafik güvenliği veya sağlıklı beslenme temalı eğitsel oyunlar seçilir."
  },
  {
    week: 35,
    semester: 2,
    dates: "22 - 26 Haziran 2027",
    hours: 2,
    themeId: 6,
    themeTitle: "Programlama ve Problem Çözme",
    topic: "Proje Tamamlama, Dokümantasyon ve Dijital Portfolyo",
    outcomes: [
      "BTY.5.6.21. Geliştirdiği projenin kullanım kılavuzunu ve kurallarını hazırlar.",
      "BTY.5.6.22. Dijital ürününü web ortamında paylaşılabilir formata getirir ve arşivler."
    ],
    methods: ["Atölye Tamamlama", "Belgelendirme", "İç Akran İncelemesi"],
    toolsAndTech: ["Proje Arşivi / EBA Portfolyo", "Tanıtım Kartı Şablonu"],
    assessment: "Nihai Blok Tabanlı Kodlama Projesi Dereceli Puanlama Anahtarı.",
    specialDaysAndNotes: "Projelerin test aşaması tamamlanır ve sunum hazırlığı yapılır."
  },
  {
    week: 36,
    semester: 2,
    dates: "29 Haziran - 02 Temmuz 2027",
    hours: 2,
    themeId: 6,
    themeTitle: "Programlama ve Problem Çözme",
    topic: "Bilişim ve Kodlama Şenliği: Proje Sergisi ve Yıl Sonu Maarif Değerlendirmesi",
    outcomes: [
      "BTY.5.6.23. Ürettiği kodlama projesini arkadaşlarına ve okul toplumuna etkili bir dille sunar.",
      "BTY.5.6.24. Yıl boyunca kazandığı bilişim becerilerini ve Maarif Modeli değerlerini (sorumluluk, estetik, azim) değerlendirir."
    ],
    methods: ["Bilişim Şenliği / Sergi", "Akran Değerlendirme", "Yıl Sonu Genel Değerlendirme"],
    toolsAndTech: ["Okul Sergi Alanı / Etkileşimli Tahtalar", "Katılım ve Başarı Belgeleri"],
    assessment: "Yıl Sonu Süreç Portfolyosu Bütüncül Değerlendirmesi, Akran değerlendirme formları.",
    specialDaysAndNotes: "Ders yılının tamamlanması. Öğrencilere 'Geleceğin Bilişimcisi' katılım belgeleri takdim edilir."
  }
];

export const RUBRICS_DATA: RubricTemplate[] = [
  {
    id: "rubric-coding",
    title: "Blok Tabanlı Kodlama Projesi Dereceli Puanlama Anahtarı",
    themeName: "6. Tema: Programlama ve Problem Çözme",
    purpose: "5. sınıf öğrencilerinin algoritma kurgulama, blok seçimleri, değişken yönetimi ve hata ayıklama yetkinliklerini süreç odaklı değerlendirmek için hazırlanmıştır.",
    maxScore: 100,
    criteria: [
      {
        id: "c1",
        name: "Algoritmik Mantık ve Problem Ayrıştırma",
        description: "Problemi alt adımlara bölme, başlangıç olayları ve mantıksal akışın tutarlılığı.",
        levels: [
          { score: 10, title: "Başlangıç (10 Puan)", description: "Algoritmada mantık hataları var; adımlar sıralanamamış, bloklar rastgele eklenmiş." },
          { score: 15, title: "Gelişmekte (15 Puan)", description: "Temel akış kurulmuş ancak bazı adımlarda takılmalar ve eksik yönergeler mevcut." },
          { score: 20, title: "Yeterli (20 Puan)", description: "Problem adımları doğru sıralanmış, program belirlenen hedefe sorunsuz ulaşıyor." },
          { score: 25, title: "İleri Düzey (25 Puan)", description: "Problem mükemmel ayrıştırılmış, modüler ve son derece akıcı bir algoritma kurgulanmış." }
        ]
      },
      {
        id: "c2",
        name: "Döngü ve Koşul Bloklarının Etkili Kullanımı",
        description: "Tekrarlı işlemler için döngülerin (sürekli, ... defa) ve karar yapıları (eğer/ise) algılama ile birleşimi.",
        levels: [
          { score: 10, title: "Başlangıç (10 Puan)", description: "Döngü veya koşul kullanılmamış, aynı kodlar gereksizce alt alta yinelenmiş." },
          { score: 15, title: "Gelişmekte (15 Puan)", description: "Döngü ve koşullar var ancak algılama bloklarıyla tam örtüşmüyor, eksikler var." },
          { score: 20, title: "Yeterli (20 Puan)", description: "Döngüler ve koşullu durumlar yerli yerinde ve doğru mantıkla çalışıyor." },
          { score: 25, title: "İleri Düzey (25 Puan)", description: "İç içe döngüler veya çoklu koşullar ustalıkla kullanılmış; kod optimizasyonu yüksek." }
        ]
      },
      {
        id: "c3",
        name: "Değişkenler ve Hata Ayıklama (Debugging)",
        description: "Puan, can, zaman değişkenlerinin doğru tanımlanması ve programdaki hataların giderilmiş olması.",
        levels: [
          { score: 10, title: "Başlangıç (10 Puan)", description: "Değişken tanımlanmamış ya da değer güncellemesi çalışmıyor; program sık sık kilitleniyor." },
          { score: 15, title: "Gelişmekte (15 Puan)", description: "Değişken tanımlanmış ancak sıfırlama veya artış kurgusunda küçük hatalar kalmış." },
          { score: 20, title: "Yeterli (20 Puan)", description: "Değişkenler oyun başında sıfırlanıyor ve amaca uygun değişiyor; belirgin hata kalmamış." },
          { score: 25, title: "İleri Düzey (25 Puan)", description: "Birden fazla dinamik değişken entegre edilmiş; sıfır hata ve kusursuz geri sayım/sayaç." }
        ]
      },
      {
        id: "c4",
        name: "Özgünlük, Tasarım ve Estetik",
        description: "Karakter (kukla), sahne, ses efektleri uyumu ve projenin özgün fikir içermesi.",
        levels: [
          { score: 10, title: "Başlangıç (10 Puan)", description: "Standart şablonlar değiştirilmeden bırakılmış; ses veya özgünlük bulunmuyor." },
          { score: 15, title: "Gelişmekte (15 Puan)", description: "Özgünleştirme denemeleri yapılmış ancak sahne ve kukla oranları uyumsuz." },
          { score: 20, title: "Yeterli (20 Puan)", description: "Uygun kostümler, ses efektleri ve kullanıcı yönergeleri eklenmiş, özgün proje." },
          { score: 25, title: "İleri Düzey (25 Puan)", description: "Grafik, müzik ve oyun senaryosu yüksek estetik değer taşıyor; ilham verici özgünlük." }
        ]
      }
    ]
  },
  {
    id: "rubric-digital-design",
    title: "Dijital Ürün Tasarımı (Afiş & Belge) Dereceli Puanlama Anahtarı",
    themeName: "2. Tema: Dijital Ürün Tasarımı",
    purpose: "Öğrencilerin kelime işlemci ve görsel düzenleme araçlarını kullanarak oluşturdukları afiş, broşür veya okul bülteni tasarımlarını değerlendirir.",
    maxScore: 100,
    criteria: [
      {
        id: "d1",
        name: "Görsel Hiyerarşi ve Düzen",
        description: "Başlık, metin ve görsellerin dengeli dağılımı, boşluk kullanımı.",
        levels: [
          { score: 10, title: "Geliştirilmeli (10 Puan)", description: "Sayfa düzensiz, elemanlar birbiri üzerine binmiş veya okunaksız." },
          { score: 15, title: "Orta (15 Puan)", description: "Temel düzen var ancak başlık ile gövde metni arasında vurgu farkı belirgin değil." },
          { score: 20, title: "İyi (20 Puan)", description: "Görsel ve metin dengesi sağlanmış; sayfa rahat takip ediliyor." },
          { score: 25, title: "Mükemmel (25 Puan)", description: "Profesyonel seviyede görsel hiyerarşi, kusursuz hizalama ve nefes alan boşluklar." }
        ]
      },
      {
        id: "d2",
        name: "Yazı Tipi (Tipografi) ve Renk Uyumu",
        description: "Okunaklı font seçimi, maksimum 2-3 yazı tipi kullanımı ve temaya uygun renk paleti.",
        levels: [
          { score: 10, title: "Geliştirilmeli (10 Puan)", description: "Çok fazla karmaşık yazı tipi ve kontrastı bozan göz yorucu renkler seçilmiş." },
          { score: 15, title: "Orta (15 Puan)", description: "Fontlar genel olarak okunuyor ancak arka plan ile kontrast zayıf kalmış." },
          { score: 20, title: "İyi (20 Puan)", description: "Uyumlu yazı tipleri ve dengeli bir renk paleti tercih edilmiş." },
          { score: 25, title: "Mükemmel (25 Puan)", description: "Tipografi ve renk uyumu temayla bütünleşmiş, estetik derinlik katıyor." }
        ]
      },
      {
        id: "d3",
        name: "Teknik Beceriler (Katman, Tablo, Kırpma)",
        description: "Görsel kırpma, şeffaf arka plan, katman sıralaması ve tablo düzeni teknikleri.",
        levels: [
          { score: 10, title: "Geliştirilmeli (10 Puan)", description: "Teknik araçlar kullanılmamış; görseller basık/esnetilmiş biçimde yerleştirilmiş." },
          { score: 15, title: "Orta (15 Puan)", description: "Katmanlar veya tablo oluşturulmuş ancak biçimlendirme hataları bulunuyor." },
          { score: 20, title: "İyi (20 Puan)", description: "Görseller orantılı boyutlandırılmış, katmanlar doğru sıralanmış, tablo düzenli." },
          { score: 25, title: "Mükemmel (25 Puan)", description: "Tüm teknik özellikler eksiksiz ve yaratıcı biçimde entegre edilmiş." }
        ]
      },
      {
        id: "d4",
        name: "İçerik Doğruluğu ve Telif Bilinci",
        description: "Metinlerdeki Türkçe yazım kuralları, konuya uygun mesaj ve kaynakça/telif saygısı.",
        levels: [
          { score: 10, title: "Geliştirilmeli (10 Puan)", description: "Yazım hataları yoğun, içerik konu dışı veya izinsiz kullanım mevcut." },
          { score: 15, title: "Orta (15 Puan)", description: "İçerik konuya uygun ancak birkaç imla hatası veya eksik bilgi var." },
          { score: 20, title: "İyi (20 Puan)", description: "Türkçe kurallarına uygun, net mesaj veren ve lisanslı görseller içeren çalışma." },
          { score: 25, title: "Mükemmel (25 Puan)", description: "Örnek bir anlatım dili, etkileyici mesaj ve kusursuz telif/etik duyarlılık." }
        ]
      }
    ]
  },
  {
    id: "rubric-ai-prompt",
    title: "Yapay Zekâ İstem (Prompt) ve Etik Değerlendirme Kontrol Listesi",
    themeName: "5. Tema: Yapay Zekâ",
    purpose: "5. sınıf öğrencilerinin yapay zekâya doğru yönlendirici istemler yazma, çıktıları eleştirel gözle sorgulama ve etik ilkeleri gözetme becerisini ölçer.",
    maxScore: 100,
    criteria: [
      {
        id: "ai1",
        name: "İstemde Rol ve Görev Tanımı (Netlik)",
        description: "Yapay zekâya 'sen kimsin' ve 'ne yapacaksın' bilgisinin açıkça verilmesi.",
        levels: [
          { score: 10, title: "Yetersiz (10 Puan)", description: "Tek kelimelik veya belirsiz komutlar (örn. sadece 'hikaye yaz')." },
          { score: 15, title: "Gelişmekte (15 Puan)", description: "Görev belirtilmiş ancak rol veya hedef eksik bırakılmış." },
          { score: 20, title: "Başarılı (20 Puan)", description: "Rol ve görev açıkça tanımlanmış (örn. 'Sen bir fen öğretmenisin, bana...')." },
          { score: 25, title: "Yetkin (25 Puan)", description: "Rol, somut görev ve beklenen ton son derece net ve yönlendirici." }
        ]
      },
      {
        id: "ai2",
        name: "Bağlam ve Kısıtlamalar Ekleme",
        description: "Hedef kitle, uzunluk, format (liste, tablo, paragraf) ve kısıtlama kuralları.",
        levels: [
          { score: 10, title: "Yetersiz (10 Puan)", description: "Hiçbir sınır veya biçim şartı konulmamış." },
          { score: 15, title: "Gelişmekte (15 Puan)", description: "Sadece uzunluk veya sadece format belirtilmiş." },
          { score: 20, title: "Başarılı (20 Puan)", description: "Hedef kitle (5. sınıf seviyesi) ve format açıkça kısıtlanmış." },
          { score: 25, title: "Yetkin (25 Puan)", description: "Kapsam, hariç tutulacaklar ve biçim kusursuz şekilde kurgulanmış." }
        ]
      },
      {
        id: "ai3",
        name: "Çıktıyı Eleştirel İnceleme ve Düzeltme",
        description: "Yapay zekânın verdiği cevabı sorgulama, bilgi kontrolü yapma ve istemi yineleme.",
        levels: [
          { score: 10, title: "Yetersiz (10 Puan)", description: "Çıktıyı hiç okumadan doğrudan doğru kabul etme." },
          { score: 15, title: "Gelişmekte (15 Puan)", description: "Çıktıyı okuyor ancak hatalı bilgileri fark etmekte zorlanıyor." },
          { score: 20, title: "Başarılı (20 Puan)", description: "Hatalı veya eksik noktaları tespit edip istemi revize ediyor." },
          { score: 25, title: "Yetkin (25 Puan)", description: "Çıktıyı güvenilir kaynaklarla teyit ediyor ve yinelemeli mükemmelleştiriyor." }
        ]
      },
      {
        id: "ai4",
        name: "Etik Farkındalık ve Dürüstlük",
        description: "Yapay zekâyı başkasının emeğini çalmak için değil, öğrenmeye yardımcı araç olarak kullanma bilinci.",
        levels: [
          { score: 10, title: "Yetersiz (10 Puan)", description: "Yapay zekâ çıktısını kendi üretimi gibi sunma eğiliminde." },
          { score: 15, title: "Gelişmekte (15 Puan)", description: "Etik kuralları biliyor ancak kullanım sınırlarını tam ayrıştıramıyor." },
          { score: 20, title: "Başarılı (20 Puan)", description: "Yapay zekâyı fikir alma ve öğrenme asistanı olarak kullandığını dürüstçe belirtiyor." },
          { score: 25, title: "Yetkin (25 Puan)", description: "Veri gizliliği, mahremiyet ve dürüstlük ilkelerini akranlarına da açıklıyor." }
        ]
      }
    ]
  }
];

export const CLASSROOM_ACTIVITIES: ClassroomActivity[] = [
  {
    id: "act-prompt-studio",
    themeId: 5,
    title: "5. Sınıf 'İstem Dedektifleri' Atölyesi",
    duration: "2 Ders Saati (80 Dk)",
    targetAudience: "5. Sınıf Öğrencileri",
    overview: "Öğrenciler yapay zekâya rastgele komut vermek yerine; Rol, Görev, Bağlam ve Biçim (RGB-B) formülünü kullanarak güçlü istemler hazırlamayı eğlenceli bir dedektiflik oyunuyla öğrenir.",
    materials: [
      "İstem Tasarım Kartları (Rol Kartı, Görev Kartı, Sınır Kartı)",
      "Örnek İyi ve Kötü İstem Karşılaştırma Kağıdı",
      "Akıllı Tahta / Bilgisayar"
    ],
    steps: [
      {
        title: "1. Aşama: Gizemli Robot Deneyi (15 Dk)",
        detail: "Öğretmen tahtaya 'Bana uzay hakkında bir şey anlat' yazar. Çıkan upuzun ve karmaşık metin incelenir. Öğrencilere 'Bu metin 5. sınıf için uygun mu? Ne eksikti?' soruları yöneltilir."
      },
      {
        title: "2. Aşama: RGB-B Formülünün Keşfi (20 Dk)",
        detail: "Rol (Sen kimsin?), Görev (Ne yapacaksın?), Bağlam (Kim için/Nerede?), Biçim (Kaç madde/Hangi tablo?) parçaları renkli kartlarla tahtada birleştirilir."
      },
      {
        title: "3. Aşama: İstem İyileştirme Meydan Okuması (30 Dk)",
        detail: "Öğrenciler ikili gruplar halinde zayıf bir istemi alıp RGB-B formülüyle profesyonel isteme dönüştürür ve simülatörde sonucunu test eder."
      },
      {
        title: "4. Aşama: Doğruluk & Halüsinasyon Kontrolü (15 Dk)",
        detail: "Yapay zekânın her söylediğinin mutlak doğru olmadığı, bazen 'uydurabileceği' (halüsinasyon) örneklerle gösterilir ve güvenilir kaynak teyidi kuralı anlatılır."
      }
    ],
    maarifValues: ["Eleştirel Düşünme", "Bilimsel Merak", "Doğruluk ve Dürüstlük", "Sorumluluk"],
    promptExample: {
      badPrompt: "Mars hakkında ödev yaz.",
      goodPrompt: "Sen eğlenceli bir gökbilimcisin. 5. sınıf öğrencileri için Mars gezegeninin neden 'Kızıl Gezegen' olarak anıldığını ve su bulunup bulunmadığını anlatan, 4 maddelik, merak uyandırıcı ve sade bir açıklama yaz.",
      tip: "Rol (Gökbilimci) + Hedef Kitle (5. Sınıf) + Format (4 Madde) + Sade Dil kuralı harika sonuç üretir!"
    }
  },
  {
    id: "act-cyber-dilemma",
    themeId: 4,
    title: "Siber Mahkeme: Dijital Ayak İzi ve Nezaket Duruşması",
    duration: "2 Ders Saati (80 Dk)",
    targetAudience: "5. Sınıf Öğrencileri",
    overview: "Sınıf bir duruşma salonuna dönüştürülür. Çevrim içi oyunda arkadaşını kızdıran veya izinsiz fotoğraf paylaşan sanal vakalar incelenerek dijital etik ve empati kuralları içselleştirilir.",
    materials: [
      "Vaka Dosyaları (Kurgusal senaryo metinleri)",
      "Hakim, Savunman ve Jüri Rol Kartları",
      "Dijital Nezaket Kuralları (Netiket) Bildirgesi"
    ],
    steps: [
      {
        title: "1. Vaka Dağıtımı (15 Dk)",
        detail: "Örnek Vaka: 'Emre, arkadaşı Can'ın komik bir fotoğrafını izin almadan sınıf grubunda paylaştı ve altına alaycı yorumlar yapıldı.' Senaryosu okunur."
      },
      {
        title: "2. Grup Müzakeresi (25 Dk)",
        detail: "Jüri üyeleri kişisel veri ihlali, siber zorbalık ve arkadaşlık bağları açısından olayı tartışır."
      },
      {
        title: "3. Karar ve Çözüm Formülü (25 Dk)",
        detail: "Ceza yerine onarıcı çözüm aranır: Özür dileme, izinsiz içeriği kaldırma ve empati kurma adımları sınıf tahtasına listelenir."
      },
      {
        title: "4. Sınıf 'Dijital Ayak İzi' Andı (15 Dk)",
        detail: "Öğrenciler kendi adlarına 'Paylaşmadan önce 3 saniye durup düşüneceğim' ilkesini kabul eder."
      }
    ],
    maarifValues: ["Mahremiyet", "Saygı", "Empati", "Adalet", "Öz Denetim"]
  },
  {
    id: "act-block-maze",
    themeId: 6,
    title: "Akıllı Labirent ve Engel Algılama Projesi",
    duration: "4 Ders Saati (160 Dk)",
    targetAudience: "5. Sınıf Öğrencileri",
    overview: "Öğrenciler kendi tasarladıkları labirent sahnesinde, yön tuşlarıyla hareket eden ve duvarlara çarptığında 'Algılama' bloğuyla geri sekip ses çıkaran mini oyun programlar.",
    materials: [
      "Blok Tabanlı Programlama Aracı (Scratch / mBlock)",
      "Labirent Şablonu Çizim Kağıdı",
      "Kulaklıklar ve Fare"
    ],
    steps: [
      {
        title: "1. Kâğıt Üzerinde Algoritma Tasarımı (30 Dk)",
        detail: "Öğrenciler kareli kâğıda labirenti çizer. Karakterin başlangıç ve bitiş noktalarını, engel kurallarını sözlü algoritmaya dönüştürür."
      },
      {
        title: "2. Sahne ve Kukla Hazırlığı (30 Dk)",
        detail: "Çizilen labirent bilgisayara dekor olarak aktarılır. Kahraman kukla seçilir ve orantılı boyuta (örn. %30) getirilir."
      },
      {
        title: "3. Yön Tuşları ve Hareket Blokları (40 Dk)",
        detail: "X ve Y koordinatları kullanılarak Yukarı, Aşağı, Sağ ve Sol tuşlarına hareket komutları yazılır."
      },
      {
        title: "4. Koşul ve Algılama: Duvara Değdi mi? (40 Dk)",
        detail: "'Eğer <labirent rengine dokunuyor mu?> ise [başlangıç X, Y noktasına git] ve [çarpma sesi çal]' blok kombinasyonu kurulur."
      },
      {
        title: "5. Puan/Can Değişkeni ve Test (20 Dk)",
        detail: "3 Can hakkı değişkeni eklenir, can 0 olunca 'Oyun Bitti' duyurusu yaptırılarak oyun tamamlanır."
      }
    ],
    maarifValues: ["Mantıksal Düşünme", "Problem Çözme", "Azim ve Kararlılık", "Tasarım Becerisi"]
  }
];
