cont = 0;

function contar(){
    cont = cont + 1;

    if(cont>=15){
        window.location.href = "./game.html";
     }
     
     else{
        // aqui, na verdade o alert está apenas sendo usado para possibilitar a função
        // na prática, pode-se colocar em seu lugar o botão para funcionar normalmente
         alert(" Para acessar esta página, é preciso ser logado na Central e ter feito algumas pesquisas por cursos na sessão 'Encontre mais cursos' ");
     }
}


function ir(){
    alert(" Para acessar esta página, é preciso ser logado na Central e ter feito algumas pesquisas por cursos na sessão 'Encontre mais cursos'. Saiba que o jogo só pode ser aberto a partir da sessão 'encontre mais cursos' ");
}

