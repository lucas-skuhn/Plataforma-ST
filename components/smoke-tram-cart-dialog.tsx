"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { formatPrice, type CartItem } from "@/lib/storefront-data"

type SmokeTramCartDialogProps = {
  items: CartItem[]
  onClose: () => void
  onRemove: (itemId: string) => void
  onQuantityChange: (itemId: string, difference: number) => void
}

export function SmokeTramCartDialog({
  items,
  onClose,
  onRemove,
  onQuantityChange,
}: SmokeTramCartDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const message = encodeURIComponent(
    [
      "Olá, Smoke Tram! Tenho interesse em conversar sobre este pedido:",
      ...items.map((item) => `• ${item.title} — ${item.description} — ${item.quantity}x ${formatPrice(item.price)}`),
      `Total estimado: ${formatPrice(total)}`,
      "Sei que este é um mockup de demonstração.",
    ].join("\n"),
  )

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleClose = () => onClose()
    dialog.addEventListener("close", handleClose)
    dialog.showModal()

    return () => {
      dialog.removeEventListener("close", handleClose)
      if (dialog.open) dialog.close()
    }
  }, [onClose])

  return (
    <dialog
      ref={dialogRef}
      className="cart-dialog"
      aria-labelledby="cart-title"
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current.close()
      }}
    >
      <div className="cart-dialog__panel">
        <header className="cart-dialog__header">
          <div>
            <p className="eyebrow">SMOKE TRAM STORE</p>
            <h2 id="cart-title">Sua sacola</h2>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            className="cart-dialog__close"
            onClick={() => dialogRef.current?.close()}
            aria-label="Fechar sacola"
          >
            <X aria-hidden="true" />
          </Button>
        </header>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty__icon"><ShoppingBag aria-hidden="true" /></div>
            <h3>Sua sacola ainda está vazia.</h3>
            <p>Explore as experiências e a jersey de demonstração para começar.</p>
            <Button type="button" onClick={() => dialogRef.current?.close()}>
              Explorar a vitrine
            </Button>
          </div>
        ) : (
          <>
            <ul className="cart-list" aria-label="Itens na sacola">
              {items.map((item) => (
                <li className="cart-item" key={item.id}>
                  <div className="cart-item__summary">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <strong>{formatPrice(item.price)}</strong>
                  </div>
                  <div className="cart-item__actions">
                    <div className="cart-item__quantity" aria-label={`Quantidade: ${item.quantity}`}>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => onQuantityChange(item.id, -1)}
                        disabled={item.quantity <= 1}
                        aria-label={`Diminuir quantidade de ${item.title}`}
                      >
                        <Minus aria-hidden="true" />
                      </Button>
                      <span aria-live="polite">{item.quantity}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => onQuantityChange(item.id, 1)}
                        aria-label={`Aumentar quantidade de ${item.title}`}
                      >
                        <Plus aria-hidden="true" />
                      </Button>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      className="cart-item__remove"
                      onClick={() => onRemove(item.id)}
                      aria-label={`Remover ${item.title} da sacola`}
                    >
                      <Trash2 aria-hidden="true" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <div className="cart-summary__total">
                <span>Total estimado</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <p>Valores e disponibilidade são demonstrativos; nenhum pagamento será processado.</p>
              <a
                className={buttonVariants({ variant: "default", size: "lg", className: "cart-summary__whatsapp" })}
                href={`https://wa.me/5554999791392?text=${message}`}
                target="_blank"
                rel="noreferrer"
              >
                Conversar sobre o pedido
                <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              </a>
            </div>
          </>
        )}
      </div>
    </dialog>
  )
}
