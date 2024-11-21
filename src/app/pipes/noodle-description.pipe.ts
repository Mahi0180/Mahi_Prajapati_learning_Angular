import { Pipe, PipeTransform } from '@angular/core';
import {Noodles} from "../models/noodles";

@Pipe({
  name: 'noodleDescription',
  standalone: true
})
export class NoodleDescriptionPipe implements PipeTransform {

  transform(noodle: Noodles) :string {
    return '${noodle.name} - ${noodle.price.toFixed(2)},manufactured on {noodle.manufactureDate.toDateString()}';
  }

}
