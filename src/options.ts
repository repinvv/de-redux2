export interface Options {
  lineFeed?: string;
  quotes?: string;
  IdType?: IdType;
}

export enum IdType {
  number = "number",
  uuid = "uuid"
}
