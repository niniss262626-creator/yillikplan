# 5. Sınıf Bilişim Teknolojileri ve Yazılım Dersi Çerçeve Yıllık Planı (TYMM)

Türkiye Yüzyılı Maarif Modeli (TYMM) ile tam uyumlu; 5. Sınıf Bilişim Teknolojileri ve Yazılım dersi için geliştirilmiş interaktif 36 haftalık çerçeve yıllık plan, MEB standart resmi çıktı oluşturucu, süreç odaklı ölçme rubrikleri ve yapay zekâ istem atölyesi uygulaması.

---

## 🚀 GitHub'da Açma ve Canlı Yayınlama (GitHub Pages)

Bu proje **GitHub Pages** ve modern tarayıcılar üzerinde sıfır sunucu kurulumuyla (tamamen istemci taraflı) çalışacak şekilde yapılandırılmıştır (`base: './'`).

### 1. GitHub'a Gönderme (Push) Adımları
Eğer projeyi kendi GitHub hesabınızda yayınlamak istiyorsanız terminalinizde sırasıyla şu komutları çalıştırabilirsiniz:

```bash
# Git deposunu başlatın (eğer başlatılmadıysa)
git init

# Tüm dosyaları ekleyin
git add .

# İlk commit'i oluşturun
git commit -m "feat: Türkiye Yüzyılı Maarif Modeli 5. Sınıf Bilişim Yıllık Planı"

# Ana dalı belirleyin
git branch -M main

# GitHub'daki reponuzun adresini bağlayın
git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADINIZ.git

# GitHub'a gönderin
git push -u origin main
```

### 2. GitHub Pages'i Etkinleştirme
Projeyi GitHub'a yükledikten sonra:
1. GitHub reponuzda **Settings (Ayarlar)** sekmesine tıklayın.
2. Sol menüden **Pages** seçeneğine gelin.
3. **Build and deployment > Source** kısmında **GitHub Actions** seçeneğini işaretleyin.
4. `.github/workflows/deploy.yml` dosyası otomatik olarak devreye girecek ve birkaç dakika içinde siteniz `https://kullanici-adiniz.github.io/repo-adiniz/` adresinde canlı olarak açılacaktır!

---

## 💻 Yerel Geliştirme (Localhost)

Projeyi bilgisayarınızda çalıştırmak için:

```bash
# 1. Bağımlılıkları yükleyin
npm install

# 2. Geliştirici sunucusunu başlatın
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı görüntüleyebilirsiniz.

---

## 🌟 Öne Çıkan Özellikler

### 1. 36 Haftalık Maarif Müfredat Dağılımı (72 Ders Saati)
- **1. Tema:** Bilişim Teknolojileri (Donanım, Yazılım, İşletim Sistemleri - Pardus) · 14 Saat
- **2. Tema:** Dijital Ürün Tasarımı (Görsel Düzenleme, Kelime İşlemci) · 12 Saat
- **3. Tema:** Ağlar ve İletişim (İnternet, Ağ Teknolojileri) · 6 Saat
- **4. Tema:** Bilişim Etiği ve Güvenlik (Dijital Yurttaşlık, Parola, Ayak İzi) · 8 Saat
- **5. Tema:** Yapay Zekâ (Temel Kavramlar, Prompt Yazımı, Etkileri) · 8 Saat
- **6. Tema:** Programlama ve Problem Çözme (Algoritma, Blok Kodlama - Scratch) · 24 Saat

### 2. MEB Standart Resmi Çıktı & Belge İndirme
- **A4 Yatay Resmi Yazdırma / PDF:** MEB okul idaresi onay standartlarına uygun imza blokları (Ders Öğretmeni, Zümre Başkanı, Okul Müdürü).
- **Excel (.CSV) Dışa Aktarma:** Türkçe karakter sorunu olmayan UTF-8 BOM formatında Excel tablosu indirme.
- **Word (.DOC) Dışa Aktarma:** Microsoft Word ve LibreOffice Writer ile doğrudan açılabilen resmi şablon.

### 3. Süreç Odaklı Ölçme & Rubrik Hesaplayıcı
- Blok Tabanlı Kodlama Projesi Değerlendirme Rubriği (100 Puan)
- Dijital Ürün Tasarımı (Afiş & Belge) Puanlama Anahtarı (100 Puan)
- Yapay Zekâ İstem ve Etik Kontrol Listesi
- Tek tıkla portfolyo için öğrenci değerlendirme fişi yazdırma.

### 4. Maarif Atölyesi & 5. Sınıf İstem (Prompt) Laboratuvarı
- **RGB-B Formülü:** Rol + Görev + Bağlam + Biçim ile 5. sınıf düzeyinde interaktif yapay zekâ istem simülatörü.
- Sınıf içi drama ve uygulamalı ders etkinlik planları.

### 5. Yerel Kayıt (Offline & LocalStorage)
- Okul adı, öğretmen adı, şubeler ve haftalık kişisel notlarınız tarayıcınızda otomatik kaydedilir; internet olmasa bile kaybolmaz.

---

## 🛠️ Kullanılan Teknolojiler
- **React 19** & **TypeScript**
- **Vite 8** (Hızlı derleme ve GitHub Pages uyumlu)
- **Tailwind CSS v4**
- **Lucide React** (İkon seti)

---

## 📄 Lisans
Bu proje eğitim amaçlı ve Millî Eğitim Bakanlığı Türkiye Yüzyılı Maarif Modeli çerçevesinde öğretmenlerin ve öğrencilerin kullanımına açık olarak hazırlanmıştır.
