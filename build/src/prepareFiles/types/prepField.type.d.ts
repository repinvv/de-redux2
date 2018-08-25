import { PrepType } from "./prepType.type";
export interface PrepField {
    name: string;
    isOptional: boolean;
    type: PrepType;
}
