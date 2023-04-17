// recuperando o botão com getElementById

const botao = document.getElementById("btn-1");

// recuperar um item específico com a funçao querySelector(Parâmetro)

// 

// recuperar uma lista de elementos com a função querySelector

const seletores = document.querySelectorAll("li");

seletores.forEach((Item)=>{

    if (Item.textContent == "Item-15") {
        let meuItem = Item;
        console.log(`Itens selecionados : ${Item.textContent}`);
        meuItem.textContent = "Tá dominado!"
    }

    console.log(`Itens selecionados : ${Item.textContent}`);

})

console.log(seletores);

// Para estudar:

// SET TIME OUT 
// SET INTERVAL
// Random
// Math.cell
// Math.random
// Math.floor