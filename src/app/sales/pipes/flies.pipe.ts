import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flies',
})
export class FliesPipe implements PipeTransform {
  transform(value: boolean) {
    return value ? 'vuela' : 'no vuela';
  }
}
