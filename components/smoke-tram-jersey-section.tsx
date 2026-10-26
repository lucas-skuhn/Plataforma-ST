"use client"

import Image from "next/image"
import { ArrowUpRight, Check, PackageCheck } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { formatPrice, type CartItem } from "@/lib/storefront-data"

const jerseyPrice = 189.9
const jerseySizes = ["P", "M", "G", "GG", "XGG"]

type SmokeTramJerseySectionProps = {
  onAdd: (item: CartItem) => void
}

export function SmokeTramJerseySection({ onAdd }: SmokeTramJerseySectionProps) {
  const [size, setSize] = useState("M")

  function addJersey() {
    onAdd({
      id: `jersey-${size}`,
      title: "Jersey Smoke Tram 26/27",
      description: `Tamanho ${size} · personalização NICKNAME 10`,
      price: jerseyPrice,
      quantity: 1,
    })
  }

  return (
    <section className="jersey-section" id="jerseys" aria-labelledby="jersey-title">
      <div className="shell">
        <div className="section-heading section-heading--jersey">
          <div>
            <p className="eyebrow">FEITA PARA QUEM VIVE O JOGO</p>
            <h2 id="jersey-title">Vista as cores <span>do bonde.</span></h2>
          </div>
          <p className="section-description">
            A jersey Smoke Tram 26/27 baseado no molde e na identidade visual da organização.
          </p>
        </div>

        <div className="jersey-showcase">
          <div className="jersey-preview" aria-label="Modelo frontal da jersey Smoke Tram">
            <Image
              src="/front.webp"
              alt="Modelo frontal da jersey da Smoke Tram em referência"
              fill
              sizes="(max-width: 900px) 100vw, 54vw"
              className="jersey-preview__image"
              priority
            />
            <div className="jersey-preview__glow" aria-hidden="true" />
          </div>

          <div className="jersey-details">
            <p className="eyebrow">DROP 01 · MATCH DAY</p>
            <h3>O bonde também <span>se veste.</span></h3>
            <p className="jersey-details__copy">
              Uma peça de demonstração com base preta, recortes teal e acabamento off-white. O nome e o número podem ser personalizados na versão final.
            </p>

            <ul className="jersey-features">
              <li><Check aria-hidden="true" /> Visual inspirado no molde enviado</li>
              <li><Check aria-hidden="true" /> Personalização de nickname e número</li>
              <li><Check aria-hidden="true" /> Grade de tamanhos demonstrativa</li>
            </ul>

            <div className="jersey-order">
              <label htmlFor="jersey-size">Tamanho</label>
              <select id="jersey-size" value={size} onChange={(event) => setSize(event.target.value)}>
                {jerseySizes.map((jerseySize) => (
                  <option key={jerseySize} value={jerseySize}>{jerseySize}</option>
                ))}
              </select>
            </div>

            <div className="jersey-buy-row">
              <div>
                <span className="experience-card__price-label">Preço ilustrativo</span>
                <p className="jersey-price">{formatPrice(jerseyPrice)}</p>
              </div>
              <Button className="jersey-add-button" onClick={addJersey}>
                Adicionar à sacola
                <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              </Button>
            </div>

            <p className="jersey-footnote">
              <PackageCheck aria-hidden="true" /> Mockup para aprovação. Tecido, grade, personalização, frete e preço final devem ser confirmados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
