const PRODUCTS = [
  {
    id: 1,
    name: "Moto E6i Dual SIM 32 GB cinza-titanium 2 GB RAM",
    price: "749.00",
    category: "electronic",
    img: "https://http2.mlstatic.com/D_Q_NP_841154-MLA45794920045_052021-R.webp",
    tags: [
      "celular",
      "moto",
      "dual",
      "32gb",
      "2gb ram",
      "cinza-titanium",
      "e61",
    ],
    description:
      "O Motorola E6i Dual SIM possui o novo sistema operacional Android 10 que incorpora respostas inteligentes e ações sugeridas para todos os seus aplicativos. Entre as suas várias funcionalidades irá encontrar o tema escuro, a navegação por gestos e o modo livre de distração, para que você possa completar as suas tarefas enquanto desfruta ao máximo do seu dispositivo.",
  },
  {
    id: 2,
    name: "Moto E6i Dual SIM 64 GB cinza-titanium 2 GB RAM",
    price: "1200.00",
    category: "electronic",
    img: "https://http2.mlstatic.com/D_NQ_NP_974947-MLA45794717972_052021-O.webp",
    tags: [
      "celular",
      "moto",
      "dual",
      "34gb",
      "2gb ram",
      "cinza-titanium",
      "e61",
    ],
    description:
      "O Motorola E6i Dual SIM possui o novo sistema operacional Android 10 que incorpora respostas inteligentes e ações sugeridas para todos os seus aplicativos. Entre as suas várias funcionalidades irá encontrar o tema escuro, a navegação por gestos e o modo livre de distração, para que você possa completar as suas tarefas enquanto desfruta ao máximo do seu dispositivo.",
  },
  {
    id: 3,
    name: "Moto E6i Dual SIM 64 GB verde 2 GB RAM",
    price: "1200.00",
    category: "electronic",
    img: "https://http2.mlstatic.com/D_Q_NP_775448-MLA45794717960_052021-R.webp",
    tags: ["celular", "moto", "dual", "64gb", "2gb ram", "verde", "e61"],
    description:
      "O Motorola E6i Dual SIM possui o novo sistema operacional Android 10 que incorpora respostas inteligentes e ações sugeridas para todos os seus aplicativos. Entre as suas várias funcionalidades irá encontrar o tema escuro, a navegação por gestos e o modo livre de distração, para que você possa completar as suas tarefas enquanto desfruta ao máximo do seu dispositivo.",
  },
  {
    id: 4,
    name: "Moto E6i Dual SIM 64 GB verde 2 GB RAM",
    price: "1200.00",
    category: "electronic",
    img: "https://http2.mlstatic.com/D_Q_NP_825110-MLA45794772703_052021-R.webp",
    tags: ["celular", "moto", "dual", "64gb", "2gb ram", "verde", "e61"],
    description:
      "O Motorola E6i Dual SIM possui o novo sistema operacional Android 10 que incorpora respostas inteligentes e ações sugeridas para todos os seus aplicativos. Entre as suas várias funcionalidades irá encontrar o tema escuro, a navegação por gestos e o modo livre de distração, para que você possa completar as suas tarefas enquanto desfruta ao máximo do seu dispositivo.",
  },
  {
    id: 5,
    name: "Notebook Acer Aspire 5 15,6'' A515-54-50bt Ci5 8gb 512gb W10",
    price: "3700.00",
    category: "electronic",
    img: "https://http2.mlstatic.com/D_NQ_NP_950525-MLA45720073591_042021-O.webp",
    tags: [
      "notebook",
      "acer",
      "aspire",
      "A515-54-50bt",
      "8gb ",
      "512gb",
      "Ci5",
      "corei5",
    ],
    description:
      "Com a linha Aspire 5 da Acer você poderá experimentar um novo nível de design e desempenho, tanto para o uso diário do seu notebook quanto para uso profissional. Tela com alto impacto visual. A sua tela LCD de 14 e 1366x768 px de resolução lhe dará cores mais vivas e definidas. Seus filmes e séries favoritas ganharão vida, com maior qualidade e definição em cada detalhe.",
  },
  {
    id: 6,
    name: "Notebook Acer Aspire 6 15,6'' A515-54-50bt Ci5 16gb 1Tb W10",
    price: "5100.00",
    category: "electronic",
    img: "https://http2.mlstatic.com/D_Q_NP_917072-MLA45720073594_042021-R.webp",
    tags: [
      "notebook",
      "acer",
      "aspire",
      "A515-54-50bt",
      "16gb",
      "1Tb",
      "Ci5",
      "corei5",
    ],
    description:
      "Com a linha Aspire 5 da Acer você poderá experimentar um novo nível de design e desempenho, tanto para o uso diário do seu notebook quanto para uso profissional. Tela com alto impacto visual. A sua tela LCD de 14 e 1366x768 px de resolução lhe dará cores mais vivas e definidas. Seus filmes e séries favoritas ganharão vida, com maior qualidade e definição em cada detalhe.",
  },
  {
    id: 7,
    name: "Furadeira Parafusadeira Com Impacto 20v 2 Baterias Pli-200",
    price: "350.00",
    category: "tools",
    img: "https://http2.mlstatic.com/D_NQ_NP_776204-MLB47010148064_082021-O.webp",
    tags: ["parafusadeira", "furadeira", "pli200"],
    description:
      "Características da Ferramenta Parafusadeira/furadeira de impacto PLI200 é projetada com a tecnologia Destornillador",
  },
  {
    id: 8,
    name: "Esmerilhadeira angular Klatter YSAG01 de 60 Hz verde e preta 840 W 127 V",
    price: "169.00",
    category: "tools",
    img: "https://http2.mlstatic.com/D_NQ_NP_968158-MLA46545004821_062021-O.webp",
    tags: ["esmirilhadeira", "ysag01"],
    description:
      "Equipe a sua casa ou a sua oficina mecânica e, faça você mesmo! Esta esmerilhadeira angular é perfeita para fazer diferentes trabalhos de moer, escovado e polido. Por sua vez, destaca-se por ser um elemento indispensável para cortar, desbastar e lixar diferentes materiais derivados do metal.",
  },
  {
    id: 9,
    name: "Lavadora de alta pressão Kärcher K2 Portable Black de 1200W com 1600psi de pressão máxima 127V",
    price: "478.00",
    category: "tools",
    img: "https://http2.mlstatic.com/D_NQ_NP_811034-MLA40681916627_022020-O.webp",
    tags: ["lavadora", "alta pressão", "karcher", "k2"],
    description:
      "Equipe a sua casa ou a sua oficina mecânica e, faça você mesmo! Esta esmerilhadeira angular é perfeita para fazer diferentes trabalhos de moer, escovado e polido. Por sua vez, destaca-se por ser um elemento indispensável para cortar, desbastar e lixar diferentes materiais derivados do metal.",
  },
  {
    id: 10,
    name: "Cadeira de escritório Trevalla TL-CDE-26-1 preta com estofado do mesh",
    price: "279.00",
    category: "furniture",
    img: "https://http2.mlstatic.com/D_NQ_NP_998501-MLA40361649679_012020-O.webp",
    tags: ["cadeira", "escritorio", "trevalla", "TL-CDE-26-1"],
    description:
      "A escolha de uma cadeira adequada é muito importante para evitar futuras lesões. Com esta cadeira da Trevalla você terá o conforto é o bem-estar que precisa ao longo do seu dia. Além disso, você pode colocá-la em qualquer lugar da sua casa ou oficina, pois o seu design se adapta a vários ambientes. Dê um toque mais moderno aos seus espaços!",
  },
  {
    id: 11,
    name: "Gin London Dry 750ml Tanqueray",
    price: "99.00",
    category: "drink",
    img: "https://http2.mlstatic.com/D_NQ_NP_999145-MLB46706133148_072021-O.webp",
    tags: ["gin", "tanqueray", "london", "dry"],
    description:
      "GIN TANQUERAY PARA OS MAIS ALTOS PADRÃO DE EXIGÊNCIA!,Tanqueray London Dry Gin é destilado quatro vezes e tem o equilíbrio ideal de quatro botânicos clássicos: refrescante zimbro, coentro apimentado, angélica aromática e alcaçuz doce.",
  },
  {
    id: 12,
    name: "Kit Whey Protein 2kg + Bcaa + Creatina + Shaker",
    price: "104.00",
    category: "sport",
    img: "https://http2.mlstatic.com/D_NQ_NP_636061-MLB43135199829_082020-O.webp",
    tags: ["kit whey", "whey", "protein", "creatina", "shaker", "bcaa"],
    description:
      "possui em sua formulação a proteína concentrada do soro do leite (WPC), uma proteína de alto valor biológico, rica em BCAA's,",
  },
  {
    id: 13,
    name: "Amazon Echo Dot 4th Gen with clock com asistente virtual Alexa, display integrado glacier white 110V/240V",
    price: "379.00",
    category: "electronic",
    img: "https://http2.mlstatic.com/D_NQ_NP_937896-MLA45739527580_042021-O.webp",
    tags: ["amazon echo", "assitente virtual", "alexa"],
    description:
      "Junte-se ao mundo da inteligência artificial com o Amazon Echo Dot 4th Gen with clock que oferece soluções para automatizar algumas tarefas no seu lar.",
  },
];

export default PRODUCTS;
