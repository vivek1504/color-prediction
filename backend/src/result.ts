export const result = () : string=>{
    const answer = Math.floor(Math.random() * 2);
    
    if(answer == 0){
        return "blue"
    }else{
        return "red"
    }

}
