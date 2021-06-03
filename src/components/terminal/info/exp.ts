
import { File } from '../File';


let experience :File[] = [];

let file1: File = new File("vedanta","file","/experience","Software Enigeer"); 
let file2: File = new File("logicHive","file","/experience","Intern"); 
let file3: File = new File("NITK","file","/experience","Student"); 

experience.push(file1);
experience.push(file2);
experience.push(file3);

export default experience;
