import { Component } from '@angular/core';
import { WordInputComponent } from './word-input/word-input.component';
import { OddLengthComponent } from './odd-length/odd-length.component';
import { EvenLengthComponent } from './even-length/even-length.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WordInputComponent, OddLengthComponent, EvenLengthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fun-for-nerds';
  partialOddWord: string = '';
  partialEvenWord: string = '';

  oddLengthWords: string[] = [];
  evenLengthWords: string[] = [];

  onWord(word: string) {
    if (word.length % 2 === 0) {
      this.evenLengthWords.push(word);
    } else {
      this.oddLengthWords.push(word);
    }
  }

  onPartialWord(word: string) {
    if (word.length % 2 === 0) {
      this.partialEvenWord = word;
      this.partialOddWord = '';
    } else {
      this.partialOddWord = word;
      this.partialEvenWord = '';
    }
  }
}
