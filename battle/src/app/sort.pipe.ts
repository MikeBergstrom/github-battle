import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(player_array: any): any {
    return player_array.sort((a,b) => b.score - a.score);
  }

}
