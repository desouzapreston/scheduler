import { DataObject } from "./data-object";

export interface catalog extends DataObject {
  name: string,
  description?: string,
  price?: number, 
}