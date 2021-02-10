import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phraseCase'
})
export class PhraseCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    

    let words = value.split(' ');
    for (var i = 0; i < words.length; i++) {
      let word = words[i];
      if (i > 0 && this.isPreposition(word))
      words[i] = word.toLowerCase();
      else 
        words[i] = this.toPhraseCase(word);
      

    }
    return words.join(' ');
  }

  private toPhraseCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
  private isPreposition(word: string): boolean {
    let prepositions = [
      'of',
      'the'

    ];
    return prepositions.includes(word.toLowerCase())
  }

}
