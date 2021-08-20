import { File } from '../File';
import experience from './exp';
import projects from './projects';
import animals from './animals';
import certifications from './certifications';


let homeArray :File[] = [];
let file01: File = new File("contact","file","/","saivenkateshk@usf.edu"); 
let file02: File = new File("skills","file","/",`[Java, python, JavaScript, TypeScript, AWS, Node.js, React, Redux, SQL]`); 
let file03: File = new File("animals","directory","/",undefined,animals); 
let file04: File = new File("certifications","directory","/",undefined,certifications); 
let file1: File = new File("experience","directory","/",undefined,experience); 
let file2: File = new File("projects","directory","/",undefined,projects); 
let file4: File = new File("animals","directory","/",undefined,animals); 
let file3: File = new File("certifications","directory","/",undefined,certifications); 


homeArray[0] = file01;
homeArray[1] = file02;

homeArray[2] = file1;
homeArray[3] = file2;
homeArray[4] = file3;
homeArray[5] = file4;


export const fileArr = homeArray.map( file => {
    return file.getName();
})

export default homeArray;