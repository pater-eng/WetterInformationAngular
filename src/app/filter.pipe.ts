import { Pipe, PipeTransform } from '@angular/core';
import { Weatherdata } from './Weather';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Weatherdata, searchValue): Weatherdata {

    if (!searchValue) return value;
    //return value.filter((v) => v.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.size.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

  }

}