import { Component, Input, OnInit } from '@angular/core';
import { Scripture } from './scripture.model';

@Component({
  selector: 'app-scripture',
  standalone: true,
  imports: [],
  templateUrl: './scripture.component.html',
  styleUrls: ['./scripture.component.css']
})

export class ScriptureComponent implements OnInit {
  @Input() reference: Scripture = new Scripture();

  // null check
  ngOnInit(): void {
    if (!this.reference) {
      this.reference = new Scripture();
    }
  }
  public getScriptureRef(): string {
    if (this.reference.endVerse) {
      return `${this.shortBook()} ${this.reference.chapter}:${this.reference.startVerse}-${this.reference.endVerse}`;
    }
    return `${this.shortBook()} ${this.reference.chapter}:${this.reference.startVerse}`;
  }

  // Returns a link to the JW.org website for the provided scripture reference
  public getScriptureLink(): string {
    return `https://jw.org/en/library/bible/study-bible/books/${this.linkBook()}/${this.reference.chapter}`;
  }

  // Helper function to return a shortened book name
  public shortBook(): string {
    const bookAbbreviations: { [key: string]: string } = {
      'Genesis': 'Ge',
      'Exodus': 'Ex',
      'Leviticus': 'Le',
      'Numbers': 'Nu',
      'Deuteronomy': 'De',
      'Joshua': 'Jos',
      'Judges': 'Jg',
      'Ruth': 'Ru',
      '1 Samuel': '1Sa',
      '2 Samuel': '2Sa',
      '1 Kings': '1Ki',
      '2 Kings': '2Ki',
      '1 Chronicles': '1Ch',
      '2 Chronicles': '2Ch',
      'Ezra': 'Ezr',
      'Nehemiah': 'Ne',
      'Esther': 'Es',
      'Psalms': 'Ps',
      'Proverbs': 'Pr',
      'Ecclesiastes': 'Ec',
      'Song of Solomon': 'Ca',
      'Isaiah': 'Isa',
      'Jeremiah': 'Jer',
      'Lamentations': 'La',
      'Ezekiel': 'Eze',
      'Daniel': 'Da',
      'Hosea': 'Ho',
      'Joel': 'Joe',
      'Amos': 'Am',
      'Obadiah': 'Ob',
      'Jonah': 'Jon',
      'Micah': 'Mic',
      'Nahum': 'Na',
      'Habakkuk': 'Hab',
      'Zephaniah': 'Zep',
      'Haggai': 'Hag',
      'Zechariah': 'Zec',
      'Malachi': 'Mal',
      'Matthew': 'Mt',
      'Mark': 'Mr',
      'Luke': 'Lu',
      'John': 'Joh',
      'Acts': 'Ac',
      'Romans': 'Ro',
      '1 Corinthians': '1Co',
      '2 Corinthians': '2Co',
      'Galatians': 'Ga',
      'Ephesians': 'Eph',
      'Philippians': 'Php',
      'Colossians': 'Col',
      '1 Thessalonians': '1Th',
      '2 Thessalonians': '2Th',
      '1 Timothy': '1Ti',
      '2 Timothy': '2Ti',
      'Titus': 'Tit',
      'Philemon': 'Phm',
      'Hebrews': 'Heb',
      'James': 'Jas',
      '1 Peter': '1Pe',
      '2 Peter': '2Pe',
      '1 John': '1Jo',
      '2 John': '2Jo',
      '3 John': '3Jo',
      'Jude': 'Jude',
      'Revelation': 'Re'
    };
    
      return bookAbbreviations[this.reference.book] || this.reference.book;
  }
    
  private linkBook(): string {
    // Checks if the reference or book is undefined
    if (!this.reference || !this.reference.book) {
      console.error('Error: reference or book is undefined', this.reference);
      return '';
    }
  
    // Log the book to ensure it's correctly passed
    console.log('Book before transformation:', this.reference.book);
  
    // Replace spaces with dashes and convert to lowercase for URL-friendliness
    return this.reference.book.toLowerCase().replace(/\s+/g, '-');
  }
}
