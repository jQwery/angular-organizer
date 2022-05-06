import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject } from "rxjs";

@Pipe({
    name: 'moment',
    pure: false
})

export class MomentPipe implements PipeTransform{
    transform(m: moment.Moment , format: string = 'MMMM YYYY'): string {
        return m.format(format)
    }
}