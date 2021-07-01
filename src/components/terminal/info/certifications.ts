import { File } from '../File';


let certifications :File[] = [];

let file1: File = new File("AWS","file","/certifications","AWS Certified Cloud Architect : Associate Level"); 
let file2: File = new File("Six Sigma","file","/certifications","KPMG Certified Six Sigma : Green Belt"); 
let file3: File = new File("FibonaaciHeap","file","/certifications","Implementation of Fib heap"); 

certifications.push(file1);
certifications.push(file2);
certifications.push(file3);

export default certifications;
