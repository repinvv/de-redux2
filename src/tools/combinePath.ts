export function combinePath(path: string, file: string): string {
  if (path.endsWith("/")) {
    return path + file;
  }

  return path + "/" + file;
}
