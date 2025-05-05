
// class that defines a Bible scripture
export class Scripture {
    id: number = 1;
    book: string = "Genesis";
    chapter: number = 1;
    startVerse: number = 1;
    endVerse?: number = 1;
// constructor initializes the scripture with default values
constructor(){
    this.id = 1;
    this.book = "Genesis";
    this.chapter = 1;
    this.startVerse = 1;
    this.endVerse = 1;
 }
}