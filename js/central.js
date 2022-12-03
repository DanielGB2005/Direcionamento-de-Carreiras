// botao de menu
function acaoBT(){
    cont = cont + 1;
    if(cont%2==0){
        document.getElementById("items").style.display = "block";
    }

    else{
        document.getElementById("items").style.display = "none";   
    }
}  

// comportamento da logo
function logoMove(){
    window.location.href = "index.html";
}

    
