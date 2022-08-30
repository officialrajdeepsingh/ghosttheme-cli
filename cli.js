#!/usr/bin/env node

import shell from "shelljs";

const version = "1.0.8";

//  check git
if (!shell.which("git")) {
  shell.echo("Sorry, git is not install");
  shell.exit(1);
}

// node version
let nodeVersion = shell.exec("node --version", { silent: true });

// slice argv as we don't need the forst two elements (in this case)
const args = process.argv.slice(2, process.argv.length);

//  get args first for project name
const projectName = args[0];

//  get args second
const packageManger = args[1] || "yarn";

//  create version command
if (projectName === "version" || projectName === "--version") {
  shell.echo(version);
  shell.exit();
}

//  check project name
if (projectName.length > 0) {
  // installation message
  shell.echo("Installing start with ", nodeVersion);

  // clone repo
  let clone = shell.exec(
    `git clone https://github.com/officialrajdeepsingh/hello-world.git ${projectName}`,
    { silent: true },
  );

  // Clone the repo and check error
  if (clone.code == 128) {
    shell.echo(
      `Error: directory ${projectName} is already exists and is not an empty directory.`,
    );
    shell.exit(1);
  }
  //  face any error stop command
  if (clone.code !== 0) {
    shell.echo(`Some thing wrong`);
    shell.exit(1);
  }

  // Change the folder
  if (shell.cd(projectName).code !== 0) {
    shell.echo("Directer is not change");
    shell.exit(1);
  }
  // installation dependencies message
  shell.echo("Start Install the dependencies with", packageManger, "...");

  let installPackage = shell.exec(`${packageManger} install`, { silent: true });

  //  installtion faile then stop command and delete folder
  if (installPackage.code !== 0) {
    shell.echo(`${args[1] ? args[1] : "yarn"} install is failed `);
    shell.cd("..");
    shell.echo("deleting the file");
    shell.rm("-Rf", projectName);
    shell.exit(1);
  }
} else {
  shell.echo("folder name is required");
  shell.exit();
}

shell.echo(`cd ${projectName}`);
shell.echo("After run ghost start command");
shell.echo("Let start the working with ghost theme and tailwind css.");
