## Built Using

* [Chakra UI](https://chakra-ui.com/)
* [Emotion](https://emotion.sh/)
* [gray-matter](https://www.npmjs.com/package/gray-matter)
* [TypeScript](https://www.typescriptlang.org/)
* [Next.js](https://nextjs.org/)
* [MDX](https://github.com/mdx-js/mdx)
* [Storybook](https://storybook.js.org/)

## Requirements

1. [Node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/)


The above command will start the frontend application on [http://localhost:3000/](http://localhost:3000).

## Storybook

```bash
$ yarn storybook
```
## Building static output

```bash
$ yarn build
```

## Icon Generation

Icons and other svgs are stores as js and built into source. The utility we use to convert svgs into js code is create-chakra-icon

```bash
create-chakra-icon ./logo-main.svg ./
```

Icons processed this way may have a bad clip-path element.  A simple find and replace ```clip-path``` for ```clipPath``` will fix it.

Process for preparing icons: 1) Save in adobe illustrator using "Style Attributes", then parse using https://svg2jsx.com/.

## Data managment

Daa is stored in yaml to keep it consistant with the frontmatter and loaded via js-yaml-loader

```javascript
import yaml from '../../data/homepage/main-navigation.yml'
console.log(yaml);
```

## Folder Structure

```
.
├── .github
│   └─── workflows
│        └─── main.yml <--- Staging deployment github action
├── .storybook <--- Global storybook configuration
├── assets <--- Compile time assets such as compiled SVGs
├── data <--- YAML data store sorted by component location
├── out <--- 'yarn build' output
├── pages <--- Next.js routing setup
├── stories <--- Component stories
├── styles <--- Global styles (use only when necessary)
├── tmpassets <--- Storage for unprocessed raw SVG and other compiled assets
├── types <--- Typescript extnensions
```
