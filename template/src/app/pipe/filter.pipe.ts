import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string): any[] {
    if (!value || !Array.isArray(value) || value.length === 0 || !phrase) {
      return value;
    }

    phrase = phrase.toLowerCase();
    return value.filter( (item) => {
      return (item.name as string).toLowerCase().indexOf( phrase ) > -1;
    });
  }

}
