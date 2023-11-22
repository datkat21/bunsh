import { version } from "../variables";
import os from "os";
import { Command } from "./_cmdinterface";

export const uname: Command = {
  name: "uname",
  desc: "Shell info",
  misc: {
    helpArgsInfo: "[-a]",
  },
  async run(...args: string[]) {
    if (args.includes("-a")) {
      // Bun shell (bunsh) 1.0 [beta] on Windows NT 10.0
      console.log(
        `${version.fullname} (${version.string}) ${version.number} [${
          version.identifier
        }] on ${os.platform()} ${os.version()}`
      );
    } else {
      // bunsh 1.0
      console.log(`${version.string} ${version.number}`);
    }
  },
};
