const commands : string[] = ["cd","ls","mkdir","touch","clear","nano","pwd","cat"];

export function isValidCommand(cmd:string) : boolean {
    
    for(var c=0; c<commands.length; c+=1){
        if(commands[c]===cmd) return true;
    }
    
    return false;
}

export default commands;