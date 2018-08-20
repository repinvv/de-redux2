function findParameterEnd(content: string, index: number): number {
  let angleBracketCount = 0;
  while (index < content.length) {
    if (content[index] === "<") {
      angleBracketCount++;
    }

    if (content[index] === ">" && angleBracketCount > 0) {
      angleBracketCount--;
    }

    if (content[index] === "," && angleBracketCount === 0) {
      break;
    }

    index++;
  }
  return index;
}

export function splitParameters(content: string): string[] {
  let index = 0;
  const result: string[] = [];
  while (index < content.length) {
    const end = findParameterEnd(content, index);
    const parameter = content.substr(index, end - index).trim();
    if (parameter.length) {
      result.push(parameter);
    }

    index = end + 1;
  }
  return result;
}
