import { Command } from "./_cmdinterface";
import { cd } from "./cd";
import { exit } from "./exit";
import { ls } from "./ls";
import { uname } from "./uname";
import Table from "cli-table";

const help: Command = {
  name: "help",
  desc: "Show this menu",
  run() {
    var table = new Table({
      chars: { mid: "", "left-mid": "", "mid-mid": "", "right-mid": "" },
      style: { head: ["green"] },
      head: ["command", "arguments", "description"],
    });

    table.push(
      ...Object.values(existingCmdList).map((m) => {
        return { [m.name]: [m.misc?.helpArgsInfo || "", m.desc] };
      })
    );

    console.log(table.toString());
  },
};

const existingCmdList: Record<string, Command> = {
  cd,
  exit,
  help,
  ls,
  uname
};

export const commandList: string[] = [
  ...Object.values(existingCmdList).map((m) => m.name),
];

// Function to handle running commands
export async function cmdHandler(string: string) {
  // this is really like most discord bots before slash commands
  const data = string.trim().split(" ");
  const command = data[0];
  const args = data.slice(1);

  // Handle the comamnd using the command handler (if it exists)
  if (command in existingCmdList) {
    await existingCmdList[command].run(...args);
  }
}
