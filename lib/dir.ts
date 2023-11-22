import { dirname, join } from "path";
import { getCurrentDir, homeDir } from "./variables";

export function parseRelativeDir(path: string): string {
  let newPath = path;
  if (path === "" || path === undefined) {
    // No path = home
    newPath = homeDir;
  } else if (path.startsWith("~")) {
    newPath = path.replace("~", homeDir);
  } else if (path === "..") {
    newPath = dirname(getCurrentDir());
  } else {
    newPath = join(getCurrentDir(), path);
  }
  return newPath;
}
