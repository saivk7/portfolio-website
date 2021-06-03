
import { File } from '../File';


let animals :File[] = [];

let file1: File = new File("zefee","file","/animals","Husky dog in Gnv"); 
let file2: File = new File("BabyChai","file","/animals","Maine coon cat in UK"); 
let file3: File = new File("NITK","file","/animals","Student"); 

animals.push(file1);
animals.push(file2);
animals.push(file3);

export default animals;
