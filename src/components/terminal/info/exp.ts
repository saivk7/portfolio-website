
import { File } from '../File';


let experience :File[] = [];
let file0: File = new File("magyk", "file", "/experience", "Software Developer")
let file1: File = new File("vedanta","file","/experience","Software Enigeer"); 
let file2: File = new File("logicHive","file","/experience","Co-op"); 
let file3: File = new File("NITK","file","/experience","Student Researcher"); 

experience.push(file0);
experience.push(file1);
experience.push(file2);
experience.push(file3);

export default experience;
