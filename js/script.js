// recuperando o botão com getElementById

// const botao = document.getElementById("btn-1");

// // recuperar um item específico com a funçao querySelector(Parâmetro)

// // 

// // recuperar uma lista de elementos com a função querySelector

// const seletores = document.querySelectorAll("li");

// seletores.forEach((Item)=>{

//     if (Item.textContent == "Item-15") {
//         let meuItem = Item;
//         console.log(`Itens selecionados : ${Item.textContent}`);
//         meuItem.textContent = "Tá dominado!"
//     }

//     console.log(`Itens selecionados : ${Item.textContent}`);

// })

// console.log(seletores);

// Para estudar:

// SET TIME OUT 
// SET INTERVAL
// Random
// Math.cell
// Math.random
// Math.floor


let tmp = "";

function mudarCor() {
    let r = 0;
    let g = 0;
    let b = 0;
    
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    
    const cabecalho = document.querySelector(".cabecalho");
    cabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

    tmp = setTimeout(mudarCor, 5000);

}

mudarCor();