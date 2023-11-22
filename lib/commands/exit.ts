import { Command } from "./_cmdinterface";

export const exit: Command = {
  name: "exit",
  desc: "Gracefully exit",
  async run() {
    process.exit(0);
  },
};
