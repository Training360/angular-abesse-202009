import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], key: string, phrase: string = ''): any[] {
    if (!value) {
      return value;
    }

    phrase = phrase.toLowerCase();

    if (!key) {
      return value.filter( item => {
        item = JSON.stringify(item);
        return item.toLowerCase().includes(phrase);
      });
    }

    return value.filter( item => {
      return ('' + item[key]).toLowerCase().includes(phrase);
    });
  }

}
