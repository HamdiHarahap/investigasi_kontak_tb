import { useState } from 'react'
import Container from '../ui/Container'
import Label from '../ui/Label'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { simulationFields } from '../../data/data'

const initialForm = {
  pasienIndeks: '',
  jumlahKeluarga: '',
  namaKontak: '',
  usiaKontak: '',
  hubungan: '',
  jenisKontak: '',
  hasilSkrining: '',
  statusRujukan: '',
}

export default function Simulation() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [result, setResult] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setResult(null)
  }

  const validate = () => {
    const next = {}
    if (!form.pasienIndeks.trim()) next.pasienIndeks = 'Nama pasien indeks wajib diisi.'
    if (!form.jumlahKeluarga.trim()) next.jumlahKeluarga = 'Jumlah anggota keluarga wajib diisi.'
    if (!form.namaKontak.trim()) next.namaKontak = 'Nama kontak wajib diisi.'
    if (!form.usiaKontak.trim()) next.usiaKontak = 'Usia kontak wajib diisi.'
    if (!form.hubungan) next.hubungan = 'Hubungan wajib dipilih.'
    if (!form.jenisKontak) next.jenisKontak = 'Jenis kontak wajib dipilih.'
    if (!form.hasilSkrining.trim()) next.hasilSkrining = 'Hasil skrining wajib diisi.'
    if (!form.statusRujukan) next.statusRujukan = 'Status rujukan wajib dipilih.'
    return next
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setResult(null)
      return
    }

    setResult({
      message:
        'Latihan berhasil. Data fiktif Anda lengkap dan siap dipelajari sebagai contoh penginputan.',
      summary: form,
    })
  }

  const handleReset = () => {
    setForm(initialForm)
    setErrors({})
    setResult(null)
  }

  const fillSample = () => {
    setForm({
      pasienIndeks: 'Budi Santoso',
      jumlahKeluarga: '2',
      namaKontak: 'Siti Aminah',
      usiaKontak: '34',
      hubungan: 'pasangan',
      jenisKontak: 'serumah',
      hasilSkrining: 'Batuk lebih dari 2 minggu, belum pernah pengobatan TB',
      statusRujukan: 'dirujuk',
    })
    setErrors({})
    setResult(null)
  }

  return (
    <section id="simulasi" className="border-y border-line bg-surface py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
            {simulationFields.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {simulationFields.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {simulationFields.description}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{simulationFields.sampleHint}</p>
        </div>

        <div className="mt-10 bg-white p-6 sm:p-8" data-aos="fade-up">
          <div className="mb-6 flex flex-wrap gap-3">
            <Button type="button" variant="secondary" onClick={fillSample}>
              Isi data contoh
            </Button>
            <Button type="button" variant="secondary" onClick={handleReset}>
              Reset formulir
            </Button>
          </div>

          <form onSubmit={handleSubmit} noValidate className="grid gap-5 md:grid-cols-2">
            <div>
              <Label htmlFor="pasienIndeks" required>
                Nama pasien indeks
              </Label>
              <Input
                id="pasienIndeks"
                name="pasienIndeks"
                value={form.pasienIndeks}
                onChange={handleChange}
                placeholder="Contoh: Budi Santoso"
                error={Boolean(errors.pasienIndeks)}
              />
              {errors.pasienIndeks && (
                <p className="mt-1.5 text-sm text-accent-600">{errors.pasienIndeks}</p>
              )}
            </div>

            <div>
              <Label htmlFor="jumlahKeluarga" required>
                Jumlah anggota keluarga
              </Label>
              <Input
                id="jumlahKeluarga"
                name="jumlahKeluarga"
                type="number"
                min="0"
                value={form.jumlahKeluarga}
                onChange={handleChange}
                placeholder="Contoh: 2"
                error={Boolean(errors.jumlahKeluarga)}
              />
              {errors.jumlahKeluarga && (
                <p className="mt-1.5 text-sm text-accent-600">{errors.jumlahKeluarga}</p>
              )}
            </div>

            <div>
              <Label htmlFor="namaKontak" required>
                Nama kontak
              </Label>
              <Input
                id="namaKontak"
                name="namaKontak"
                value={form.namaKontak}
                onChange={handleChange}
                placeholder="Contoh: Siti Aminah"
                error={Boolean(errors.namaKontak)}
              />
              {errors.namaKontak && (
                <p className="mt-1.5 text-sm text-accent-600">{errors.namaKontak}</p>
              )}
            </div>

            <div>
              <Label htmlFor="usiaKontak" required>
                Usia kontak
              </Label>
              <Input
                id="usiaKontak"
                name="usiaKontak"
                type="number"
                min="0"
                value={form.usiaKontak}
                onChange={handleChange}
                placeholder="Contoh: 34"
                error={Boolean(errors.usiaKontak)}
              />
              {errors.usiaKontak && (
                <p className="mt-1.5 text-sm text-accent-600">{errors.usiaKontak}</p>
              )}
            </div>

            <div>
              <Label htmlFor="hubungan" required>
                Hubungan dengan pasien
              </Label>
              <select
                id="hubungan"
                name="hubungan"
                value={form.hubungan}
                onChange={handleChange}
                className={[
                  'w-full rounded-md border bg-white px-4 py-2.5 text-sm text-ink',
                  'focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none',
                  errors.hubungan ? 'border-accent-500' : 'border-line',
                ].join(' ')}
              >
                <option value="">Pilih hubungan</option>
                <option value="pasangan">Pasangan</option>
                <option value="anak">Anak</option>
                <option value="orang-tua">Orang tua</option>
                <option value="tetangga">Tetangga</option>
                <option value="teman-kerja">Teman kerja</option>
                <option value="lainnya">Lainnya</option>
              </select>
              {errors.hubungan && (
                <p className="mt-1.5 text-sm text-accent-600">{errors.hubungan}</p>
              )}
            </div>

            <div>
              <Label htmlFor="jenisKontak" required>
                Jenis kontak
              </Label>
              <select
                id="jenisKontak"
                name="jenisKontak"
                value={form.jenisKontak}
                onChange={handleChange}
                className={[
                  'w-full rounded-md border bg-white px-4 py-2.5 text-sm text-ink',
                  'focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none',
                  errors.jenisKontak ? 'border-accent-500' : 'border-line',
                ].join(' ')}
              >
                <option value="">Pilih jenis kontak</option>
                <option value="serumah">Kontak serumah</option>
                <option value="erat">Kontak erat</option>
              </select>
              {errors.jenisKontak && (
                <p className="mt-1.5 text-sm text-accent-600">{errors.jenisKontak}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="hasilSkrining" required>
                Hasil skrining
              </Label>
              <Input
                id="hasilSkrining"
                name="hasilSkrining"
                value={form.hasilSkrining}
                onChange={handleChange}
                placeholder="Contoh: Batuk lebih dari 2 minggu"
                error={Boolean(errors.hasilSkrining)}
              />
              {errors.hasilSkrining && (
                <p className="mt-1.5 text-sm text-accent-600">{errors.hasilSkrining}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="statusRujukan" required>
                Status rujukan
              </Label>
              <select
                id="statusRujukan"
                name="statusRujukan"
                value={form.statusRujukan}
                onChange={handleChange}
                className={[
                  'w-full rounded-md border bg-white px-4 py-2.5 text-sm text-ink',
                  'focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none',
                  errors.statusRujukan ? 'border-accent-500' : 'border-line',
                ].join(' ')}
              >
                <option value="">Pilih status</option>
                <option value="dirujuk">Dirujuk</option>
                <option value="belum">Belum dirujuk</option>
              </select>
              {errors.statusRujukan && (
                <p className="mt-1.5 text-sm text-accent-600">{errors.statusRujukan}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <Button type="submit" size="lg">
                Periksa kelengkapan data
              </Button>
            </div>
          </form>

          {result && (
            <div
              role="status"
              className="mt-8 border-l-4 border-success-500 bg-success-50 px-5 py-4"
            >
              <p className="text-sm font-medium text-success-700">{result.message}</p>
              <dl className="mt-4 grid gap-2 text-sm text-ink sm:grid-cols-2">
                <div>
                  <dt className="text-muted">Pasien indeks</dt>
                  <dd className="font-medium">{result.summary.pasienIndeks}</dd>
                </div>
                <div>
                  <dt className="text-muted">Nama kontak</dt>
                  <dd className="font-medium">{result.summary.namaKontak}</dd>
                </div>
                <div>
                  <dt className="text-muted">Jenis kontak</dt>
                  <dd className="font-medium">
                    {result.summary.jenisKontak === 'serumah'
                      ? 'Kontak serumah'
                      : 'Kontak erat'}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">Status rujukan</dt>
                  <dd className="font-medium">
                    {result.summary.statusRujukan === 'dirujuk'
                      ? 'Dirujuk'
                      : 'Belum dirujuk'}
                  </dd>
                </div>
              </dl>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
