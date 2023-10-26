import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimCart'
})
export class TrimcartPipe implements PipeTransform {

  transform(value: string, numberOfChar: number): string {
    return value.split(" ").splice(0,numberOfChar).join(" ");
  }

}
