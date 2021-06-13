import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'spaceToUnderline'
})
export class PointToComaPipe implements PipeTransform {
  transform(inputString: string, args?: any): string {
    console.log(inputString);
    return inputString.replaceAll(' ', '_');
  }
}
