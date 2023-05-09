function checkString(param:unknown):void{
    if(typeof param === 'string'){
        console.log(param);
    }else{
        console.error('Not a string!');
    }
}

checkString("Jisan");
checkString(false);