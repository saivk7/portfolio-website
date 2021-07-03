import { File } from '../File';
import experience from './exp';
import projects from './projects';
import animals from './animals';
import certifications from './certifications';


let homeArray :File[] = [];

let file1: File = new File("experience","directory","/",undefined,experience); 
let file2: File = new File("projects","directory","/",undefined,projects); 
let file4: File = new File("animals","directory","/",undefined,animals); 
let file3: File = new File("certifications","directory","/",undefined,certifications); 

homeArray[0] = file1;
homeArray[1] = file2;
homeArray[2] = file3;
homeArray[3] = file4;


export const fileArr = homeArray.map( file => {
    return file.getName();
})

export default homeArray;