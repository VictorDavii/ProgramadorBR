/*
getElementById
*/

let item1 = document.getElementById('getID') 

item1.style.color = 'red'

let item2 = document.getElementsByClassName('getCLASS')[0]

item2.style.color = 'blue'

let tl = document.getElementsByTagName("li")

for(var i = 0; i < tl.length; i++){
    tl[i].style.fontSize = '20px'
}

//Array.from(tl).forEach((li) => li.style.fontSize = '20px'); <----------

/*Array.from = A função Array.from em JavaScript é usada para criar uma nova instância de uma array a partir de um objeto semelhante a uma coleção (como um NodeList, HTMLCollection ou uma string). Ela converte o objeto em um array real, permitindo que você use métodos de array como forEach, map, filter, entre outros.

Mas aqui podemos usar simplesmente um For para vares o NODEList
*/

