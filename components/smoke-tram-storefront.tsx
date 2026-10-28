"use client"

import Image from "next/image"
import { useCallback, useState } from "react"
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  ShoppingBag,
  Trophy,
  UsersRound,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { SmokeTramCartDialog } from "@/components/smoke-tram-cart-dialog"
import { SmokeTramExperienceCard } from "@/components/smoke-tram-experience-card"
import { SmokeTramJerseySection } from "@/components/smoke-tram-jersey-section"
import { SmokeTramLogo } from "@/components/smoke-tram-logo"
import { experiences, type CartItem } from "@/lib/storefront-data"

export default function SmokeTramStorefront() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [announcement, setAnnouncement] = useState("")
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  const addToCart = useCallback((newItem: CartItem) => {
    setCart((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === newItem.id)
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + newItem.quantity } : item,
        )
      }
      return [...currentItems, newItem]
    })
    setAnnouncement(`${newItem.title} adicionado à sacola.`)
    setCartOpen(true)
  }, [])

  const closeCart = useCallback(() => setCartOpen(false), [])

  const changeQuantity = useCallback((itemId: string, difference: number) => {
    setCart((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity + difference) } : item,
      ),
    )
  }, [])

  const removeFromCart = useCallback((itemId: string) => {
    setCart((currentItems) => currentItems.filter((item) => item.id !== itemId))
  }, [])

  return (
    <main className="smoke-storefront" id="inicio">
      <div className="demo-banner">
        <span className="demo-banner__dot" aria-hidden="true" />
        Plataforma em evolução <span className="demo-banner__separator">/</span> catálogo, conversão e operação real
      </div>

      <header className="site-header">
        <div className="shell site-header__inner">
          <a className="brand-link" href="#inicio" aria-label="Smoke Tram Esports — início">
            <SmokeTramLogo alt="Logotipo Smoke Tram Esports." className="brand-link__logo" />
            <span className="brand-link__wordmark">
              <strong>SMOKE TRAM</strong>
              <small>ESPORTS · PASSO FUNDO/RS</small>
            </span>
          </a>

          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#experiencias">Experiências</a>
            <a href="#jerseys">Jersey</a>
            <a href="#sobre">A Smoke Tram</a>
            <a href="https://www.manageresports.com" target="_blank" rel="noreferrer noopener" aria-label="Manager Esports (abre em nova guia)">Manager Esports</a>
            <a href="mailto:smoketramesports@gmail.com?subject=Contato%20Smoke%20Tram">Contato</a>
          </nav>

          <Button
            type="button"
            variant="outline"
            className="cart-trigger"
            onClick={() => setCartOpen(true)}
            aria-label={`Abrir sacola com ${itemCount} ${itemCount === 1 ? "item" : "itens"}`}
          >
            <ShoppingBag data-icon="inline-start" aria-hidden="true" />
            <span>Sacola</span>
            <span className="cart-trigger__count" aria-hidden="true">{itemCount}</span>
          </Button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="shell hero__grid">
          <div className="hero-copy">
            <p className="eyebrow hero-copy__eyebrow"><span aria-hidden="true" /> O PRÓXIMO LEVEL É SEU</p>
            <h1 id="hero-title">Seu próximo <em>level</em><br />começa no <span>bonde.</span></h1>
            <p className="hero-copy__intro">
              Treino todos os dias, com suporte real de coaches e pro players, além de um sistema que transforma dedicação em benefícios e evolução contínua.
            </p>
            <div className="hero-actions">
              <a className={buttonVariants({ variant: "default", size: "lg", className: "hero-primary-cta" })} href="mailto:smoketramesports@gmail.com?subject=Quero%20agendar%20uma%20experi%C3%AAncia%20Smoke%20Tram">
                Agendar experiência
                <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              </a>
              <a className="hero-secondary-cta" href="https://www.manageresports.com" target="_blank" rel="noreferrer noopener">
                Conhecer a Manager Esports <ArrowDown aria-hidden="true" />
              </a>
            </div>
            <div className="hero-copy__signature">
              <span className="hero-copy__signature-mark" aria-hidden="true">ST</span>
              <p><strong>Ninguém para o bonde.</strong><br />Uma organização de esports de Passo Fundo/RS.</p>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/smoke-hero-athlete.png"
              alt="Jogador de esports em uma arena escura, sob luzes teal, concentrado diante dos monitores."
              fill
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
              className="hero-visual__image"
            />
            <div className="hero-visual__overlay" aria-hidden="true" />
            <div className="hero-visual__topline">
              <span>SMOKE TRAM</span>
              <span>EST. 2022</span>
            </div>
            <div className="hero-visual__caption">
              <div>
                <p>DO SUL PARA O CENÁRIO</p>
                <strong>Rumo ao Tier 1.</strong>
              </div>
              <span className="hero-visual__arrow" aria-hidden="true"><ArrowUpRight /></span>
            </div>
            <div className="hero-visual__corner" aria-hidden="true">ST / 26—27</div>
          </div>
        </div>
      </section>

      <section className="numbers-strip" aria-label="Smoke Tram em números">
        <div className="shell numbers-strip__grid">
          <div className="number-stat">
            <span>DESDE</span>
            <strong>2022</strong>
            <small>fundação em Passo Fundo</small>
          </div>
          <div className="number-stat">
            <Trophy aria-hidden="true" />
            <strong>23</strong>
            <small>títulos conquistados</small>
          </div>
          <div className="number-stat">
            <UsersRound aria-hidden="true" />
            <strong>14</strong>
            <small>pessoas na staff</small>
          </div>
          <div className="number-stat number-stat--location">
            <MapPin aria-hidden="true" />
            <strong>RS</strong>
            <small>Passo Fundo · Brasil</small>
          </div>
        </div>
      </section>

      <section className="experiences-section shell" id="experiencias" aria-labelledby="experiences-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ESCOLHA SUA PRÓXIMA JOGADA</p>
            <h2 id="experiences-title">Evolua com quem <span>entende do jogo.</span></h2>
          </div>
          <p className="section-description">
            Do treino à preparação emocional: encontre experiências pensadas para quem leva esports a sério.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <SmokeTramExperienceCard key={experience.id} experience={experience} onAdd={addToCart} />
          ))}
        </div>

        <p className="demo-disclaimer">
          <span aria-hidden="true">*</span> Perfis, formações, experiências e preços são exemplos para apresentação. Confirme os dados, a disponibilidade e os valores com cada profissional antes de publicar.
        </p>
      </section>

      <SmokeTramJerseySection onAdd={addToCart} />

      <section className="about-section manager-spotlight" id="sobre" aria-labelledby="about-title">
        <div className="shell about-section__grid">
          <div className="about-copy manager-copy">
            <p className="eyebrow manager-eyebrow">QUEM SOMOS</p>
            <h2 id="about-title">Uma parceria do Bonde.<br /><span>Manager Esports</span></h2>
            <p>
              A Manager Esports ajuda jogadores, estudantes e organizações a transformar rotina, planejamento e decisões em vantagem competitiva. Com foco em gestão de time, draft, agenda e performance, a plataforma entrega clareza para cada etapa da preparação.
            </p>
            <a className="about-link manager-link" href="https://www.manageresports.com" target="_blank" rel="noreferrer noopener">
              Conheça a Manager Esports <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="about-panel manager-panel">
            <div className="about-panel__headline manager-panel__headline">
              <span className="about-panel__mark manager-panel__mark" aria-hidden="true">M</span>
              <div>
                <p>MANAGER ESPORTS</p>
                <strong>Organização para competir.</strong>
              </div>
            </div>
            <div className="about-panel__stats manager-panel__stats">
              <div><strong>7/7</strong><span>rotina estruturada e consistente</span></div>
              <div><strong>+1</strong><span>visibilidade para decisões e planejamento</span></div>
              <div><strong>2x</strong><span>aprimoramento de draft e tática</span></div>
              <div><strong>24/7</strong><span>acesso ao controle do time e da agenda</span></div>
            </div>
            <div className="about-panel__footer manager-panel__footer">
              <span>LEAGUE OF LEGENDS</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell site-footer__main">
          <a className="brand-link brand-link--footer" href="#inicio" aria-label="Smoke Tram Esports — voltar ao início">
            <SmokeTramLogo alt="Logotipo Smoke Tram Esports." className="brand-link__logo" />
            <span className="brand-link__wordmark">
              <strong>SMOKE TRAM</strong>
              <small>ESPORTS</small>
            </span>
          </a>
          <p className="site-footer__slogan">Ninguém para o bonde.</p>
          <div className="site-footer__links" aria-label="Contato e redes sociais">
            <a href="mailto:smoketramesports@gmail.com">E-mail</a>
            <a href="https://www.manageresports.com" target="_blank" rel="noreferrer noopener">Manager Esports</a>
            <a href="https://www.instagram.com/smoketramesports/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://x.com/smoketram" target="_blank" rel="noreferrer">X</a>
          </div>
        </div>
        <div className="shell site-footer__bottom">
          <span>© 2026 Smoke Tram Esports · Passo Fundo/RS</span>
          <span>Protótipo de apresentação · valores e perfis ilustrativos</span>
        </div>
      </footer>

      <p className="sr-only" aria-live="polite">{announcement}</p>

      {cartOpen && (
        <SmokeTramCartDialog
          items={cart}
          onClose={closeCart}
          onRemove={removeFromCart}
          onQuantityChange={changeQuantity}
        />
      )}
    </main>
  )
}
