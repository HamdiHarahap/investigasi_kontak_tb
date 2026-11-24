import PDFDocument from 'pdfkit'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const output = path.join(__dirname, '..', 'cara_pembuatan.pdf')

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 56, bottom: 56, left: 56, right: 56 },
  info: {
    Title: 'Cara Pembuatan Website Panduan Investigasi Kontak TB',
    Author: 'Investigasi Kontak TB',
  },
})

doc.pipe(fs.createWriteStream(output))

const ink = '#152433'
const muted = '#5a6b7b'
const brand = '#245d96'

function heading(text) {
  doc.moveDown(0.6)
  doc.fillColor(brand).font('Helvetica-Bold').fontSize(13).text(text)
  doc.moveDown(0.35)
}

function paragraph(text) {
  doc.fillColor(ink).font('Helvetica').fontSize(11).text(text, {
    align: 'justify',
    lineGap: 2.5,
  })
  doc.moveDown(0.45)
}

function bullet(text) {
  doc.fillColor(ink).font('Helvetica').fontSize(11).text(`•  ${text}`, {
    indent: 8,
    lineGap: 2,
  })
  doc.moveDown(0.2)
}

doc.fillColor(brand).font('Helvetica-Bold').fontSize(18).text('Cara Pembuatan Website')
doc.moveDown(0.25)
doc
  .fillColor(muted)
  .font('Helvetica')
  .fontSize(11)
  .text('Panduan Penginputan Data Investigasi Kontak Tuberkulosis (TB)')
doc.moveDown(0.15)
doc.fillColor(muted).fontSize(10).text('Penjelasan umum — singkat dan mudah dipahami')
doc.moveDown(0.8)
doc
  .strokeColor('#d7e1ec')
  .lineWidth(1)
  .moveTo(doc.page.margins.left, doc.y)
  .lineTo(doc.page.width - doc.page.margins.right, doc.y)
  .stroke()
doc.moveDown(0.8)

heading('1. Tujuan website')
paragraph(
  'Website ini dibuat sebagai media edukasi satu halaman untuk membantu petugas kesehatan, kader TB, dan masyarakat memahami proses investigasi kontak TB. Fokus utamanya adalah alur pelacakan kontak, panduan penginputan data, pembagian tugas pengguna, serta latihan pengisian data fiktif.',
)

heading('2. Teknologi yang dipakai')
paragraph('Secara umum, project ini memakai:')
bullet('React — untuk membangun tampilan halaman secara modular.')
bullet('Vite — sebagai tools untuk menjalankan dan membangun project.')
bullet('Tailwind CSS — untuk styling tampilan tanpa menulis banyak CSS manual.')
bullet('AOS — untuk animasi sederhana saat halaman di-scroll.')
bullet('Lucide React — untuk ikon pada bagian informasi dan dashboard contoh.')

heading('3. Langkah pembuatan secara umum')
paragraph(
  'Pembuatan dilakukan bertahap agar struktur tetap rapi dan mudah dikembangkan.',
)
bullet('Membuat project React dengan Vite.')
bullet('Menginstal dan mengatur Tailwind CSS, AOS, serta Lucide React.')
bullet('Menyusun struktur folder: komponen UI, layout, section, data, dan hooks.')
bullet('Membuat komponen kecil yang bisa dipakai ulang, seperti tombol dan input form.')
bullet(
  'Membangun tiap bagian halaman: Navbar, Hero, Mengenal IK TB, Permasalahan, Dampak, Alur, Panduan Penginputan, Pembagian Tugas, Tips, Contoh Pengisian, Dashboard, Simulasi, FAQ, Penutup, dan Footer.',
)
bullet(
  'Menaruh seluruh konten edukasi di satu file data agar mudah diganti mengikuti rancangan.',
)
bullet(
  'Menambahkan fitur interaktif: alur tahapan yang bisa diklik, simulasi formulir, contoh benar/salah, dashboard contoh, dan FAQ.',
)
bullet('Menghubungkan semua bagian di App.jsx, lalu menguji tampilan di desktop dan mobile.')

heading('4. Struktur halaman')
paragraph('Website disusun dalam satu halaman dengan beberapa section:')
bullet('Navbar — navigasi menuju bagian halaman dan tombol simulasi data.')
bullet('Hero — judul utama panduan investigasi kontak TB beserta tombol aksi.')
bullet('Mengenal IK TB — pengertian, kontak serumah/erat, manfaat, dan pelaksana.')
bullet('Permasalahan — kendala penginputan data dari petugas, kader, masyarakat, dan sistem.')
bullet('Dampak — risiko jika data tidak diinput dengan baik.')
bullet('Alur — tujuh tahap investigasi kontak yang bisa diklik untuk detail.')
bullet('Panduan Penginputan — tutorial data pasien indeks, kontak, skrining, dan rujukan.')
bullet('Pembagian Tugas — peran petugas kesehatan, kader TB, serta masyarakat.')
bullet('Tips — checklist kelengkapan data dan perlindungan kerahasiaan.')
bullet('Contoh Pengisian — perbandingan pengisian yang benar dan yang perlu diperbaiki.')
bullet('Dashboard — contoh indikator pemantauan investigasi kontak.')
bullet('Simulasi — formulir latihan dengan data pasien fiktif.')
bullet('FAQ — pertanyaan yang sering diajukan.')
bullet('Penutup — pesan edukasi pencegahan TB.')
bullet('Footer — ringkasan identitas website dan tautan navigasi.')

heading('5. Cara menjalankan')
paragraph('Setelah dependency terpasang, jalankan perintah berikut di terminal:')
doc.fillColor(ink).font('Courier').fontSize(10)
doc.text('npm install', { indent: 12 })
doc.text('npm run dev', { indent: 12 })
doc.moveDown(0.4)
doc.font('Helvetica').fontSize(11)
paragraph(
  'Website akan berjalan di localhost. Untuk versi produksi, gunakan npm run build lalu npm run preview.',
)

heading('6. Hal yang perlu diingat')
bullet('Konten utama bisa diubah di file src/data/data.js.')
bullet(
  'Formulir simulasi hanya untuk latihan pengisian data fiktif dan tidak menyimpan data pasien sebenarnya.',
)
bullet(
  'Desain memakai warna biru sebagai warna utama, merah untuk penekanan informasi penting, dan hijau untuk status berhasil atau data lengkap.',
)
bullet('Tampilan dibuat responsif agar nyaman digunakan di desktop maupun mobile.')

doc.moveDown(1)
doc
  .strokeColor('#d7e1ec')
  .lineWidth(1)
  .moveTo(doc.page.margins.left, doc.y)
  .lineTo(doc.page.width - doc.page.margins.right, doc.y)
  .stroke()
doc.moveDown(0.6)
doc
  .fillColor(muted)
  .font('Helvetica')
  .fontSize(9)
  .text('Dokumen ini menjelaskan alur pembuatan secara umum, tanpa detail teknis yang rumit.')

doc.end()

await new Promise((resolve, reject) => {
  doc.on('end', resolve)
  doc.on('error', reject)
})

console.log(`Created: ${output}`)
