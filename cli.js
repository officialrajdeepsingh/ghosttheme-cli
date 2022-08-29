#! /usr/bin/env node

import shell from "shelljs";

if (!shell.which("git")) {
  shell.echo("Sorry, git is not install");
  shell.exit(1);
}
// node version
let version = shell.exec("node --version", { silent: true }).stdout;

// slice argv as we don't need the forst two elements (in this case)
const args = process.argv.slice(2, process.argv.length);
//  get args first
const projectName = args[0];
//  get args second
const packageManger = args[1] ? `${args[1]} install` : "yarn install";

if (projectName.length > 0) {
  shell.echo(`Installing start with ${version}...`);

  let clone = shell.exec(
    `git clone https://github.com/officialrajdeepsingh/helloworld.git ${projectName}`,
    { silent: true },
  );

  // Clone the repo
  if (clone.code == 128) {
    shell.echo(
      `Error: directory ${projectName} is already exists and is not an empty directory.`,
    );
    shell.exit(1);
  }

  if (clone.code !== 0) {
    shell.echo(`Some thing wrong`);
    shell.exit(1);
  }

  // Change the folder
  if (shell.cd(projectName).code !== 0) {
    shell.echo("Directer is not change");
    shell.exit(1);
  }

  shell.echo(`Start Install the dependencies with ${packageManger}... `);

  let installPackage = shell.exec(packageManger, { silent: true });

  if (installPackage.code !== 0) {
    shell.echo(`${args[1] ? args[1] : "yarn"} install is failed`);
    shell.exit(1);
  }

}

shell.echo(`cd ${projectName}`);
shell.echo("After run ghost start command");
shell.echo("Let start the working with ghost theme and tailwind css.");
