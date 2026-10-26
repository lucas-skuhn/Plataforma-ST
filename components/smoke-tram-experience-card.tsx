"use client"

import {
  Brain,
  Clock3,
  Crosshair,
  GraduationCap,
  Lightbulb,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatPrice, type CartItem, type Experience, type ExperienceId } from "@/lib/storefront-data"

const experienceIcons: Record<ExperienceId, LucideIcon> = {
  coach: Crosshair,
  psychology: Brain,
  psychopedagogy: GraduationCap,
  "ceo-mentorship": Lightbulb,
}

type SmokeTramExperienceCardProps = {
  experience: Experience
  onAdd: (item: CartItem) => void
}

export function SmokeTramExperienceCard({ experience, onAdd }: SmokeTramExperienceCardProps) {
  const Icon = experienceIcons[experience.id]

  return (
    <article className={`experience-card experience-card--${experience.id}`}>
      <div className="experience-card__topline">
        <div className="experience-card__icon" aria-hidden="true">
          <Icon />
        </div>
        <p className="experience-card__category">{experience.category}</p>
      </div>

      <h3>{experience.title}</h3>
      <p className="experience-card__profile">{experience.profile}</p>
      <p className="experience-card__summary">{experience.summary}</p>

      <dl className="experience-card__credentials">
        <div>
          <dt>Formação</dt>
          <dd>{experience.formation}</dd>
        </div>
        <div>
          <dt>Experiência</dt>
          <dd>{experience.experience}</dd>
        </div>
      </dl>

      <div className="experience-card__duration">
        <Clock3 aria-hidden="true" />
        <span>{experience.duration} por encontro</span>
      </div>

      <div className="experience-card__footer">
        <div>
          <span className="experience-card__price-label">Valor demonstrativo</span>
          <p className="experience-card__price">
            {formatPrice(experience.price)} <span>/ {experience.unit}</span>
          </p>
        </div>
        <Button
          className="experience-card__button"
          onClick={() =>
            onAdd({
              id: `experience-${experience.id}`,
              title: experience.title,
              description: `${experience.profile} · ${experience.duration}`,
              price: experience.price,
              quantity: 1,
            })
          }
        >
          Reservar
          <span data-icon="inline-end" aria-hidden="true">
            +
          </span>
        </Button>
      </div>
    </article>
  )
}
