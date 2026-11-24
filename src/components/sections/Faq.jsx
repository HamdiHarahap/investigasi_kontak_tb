import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../ui/Container'
import { faqItems } from '../../data/data'

export default function Faq() {
  const [openId, setOpenId] = useState(faqItems[0].id)

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
            Tanya Jawab
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
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
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span className="font-display text-base font-semibold text-ink sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={[
                      'h-5 w-5 shrink-0 text-brand-700 transition-transform',
                      isOpen ? 'rotate-180' : '',
                    ].join(' ')}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-muted sm:text-base">
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
