const errors: Record<string, string> = {
  enoent: "No such file or directory",
};

export function printError(error: string, misc?: string) {
  if (misc === undefined) {
    process.stderr.write(errors[error] + '\n');
  } else {
    process.stderr.write(misc + ": " + errors[error] + '\n');
  }
}