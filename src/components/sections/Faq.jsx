import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../ui/Container'
import { faqItems } from '../../data/data'

export default function Faq() {
  const [openId, setOpenId] = useState(faqItems[0].id)

  return (
    <section id="faq" className="bg-white py-28 max-[900px]:py-20 max-[520px]:py-14">
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
            Tanya Jawab
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink max-[520px]:text-3xl">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="mt-10 divide-y divide-line border-y border-line" data-aos="fade-up">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <div key={item.id}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-5 text-left max-[520px]:py-4"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span className="min-w-0 font-display text-lg font-semibold text-ink max-[520px]:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={[
                      'mt-1 h-5 w-5 shrink-0 text-brand-700 transition-transform',
                      isOpen ? 'rotate-180' : '',
                    ].join(' ')}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-base leading-relaxed text-muted max-[520px]:pb-4 max-[520px]:text-sm">
                    {item.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
