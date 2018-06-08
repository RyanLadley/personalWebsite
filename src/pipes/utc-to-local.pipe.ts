import { DomSanitizer } from '@angular/platform-browser';
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'utcToLocal'
})
//Converts UTC datetimes to local dateimes
export class UtcToLocalPipe implements PipeTransform {
    
    //Could be passed as a string or a date
    transform(utcDateTime: any) {

        //utcDateTime is more than likely a string, dut it could be a date. Call to String Anyway
        var utc = new Date(utcDateTime.toString())

        //Date is now in the proper format; adding UTC to the end will tell javascript to convert this to local time
        var local = new Date(utc.toString() + " UTC")

        return this.parseDate(local.toString());
    }

    parseDate(date) {
        let parsed = Date.parse(date);
        if (!isNaN(parsed)) {
            return parsed;
        }

        return Date.parse(date.replace(/-/g, '/').replace(/[a-z]+/gi, ' '));
    }
}