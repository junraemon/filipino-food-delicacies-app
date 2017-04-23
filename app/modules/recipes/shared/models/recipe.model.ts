export class Recipe {
   constructor(
      public id: string,
      public name: string,
      public imageUrl: string,
      public shortIntro: string,
      public details: string,
      public date: number,
      public categories: Array<string>,
   ) { }
}