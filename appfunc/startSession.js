

var buttonSession = (varUser,varPass) => {
    let status;
    
    if (varUser == "anibal" && varPass=="anibal"){
        status=0;
        console.log("sessión iniciada correctamente");
    }else{
        status=1;
        console.log("sessión no iniciada");
    }
     
    
    return status
  
}
export {buttonSession};