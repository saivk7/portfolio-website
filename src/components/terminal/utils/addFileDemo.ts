import {File} from '../File';

import { printDir, RecursiveFindDirectory } from './fileUtils';

import {addFile} from './fileInsert';

const animalFile = new File('newAnimalFile','file','/animals/testDir');

import homeArray from '../info';


console.log("before insert array",homeArray);

var afterArray = addFile(animalFile,homeArray);

console.log("\n after insert array" , afterArray);

console.log("\n Looking at the directory", RecursiveFindDirectory(animalFile.getLocation(),afterArray));