
import { File } from '../File';


let projects :File[] = [];

let file1: File = new File("chat app","file","/projects","Full stack app"); 
let file2: File = new File("newdevjobs","file","/projects","New dev jobs"); 
let file3: File = new File("FibonaaciHeap","file","/projects","Implementation of Fib heap"); 

projects.push(file1);
projects.push(file2);
projects.push(file3);

export default projects;
