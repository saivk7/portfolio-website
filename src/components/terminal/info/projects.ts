
import { File } from '../File';


let projects :File[] = [];
let file0: File = new File("nearby", "file","/projects", "An End-to-End Real Time data pipeline with Full Stack dashboard")
let file1: File = new File("whatsapp","file","/projects","Full stack whatapp clone with real time texting"); 
let file2: File = new File("newdevjobs","file","/projects","A Full Stack SPA website to find jobs!"); 
let file3: File = new File("FibonaaciHeap","file","/projects","Implementation of Fibonacci heap"); 

projects.push(file0);
projects.push(file1);
projects.push(file2);
projects.push(file3);

export default projects;
