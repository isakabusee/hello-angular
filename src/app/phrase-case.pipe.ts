import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phraseCase'
})
export class PhraseCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    let words = value.splint(' ');
    for (var i = 0; i < words.length; i++) {
      
    }
  }

}
