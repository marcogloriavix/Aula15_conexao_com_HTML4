let logo = document.getElementById("logo")
//console.log(logo)

let postAutores = document.getElementsByClassName("post-autor")
//console.log(postAutores)

let texto02 = document.querySelector("#post02 > .post-texto")
//console.log(texto02)

let listaRedesFooter = document.querySelectorAll("footer > .lista_redes > li")
console.log(listaRedesFooter)

// fazendo duas funções 
/* for (let i=0; i<listaRedesFooter.length; i++ ){
    console.log(listaRedesFooter[i]);
}

for (let i=0; i<postAutores.length; i++ ){
    console.log(postAutores[i]);
} */


// para evitar repetir codigo de função
function percorrerArray(lista){
    for (let i=0; i<lista.length; i++ )
        console.log(lista[i]);
}

percorrerArray(postAutores)
console.log("===========================")
percorrerArray(listaRedesFooter)
