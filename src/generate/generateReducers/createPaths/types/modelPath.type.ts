import { FieldPath } from "./path.type";
import { NodeId } from "../../../../createTree/types";
import { StateId } from "../../../../prepareFiles/types";

export interface ModelPath {
  root: NodeId;
  node: NodeId;
  path: FieldPath;
  state: StateId;
}
