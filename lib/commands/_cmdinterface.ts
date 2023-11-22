export interface Command {
  // name and input of command
  name: string;
  // description of command
  desc: string;
  // actual function called to run the command
  run: Function;
  // command misc data
  misc?: CommandMiscData;
}

export interface CommandMiscData {
  // optional aliases
  alias?: string[];
  // optional help args info
  helpArgsInfo?: string;
}