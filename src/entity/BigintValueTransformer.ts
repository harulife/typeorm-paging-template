import { ValueTransformer } from "typeorm";

export class BigintValueTransformer implements ValueTransformer {
  from(databaseValue: string): number{
    return parseInt(databaseValue, 10);
  }
  to(databaseValue: number): number{
    return databaseValue;
  }
}
