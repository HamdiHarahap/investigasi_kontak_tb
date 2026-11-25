import {
  Users,
  Home,
  Stethoscope,
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
  UserRound,
  HeartHandshake,
  Shield,
  FileWarning,
  Search,
  Database,
  Activity,
  BarChart3,
} from 'lucide-react';

export const site = {
  name: 'Investigasi Kontak TB',
  shortName: 'IK TB',
  tagline:
    'Optimalisasi Sistem Informasi Kesehatan dalam Mendukung Pelacakan Kontak TB yang Akurat, Cepat, dan Terintegrasi.',
  shortDescription:
    'Panduan penginputan data investigasi kontak tuberkulosis untuk petugas kesehatan, kader, dan masyarakat.',
};

export const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Mengenal IK', href: '#mengenal' },
  { label: 'Alur', href: '#alur' },
  { label: 'Penginputan', href: '#penginputan' },
  { label: 'Simulasi', href: '#simulasi' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Tim', href: '#tim' },
];

export const hero = {
  brand: 'Panduan Penginputan Data',
  headline: 'Investigasi Kontak Tuberkulosis (TB)',
  description:
    'Optimalisasi Sistem Informasi Kesehatan dalam Mendukung Pelacakan Kontak TB yang Akurat, Cepat, dan Terintegrasi.',
  paragraphs: [
    'Investigasi Kontak TB merupakan kegiatan untuk menemukan orang-orang yang pernah melakukan kontak erat dengan pasien TB, baik anggota keluarga yang tinggal serumah maupun orang lain yang sering berinteraksi dengan pasien.',
    'Kegiatan ini bertujuan untuk menemukan secara dini orang yang mungkin mengalami TB, mengarahkan mereka untuk mendapatkan pemeriksaan, serta mengidentifikasi orang yang membutuhkan Terapi Pencegahan Tuberkulosis (TPT).',
    'Melalui website ini, petugas kesehatan, kader, dan masyarakat dapat mempelajari proses investigasi kontak serta memahami bagaimana data dikumpulkan, dicatat, dimasukkan, dan ditindaklanjuti.',
  ],
  primaryCta: { label: 'Mulai Belajar', href: '#mengenal' },
  secondaryCta: { label: 'Pelajari Alur Investigasi Kontak', href: '#alur' },
  tertiaryLinks: [
    { label: 'Panduan Penginputan Data', href: '#penginputan' },
    { label: 'Simulasi Pengisian Data', href: '#simulasi' },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=80',
    alt: 'Petugas kesehatan memeriksa data dan melayani pasien',
  },
};

export const introduction = {
  eyebrow: 'Mengenal Investigasi Kontak TB',
  title: 'Apa itu Investigasi Kontak TB?',
  lead: 'Investigasi Kontak (IK) TB adalah kegiatan pelacakan dan pemeriksaan terhadap orang-orang yang memiliki riwayat kontak dengan pasien TB.',
  image: {
    src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    alt: 'Keluarga dan petugas kesehatan dalam kunjungan rumah',
  },
  contactTypes: [
    {
      id: 'serumah',
      title: 'A. Kontak Serumah',
      icon: Home,
      items: [
        'Suami atau istri pasien.',
        'Anak-anak yang tinggal bersama pasien.',
        'Orang tua atau anggota keluarga lainnya.',
        'Orang lain yang tinggal dalam satu rumah.',
      ],
    },
    {
      id: 'erat',
      title: 'B. Kontak Erat',
      icon: Users,
      items: [
        'Tetangga yang sering berinteraksi dalam jarak dekat.',
        'Teman kerja yang sering berada dalam satu ruangan.',
        'Teman sekolah atau teman bermain.',
        'Orang lain yang memiliki riwayat interaksi dekat dan berulang dengan pasien.',
      ],
    },
  ],
  whyImportant: {
    title: 'Mengapa Investigasi Kontak Penting?',
    description:
      'Investigasi kontak penting karena seseorang yang sering berinteraksi dengan pasien TB berisiko mengalami penularan, terutama apabila kontak berlangsung dalam waktu lama dan berada di lingkungan dengan ventilasi yang kurang baik.',
    benefits: [
      'Menemukan terduga TB lebih awal.',
      'Mempercepat pemeriksaan terhadap orang yang memiliki gejala.',
      'Mengidentifikasi kontak yang membutuhkan pemeriksaan lebih lanjut.',
      'Menemukan orang yang memenuhi syarat untuk mendapatkan TPT.',
      'Mengurangi risiko penularan TB di lingkungan keluarga dan masyarakat.',
      'Mendukung pencatatan dan pemantauan program TB.',
    ],
  },
  whoExecutes: {
    title: 'Siapa yang Melaksanakan Investigasi Kontak?',
    items: [
      'Petugas puskesmas atau tenaga kesehatan.',
      'Petugas program TB.',
      'Kader kesehatan atau kader TB yang telah mendapatkan pembekalan.',
      'Masyarakat dan keluarga pasien sebagai pihak yang membantu memberikan informasi dan mendukung pelaksanaan kegiatan.',
    ],
  },
};

export const problems = {
  eyebrow: 'Permasalahan',
  title: 'Permasalahan dalam Penginputan Data Investigasi Kontak TB',
  description:
    'Bagian ini menjelaskan berbagai kendala yang sering ditemukan dalam pelaksanaan investigasi kontak.',
  groups: [
    {
      id: 'petugas',
      title: 'A. Kendala dari Petugas Lapangan',
      icon: Stethoscope,
      items: [
        'Data kontak yang diperoleh belum lengkap.',
        'Kesulitan menemukan alamat kontak pasien.',
        'Kesalahan dalam mencatat identitas kontak.',
        'Keterlambatan menyampaikan hasil investigasi kepada puskesmas.',
        'Belum optimalnya pemantauan terhadap kontak yang telah dirujuk.',
      ],
    },
    {
      id: 'kader',
      title: 'B. Kendala dari Kader',
      icon: HeartHandshake,
      items: [
        'Belum memahami seluruh tahapan investigasi kontak.',
        'Kesulitan menggunakan formulir pencatatan.',
        'Kurang memahami informasi yang harus ditanyakan kepada keluarga.',
        'Kesalahan dalam membedakan kontak serumah dan kontak erat.',
        'Belum terbiasa menggunakan sistem penginputan data digital.',
      ],
    },
    {
      id: 'masyarakat',
      title: 'C. Kendala dari Masyarakat',
      icon: Users,
      items: [
        'Kurangnya pengetahuan mengenai TB.',
        'Takut atau malu diketahui memiliki hubungan dengan pasien TB.',
        'Tidak memahami pentingnya pemeriksaan kontak.',
        'Menolak kunjungan karena khawatir terhadap kerahasiaan identitas.',
        'Tidak mengetahui fasilitas kesehatan yang harus dikunjungi.',
      ],
    },
    {
      id: 'sistem',
      title: 'D. Kendala Sistem Penginputan Data',
      icon: Database,
      items: [
        'Data identitas tidak lengkap.',
        'Terdapat data ganda.',
        'Kesalahan memilih kategori kontak.',
        'Data hasil skrining tidak sesuai dengan kondisi sebenarnya.',
        'Data hasil pemeriksaan belum diperbarui.',
        'Kurangnya koordinasi antara kader dan petugas kesehatan.',
      ],
    },
  ],
};

export const impacts = {
  eyebrow: 'Dampak',
  title: 'Dampak Jika Data Investigasi Kontak Tidak Diinput dengan Baik',
  description:
    'Penginputan data yang tidak lengkap dan tidak akurat dapat menghambat pelaksanaan program penanggulangan TB.',
  items: [
    {
      id: 'keterlambatan',
      title: '1. Keterlambatan Penemuan Kasus',
      description:
        'Orang yang memiliki gejala TB berpotensi terlambat mendapatkan pemeriksaan karena informasi hasil pelacakan tidak segera diterima petugas kesehatan.',
    },
    {
      id: 'pemantauan',
      title: '2. Kontak Tidak Terpantau',
      description:
        'Orang yang sudah diidentifikasi sebagai kontak tidak dapat dipastikan apakah sudah menjalani pemeriksaan atau belum.',
    },
    {
      id: 'evaluasi',
      title: '3. Kesulitan Evaluasi Program',
      description:
        'Petugas kesulitan mengetahui jumlah kontak yang sudah ditemukan, diperiksa, dirujuk, dan mendapatkan tindak lanjut.',
    },
    {
      id: 'ganda',
      title: '4. Risiko Data Ganda',
      description:
        'Kesalahan pencatatan dapat menyebabkan satu orang tercatat lebih dari satu kali sehingga hasil laporan menjadi tidak akurat.',
    },
    {
      id: 'pencegahan',
      title: '5. Tidak Optimalnya Pencegahan Penularan',
      description:
        'Kontak yang membutuhkan pemeriksaan atau TPT berisiko tidak mendapatkan tindak lanjut tepat waktu.',
    },
  ],
  message:
    'Data yang akurat membantu petugas mengambil keputusan yang tepat. Setiap kontak yang ditemukan harus dicatat, diperiksa sesuai alur, dan dipantau tindak lanjutnya.',
};

export const flowSteps = [
  {
    id: 'tahap-1',
    number: '01',
    title: 'Identifikasi Pasien TB',
    summary: 'Menetapkan pasien indeks sebagai dasar pelacakan kontak.',
    purpose:
      'Memastikan bahwa kegiatan pelacakan dilakukan berdasarkan data pasien indeks yang benar.',
    content:
      'Petugas kesehatan mengidentifikasi pasien TB yang menjadi sumber awal pelaksanaan investigasi kontak. Pasien ini disebut pasien indeks.',
    itemsTitle: 'Data yang perlu disiapkan',
    items: [
      'Identitas pasien indeks.',
      'Nomor identitas atau nomor rekam medis sesuai ketentuan sistem.',
      'Usia dan jenis kelamin.',
      'Alamat tempat tinggal.',
      'Nomor telepon yang dapat dihubungi.',
      'Tanggal diagnosis atau tanggal mulai pengobatan.',
      'Informasi fasilitas pelayanan kesehatan tempat pasien berobat.',
    ],
  },
  {
    id: 'tahap-2',
    number: '02',
    title: 'Identifikasi Kontak',
    summary: 'Menemukan orang yang pernah kontak dengan pasien indeks.',
    purpose:
      'Mengetahui jumlah dan identitas orang yang perlu mendapatkan skrining atau pemeriksaan lebih lanjut.',
    content:
      'Petugas atau kader melakukan wawancara kepada pasien indeks untuk mengetahui siapa saja orang yang pernah melakukan kontak dengan pasien.',
    itemsTitle: 'Informasi yang dikumpulkan',
    items: [
      'Jumlah anggota keluarga yang tinggal serumah.',
      'Jumlah orang yang memiliki kontak erat.',
      'Nama atau identitas kontak.',
      'Hubungan dengan pasien indeks.',
      'Usia dan jenis kelamin.',
      'Alamat atau lokasi tempat tinggal.',
      'Lama dan frekuensi interaksi dengan pasien.',
    ],
  },
  {
    id: 'tahap-3',
    number: '03',
    title: 'Kunjungan Lapangan dan Skrining',
    summary: 'Skrining awal melalui kunjungan rumah atau pendekatan lain.',
    purpose:
      'Kader melakukan skrining dan pencatatan berdasarkan panduan, bukan menetapkan diagnosis TB.',
    content:
      'Kader atau petugas lapangan melakukan kunjungan rumah atau pendekatan lain yang disepakati untuk melakukan skrining awal. Diagnosis ditentukan oleh tenaga kesehatan melalui pemeriksaan yang sesuai.',
    itemsTitle: 'Informasi yang perlu dikumpulkan',
    items: [
      'Apakah kontak mengalami batuk?',
      'Apakah terdapat gejala lain yang mengarah ke TB?',
      'Apakah kontak memiliki riwayat pemeriksaan TB?',
      'Apakah kontak pernah menjalani pengobatan TB?',
      'Apakah kontak memiliki faktor risiko yang perlu diperhatikan?',
    ],
    note: 'Skrining dilakukan kepada setiap orang yang teridentifikasi sebagai kontak.',
  },
  {
    id: 'tahap-4',
    number: '04',
    title: 'Pencatatan dan Penginputan Data',
    summary: 'Mendokumentasikan hasil wawancara dan skrining.',
    purpose:
      'Memastikan seluruh hasil investigasi terdokumentasi sehingga dapat dipantau oleh petugas kesehatan.',
    content:
      'Setelah kegiatan identifikasi dan skrining selesai, hasilnya dicatat menggunakan formulir atau sistem informasi yang berlaku. Data yang dimasukkan harus sesuai dengan hasil wawancara dan kondisi kontak yang sebenarnya.',
    itemsTitle: 'Informasi yang dicatat',
    items: [
      'Identitas pasien indeks.',
      'Identitas setiap kontak.',
      'Jenis kontak.',
      'Hasil skrining gejala.',
      'Riwayat pemeriksaan.',
      'Status rujukan.',
      'Hasil pemeriksaan apabila sudah tersedia.',
      'Rencana tindak lanjut.',
    ],
  },
  {
    id: 'tahap-5',
    number: '05',
    title: 'Rujukan dan Pemeriksaan',
    summary: 'Mengarahkan kontak bergejala ke fasilitas kesehatan.',
    purpose:
      'Memperbarui hasil pemeriksaan pada pencatatan atau sistem yang digunakan.',
    content:
      'Kontak yang menunjukkan gejala atau memenuhi kriteria pemeriksaan diarahkan ke fasilitas pelayanan kesehatan. Petugas kesehatan melakukan penilaian dan pemeriksaan sesuai pedoman yang berlaku.',
    itemsTitle: 'Hasil tindak lanjut dapat berupa',
    items: [
      'Memerlukan pemeriksaan diagnostik TB.',
      'Tidak ditemukan TB aktif berdasarkan pemeriksaan yang dilakukan.',
      'Memerlukan pemeriksaan tambahan.',
      'Memenuhi kriteria penilaian untuk pemberian TPT.',
    ],
  },
  {
    id: 'tahap-6',
    number: '06',
    title: 'Pemantauan dan Tindak Lanjut',
    summary: 'Memastikan setiap kontak mendapat pemantauan berkelanjutan.',
    purpose: 'Menjaga agar tidak ada kontak yang hilang dari pemantauan.',
    content:
      'Petugas kesehatan melakukan pemantauan terhadap kontak yang telah diidentifikasi.',
    itemsTitle: 'Hal yang perlu dipantau',
    items: [
      'Apakah kontak sudah datang ke fasilitas kesehatan?',
      'Apakah kontak sudah menjalani pemeriksaan?',
      'Apakah hasil pemeriksaan sudah diterima?',
      'Apakah kontak memerlukan tindak lanjut?',
      'Apakah kontak memenuhi syarat untuk mendapatkan TPT?',
      'Apakah kontak yang mendapatkan TPT menjalani pemantauan sesuai jadwal?',
    ],
  },
  {
    id: 'tahap-7',
    number: '07',
    title: 'Evaluasi dan Pelaporan',
    summary: 'Menilai capaian kegiatan dan memperbaiki pelaksanaan.',
    purpose:
      'Data dapat digunakan untuk melihat capaian kegiatan, menemukan kendala, dan memperbaiki pelaksanaan investigasi kontak berikutnya.',
    content:
      'Setelah seluruh kegiatan dilakukan, petugas melakukan evaluasi berdasarkan data yang telah dikumpulkan.',
    itemsTitle: 'Indikator yang dapat ditampilkan',
    items: [
      'Jumlah pasien indeks yang diinvestigasi.',
      'Jumlah kontak serumah.',
      'Jumlah kontak erat.',
      'Jumlah kontak yang berhasil diskrining.',
      'Jumlah kontak yang dirujuk.',
      'Jumlah kontak yang telah menjalani pemeriksaan.',
      'Jumlah kontak yang terdiagnosis TB.',
      'Jumlah kontak yang memenuhi kriteria TPT.',
      'Jumlah kontak yang masih memerlukan tindak lanjut.',
    ],
  },
];

export const dataGuide = {
  eyebrow: 'Tutorial',
  title: 'Panduan Penginputan Data Investigasi Kontak TB',
  description:
    'Bagian ini dibuat khusus sebagai tutorial bagi pengguna website.',
  tables: [
    {
      id: 'pasien-indeks',
      title: 'A. Data Identitas Pasien Indeks',
      intro:
        'Pasien indeks adalah pasien TB yang menjadi dasar dilakukannya pelacakan kontak.',
      headers: ['No.', 'Nama Data', 'Keterangan'],
      rows: [
        ['1', 'Nama pasien indeks', 'Nama sesuai identitas atau data layanan'],
        ['2', 'Nomor identitas', 'Nomor identitas sesuai ketentuan sistem'],
        ['3', 'Umur', 'Usia pasien'],
        ['4', 'Jenis kelamin', 'Laki-laki/perempuan'],
        ['5', 'Alamat', 'Alamat tempat tinggal'],
        ['6', 'Nomor telepon', 'Nomor yang dapat dihubungi'],
        ['7', 'Tanggal diagnosis', 'Tanggal penetapan diagnosis'],
        [
          '8',
          'Fasilitas kesehatan',
          'Puskesmas/rumah sakit tempat pasien berobat',
        ],
      ],
    },
    {
      id: 'identitas-kontak',
      title: 'B. Data Identitas Kontak',
      intro:
        'Data ini diisi untuk setiap orang yang memiliki riwayat kontak dengan pasien indeks.',
      headers: ['No.', 'Nama Data', 'Keterangan'],
      rows: [
        ['1', 'Nama kontak', 'Nama orang yang dilacak'],
        ['2', 'Umur', 'Usia kontak'],
        ['3', 'Jenis kelamin', 'Laki-laki/perempuan'],
        [
          '4',
          'Hubungan',
          'Anak, pasangan, orang tua, tetangga, teman kerja, dan sebagainya',
        ],
        ['5', 'Jenis kontak', 'Kontak serumah/kontak erat'],
        ['6', 'Alamat', 'Alamat tempat tinggal'],
        ['7', 'Nomor telepon', 'Nomor kontak jika tersedia'],
        ['8', 'Lama kontak', 'Informasi durasi interaksi'],
        ['9', 'Frekuensi kontak', 'Seberapa sering berinteraksi'],
      ],
    },
    {
      id: 'hasil-skrining',
      title: 'C. Data Hasil Skrining',
      intro:
        'Bagian ini digunakan untuk mencatat hasil skrining awal setiap kontak.',
      headers: ['No.', 'Informasi', 'Keterangan'],
      rows: [
        ['1', 'Riwayat batuk', 'Ada/tidak'],
        ['2', 'Gejala lainnya', 'Dicatat sesuai formulir skrining'],
        ['3', 'Riwayat TB', 'Pernah/tidak pernah'],
        ['4', 'Riwayat pengobatan', 'Ada/tidak ada'],
        ['5', 'Faktor risiko', 'Dicatat jika tersedia dan relevan'],
        ['6', 'Tanggal skrining', 'Tanggal pelaksanaan skrining'],
        ['7', 'Petugas pemeriksa', 'Nama petugas atau kader'],
      ],
    },
    {
      id: 'rujukan',
      title: 'D. Data Rujukan dan Pemeriksaan',
      intro:
        'Bagian ini digunakan untuk mengetahui perkembangan kontak setelah dilakukan skrining.',
      headers: ['No.', 'Nama Data', 'Keterangan'],
      rows: [
        ['1', 'Status rujukan', 'Dirujuk/belum dirujuk'],
        ['2', 'Tanggal rujukan', 'Tanggal diarahkan ke fasyankes'],
        ['3', 'Tujuan rujukan', 'Puskesmas/rumah sakit'],
        ['4', 'Tanggal pemeriksaan', 'Tanggal kontak menjalani pemeriksaan'],
        ['5', 'Jenis pemeriksaan', 'Sesuai pemeriksaan yang dilakukan'],
        ['6', 'Hasil pemeriksaan', 'Diisi berdasarkan hasil resmi'],
        [
          '7',
          'Tindak lanjut',
          'Pemeriksaan lanjutan/pengobatan/TPT atau lainnya',
        ],
      ],
    },
  ],
  statuses: {
    title: 'E. Status Akhir Kontak',
    description:
      'Setiap kontak perlu memiliki status yang jelas agar tidak terjadi kehilangan pemantauan.',
    note: 'Status tersebut merupakan usulan kategori tampilan website. Penetapan status klinis dan status program harus mengikuti hasil pemeriksaan serta ketentuan sistem pencatatan resmi.',
    items: [
      'Belum dikunjungi',
      'Sudah diidentifikasi',
      'Sudah diskrining',
      'Dirujuk ke fasilitas kesehatan',
      'Menunggu pemeriksaan',
      'Sudah diperiksa',
      'Memerlukan tindak lanjut',
      'Memenuhi kriteria TPT',
      'Dalam pemantauan',
      'Selesai ditindaklanjuti',
    ],
  },
};

export const roles = {
  eyebrow: 'Pembagian Tugas',
  title: 'Pembagian Tugas Pengguna',
  description:
    'Bagian ini membantu pengguna memahami batas tugas dan tanggung jawab masing-masing.',
  items: [
    {
      id: 'petugas',
      title: 'A. Petugas Kesehatan',
      icon: UserRound,
      accent: 'brand',
      tasks: [
        'Mengidentifikasi pasien indeks.',
        'Menyiapkan informasi pasien untuk kegiatan investigasi kontak.',
        'Memberikan arahan kepada kader.',
        'Melakukan atau mengawasi proses investigasi kontak.',
        'Memverifikasi kelengkapan data.',
        'Melakukan pemeriksaan dan menetapkan tindak lanjut klinis sesuai kewenangan.',
        'Memperbarui hasil pemeriksaan pada sistem informasi TB.',
        'Melakukan evaluasi dan pelaporan.',
      ],
    },
    {
      id: 'kader',
      title: 'B. Kader TB',
      icon: HeartHandshake,
      accent: 'success',
      tasks: [
        'Berkoordinasi dengan petugas puskesmas.',
        'Menerima informasi pasien yang akan dilakukan investigasi kontak sesuai prosedur.',
        'Melakukan kunjungan rumah berdasarkan persetujuan dan ketentuan yang berlaku.',
        'Mengidentifikasi kontak serumah dan kontak erat.',
        'Melakukan skrining gejala sesuai formulir.',
        'Mencatat hasil investigasi.',
        'Mengarahkan kontak yang perlu diperiksa ke fasilitas kesehatan.',
        'Menyerahkan hasil pencatatan kepada petugas kesehatan.',
        'Membantu memantau kontak yang belum menjalani pemeriksaan.',
      ],
    },
    {
      id: 'masyarakat',
      title: 'C. Masyarakat dan Keluarga Pasien',
      icon: Users,
      accent: 'accent',
      tasks: [
        'Memberikan informasi yang benar mengenai anggota keluarga dan orang yang memiliki riwayat kontak.',
        'Membantu petugas melakukan identifikasi kontak.',
        'Bersedia mengikuti skrining dan pemeriksaan sesuai anjuran tenaga kesehatan.',
        'Mengikuti arahan petugas kesehatan apabila memerlukan pemeriksaan lanjutan.',
        'Menjaga komunikasi dengan kader atau petugas kesehatan.',
        'Mendukung upaya pencegahan TB di lingkungan keluarga.',
      ],
    },
  ],
};

export const tips = {
  eyebrow: 'Checklist',
  title: 'Tips Menghindari Kesalahan Penginputan Data',
  description:
    'Agar data investigasi kontak dapat digunakan dengan baik, perhatikan beberapa hal berikut:',
  items: [
    'Pastikan identitas pasien indeks benar.',
    'Masukkan satu orang kontak sebagai satu data individu.',
    'Hindari memasukkan orang yang sama lebih dari satu kali.',
    'Pastikan jenis kontak dipilih dengan benar.',
    'Jangan mengosongkan kolom wajib yang tersedia.',
    'Masukkan hasil skrining sesuai jawaban kontak.',
    'Jangan mengisi hasil diagnosis berdasarkan perkiraan.',
    'Pastikan tanggal kunjungan dan pemeriksaan benar.',
    'Lakukan pemeriksaan ulang sebelum menyimpan data.',
    'Perbarui status kontak apabila sudah ada hasil pemeriksaan atau tindak lanjut.',
  ],
  privacy: {
    title: 'Perlindungan Data dan Kerahasiaan',
    description:
      'Data pasien TB merupakan informasi kesehatan yang harus dilindungi.',
    items: [
      'Jangan menyebarkan identitas pasien melalui media sosial atau grup umum.',
      'Gunakan akun yang diberikan kepada pengguna berwenang.',
      'Jangan membagikan kata sandi.',
      'Batasi akses data sesuai tugas masing-masing.',
      'Dapatkan persetujuan sesuai prosedur sebelum melakukan kunjungan dan pengumpulan informasi.',
      'Jangan menggunakan data pasien untuk kepentingan di luar pelayanan dan program kesehatan.',
    ],
  },
};

export const examples = {
  eyebrow: 'Contoh Pengisian',
  title: 'Pengisian yang Benar dan Salah',
  description:
    'Bandingkan contoh berikut agar penginputan data lebih akurat dan lengkap.',
  items: [
    {
      id: 'e1',
      text: 'Nama kontak tidak lengkap',
      status: 'Perlu diperbaiki',
      correct: false,
    },
    {
      id: 'e2',
      text: 'Usia tidak diisi',
      status: 'Data belum lengkap',
      correct: false,
    },
    {
      id: 'e3',
      text: 'Jenis kontak tidak dipilih',
      status: 'Perlu diperbaiki',
      correct: false,
    },
    {
      id: 'e4',
      text: 'Hasil skrining sesuai wawancara',
      status: 'Benar',
      correct: true,
    },
    {
      id: 'e5',
      text: 'Hasil pemeriksaan berdasarkan dokumen resmi',
      status: 'Benar',
      correct: true,
    },
  ],
};

export const dashboardStats = {
  eyebrow: 'Dashboard Contoh',
  title: 'Pemantauan Investigasi Kontak',
  description:
    'Contoh tampilan data untuk memahami bagaimana hasil investigasi kontak digunakan dalam evaluasi program.',
  items: [
    { id: 'pasien', label: 'Total pasien indeks', value: 24, icon: UserRound },
    { id: 'kontak', label: 'Total kontak ditemukan', value: 86, icon: Users },
    { id: 'skrining', label: 'Sudah diskrining', value: 71, icon: Search },
    { id: 'diperiksa', label: 'Sudah diperiksa', value: 48, icon: Activity },
    { id: 'belum', label: 'Belum diperiksa', value: 23, icon: FileWarning },
    { id: 'tindak', label: 'Perlu tindak lanjut', value: 15, icon: BarChart3 },
  ],
};

export const simulationFields = {
  eyebrow: 'Simulasi',
  title: 'Simulasi Penginputan Data',
  description:
    'Latih pengisian formulir dengan data pasien fiktif. Formulir ini tidak menyimpan data pasien sebenarnya.',
  sampleHint:
    'Contoh data fiktif: pasien indeks “Budi Santoso”, 2 anggota keluarga, kontak “Siti Aminah”, usia 34 tahun, istri, kontak serumah.',
};

export const faqItems = [
  {
    id: 'faq-1',
    question: 'Apa perbedaan pasien indeks dan kontak?',
    answer:
      'Pasien indeks adalah pasien TB yang menjadi dasar pelacakan. Kontak adalah orang yang memiliki riwayat interaksi dengan pasien indeks, baik kontak serumah maupun kontak erat.',
  },
  {
    id: 'faq-2',
    question: 'Apa perbedaan kontak serumah dan kontak erat?',
    answer:
      'Kontak serumah tinggal dalam satu rumah dengan pasien. Kontak erat sering berinteraksi dekat dan berulang, misalnya tetangga, teman kerja, atau teman sekolah, tetapi tidak tinggal serumah.',
  },
  {
    id: 'faq-3',
    question: 'Siapa yang boleh melakukan penginputan data?',
    answer:
      'Penginputan data dilakukan oleh pengguna berwenang sesuai pembagian tugas, biasanya petugas kesehatan atau kader yang telah mendapatkan pembekalan dan akses sistem.',
  },
  {
    id: 'faq-4',
    question: 'Bagaimana jika kontak menolak pemeriksaan?',
    answer:
      'Jelaskan pentingnya pemeriksaan dengan bahasa yang mudah dipahami, jaga kerahasiaan identitas, dan libatkan petugas kesehatan untuk pendekatan lebih lanjut sesuai prosedur.',
  },
  {
    id: 'faq-5',
    question: 'Apa yang harus dilakukan jika data belum lengkap?',
    answer:
      'Lengkapi data yang kurang sebelum menyimpan atau segera perbarui setelah informasi tersedia. Jangan mengosongkan kolom wajib dan hindari mengisi berdasarkan perkiraan.',
  },
  {
    id: 'faq-6',
    question: 'Apakah kader boleh menentukan diagnosis TB?',
    answer:
      'Tidak. Kader melakukan skrining dan pencatatan berdasarkan panduan. Diagnosis ditentukan oleh tenaga kesehatan melalui pemeriksaan yang sesuai.',
  },
  {
    id: 'faq-7',
    question: 'Bagaimana menjaga kerahasiaan data pasien?',
    answer:
      'Jangan sebarkan identitas melalui media sosial atau grup umum, gunakan akun resmi, jangan bagikan kata sandi, batasi akses sesuai tugas, dan gunakan data hanya untuk pelayanan serta program kesehatan.',
  },
];

export const closing = {
  title: 'Bersama Kita Putus Rantai Penularan TB!',
  paragraphs: [
    'Investigasi kontak bukan sekadar kegiatan mendata orang yang pernah berinteraksi dengan pasien TB. Kegiatan ini merupakan langkah penting untuk menemukan orang yang membutuhkan pemeriksaan dan memastikan mereka memperoleh tindak lanjut yang tepat.',
    'Penginputan data yang lengkap, benar, dan tepat waktu akan membantu petugas kesehatan melakukan pemantauan serta mengevaluasi keberhasilan program penanggulangan TB.',
  ],
  reminders: [
    {
      title: 'DATA TEPAT',
      text: 'Identitas dan hasil skrining dicatat sesuai kondisi sebenarnya.',
    },
    {
      title: 'DATA LENGKAP',
      text: 'Setiap kontak yang ditemukan harus didokumentasikan.',
    },
    {
      title: 'TINDAK LANJUT',
      text: 'Setiap kontak yang membutuhkan pemeriksaan harus diarahkan ke fasilitas kesehatan.',
    },
  ],
  cta: 'Mari bersama mewujudkan investigasi kontak TB yang lebih terarah, terpantau, dan berkualitas.',
};

export const team = {
  eyebrow: 'Tim Penyusun',
  title: 'Kelompok Pengembang Website',
  description:
    'Website edukasi ini disusun oleh delapan anggota kelompok sebagai media pembelajaran panduan penginputan data investigasi kontak TB.',
  members: [
    { id: 'm1', name: 'Luna Maryana Manullang', nim: '241000277' },
    { id: 'm2', name: 'Ruth Elisa Hannaya Br. Tobing', nim: '241000285' },
    { id: 'm3', name: 'Tyas Pramudita Putri Hidayat', nim: '241000291' },
    { id: 'm4', name: 'Herlen Mispa Br Maha', nim: '241000298' },
    { id: 'm5', name: 'Adja Nazwah Syarifahsyah', nim: '241000323' },
    { id: 'm6', name: 'Fitria Melynda', nim: '241000348' },
    { id: 'm7', name: 'Tahnia Haura Nabila', nim: '241000367' },
    { id: 'm8', name: 'Safira Azzahra', nim: '241000370' },
  ],
};

export const references = {
  eyebrow: 'REFERENSI',
  title: 'Landasan dan Pedoman',
  description:
    'Sistem ini dikembangkan dengan mengacu pada pedoman dan ketentuan resmi Kementerian Kesehatan Republik Indonesia terkait pelaksanaan program tuberkulosis.',
  items: [
    {
      id: 1,
      institution: 'Kementerian Kesehatan Republik Indonesia',
      year: 2023,
      title:
        'Surat Edaran Nomor HK.02.02/C/2175/2023 tentang Pelaksanaan Investigasi Kontak dan Terapi Pencegahan TBC.',
    },
    {
      id: 2,
      institution: 'Kementerian Kesehatan Republik Indonesia',
      year: 2023,
      title: 'Petunjuk Teknis Penggunaan Sistem Informasi Tuberkulosis (SITB).',
    },
  ],
};

export const featureIcons = {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  Shield,
};
