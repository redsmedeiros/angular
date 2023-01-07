import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      //caso front-end retorn a seguinte string
      case 'front-end' : return 'code'
      case 'back-end' : return 'computer'

    }
    return 'code';
  }

}
