import { NodeId } from "../../createTree/types";
import { StateId } from "../../prepareFiles/types";
import { FieldPath } from "./path.type";

export interface ModelPath {
  root: NodeId;
  node: NodeId;
  path: FieldPath;
  state: StateId;
}
