import { groupBy } from "@vlr/map-tools";
import { AlterPath } from "./alterPath.type";
import { StringGen } from "./stringGen";
import { AlterAction } from "./alterAction.type";

export interface AlterOptions {
  lineFeed: string;
  srcName: string;
  indent: number;
}


export function createAlterMethod(paths: AlterPath[], action: AlterAction, options: AlterOptions): string {
  return new StringGen(options.lineFeed, options.indent)
    .braces(sgen => printAlterPaths(sgen, paths, action, [], options))
    .toString();
}

function printAlterPaths(sgen: StringGen, paths: AlterPath[], action: AlterAction, current: string[], options: AlterOptions): StringGen {
  const altering = [options.srcName, ...current];
  sgen = sgen.appendLine(`...${altering.join(".")},`);
  const grouped = groupBy(paths, path => path[0]);
  return grouped.values().reduce((sg, grp) => printGroup(sg, grp, action, current, options), sgen);
}

function printGroup(sgen: StringGen, paths: AlterPath[], action: AlterAction, current: string[], options: AlterOptions): StringGen {
  const path = paths[0];
  current = [...current, path[0]];
  if (path.length === 1) {
    const joined = current.join(".");
    if (paths.length > 1) { throw new Error(`incorrect paths at ${joined}`); }
    return sgen.appendLine(`${path[0]}: ${action(`prev.${joined}`)},`);
  }
  return sgen.append(`${path[0]}: `)
    .bracesComma(sg => printAlterPaths(sg, subPaths(paths), action, current, options));
}

function subPaths(paths: AlterPath[]): AlterPath[] {
  return paths.map(path => path.slice(1));
}
