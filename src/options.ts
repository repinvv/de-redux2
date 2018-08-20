export interface Options {
  lineFeed?: string;
  IdType?: IdType;
}

export enum IdType {
  number = "number",
  uuid = "uuid"
}
