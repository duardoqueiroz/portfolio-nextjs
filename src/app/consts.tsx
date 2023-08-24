export const Routes = [
  {
    title: "Home",
    section: "#home",
  },
  {
    title: "Sobre",
    section: "#about",
  },
  {
    title: "Experiência",
    section: "#experience",
  },
  {
    title: "Skills",
    section: "#skills",
  },
  {
    title: "Projetos",
    section: "#projects",
  },
  {
    title: "Contato",
    section: "#contact",
  },
];

export const homeContent = {
  title: "Eduardo Queiroz",
  description: "Software Engineer",
  socialNetworks: [
    {
      name: "Github",
      url: "https://github.com/duardoqueiroz",
      icon: "/icons/github-filled.svg",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/eduardo-queiroz-2785ba215",
      icon: "/icons/linkedin.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/dudu.lucio.dev",
      icon: "/icons/instagram.svg",
    },
  ],
};

export const experienceContent = {
  timeline: [
    {
      id: "lisbom",
      title: "Backend Engineer, DevOps",
      company: "Lisbom, Alagoas",
      startDate: "Nov 2021",
      endDate: "Now",
      techStack: [
        { id: "lisbom-nodejs", title: "NodeJS" },
        { id: "lisbom-adonisjs", title: "AdonisJs" },
        { id: "lisbom-nestjs", title: "NestJs" },
        { id: "lisbom-terraform", title: "Terraform" },
        { id: "lisbom-aws", title: "AWS" },
        { id: "lisbom-postgresql", title: "PostgreSQL" },
        { id: "lisbom-mongodb", title: "MongoDB" },
        { id: "lisbom-docker", title: "Docker" },
      ],
      summary: `
#### Um pouco das atividades em que trabalhei 
- Construção de APIs robustas e liderança de equipe de desenvolvimento;
- Construção de infraestruturas na AWS utilizando Terraform;
- Construção de pipelines de CI/CD utilizando Github Actions;
- Construção de aplicações utilizando NestJS e AdonisJS;
- Consumo de APIs externas.
`,
    },
    {
      id: "transparência-brasil",
      title: "Estagiário em Engenharia de Software",
      company: "Transparência Brasil",
      startDate: "Abr 2022",
      endDate: "Feb 2023",
      techStack: [
        { id: "dadosjus-go", title: "Golang" },
        { id: "dadosjus-python", title: "Python" },
        { id: "dadosjus-aws", title: "Aws" },
        { id: "dadosjus-docker", title: "Docker" },
        { id: "dadosjus-crawler", title: "Web Crawler" },
        { id: "dadosjus-postgresql", title: "PostgreSQL" },
        { id: "dadosjus-mongodb", title: "MongoDB" },
      ],
      summary: `
#### Um pouco das atividades em que trabalhei
- Criação e manutenção de crawlers para coletar, analisar, salvar e disponibilizar dados em diferentes formatos;
- Migração de infraestrutura, implementando soluções de cloud computing na AWS;
- Construção e manutenção de APIs;
- Criação de documentação de APIs utilizando Swagger;
- Criação de pipelines de CI/CD utilizando Github Actions;
- Criação de testes automatizados.
`,
    },
    {
      id: "dit",
      title: "Backend Engineer",
      company: "Núcleo de Desenvolvimento e Inovação Tecnológica (DIT), IFAL",
      startDate: "Nov 2021",
      endDate: "Jun 2022",
      techStack: [
        { id: "dit-go", title: "Golang" },
        { id: "dit-docker", title: "Docker" },
        { id: "dit-postgresql", title: "PostgreSQL" },
      ],
      summary: `
#### Um pouco das atividades em que trabalhei
- Construção de APIs robustas utilizando Clean Architecture, SOLID e Design Patterns;
- Criação de documentação de APIs utilizando Swagger;
- Criação de testes automatizados;
- Scrum;
`,
    },
  ],
  title: "Experiência",
};

export const skillsContent = {
  title: "Skills",
  description: `Tenho experiência na construção de aplicações para a <b>web</b> com <b>tecnologias modernas</b> e sempre utilizando <b>boas práticas</b> ao desenvolver software. <b>Aprendo rápido</b> e estou sempre ansioso para aprender novas tecnologias e práticas.`,
  expertise: [
    {
      id: "backend",
      name: "Backend",
      skills: [
        {
          id: "backend-nodejs",
          name: "NodeJS",
          icon: "/icons/nodejs.svg",
        },
        {
          id: "backend-golang",
          name: "Golang",
          icon: "/icons/golang.svg",
        },
        {
          id: "backend-java",
          name: "Java",
          icon: "/icons/java.svg",
        },
        {
          id: "backend-git",
          name: "Git",
          icon: "/icons/git.svg",
        },
        {
          id: "backend-docker",
          name: "Docker",
          icon: "/icons/docker.svg",
        },
        {
          id: "backend-graphQL",
          name: "GraphQL",
          icon: "/icons/graphql.svg",
        },
        {
          id: "backend-mongodb",
          name: "MongoDB",
          icon: "/icons/mongodb.svg",
        },
        {
          id: "backend-postgresql",
          name: "PostgreSQL",
          icon: "/icons/postgres.svg",
        },
        {
          id: "backend-mysql",
          name: "MySQL",
          icon: "/icons/mysql.svg",
        },
        {
          id: "backend-redis",
          name: "Redis",
          icon: "/icons/redis.svg",
        },
        {
          id: "backend-nestjs",
          name: "NestJS",
          icon: "/icons/nestjs.svg",
        },
        {
          id: "backend-expressjs",
          name: "ExpressJS",
          icon: "/icons/express.svg",
        },
        {
          id: "backend-adonisjs",
          name: "AdonisJS",
          icon: "/icons/adonisjs.svg",
        },
        {
          id: "backend-firebase",
          name: "Firebase",
          icon: "/icons/firebase.svg",
        },
        {
          id: "backend-prisma",
          name: "Prisma",
          icon: "/icons/prisma-orm.svg",
        },
      ],
    },
    {
      id: "frontend",
      name: "Front-end",
      skills: [
        {
          id: "frontend-html",
          name: "HTML",
          icon: "/icons/html.svg",
        },
        {
          id: "frontend-css",
          name: "CSS",
          icon: "/icons/css.svg",
        },
        {
          id: "frontend-javascript",
          name: "Javascript",
          icon: "/icons/javascript.svg",
        },
        {
          id: "frontend-typescript",
          name: "Typescript",
          icon: "/icons/typescript.svg",
        },
        {
          id: "frontend-react",
          name: "React",
          icon: "/icons/react.svg",
        },
        {
          id: "frontend-nextjs",
          name: "NextJS",
          icon: "/icons/next-js.svg",
        },
        {
          id: "frontend-tailwind",
          name: "Tailwind",
          icon: "/icons/tailwindcss.svg",
        },
      ],
    },
    {
      id: "devops",
      name: "Dev Ops",
      skills: [
        {
          id: "devops-terraform",
          name: "Terraform",
          icon: "/icons/terraform.svg",
        },
        {
          id: "devops-aws",
          name: "AWS",
          icon: "/icons/aws.svg",
        },
        {
          id: "terraform-cloudflare",
          name: "CloudFlare",
          icon: "/icons/cloudflare.svg",
        },
      ],
    },
    {
      id: "mobile-app",
      name: "Mobile App",
      skills: [
        {
          id: "mobile-rn",
          name: "React Native",
          icon: "/icons/react-native.svg",
        },
      ],
    },
  ],
};

export const aboutContent = {
  title: "Sobre mim",
  description:
    "Engenheiro de software com 2 anos de experiência, tendo foco em desenvolvimento <b>Backend</b>. Sou movido pelo desafio de <b>solucionar problemas complexos</b> e sempre busco aprender novas habilidades e tecnologias para aprimorar meu trabalho. <b>Sou proativo, comunicativo</b> e gosto de trabalhar em equipe para criar um ambiente <b>colaborativo e produtivo</b>",
};

export const projectsContent = {
  title: "Projetos",
  description:
    "Alguns projetos em que trabalhei ou estou trabalhando atualmente. As tecnologias descritas são apenas as que eu trabalhei diretamente, mas existem outras diversas tecnologias utilizadas em cada um dos projetos.",
  projects: [
    {
      id: "project-spacie",
      title: "Spacie",
      description:
        "Plataforma voltada para o marketing digital que visa conectar empresas e influenciadores digitais. A rede provê todo o fluxo contratual entre as entidades, desde a criação das campanhas, por parte das empresas, até a assinatura de contratos para a entrada dos influencers nas campanhas.",
      techStack: [
        {
          id: "spacie-adonisjs",
          stack: "AdonisJS",
        },
        {
          id: "spacie-postgres",
          stack: "Postgres",
        },
        {
          id: "spacie-aws",
          stack: "Aws",
        },
        {
          id: "spacie-facebook-api",
          stack: "FacebookAPI",
        },
        {
          id: "spacie-instagram-api",
          stack: "InstagramAPI",
        },
        {
          id: "spacie-redis",
          stack: "Redis",
        },
        {
          id: "spacie-bullmq",
          stack: "BullMQ",
        },
        {
          id: "spacie-mjml",
          stack: "MJML",
        },
        {
          id: "spacie-docusign",
          stack: "Docusign",
        },
        {
          id: "spacie-docker",
          stack: "Docker",
        },
      ],
      websiteLink: "https://app.spacie.com.br",
      figmaLink: "",
      githubLink: "",
      image: "images/spacie-project.png",
    },
    {
      id: "project-dadosjusbr",
      title: "DadosJusBr",
      description:
        "Projeto que visa apresentar de forma detalhada, organizada e unificada os dados de gastos públicos referente às remunerações dos órgãos que constituem o sistema de justiça brasileiro, facilitando o acesso e promovendo o controle social sobre esses gastos.",
      techStack: [
        {
          id: "dadosjusbr-golang",
          stack: "Golang",
        },
        {
          id: "dadosjusbr-python",
          stack: "Python",
        },
        {
          id: "dadosjusbr-postgres",
          stack: "Postgres",
        },
        {
          id: "dadosjusbr-mongo",
          stack: "MongoDb",
        },
        {
          id: "dadosjusbr-aws",
          stack: "AWS",
        },
        {
          id: "dadosjusbr-docker",
          stack: "Docker",
        },
        {
          id: "dadosjusbr-gh-actions",
          stack: "Gh Actions",
        },
      ],
      websiteLink: "https://dadosjusbr.org/",
      figmaLink: "",
      githubLink: "https://github.com/dadosjusbr",
      image: "images/dadosjusbr-project.png",
    },
    {
      id: "project-cs-analytics",
      title: "Cs-Analytics",
      description:
        "Plataforma que visa coletar, tratar e disponibilizar dados estatísticos de partidas profissionais do jogo Cs-Go(Counter Strike Global Offensive) para que os usuários possam analisar e acompanhar o desempenho de times e jogadores.",
      techStack: [
        {
          id: "cs-analytics-adonisjs",
          stack: "AdonisJS",
        },
        {
          id: "cs-analytics-nestjs",
          stack: "Nestjs",
        },
        {
          id: "cs-analytics-postgres",
          stack: "Postgres",
        },
        {
          id: "cs-analytics-terraform",
          stack: "Terraform",
        },
        {
          id: "cs-analytics-aws",
          stack: "AWS",
        },
        {
          id: "cs-analytics-docker",
          stack: "Docker",
        },
        {
          id: "cs-analytics-gh-actions",
          stack: "Gh Actions",
        },
        {
          id: "cs-analytics-bullmq",
          stack: "BullMq",
        },
      ],
      websiteLink: "",
      figmaLink: "",
      githubLink: "",
      image: "images/csanalytics-project.png",
    },
    {
      id: "simple-commerce",
      title: "SimplE-commerce",
      description:
        "E-commerce simples para venda de produtos. Projeto criado para aprofundar conhecimentos a respeito de arquitetura de software, design patterns e boas práticas de desenvolvimento, além de aprender novas tecnologias.",
      techStack: [
        {
          id: "simple-nodejs",
          stack: "NodeJS",
        },
        {
          id: "simple-typescript",
          stack: "Typescript",
        },
        {
          id: "simple-expressjs",
          stack: "ExpressJS",
        },
        {
          id: "simple-postgres",
          stack: "PostgreSQL",
        },
        {
          id: "simple-stripe",
          stack: "Stripe",
        },
        {
          id: "simple-kafka",
          stack: "Kafka",
        },
        {
          id: "simple-rabbitmq",
          stack: "RabbitMQ",
        },
        {
          id: "simple-prisma",
          stack: "PrismaORM",
        },
      ],
      websiteLink: "",
      figmaLink: "",
      githubLink: "https://github.com/duardoqueiroz/simplE-commerce",
      image: "images/simplecommerce-project.png",
    },
    {
      id: "project-pokedex",
      title: "Pokedex",
      description:
        "Aplicativo que consome e disponibiliza dados de pokemons vindos da API PokeApi.",
      techStack: [
        {
          id: "pokedex-rn",
          stack: "React Native",
        },
        {
          id: "pokedex-react",
          stack: "React",
        },
        {
          id: "pokedex-expo",
          stack: "Expo",
        },
        {
          id: "pokedex-axios",
          stack: "axios",
        },
      ],
      websiteLink: "",
      figmaLink: "https://www.figma.com/file/TaV7o73CcSoH6XB0UuJa0c/Pok%C3%A9dex-(Community)?type=design&node-id=0-1&mode=design&t=ZYhysHOgboBe1WcF-0",
      githubLink: "https://github.com/duardoqueiroz/pokedex-react-native",
      image: "images/pokedex-project.png",
    },
    {
      id: "to-do-list",
      title: "To do list",
      description:
        "Aplicativo que permite usuários gerenciarem seus afazeres diários. No sistema, os usuários podem se cadastrar, fazer login e criar tarefas, que podem ser marcadas como concluídas ou não.",
      techStack: [
        {
          id: "to-do-list-rn",
          stack: "React Native",
        },
        {
          id: "to-do-list-react",
          stack: "React",
        },
        {
          id: "to-do-list-expo",
          stack: "Expo",
        },
        {
          id: "to-do-list-firebase",
          stack: "Firebase",
        },
        {
          id: "to-do-list-yup",
          stack: "Yup",
        },
      ],
      websiteLink: "",
      figmaLink:
        "https://www.figma.com/file/wamHXq2IODbXOfDJRC5nVD/TODO-Mobile-App-(Community)?type=design&node-id=0-1&mode=design&t=Mx2A29JgzqU4vygK-0",
      githubLink: "https://github.com/duardoqueiroz/to-do-list-react-native",
      image: "images/to-do-list-project.png",
    },
  ],
};
