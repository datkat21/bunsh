import { readdir, stat } from "fs/promises";
import { getCurrentDir } from "../variables";
import { Command } from "./_cmdinterface";
import { join } from "path";
import Chalk from "chalk";
import { parseRelativeDir } from "../dir";

export const ls: Command = {
  name: "ls",
  desc: "List files in directory",
  misc: {
    helpArgsInfo: '[path]'
  },
  // equivalent of run(string[] args)
  async run(path: string) {
    // Args are ignored for now
    const dir = parseRelativeDir(path) || getCurrentDir();
    const items = await Promise.all(
      (await readdir(dir)).sort().map(async (item) => {
        return { item, stats: await stat(join(dir, item)) };
      })
    );
    items.forEach((file, index) => {
      if (file.item.startsWith(".")) return;
      if (file.stats.isDirectory() === true)
        process.stdout.write(Chalk.blueBright(file.item) + "  ");
      else process.stdout.write(file.item + "  ");
      // End the line
      if (index === items.length - 1) {
        process.stdout.write("\n");
      }
    });
  },
};
