
import { File } from './File';

import { printDir, RecursiveFindDirectory } from './utils/fileUtils';

import homeArray from './info';

/* console.log(homeArray);

for(var i=0;i<homeArray.length;i++){
    console.log(homeArray[i]);
} */


/* 

const retArray:File[] = RecursiveFindDirectory("/experience",homeArray)!;
console.log("files : ", retArray);
console.log("files in dir", printDir(retArray,"file"));
console.log("directoies in dir, ", printDir(retArray,"directory")); */

const arr = ["1",2,false]
console.log(typeof arr);
console.log(typeof [...arr]);

