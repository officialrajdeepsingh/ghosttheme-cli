Ghost theme-cli help to provide a boilerplate theme for the developer. Developers quickly start working with a ghost theme. Ghost theme-cli official supports the tailwind CSS  by default in your theme.

## How to use ghosttheme-cli?
With ghost theme-cli, you quickly start working with theme development with one command.
### Steps
1. Install ghosttheme-cli
2. Create a theme
3. Run ghost and tailwind server

#### Install ghosttheme-cli
Install ghosttheme -cli with npm using `npm install -g ghosttheme-cli` command.

#### Create theme
After installing ghost theme-cli on your laptop. now create a ghost theme with 
`ghost-theme my-project`

#### Run ghost and tailwind server
To start working with tailwindcss, you must run a separate server with postcss and tailwind CSS.
`npm run start`


#### How many arguments are supported by ghost theme-cli?
Ghost theme-cli currently supports only two arguments. the first argument is the project name, and the second argument is the package manager (npm, yarn and pnpm).

```javascript 
ghost-theme name-the-project  // install all dependencies by default with yarn

or

ghost-theme name-the-project pnpm // install all dependencies with pnpm

```
### note 
`ghost-theme my-project` use by default yarn. 

