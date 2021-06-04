import { File } from '../File';
import experience from './exp';
import projects from './projects';
import animals from './animals';


let homeArray :File[] = [];

let file1: File = new File("experience","directory","/",undefined,experience); 
let file2: File = new File("projects","directory","/",undefined,projects); 
let file3: File = new File("animals","directory","/",undefined,animals); 


homeArray[0] = file1;
homeArray[1] = file2;
homeArray[2] = file3;


export default homeArray;