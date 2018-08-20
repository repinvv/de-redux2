import { stripExtension } from "./stripPath";

export function getFileName(path: string): string {
  const index = path.lastIndexOf("/");
  return stripExtension(path.substr(index + 1));
}
