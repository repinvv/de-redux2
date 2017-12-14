export function execRegex(regex: RegExp, content: string): RegExpExecArray[] {
  const matches: RegExpExecArray[] = [];
  let match = regex.exec(content);
  while (match) {
    matches.push(match);
    match = regex.exec(content);
  }

  return matches;
}
