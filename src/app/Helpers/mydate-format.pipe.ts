import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydateFormat',
  standalone: true
})
export class MydateFormatPipe implements PipeTransform {

  transform(value: Date, ...args: any[]): any {
      let options:Intl.DateTimeFormatOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
      return new Date(value).toLocaleDateString(navigator.language, options );
    };

}
