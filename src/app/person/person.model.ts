import { Scripture } from "../scripture/scripture.model";

  export class Person {
    constructor(
      public id: number,
      public name: string,
      public father: string,
      public mother: string,
      public spouse: string,
      public children: string[],
      public scriptures?: Scripture[],
      public birthDate?: Date,
      public deathDate?: Date,
      public description?: string,
      public isExpanded?: boolean,
      public image?: string,
    ) {}
  }