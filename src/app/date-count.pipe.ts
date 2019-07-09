import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: Date, []): string {
    var result: string;

    
    let now = new Date().getTime();

    
    let tick = (now - value.getTime()) / 1000;

    
    if (tick < 10) {
      result = 'now';
    } else if (tick < 60) { 
      result = Math.floor(tick) + 'seconds';
    } else if (tick < 3600) { 
      result = Math.floor(tick / 60) + ' minutes';
    } else if (tick < 86400) { 
      result = Math.floor(tick / 3600) + 'hours';
    } else { 
      result = Math.floor(tick / 86400) + 'days';
    }

    return result ;
  }
    
  }


