import { groupBy } from "@vlr/map-tools";
import { Options } from "../options";
import { AlterPath } from "./alterPath.type";
import { StringGen } from "./stringGen";
import { AlterAction } from "./alterAction.type";

export function createAlterMethod(paths: AlterPath[], action: AlterAction, options: Options): string {
  return new StringGen(options.lineFeed)
    .braces(sgen => printAlterPaths(sgen, paths, action, []))
    .toString();
}

function printAlterPaths(sgen: StringGen, paths: AlterPath[], action: AlterAction, current: string[]): StringGen {
  const altering = ["prev", ...current];
  sgen = sgen.appendLine(`...${altering.join(".")},`);
  const grouped = groupBy(paths, path => path[0]);
  return grouped.values().reduce((sg, grp) => printGroup(sg, grp, action, current), sgen);
}

function printGroup(sgen: StringGen, paths: AlterPath[], action: AlterAction, current: string[]): StringGen {
  const path = paths[0];
  current = [...current, path[0]];
  if (path.length === 1) {
    const joined = current.join(".");
    if (paths.length > 1) { throw new Error(`incorrect paths at ${joined}`); }
    return sgen.appendLine(`${path[0]}: ${action(`prev.${joined}`)},`);
  }
  return sgen.appendLine(`${path[0]}: `)
    .braces(sg => printAlterPaths(sg, subPaths(paths), action, current));
}

function subPaths(paths: AlterPath[]): AlterPath[] {
  return paths.map(path => path.slice(1));
}
