export interface PenSpec {
  ponta: string;
  tinta: string;
  secagem: string;
  corpo: string;
  peso: string;
  comprimento: string;
  capacidade: string;
  resistencia: string;
}

export interface PenItem {
  id: string;
  name: string;
  codename: string;
  tip: string;
  category: "fine" | "technical" | "brush" | "special";
  categoryLabel: string;
  badge: string;
  status: string;
  image: string;
  gradient: string;
  accentColor: string;
  tagline: string;
  description: string;
  detailedStory: string;
  strokeWidth: number;
  strokeType: "hairline" | "thin" | "medium" | "thick" | "heavy" | "brush" | "chisel";
  features: string[];
  specs: PenSpec;
  boxContents: string[];
  launchQuarter: string;
  vipSlotsRemaining: number;
  price: string;
  vipPrice: string;
  installments: string;
}

export const pens: PenItem[] = [
  {
    id: "pen-005",
    name: "Pigmentum 0.05 Ultra Micron",
    codename: "MICRON-005-CH",
    tip: "0.05 mm",
    category: "fine",
    categoryLabel: "Fine Liner",
    badge: "Micro-Precisão",
    status: "Lote em Produção",
    image: "/assets/pens/pen_005.jpg",
    gradient: "from-sky-500/10 via-stone-100 to-white",
    accentColor: "#0284c7",
    tagline: "Engenharia microscópica para traços de densidade cirúrgica.",
    description: "Ponta de safira sintética microscópica com vazão micrométrica controlada de 0.008 ml/min. Desenvolvida para hachuras ultradensas, microdetalhes cirúrgicos e ilustrações científicas.",
    detailedStory: "A Pigmentum 0.05 é o limite absoluto da manufatura mecânica em escrita técnica. Com uma abertura capilar de apenas 50 micrômetros lapidada em safira sintética de dureza Mohs 9, este instrumento proporciona uma consistência milimétrica sem precedentes, ideal para cartógrafos, ilustradores médicos e entusiastas de microdetalhes.",
    strokeWidth: 1,
    strokeType: "hairline",
    features: [
      "Ponta de safira sintética indeformável de 0.05mm",
      "Válvula capilar de precisão suíça de fluxo isométrico",
      "Tinta nanomolecular à base de carbono purificado",
      "Secagem ultra-rápida de 0.2 segundos sem fantasma no verso"
    ],
    specs: {
      ponta: "Safira Sintética 0.05mm Lapidada",
      tinta: "Nanopigmentada Carbon Black à Prova D'água",
      secagem: "Ultra-rápida (0.2s)",
      corpo: "Alumínio Aeroespacial 7075 Anodizado",
      peso: "21.5 gramas (centro equilibrado)",
      comprimento: "142 mm com tampa",
      capacidade: "1.8 ml (autonomia para 12.000m de linha)",
      resistencia: "Resistência total a água, álcool e raios UV"
    },
    boxContents: [
      "Instrumento ARTOOLS Pigmentum 0.05",
      "Estojo usinado em alumínio anodizado",
      "Certificado de Calibração Óptica Individual",
      "Guia Técnico de Manutenção e Armazenamento"
    ],
    launchQuarter: "Q4 2026",
    vipSlotsRemaining: 34,
    price: "R$ 179,00",
    vipPrice: "R$ 149,00",
    installments: "3x de R$ 49,66 sem juros"
  },
  {
    id: "pen-010",
    name: "Pigmentum 0.10 Master Tech",
    codename: "ALPHA-010-FLG",
    tip: "0.10 mm",
    category: "fine",
    categoryLabel: "Fine Liner",
    badge: "Edição Flagship",
    status: "Lista VIP Aberta",
    image: "/assets/pens/pen_010.jpg",
    gradient: "from-stone-900/10 via-stone-100 to-white",
    accentColor: "#1c1917",
    tagline: "O instrumento supremo que redefine o padrão mundial de escrita técnica.",
    description: "O modelo emblemático da linha. Calibração suíça a laser com micro-válvula isométrica que garante fluxo 100% contínuo e consistente em qualquer ângulo de inclinação de 360°.",
    detailedStory: "A Master Tech 0.10 é o ápice do design ergonômico e mecânico da ARTOOLS. Usinada em torno CNC de 5 eixos a partir de uma liga maciça especial, oferece centro de massa rebaixado que reduz a fadiga muscular em sessões de desenho de até 8 horas. Sua micro-válvula com membrana elástica responde dinamicamente à pressão exercida, eliminando manchas e borrões.",
    strokeWidth: 1.5,
    strokeType: "thin",
    features: [
      "Ponta encapsulada em aço inoxidável cirúrgico 316L",
      "Grip com recartilhado microdiamantado antiderrapante",
      "Pigmento Carbon Black com densidade óptica de 2.1D",
      "Tampa hermética magnética Snap-Lock antivazamento"
    ],
    specs: {
      ponta: "Aço Cirúrgico 316L Calibrado a Laser",
      tinta: "Carbon Black Deep 100% Pigmentada",
      secagem: "Instantânea (< 0.3s)",
      corpo: "Estrutura CNC em Liga Isométrica 22g",
      peso: "22.4 gramas",
      comprimento: "144 mm com tampa",
      capacidade: "2.2 ml de tinta de alta viscosidade",
      resistencia: "Norma ISO 14145-2 (Documentos Permanentes)"
    },
    boxContents: [
      "Caneta ARTOOLS Pigmentum 0.10 Master Tech",
      "Estojo de couro legítimo com fecho magnético",
      "Certificado de Autenticidade com Número de Série Único",
      "Refil selado a vácuo com tinta extra purificada"
    ],
    launchQuarter: "Q4 2026",
    vipSlotsRemaining: 18,
    price: "R$ 219,00",
    vipPrice: "R$ 179,00",
    installments: "3x de R$ 59,66 sem juros"
  },
  {
    id: "pen-030",
    name: "Pigmentum 0.30 Architectural",
    codename: "ARCH-030-PRO",
    tip: "0.30 mm",
    category: "technical",
    categoryLabel: "Técnica & Arquitetura",
    badge: "Anti-Flexão",
    status: "Lote em Produção",
    image: "/assets/pens/pen_030.jpg",
    gradient: "from-indigo-500/10 via-stone-100 to-white",
    accentColor: "#4f46e5",
    tagline: "Rigor geométrico absoluto para projetos arquitetônicos e técnicos.",
    description: "Tubo-guia longo de 3.5mm em aço endurecido, projetado especialmente para uso contra réguas, esquadros e gabaritos sem desvio óptico ou vazamento por capilaridade.",
    detailedStory: "Engenheiros e arquitetos exigem traços que nunca flutuem sob pressão lateral de réguas e transferidores. A Pigmentum 0.30 foi construída com ponteira cilíndrica de alta rigidez estrutural, eliminando o atrito capilar na borda de réguas de metal ou acrílico e mantendo linhas uniformes do início ao fim da prancha.",
    strokeWidth: 2.5,
    strokeType: "medium",
    features: [
      "Tubo-guia de 3.5mm para trabalho com esquadros e réguas",
      "Centro de gravidade rebaixado em 8mm para equilíbrio de prancheta",
      "Tinta compatível com papel vegetal, poliéster e papéis encorpados",
      "Zero vazamento por capilaridade lateral"
    ],
    specs: {
      ponta: "Tubo Guia 3.5mm Aço Cirúrgico Endurecido",
      tinta: "Resistente a Luz UV, Álcool e Solventes",
      secagem: "Secagem Rápida (< 0.4s)",
      corpo: "Alumínio Anodizado com Grip Serrilhado",
      peso: "24.0 gramas",
      comprimento: "145 mm",
      capacidade: "2.0 ml de fluxo estático regulado",
      resistencia: "100% Arquivística e Resistente a Desbotamento"
    },
    boxContents: [
      "Instrumento ARTOOLS Pigmentum 0.30 Architectural",
      "Protetor de ponta de precisão usinado",
      "Estojo de prancheta com suporte de mesa integrado",
      "Manual de calibração milimétrica"
    ],
    launchQuarter: "Q4 2026",
    vipSlotsRemaining: 47,
    price: "R$ 189,00",
    vipPrice: "R$ 159,00",
    installments: "3x de R$ 53,00 sem juros"
  },
  {
    id: "pen-050",
    name: "Pigmentum 0.50 Studio Drafting",
    codename: "STUDIO-050-BAL",
    tip: "0.50 mm",
    category: "technical",
    categoryLabel: "Técnica & Arquitetura",
    badge: "Versatilidade Pro",
    status: "Lista de Espera",
    image: "/assets/pens/pen_050.jpg",
    gradient: "from-slate-500/10 via-stone-100 to-white",
    accentColor: "#475569",
    tagline: "O ponto de equilíbrio clássico entre legibilidade e fluidez técnica.",
    description: "O equilíbrio definitivo entre legibilidade marcante e precisão geométrica. Reservatório pressurizado que permite escrita contínua até em condições extremas e papéis ásperos.",
    detailedStory: "A espessura de 0.50mm é universalmente reconhecida como o padrão ouro para anotações técnicas, sketches expressivos e esquemas de design. A Studio Drafting eleva esse clássico com uma ponta de nitreto de silício autolubrificante e tinta pressurizada com nitrogênio que nunca seca na ponta.",
    strokeWidth: 3.5,
    strokeType: "thick",
    features: [
      "Ponta de esfera de cerâmica nitreto de silício autolubrificante",
      "Reservatório interno pressurizado antigravidade",
      "Acabamento gunmetal escovado de toque acetinado",
      "Excelente aderência mesmo em papéis com textura rugosa"
    ],
    specs: {
      ponta: "Esfera Cerâmica de Nitreto de Silício 0.5mm",
      tinta: "Fórmula HD Pigmentada Não-Sangrante",
      secagem: "Resistente a Borrões (0.4s)",
      corpo: "Liga de Zinco e Alumínio Balanceada",
      peso: "25.8 gramas",
      comprimento: "143 mm",
      capacidade: "2.4 ml",
      resistencia: "À prova d'água após secagem"
    },
    boxContents: [
      "Caneta Pigmentum 0.50 Studio Drafting",
      "Tampa com clip flexível em aço mola",
      "Cartão de Registro de Garantia Vitalícia no Corpo"
    ],
    launchQuarter: "Q4 2026",
    vipSlotsRemaining: 62,
    price: "R$ 169,00",
    vipPrice: "R$ 139,00",
    installments: "3x de R$ 46,33 sem juros"
  },
  {
    id: "pen-080",
    name: "Pigmentum 0.80 Bold Expression",
    codename: "BOLD-080-EXP",
    tip: "0.80 mm",
    category: "fine",
    categoryLabel: "Fine Liner",
    badge: "Traço Marcante",
    status: "Lote em Produção",
    image: "/assets/pens/pen_080.jpg",
    gradient: "from-amber-600/10 via-stone-100 to-white",
    accentColor: "#d97706",
    tagline: "Impacto visual imediato com preto profundo sem falhas.",
    description: "Projetada para contornos de forte presença visual, letterings e preenchimentos. Cobertura preta absoluta e uniforme sem falhas mesmo em traços rápidos de alta pressão.",
    detailedStory: "Quando uma arte requer destaque ou contornos dramáticos com linhas audaciosas, a 0.80mm entrega uma saturação de preto incomparável. Sua ponta de polímero termomoldado resiste a pressões elevadas de desenho sem esmagar ou abrir fissuras.",
    strokeWidth: 5,
    strokeType: "heavy",
    features: [
      "Ponta de polímero de alta densidade anti-esmagamento",
      "Fluxo de alta vazão para preenchimento rápido sem marcas de passada",
      "Compatibilidade total com marcadores à base de álcool (Copic / Touch)",
      "Corpo robusto em bronze fosco e liga escura"
    ],
    specs: {
      ponta: "Polímero Estrutural Densificado 0.8mm",
      tinta: "Pigmento Carbon Ultra Denso",
      secagem: "Rápida (0.5s)",
      corpo: "Alumínio Anodizado com Anel em Bronze",
      peso: "26.2 gramas",
      comprimento: "144 mm",
      capacidade: "2.5 ml",
      resistencia: "Resistência máxima à lixiviação por solventes"
    },
    boxContents: [
      "Caneta Pigmentum 0.80 Bold Expression",
      "Estojo de proteção para transporte",
      "Amostra de papel técnico 300g/m²"
    ],
    launchQuarter: "Q4 2026",
    vipSlotsRemaining: 29,
    price: "R$ 179,00",
    vipPrice: "R$ 149,00",
    installments: "3x de R$ 49,66 sem juros"
  },
  {
    id: "pen-flex",
    name: "Pigmentum FlexBrush Sense",
    codename: "BRUSH-FLEX-JP",
    tip: "0.2 - 4.0 mm",
    category: "brush",
    categoryLabel: "Brush & Lettering",
    badge: "Cerdas Japonesas",
    status: "Lista VIP Aberta",
    image: "/assets/pens/pen_flex.jpg",
    gradient: "from-emerald-500/10 via-stone-100 to-white",
    accentColor: "#059669",
    tagline: "A alma da caligrafia oriental fundida com engenharia moderna.",
    description: "Ponta de cerdas japonesas sintéticas microestruturadas com memória de forma 100% resiliente. Transita com extrema naturalidade de linhas de cabelo a pinceladas expressivas.",
    detailedStory: "Desenvolvida em colaboração com mestres calígrafos em Nara, Japão, a FlexBrush Sense combina fibras sintéticas PBT cônicas com um núcleo condutor de tinta líquida em tempo real. Permite modulação dinâmica de espessura de 0.2mm até 4.0mm com resposta tátil instantânea ao menor toque da mão.",
    strokeWidth: 6,
    strokeType: "brush",
    features: [
      "Microcerdas cônicas japonesas com memória elástica perpétua",
      "Controle de pressão dinâmico com variação de 0.2 a 4.0mm",
      "Sistema de alimentação de tinta por gravidade hidrostática",
      "Acabamento verde esmeralda mate com detalhes em titânio"
    ],
    specs: {
      ponta: "Fibras PBT Microcônicas Japonesas",
      tinta: "Pigmento Fluido Deep Sumi Black",
      secagem: "Acabamento Fosco Suave (0.4s)",
      corpo: "Compósito Polimérico e Titânio",
      peso: "19.8 gramas (leveza para caligrafia solta)",
      comprimento: "148 mm",
      capacidade: "3.0 ml de reservatório contínuo",
      resistencia: "Resistente a borrões e aguadas posteriores"
    },
    boxContents: [
      "Caneta ARTOOLS Pigmentum FlexBrush Sense",
      "Protetor ventilado de cerdas",
      "Caderno de exercícios caligráficos",
      "Estojo em tecido japonês tradicional"
    ],
    launchQuarter: "Q4 2026",
    vipSlotsRemaining: 12,
    price: "R$ 249,00",
    vipPrice: "R$ 199,00",
    installments: "3x de R$ 66,33 sem juros"
  },
  {
    id: "pen-chisel",
    name: "Pigmentum Calligraphia Chisel",
    codename: "CHISEL-200-DIA",
    tip: "2.0 mm",
    category: "brush",
    categoryLabel: "Brush & Lettering",
    badge: "Corte Diamantado",
    status: "Lista de Espera",
    image: "/assets/pens/pen_chisel.jpg",
    gradient: "from-rose-500/10 via-stone-100 to-white",
    accentColor: "#e11d48",
    tagline: "Precisão geométrica para lettering, tipografia e caligrafia gótica.",
    description: "Ponta chanfrada a 45° lapidada a diamante para caligrafia clássica gótica, itálica e tipografia contemporânea. Bordas perfeitamente nítidas e transição precisa.",
    detailedStory: "A Calligraphia Chisel foi projetada para quem exige ângulos de corte perfeitamente estáveis. O chanfro de 45 graus lapidado a laser mantém o ângulo exato de contato, permitindo criar hastes espessas e filetes ultrafinos na mesma passada sem deformação do corte.",
    strokeWidth: 7,
    strokeType: "chisel",
    features: [
      "Chanfro calibrado a 45° com lapidação diamantada",
      "Transição nítida entre traços grossos (2.0mm) e finos (0.2mm)",
      "Corpo em acabamento ouro rosa e aço escurecido",
      "Tampa com fechamento magnético Snap-Lock"
    ],
    specs: {
      ponta: "Ponta Chanfrada 45° Lapidação Diamante",
      tinta: "Carbon Black Pure Archive",
      secagem: "Rápida (< 0.4s)",
      corpo: "Liga de Cobre e Alumínio com Banho Rose Gold",
      peso: "27.5 gramas",
      comprimento: "146 mm",
      capacidade: "2.6 ml",
      resistencia: "100% Arquivística e Resistente a Luz"
    },
    boxContents: [
      "Caneta Pigmentum Calligraphia Chisel 2.0mm",
      "Estojo acolchoado com acabamento acetinado",
      "Guia de ângulos caligráficos (Gótica, Itálica, Uncial)"
    ],
    launchQuarter: "Q4 2026",
    vipSlotsRemaining: 21,
    price: "R$ 239,00",
    vipPrice: "R$ 189,00",
    installments: "3x de R$ 63,00 sem juros"
  },
  {
    id: "pen-titanium",
    name: "Pigmentum Titanium Stealth",
    codename: "STEALTH-020-TI",
    tip: "0.20 mm",
    category: "special",
    categoryLabel: "Edição Especial",
    badge: "Titânio Grau 5 // Limitada",
    status: "Série Numerada",
    image: "/assets/pens/pen_titanium.jpg",
    gradient: "from-zinc-600/15 via-stone-100 to-white",
    accentColor: "#27272a",
    tagline: "Indestrutível. Forjada em Titânio Grau 5 com revestimento DLC.",
    description: "Corpo usinado a partir de uma barra maciça de Titânio Grau 5 com acabamento em DLC (Diamond-Like Carbon). Resistência incomparável ao desgaste e peso perfeitamente calibrado.",
    detailedStory: "A Titanium Stealth é uma obra de engenharia extrema para quem busca o instrumento definitivo de uso diário (EDC). Cada caneta é usinada a partir de uma única barra de Titânio Grau 5 (Ti-6Al-4V), material utilizado em turbinas a jato e espaçonaves, e revestida com DLC preto que oferece dureza próxima à do diamante.",
    strokeWidth: 2,
    strokeType: "thin",
    features: [
      "Corpo maciço usinado em Titânio Grau 5 (Ti-6Al-4V)",
      "Revestimento Diamond-Like Carbon (DLC) preto anti-riscos",
      "Número de série exclusivo gravado a laser (Edição de 500 unidades)",
      "Clip tático com parafusos Torx em titânio"
    ],
    specs: {
      ponta: "Safira Sintética 0.20mm & Titânio CNC",
      tinta: "Fórmula Nanocarbono Purificada",
      secagem: "Hiper-rápida (0.25s)",
      corpo: "Titânio Grau 5 Maciço com DLC",
      peso: "38.0 gramas (densidade e firmeza premium)",
      comprimento: "141 mm",
      capacidade: "2.0 ml em cartucho metálico pressurizado",
      resistencia: "Resistente a impactos, corrosão salina e fogo"
    },
    boxContents: [
      "Caneta Pigmentum Titanium Stealth (Numerada)",
      "Estojo tático em alumínio aeronáutico à prova d'água",
      "Placa de Titânio gravada com o número de série e certificado",
      "Ferramenta Torx T6 em aço para desmontagem"
    ],
    launchQuarter: "Q4 2026",
    vipSlotsRemaining: 8,
    price: "R$ 489,00",
    vipPrice: "R$ 399,00",
    installments: "6x de R$ 66,50 sem juros"
  },
  {
    id: "pen-meteorite",
    name: "Pigmentum Muon Meteorite Core",
    codename: "METEOR-035-EXP",
    tip: "0.35 mm",
    category: "special",
    categoryLabel: "Edição Especial",
    badge: "Aço Meteorítico Muon",
    status: "Exclusivo Colecionador",
    image: "/assets/pens/pen_meteorite.jpg",
    gradient: "from-purple-500/10 via-stone-100 to-white",
    accentColor: "#7c3aed",
    tagline: "Uma peça do cosmos nas suas mãos. Forjada com meteorito de 4,5 bilhões de anos.",
    description: "Componentes internos do clip e seletor forjados com material genuíno do meteorito Muonionalusta. Tinta infundida com micropartículas de grafeno para condução fluídica perfeita.",
    detailedStory: "A Muon Meteorite Core é a mais rara e exclusiva expressão da série Pigmentum. O clip e o anel central são lapidados a partir de fragmentos autênticos do meteorito de ferro-níquel Muonionalusta, caído na Escandinávia há mais de 1 milhão de anos. O padrão natural de Widmanstätten é revelado quimicamente, tornando cada instrumento absolutamente único no universo.",
    strokeWidth: 3,
    strokeType: "medium",
    features: [
      "Clip e anel central forjados com o Meteorito Muonionalusta",
      "Padrão Widmanstätten autêntico e irredutível",
      "Corpo em Aço Damasco escuro e compósito espacial",
      "Tinta enriquecida com nanopartículas condutivas de grafeno"
    ],
    specs: {
      ponta: "Tungstênio Calibrado & Núcleo Meteorítico 0.35mm",
      tinta: "Enriquecida com Grafeno Superfluídico",
      secagem: "Instantânea Zero Fricção (0.2s)",
      corpo: "Aço Damasco & Meteorito Muonionalusta Autêntico",
      peso: "44.2 gramas",
      comprimento: "147 mm",
      capacidade: "2.5 ml",
      resistencia: "Permanência eterna e resistente a ácidos brandos"
    },
    boxContents: [
      "Caneta Pigmentum Muon Meteorite Core",
      "Caixa de exposição com iluminação LED interna",
      "Certificado gemológico e cosmoquímico com análise isotópica",
      "Frasco de tinta comemorativa infundida com grafeno 30ml"
    ],
    launchQuarter: "Q4 2026",
    vipSlotsRemaining: 4,
    price: "R$ 890,00",
    vipPrice: "R$ 749,00",
    installments: "10x de R$ 74,90 sem juros"
  }
];
