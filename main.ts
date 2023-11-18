// import * as inquirer from 'inquirer';
import inquirer from "inquirer";

async function countCharactersAndWords(paragraph: string) {
  const characterCount = paragraph.replace(/\s/g, "").length;
  const words = paragraph.split(/\s+/);
  const wordCount = words.filter((word) => word !== "").length;

  console.log(`Character Count (excluding whitespaces): ${characterCount}`);
  console.log(`Word Count: ${wordCount}`);
}

async function main() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "paragraph",
      message: "Enter an English paragraph:",
    },
  ]);

  await countCharactersAndWords(answers.paragraph);
}

main();
