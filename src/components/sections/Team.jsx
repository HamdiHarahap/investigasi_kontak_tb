import Container from '../ui/Container'
import { team } from '../../data/data'

export default function Team() {
  return (
    <section id="tim" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
            {team.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {team.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{team.description}</p>
        </div>

        <ol className="mt-12 grid gap-x-8 gap-y-0 sm:grid-cols-2">
          {team.members.map((member, index) => (
            <li
              key={member.id}
              className="flex items-start gap-4 border-t border-line py-5"
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 60}
            >
              <span className="font-display text-sm font-semibold text-brand-700">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="font-display text-base font-semibold text-ink">{member.name}</p>
                <p className="mt-1 text-sm text-muted">NIM {member.nim}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
