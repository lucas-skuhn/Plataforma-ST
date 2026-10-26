export type ExperienceId = "coach" | "psychology" | "psychopedagogy" | "ceo-mentorship"

export type Experience = {
  id: ExperienceId
  category: string
  title: string
  profile: string
  summary: string
  formation: string
  experience: string
  duration: string
  unit: string
  price: number
}

export type CartItem = {
  id: string
  title: string
  description: string
  price: number
  quantity: number
}

export const experiences: Experience[] = [
  {
    id: "coach",
    category: "Performance",
    title: "Coaching de League of Legends",
    profile: "Perfil profissional demonstrativo",
    summary: "Treino individual para transformar leitura de jogo em decisões mais consistentes.",
    formation: "Cursos de coaching e análise de desempenho — exemplo de cadastro a validar.",
    experience: "Experiência ilustrativa em análise de VOD, macro, draft e construção de rotina competitiva.",
    duration: "60 min",
    unit: "sessão",
    price: 180,
  },
  {
    id: "psychology",
    category: "Saúde mental",
    title: "Psicologia do esporte",
    profile: "Psicólogo(a) da equipe · perfil demonstrativo",
    summary: "Apoio para cuidar da mente dentro e fora do servidor, no ritmo de cada atleta.",
    formation: "Graduação em Psicologia e especialização em Psicologia do Esporte — dados demonstrativos.",
    experience: "Atuação ilustrativa com ansiedade pré-jogo, foco, confiança e preparação emocional.",
    duration: "50 min",
    unit: "sessão",
    price: 220,
  },
  {
    id: "psychopedagogy",
    category: "Desenvolvimento",
    title: "Acompanhamento psicopedagógico",
    profile: "Psicopedagogo(a) da equipe · perfil demonstrativo",
    summary: "Estratégias para equilibrar estudos, rotina de treino, concentração e bem-estar.",
    formation: "Especialização em Psicopedagogia — formação demonstrativa, a confirmar com o profissional.",
    experience: "Acompanhamento ilustrativo em organização dos estudos, hábitos, foco e aprendizagem.",
    duration: "50 min",
    unit: "sessão",
    price: 170,
  },
  {
    id: "ceo-mentorship",
    category: "Gestão & carreira",
    title: "Mentoria com o CEO",
    profile: "Ramon “Revolker” Espessoto · CEO e proprietário",
    summary: "Uma conversa estratégica sobre os bastidores de uma organização de esports.",
    formation: "CEO e proprietário da Smoke Tram Esports, organização fundada em 2022.",
    experience: "Vivência prática em gestão de equipe, construção de comunidade, posicionamento e cenário competitivo.",
    duration: "60 min",
    unit: "mentoria",
    price: 350,
  },
]

export function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(value)
}
