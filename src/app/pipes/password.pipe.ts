import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, hiddenName:boolean = false): any {
  
  let result = '';

  if(hiddenName){
    result = value;
  } else {
    for( let i = 0; i < value.length; i++){
      result += '*'
    }
  }

    return result;
  }

}
