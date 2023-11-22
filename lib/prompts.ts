import Chalk from "chalk";

const prompts = {
  default:
    Chalk.greenBright("%user%@%host%") +
    Chalk.reset(":") +
    Chalk.blueBright("%dir%") +
    Chalk.reset("$ "),
  cmd: Chalk.reset("%dir%>"),
  pwsh: Chalk.reset("PS %dir%> "),
  kat: `\x1b[38;2;131;86;213m%user%${Chalk.blue('%dir%')}${Chalk.gray('%')}${Chalk.reset(' ')}`
};

export default prompts;
