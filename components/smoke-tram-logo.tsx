"use client"

import { useState } from "react"

const logoSource =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smoke_Tram_eSports_-_PNG-cgPOA0Tpe6fPpC5ZAMFHgyluXPOue3.png"

type SmokeTramLogoProps = {
  alt: string
  className?: string
}

export function SmokeTramLogo({ alt, className }: SmokeTramLogoProps) {
  const [source, setSource] = useState(logoSource)

  return (
    <img
      src={source}
      width={512}
      height={496}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setSource("/smoke-tram-logo.png")}
    />
  )
}
