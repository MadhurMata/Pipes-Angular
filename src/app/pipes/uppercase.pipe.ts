import { Pipe, PipeTransform } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Pipe({name: 'uppercase'})
export class UppercasePipe implements PipeTransform {
  transform(value: string, AllToUpercase:boolean = true): string {

  value = value.toLocaleLowerCase();
  let names = value.split(' ');

  if( AllToUpercase){
    for( let i in names ){
      names[i] = names[i][0].toUpperCase() + names[i].substr(1)
    }
  } else {
    names[0] = names[0][0].toLocaleUpperCase() + names[0].substr(1);

  }

    return names.join(' ');
    
  }
}