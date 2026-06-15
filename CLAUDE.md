# CLAUDE.md

Panduan konteks untuk proyek **Website Portofolio Pribadi Mikail Samyth Habibillah**.

---

## 1. Tentang Proyek

Website portofolio personal untuk menampilkan profil, pengalaman, proyek, dan
penghargaan. Target kesan: **modern, profesional, dan tidak terlihat "template biasa"**.

**Tujuan utama:** portofolio ini untuk **aplikasi ke Apple Developer Academy**
(tujuan sekunder: melamar kerja / umum). Implikasi desain & konten:

- Tekankan **selera desain & craft** (Apple menghargai detail, kerapian, estetika).
- Tonjolkan **pemikiran human-centered & inovasi untuk kebaikan** — proyek PERISAI
  (AI lindungi anak dari judi online) sangat align dengan nilai "apps for good".
- Tunjukkan **kemampuan problem-solving, kerja tim, dan ketekunan** (hackathon 24 jam).

**Tone visual:** atmospheric / cinematic — gelap pekat, dramatis, glow halus,
animasi scroll yang halus.

**Catatan arah desain:** versi awal yang terlalu sederhana DITOLAK. Standar untuk
proyek ini adalah desain kelas tinggi — animasi scroll yang halus, tipografi kuat,
layout berani, micro-interaction. Hindari kesan generik/AI-slop.

## 2. Pemilik / Subjek

| Field | Nilai |
| --- | --- |
| Nama | Mikail Samyth Habibillah |
| Tagline | Information Systems Student · Web Dev & AI Enthusiast |
| Jurusan | B.S. Sistem Informasi — Universitas Andalas (2024–2028) · GPA 3.63/4.00 |
| Peran utama | Frontend Developer, Project Management, UI/UX, Video Editing |
| Email | <habibillahmikail@gmail.com> |
| Telepon | +62 898-8228-875 |
| LinkedIn | <https://www.linkedin.com/in/mikailsamythhabibillah> |
| GitHub | <https://github.com/samythh> |
| Instagram | <https://www.instagram.com/mklsmth_> |

## 3. Tech Stack (rencana)

- **Frontend:** HTML / CSS / JavaScript (vanilla) — keputusan awal, dapat naik ke
  Next.js bila kebutuhan bertambah.
- **Animasi scroll:** GSAP + ScrollTrigger (efek: reveal, parallax, scrub).
  Pertimbangkan Lenis untuk smooth scroll.
- **Hosting:** rencana gratis — GitHub Pages / Netlify / Vercel.
- **Aksesibilitas:** hormati `prefers-reduced-motion`.

### 3.1 Menjalankan secara lokal

Situs statis (vanilla) — tidak perlu build step.

- **Paling cepat:** buka `index.html` langsung di browser (double-click).
- **Disarankan (live reload):** pakai live server agar auto-refresh saat edit.
  - VS Code: ekstensi **Live Server** → klik "Go Live".
  - Atau via terminal (butuh Python): `python -m http.server 5500`
    lalu buka <http://localhost:5500>.
- **Jika nanti pindah ke Next.js:** `npm install` lalu `npm run dev`
  (port default <http://localhost:3000>).

### 3.2 Token Desain (sistem aktif — Hallmark, tema "Midnight" atmospheric)

Semua token ada di `tokens.css` (OKLCH). Warna inti:

| Token | Nilai | Pakai untuk |
| --- | --- | --- |
| `--color-paper` | `oklch(15% 0.012 40)` | Latar utama (near-black hangat) |
| `--color-paper-2` | `oklch(19% 0.014 40)` | Kartu / permukaan terangkat |
| `--color-ink` | `oklch(96% 0.006 70)` | Teks utama |
| `--color-muted` | `oklch(76% 0.010 50)` | Teks sekunder |
| `--color-accent` | `oklch(75% 0.150 45)` | Aksen ember/coral — link, CTA, highlight |

Tipografi (Google Fonts):

- **Display & Body:** "Geist" (300–700)
- **Outlier/mono:** "Geist Mono" — wordmark, label, kicker, tag

Desain (Hallmark): genre **atmospheric**, macrostructure **Marquee Hero**,
nav **N5 floating pill**, footer **Ft5 statement**, proyek **F2 sticky-scroll
stack**. Stamp lengkap di header `style.css`; rotasi tercatat di `.hallmark/log.json`.

> Aksen dipakai hemat (<3% viewport). Hindari ungu klise & gradient text.
> Bila redesign lagi, **perbarui tabel ini** agar tetap jadi sumber kebenaran.

## 4. Struktur File

- `index.html` — struktur & konten
- `style.css` — styling (tema gelap modern)
- `script.js` — animasi GSAP ScrollTrigger
- `CLAUDE.md` — file ini (konteks proyek)
- `assets/` — gambar (lihat inventaris di bawah)

### Inventaris aset (`assets/`)

| File | Dipakai untuk |
| --- | --- |
| `profile.png` | Foto profil hero |
| `spk-dashboard.png` | Proyek SPK — Dashboard |
| `spk-hierarki.png` | Proyek SPK — halaman /Hierarki |
| `spk-hasil.png` | Proyek SPK — halaman /Hasil |
| `proteksi-1.png` | Proyek Proteksi Tanaman — tampilan 1 |
| `proteksi-2.png` | Proyek Proteksi Tanaman — tampilan 2 |
| `proteksi-3.png` | Proyek Proteksi Tanaman — tampilan 3 |
| `perisai-pitch.png` | PERISAI — Pitch |
| `perisai-pitchday.png` | PERISAI — Pitch Day |
| `perisai-juara.png` | PERISAI — momen Juara 2 |
| `perisai-demo.png` | PERISAI — thumbnail video demo (link ke YouTube) |
| `lkmm-aftermovie.png` | LKMM-TD — thumbnail After Movie (link ke IG Reel) |

Catatan: beberapa file besar (`profile.png` ~5.7 MB, `perisai-juara.png` ~1.6 MB).
Optimasi/kompres sebelum produksi agar website tetap cepat.

## 5. Konten Portofolio (sumber kebenaran)

### 5.1 Proyek

#### A. Website SPK Identifikasi Tingkat Risiko Perundungan Siswa (Metode AHP Absolut)

- Periode: Feb 2026 – Apr 2026
- Afiliasi: Universitas Andalas
- Konteks: Tugas Besar Kelompok — Mata Kuliah Sistem Penunjang Keputusan
- Peran: Project Management, Frontend Developer (+1 skill)
- Visual: Dashboard, halaman /Hierarki, halaman /Hasil
- Kontributor lain: ada

#### B. Website Profil Proteksi Tanaman Universitas Andalas

- Periode: Dec 2025 – Mar 2026
- Deskripsi: Arsitektur headless modern & scalable — Strapi CMS (manajemen
  konten) terintegrasi dengan Next.js.
- URL: <https://proteksitanaman.faperta.unand.ac.id>
- Peran: Frontend Developer, Project Management (+2 skill)
- Visual: Picture_1, Picture_2, Picture_3
- Kontributor lain: ada

### 5.2 Penghargaan

#### Juara 2 — Hackathon Core 3D 2026

- Penyelenggara: Universitas Andalas · Mei 2026
- Proyek: **"PERISAI"** — aplikasi parental control bertenaga AI untuk melindungi
  anak dari paparan judi online.
- Implementasi teknis utama:
  - Sistem deteksi real-time memakai model **CNN** untuk menganalisis konten
    layar dan mengekstrak teks secara akurat.
  - Arsitektur monitoring otomatis: mengirim notifikasi peringatan + bukti
    screenshot ke perangkat orang tua saat konten terlarang terdeteksi.
  - Prototipe fungsional penuh dirancang, dikembangkan, dan didemokan dalam
    batas waktu ketat 24 jam.
- Tema: penerapan praktis Machine Learning untuk isu sosial mendesak.
- Visual: Pitch, Pitch Day, Second Place, Demo Singkat PERISAI.
- Video demo (YouTube): <https://www.youtube.com/watch?v=Swf60pM6Xj0>

### 5.3 Keahlian (Skills)

#### Pengembangan & Desain Web

- Frontend Developer — LPS, proyek SPK, proyek Proteksi Tanaman
- Web Design — LPS, Universitas Andalas
- User Interface (UI) Design — proyek Proteksi Tanaman
- User Experience (UX) — proyek Proteksi Tanaman

#### Manajemen & Proses

- Project Management — proyek SPK & Proteksi Tanaman
- AI Prompting — LPS
- Database Design — Relational Database Design

#### Multimedia / Video

- After Effects — Staff Media LKMM-TD
- Adobe Premiere Pro — Staff Media LKMM-TD
- Video Editing — Staff Media LKMM-TD

#### Pemrograman & Lainnya

- Fundamental C++ Programming — Kelas Belajar C++ Dasar
- 10-Key Typing

#### Sertifikasi / Kredensial

- Claude Code in Action — Anthropic

#### Tech & Tools (versi CV — yang tampil di halaman)

Sumber kebenaran = CV resmi (diberikan 12 Jun 2026). Yang tampil di section Skills:

Fokus:

- Frontend Web Development
- UI/UX Design
- Video Editing
- AI-Assisted Development

Bahasa Pemrograman:

- JavaScript
- Python
- Java
- SQL
- C++

Tools:

- Figma
- VS Code
- XAMPP
- After Effects
- Premiere Pro

> Catatan: Next.js & Strapi disebut di tag proyek Proteksi Tanaman (bukan di
> daftar skill utama). Flutter/Laravel/Android Studio (data lama) TIDAK dipakai
> di CV final — jangan tampilkan kecuali user minta.

### 5.4 Pengalaman / Organisasi (versi CV — authoritative)

#### Research & Development Staff — System Development Laboratory

- Universitas Andalas · 2025 – Sekarang (2 term)
- Merencanakan & menjalankan sesi praktikum Data Structures & Algorithms dan
  Basic Programming selama dua term.
- Merancang & membangun website profil lab; kini memimpin redesign-nya.
- Berkontribusi pada upgrade OpenDesa (Village Information System).

#### Freelance Project Manager & Frontend Developer — Plant Protection Dept. Website

- Universitas Andalas (Faculty of Agriculture) · Des 2025 – Mar 2026
- Dipercaya sebagai developer eksternal untuk membangun ulang website resmi
  (proteksitanaman.faperta.unand.ac.id) end-to-end: requirement, desain,
  frontend, deployment. Hasil lebih modern dari website departemen lain.

#### Mobile Developer — PERISAI (Juara 2, Core3D Hackathon 2026)

- Mei 2026 · diselenggarakan Himpunan Mahasiswa Teknik Komputer UNAND
- Co-develop aplikasi parental control bertenaga AI (deteksi layar real-time
  berbasis CNN + notifikasi otomatis dengan bukti screenshot). Prototipe penuh
  dalam 24 jam.

#### Media Staff — LKMMTD-FTI 2025

- BEM KM FTI Universitas Andalas · 2025
- Mengarahkan shooting & dokumentasi visual sepanjang acara 3 hari; menyunting
  sendiri aftermovie resmi.
- After Movie (Instagram Reel): <https://www.instagram.com/lkmmtdftiua_/reel/DQVRg9Bk8K4/>

### 5.5 Pendidikan

- **B.S. Information Systems** — Universitas Andalas · 2024 – 2028 (expected)
- GPA: 3.63 / 4.00
- Coursework: Cloud Computing · Database Design · Software Engineering · Web Programming
- Award: 2nd Place — Core3D Hackathon 2026 (West Sumatra Regional Level)

### 5.6 Objective (untuk hero/about)

Fourth-semester Information Systems student passionate about building digital
products that solve real problems. Memandang **Apple Developer Academy** sebagai
batu loncatan ideal untuk mengasah product development, business thinking, dan
kolaborasi — bertumbuh dari "membangun proyek" menjadi "membangun produk yang berarti".

## 6. Section Website (rencana)

1. Hero (Marquee) — nama, tagline, statement
2. About / Objective — objektif + portrait + quick facts (GPA, dll)
3. Skills — Focus · Languages · Tools (badge)
4. Selected Work — Plant Protection + DSS Bullying-Risk (sticky-scroll, screenshot)
5. Featured Award — PERISAI (highlight + demo)
6. Experience — R&D Lab · Freelance · Mobile Dev · Media Staff
7. Education — degree, GPA, coursework, award
8. Contact (footer) — email, LinkedIn, GitHub, Instagram, phone

## 7. Konvensi Kerja

- Bahasa konten situs: **English** (diputuskan 12 Jun 2026 — versi Indonesia terasa
  janggal). Balasan chat ke user tetap boleh Bahasa Indonesia.
- Komentar kode boleh Bahasa Indonesia.
- Setiap elemen yang perlu animasi scroll: beri atribut `data-reveal`
  (atau `data-parallax` untuk efek parallax) — ditangani otomatis oleh `script.js`.
- Jaga performa: aset gambar dioptimasi, animasi tidak berat.

## 8. Workflow Git & GitHub

- **Repo GitHub:** `samythh/samythh.github.io` (URL bersih untuk GitHub Pages).
  Remote `origin` sudah terpasang. Live target: `https://samythh.github.io`.
- **Commit hanya saat diminta.** Jangan auto-commit/auto-push tanpa instruksi.
- **Jangan commit langsung ke `main`** untuk perubahan besar — buat branch dulu.
- **Format pesan commit:** ringkas, imperatif, Bahasa Indonesia/Inggris konsisten.
  Contoh: `tambah section proyek`, `perbaiki animasi hero`, `optimasi gambar`.
- **Jangan pakai** `--no-verify` atau skip hook kecuali diminta.
- **`.gitignore`:** abaikan file besar/sementara yang tidak perlu (mis. `*.psd`,
  file desain mentah, `node_modules/` bila nanti pakai Next.js).

### Langkah push pertama kali (referensi)

```bash
git init
git add .
git commit -m "commit awal portofolio"
git branch -M main
git remote add origin https://github.com/samythh/portofolio.git
git push -u origin main
```

> Catatan lingkungan: folder proyek ini **belum** repo git. Jalankan `git init`
> dulu sebelum perintah git lain.

## 9. Deploy / Hosting

- **Opsi utama: GitHub Pages** (gratis, cocok untuk situs statis vanilla).
  - Repo `samythh.github.io` → otomatis live di `https://samythh.github.io`.
  - Atau repo biasa → aktifkan Pages di Settings → branch `main` / root.
- **Alternatif: Netlify / Vercel** — drag-and-drop folder atau connect repo,
  cocok bila nanti pindah ke Next.js (Vercel paling pas untuk Next.js).
- Setelah deploy, **uji di HP** (responsif) dan cek kecepatan (gambar besar).

## 10. Aturan Perilaku untuk Claude (penting)

- **Selalu rujuk CLAUDE.md ini** sebagai sumber kebenaran konten & arah desain.
- **Desain di atas template.** Lihat §1 — tolak hasil yang terkesan generik;
  utamakan animasi halus, tipografi kuat, layout berani.
- **Konfirmasi sebelum aksi sulit dibatalkan:** push ke remote, hapus file,
  ubah massal. Tindakan lokal yang aman boleh langsung.
- **Bahasa:** konten situs dalam **English** (lihat §7); balasan chat ke user boleh Bahasa Indonesia.
- **Jaga konsistensi data:** jika info portofolio berubah, perbarui §5 dulu,
  baru sentuh kode.
- **Performa & aksesibilitas** bukan opsional: kompres gambar, hormati
  `prefers-reduced-motion`, jaga kontras warna.
- **Jangan menambah dependency berat** tanpa alasan jelas. GSAP via CDN sudah cukup.

## 11. TODO / Belum Final

- [x] Foto/aset asli untuk setiap proyek — sudah ada di `assets/` (lihat §4).
- [x] Daftar skill lengkap (versi CV) — lihat §5.3.
- [x] Foto profil untuk hero — `assets/profile.png`.
- [x] Link demo PERISAI (YouTube) & After Movie (IG) — tercatat di §5.
- [x] Email & kontak final — lihat §2.
- [x] Build desain "wow" (Hallmark · Midnight) + konten English — selesai 12 Jun 2026.
- [x] Optimasi gambar → WebP (12 MB → 550 KB, 96% lebih kecil). Script:
  `optimize_images.py`. HTML pakai `assets/*.webp`; PNG asli disimpan sbg backup.
- [x] Animasi garis: scroll-progress, garis aksen judul, divider hero, rail panel proyek.
- [x] Typewriter di hero (mono, mengetik peran bergantian) — fallback statis di reduced-motion.
- [x] Cursor-following ember bloom (hanya pointer halus) + film grain halus (`feTurbulence`
  <0.1 opacity) untuk kedalaman. Atmospheric, bukan 3D dekoratif.
- [x] Stats strip (3.63 GPA · 2nd Place · 4 Projects · 2yr) — angka real, tabular-nums.
- [x] Marquee skill berjalan (outline/ghosted, quiet) sbg pembatas; pause on hover,
  static di reduced-motion.
- [x] Favicon "M" (ember) — `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`,
  `favicon-32.png`. Dibuat oleh script `make_favicon.py`.
- [x] Setup git + push pertama (branch `main`) — 12 Jun 2026.
- [x] Rename repo ke `samythh.github.io` (URL bersih); remote lokal sudah di-update.
- [ ] Aktifkan GitHub Pages (Settings → Pages → branch `main` / root) → live di
  `https://samythh.github.io`.
- [ ] (Opsional) keputusan: tetap vanilla atau pindah ke Next.js.
