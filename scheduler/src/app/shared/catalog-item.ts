import { DataObject } from "./data-object";

export interface CatalogItem extends DataObject {
  name: string,
  description?: string,
  price?: number, 
}