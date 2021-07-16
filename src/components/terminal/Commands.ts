const commands : string[] = ["cd","ls","mkdir","touch","clear","nano","pwd","cat"];
const tabCommands: string[] = ["cd","ls","cat","lol"]

export function isValidTabCommand(cmd:string) : boolean {
    
    console.log("commadn valid? ", cmd);
    for(var c=0; c<tabCommands.length; c+=1){
        if(tabCommands[c]===cmd) return true;
        
    }
    
    return false;
}

export function isValidCommand(cmd:string) : boolean {

    for(var c=0; c<commands.length; c+=1){
        if(commands[c]===cmd) return true;
    }
    
    return false;
}

export default commands;