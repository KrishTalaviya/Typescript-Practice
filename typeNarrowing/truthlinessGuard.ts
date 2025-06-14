const element=document.getElementById("id");//HTMLElement | null
if(element){
    console.log(element)//HTMLElement
}
else{
    console.log(element)//null
}
const printLetters=(word?:string/*string | undefined*/)=>{
if(word){
    //string
    for(let char of word){
        console.log(char);
    }
}
else{
    console.log(word)//string | undefined because if word="" rteurns false and in else part
}
}
