import os from "os";
import prompts from "./prompts";
import { getCurrentDir, homeDir } from "./variables";

// Default prompt text
let promptText = prompts.kat;

const systemUserName = os.userInfo().username;
const systemComputerName = os.hostname;

// Function to print the prompt
export function printPrompt() {
  process.stdout.write(getPromptText());
}

// Function to get prompt text
export function getPromptText() {
  return promptText
    .replace("%user%", systemUserName)
    .replace("%host%", systemComputerName)
    .replace("%dir%", getCurrentDir().replace(homeDir, '~'));
}
// Function to allow changing prompts
export function setPromptText(prompt: string) {
  promptText = prompt;
}
