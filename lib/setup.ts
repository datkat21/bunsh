import { createInterface } from "readline/promises";
import { getPromptText, printPrompt } from "./prompt";
import { cmdHandler, commandList } from "./commands/_cmdhandler";

function setup() {
  let localInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: getPromptText(),
    // completer(line: string) {
    //   const completions = commandList;
    //   const hits = completions.filter((c) => c.startsWith(line));
    //   // Show all completions if none found
    //   return [hits.length ? hits : completions, line];
    // },
  });

  // localInterface.setPrompt(">");

  localInterface.prompt();

  localInterface.on("line", async (text) => {
    await cmdHandler(text);
    localInterface.setPrompt(getPromptText());
    localInterface.prompt();
  });
}

export { setup };
