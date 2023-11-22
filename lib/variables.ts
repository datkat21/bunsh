import os from "os";
import { setPromptText } from "./prompt";

// Current directory
let currentDir: string = os.homedir();
export let homeDir: string = os.homedir();
export let version = {
  number: "1.0",
  string: "bunsh",
  fullname: "Bun shell",
  identifier: "beta",
};

export function setPrompt(prp: string) {
  setPromptText(prp);
}

export function getCurrentDir() {
  return currentDir;
}
export function setCurrentDir(dir: string) {
  currentDir = dir;
}
