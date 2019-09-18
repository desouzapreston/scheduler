import { DataObject } from "./data-object";

export interface Vehicle extends DataObject {
  make: string,
  model?: string,
  year?: number, 
}