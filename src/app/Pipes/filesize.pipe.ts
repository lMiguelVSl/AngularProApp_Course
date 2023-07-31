import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filesize'
})
export class FileSizePipe implements PipeTransform {
    transform(value: any, extension = 'MB') {
        console.log('pipe transform:', value);
        return (value/(1024*1024)).toFixed(2) + extension;
    }

}