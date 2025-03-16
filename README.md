# My Professional Portfolio

This is a micro-professional portfolio built with React.js, TypeScript, and styled using Tailwind CSS. The application showcases a personal photo, a brief professional summary, and contact information.

## Project Structure

```
my-portfolio-app
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

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd my-portfolio-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the application in development mode:**
   ```sh
   npm start
   ```
   Open your browser and go to [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS

## Features

- Responsive, single-page portfolio layout
- Personal photo with stylized border and position adjustments
- Professional summary section with clear typography and spacing
- Interactive contact section with social media links
- Custom textured background with a tiled pattern

## Deployment

### Build for Production

This project uses `react-scripts`. To produce an optimized production build, run:

```sh
npm run build
```

The build output will be in the `build` folder.

### Deployment Options

You can deploy the contents of the `build` folder to any static hosting service. Here are a few options:

#### Deploy on GitHub Pages

1. Install the `gh-pages` package:
   ```sh
   npm install --save gh-pages
   ```
2. Add the following properties to your `package.json`:
   ```json
   {
     "homepage": "http://<username>.github.io/<repository-name>",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
3. Deploy the app by running:
   ```sh
   npm run deploy
   ```

#### Deploy on Netlify

1. Push your repository to GitHub.
2. Log into your Netlify account and follow the instructions for creating a new site from GitHub.
3. Set the build command to `npm run build` and the publish directory to `build`.
4. Deploy your site.

#### Deploy on Vercel

1. Install the Vercel CLI:
   ```sh
   npm i -g vercel
   ```
2. Run the deploy command in your project folder:
   ```sh
   vercel
   ```
3. Follow the CLI prompts to deploy your site.

## License

This project is licensed under the MIT License.