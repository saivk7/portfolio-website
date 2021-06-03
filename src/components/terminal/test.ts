
import { File } from './File';

let filearr;

let files :File[] = [];

let file1: File = new File("sai","file","/","wow1"); 
let file2: File = new File("v","file","/","wow2"); 
let file3: File = new File("k","file","/","wow3"); 
let file4: File = new File("d","directory","/",undefined,[new File("sai",'file','/dir', "inside")]);

files[0] = file1;
files[1] = file2;
files[2] = file3;
files[3] = file3;
files[4] = file4;

filearr = new File("sai","directory","/",undefined,files);

let arr : File[]  = filearr.getFiles()!;

console.log(arr[4]);

