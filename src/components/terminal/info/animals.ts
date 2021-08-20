
import { File } from '../File';

let emptyDirectory: File[] = [new File("lol","file","/animals/testDir","empty file"), new File("lol2","file","/animals/testDir","empty file2")];
let animals :File[] = [];

let file1: File = new File("zefee","file","/animals","Husky dog in Gnv"); 
let file2: File = new File("BabyChai","file","/animals","Maine coon cat in UK"); 

let file4: File = new File("testDir", "directory","/animals",undefined,emptyDirectory)

animals.push(file1);
animals.push(file2);

animals.push(file4);

export default animals;
