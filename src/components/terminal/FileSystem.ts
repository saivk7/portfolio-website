import { File } from './File';


const commands = require('./Commands');

export class FileSystem{

    private currentDirectory: string = "";
    
    private files :File[];

    constructor(commands: string[], files: File[]) {
        this.files = files;

    }
    

}