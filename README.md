# Página de Contato Profissional

Este é um micro-portfólio profissional construído com React.js, TypeScript e estilizado usando Tailwind CSS. A aplicação exibe uma foto pessoal, um breve resumo profissional e informações de contato.

## Estrutura do Projeto

```
pagina-contato
├── public
│   └── index.html
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Contact.tsx
│   │   ├── Photo.tsx
│   │   └── Summary.tsx
│   ├── index.tsx
│   └── styles
│       └── tailwind.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Como Iniciar

1. **Clone o repositório:**

```sh
git clone https://github.com/trickveiraoficial/pagina-contato.git
cd pagina-contato
```

2. **Instale as dependências:**

```sh
npm install
```

3. **Execute a aplicação no modo de desenvolvimento:**

```sh
npm start
```

Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar seu portfólio.

## Tecnologias Utilizadas

- React.js
- TypeScript
- Tailwind CSS

## Funcionalidades

- Layout de portfólio responsivo e de página única
- Foto pessoal com borda estilizada e ajustes de posição
- Seção de resumo profissional com tipografia clara e espaçamento adequado
- Seção de contato interativa com links para redes sociais
- Plano de fundo personalizado com padrão texturizado em mosaico

## Implantação

### Construção para Produção

Este projeto utiliza `react-scripts`. Para gerar uma versão otimizada para produção, execute:

```sh
npm run build
```

Os arquivos compilados estarão na pasta `build`.

### Opções de Implantação

Você pode implantar o conteúdo da pasta `build` em qualquer serviço de hospedagem estática. Algumas opções incluem:

#### Implantação no GitHub Pages

1. Instale o pacote `gh-pages`:

```sh
npm install --save gh-pages
```

2. Adicione as seguintes propriedades ao `package.json`:

```json
{
  "homepage": "http://<usuario>.github.io/<nome-do-repositorio>",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Implante a aplicação executando:

```sh
npm run deploy
```

#### Implantação no Netlify

1. Envie seu repositório para o GitHub.
2. Acesse sua conta no Netlify e siga as instruções para criar um novo site a partir do GitHub.
3. Defina o comando de build como `npm run build` e o diretório de publicação como `build`.
4. Implante seu site.

#### Implantação no Vercel

1. Instale o CLI do Vercel:

```sh
npm i -g vercel
```

2. Execute o comando de implantação na pasta do projeto:

```sh
vercel
```

3. Siga as instruções do CLI para implantar seu site.

## Licença

Este projeto está licenciado sob a Licença MIT.

## Exemplo de Exibição da Página

![Página](https://i.ibb.co/Rk4J7Lvn/image.png)








