![](https://img.shields.io/badge/CowryWise-Assesment-blueviolet)

# CowryWise Frontend Test project 

> The project is aimed at testing the implemnetation of mockups Vue component lifecycle, handling API responses and calls, CSS and responsive design, animations and transitions as well as VUE3 based components.


  
This app is designed follow the recommendation as in the project. [Find project specifications here](https://coda.io/@cwry/frontend-engineer-test)


<div align="center">

[![View Code](https://img.shields.io/badge/View%20-SourceCode-green)](https://github.com/errea/Cowry_Frontend_Test)
[![Github Issues](https://img.shields.io/badge/Github%20-Issues-red)](https://github.com/errea/Cowry_Frontend_Test/issues)
[![GitHub Pull Requests](https://img.shields.io/badge/GitHub-Pull%20Requests-blue)](https://github.com/errea/Cowry_Frontend_Test/pulls?q=is%3Apr+is%3Aclosed)
[![Unsplash API](https://img.shields.io/badge/Unsplash-API%20Doc-purple)](https://unsplash.com/documentation)
[![API DOCS](https://img.shields.io/badge/API-Documentation-yellow)](https://unsplash.com/documentation#search-photos)

</div>

<p align="center">
<a href="#with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#gs">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#author">Authors</a>
</p>

# Live Site 

## :star: [here](https://agitated-mcnulty-572592.netlify.app/) :star:

># Project requirements
  ## Basics

1. The design uses a staggered grid to present photos from the API, 

2. Use a tint overlay on top of the images to give the text good contrast, should an image have a light background.


3. Implement loading placeholders to provide feedback to users while fetching data from the API

4. On clicking an image, show a modal of the image in the best resolution that doesn't take too long to download

5. Clicking an image should open a fullscreen image slider with smooth animations.

6. The image slider should allow left/right navigation through images, include touch-swipe support for mobile, and have a nice transition effect between slides. 
   
7. Add full documentation for your API.



># Technical set up

## Setup

Make sure to install dependencies:

```bash
# npm
npm install(node version >= 18)

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```



Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## 📝 Contents
 
## 🔧 Built with<a name = "with"></a>


- Vue3/Nuxt3
- vue-router
- HTML, CSS, JavaScript (ES6)
- Tailwind
- SCSS
- Vite
- Pinia
- TypeScript
- Vue.js 3
- Linters: ESLint
- NPM
- Functional based Components 
- Ref
- Axios
- [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md)
- Use [Vue Composition API](https://vuejs.org/tutorial/#step-2).
- Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Getting Started <a name = "gs"></a>
> To get a local copy up and running follow these simple example steps.

<details>
  <summary>Get instructions</summary>

## Usage

1. In your terminal, run yarn install while inside the root directory of the repository files
2. Go to your browser of choice and enter this URL: [http://localhost:3000](http://localhost:3000)

## Linters
To run the linters included in this repository, go to the root directory of your repository and copy/paste the following commands into your terminal:
(**Note:** Make sure you run `npm install` before you do this)
- for ESlint, `npx eslint <path of file>`

```
$ cd <folder>
```

~~~bash
$ git clone https://github.com/errea/Cowry_Frontend_Test.git
$ cd Cowry_Frontend_Test
~~~

Run `yarn Install` to install the node modules with vite.

Run `yarn build` to build the bundler.

Run `yarn dev`  opens on `http://localhost:3000/` in your browser.

## Set up
* Open your terminal and locate the folder you want to clone the repository and follow the steps above to install

</details>



## Project Structure

    Hello-world-rails-react Project
    └── .nuxt
    └── .output
        └── public
    /assets
    |---/css
         └── tailwind.css
    |---/scss
        |---color.scss
        |--- varibale.scss
    /components
    |---/common
         └── ImageSlider.vue
         └── PersonCard.vue
         └── Search.vue
         └── SearchLoaderPreviewer.vue
         └── SearchResults.vue
    |---/layouts
        |---default.vue
        |---loader.vue
    |---/node_modules
    |---/pages
        |---search
              └──index.vue
        |---index.vue
    |---/public
        |---images
    |---/server
        |---tconfig.json
    | .env
    └── .eslintrc.
    └── .gitignore
    └── .prettierrc.json
    └──LICENSE
    └── nuxt.config.ts
    └── package-lock.json
    └── package.json
    └──README.md
    └──tailwind.config.js
    └──tsconfig.json
    └──yarn.lock

## ✒️  Authors <a name = "author"></a>

👤 **Eri**

- Github: [@errea](https://github.com/errea)
- Twitter: [@Erreakay](https://github.com/errea)
- Linkedin: [Eri Okereafor](https://www.linkedin.com/in/eri-ngozi-okereafor/)

## 🤝 Project Kanban Task

Check the project Kanban here [Kanban Project](https://github.com/users/errea/projects/12)
  
## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/errea/Cowry_Frontend_Test/issues)

  
## Acknowledgments

- CowryWise: [on coda.io](https://coda.io/@cwry/frontend-engineer-test)

## 📝 License

This project is [MIT](./LICENSE) licensed.
