import { stat } from "fs/promises";
import { setCurrentDir, getCurrentDir, homeDir } from "../variables";
import { Command } from "./_cmdinterface";
import { dirname, join } from "path";
import { inspect } from "util";
import { printError } from "../printError";
import { parseRelativeDir } from "../dir";

export const cd: Command = {
  name: "cd",
  desc: "Change directory",
  misc: {
    helpArgsInfo: "<path>",
  },
  async run(path: string | undefined = undefined) {
    // Args are ignored for now
    let newPath = parseRelativeDir(path || "");

    // Try to stat the dir first
    try {
      await stat(newPath);
    } catch (e: any) {
      if (e.code.toLowerCase() === "enoent") {
        printError("enoent", "cd: " + path);
      }
      return;
    }

    setCurrentDir(newPath);

    process.stdout.write("Path set to " + newPath + "\n");
  },
};
