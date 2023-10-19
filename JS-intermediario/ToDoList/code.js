let novaTarefa = document.getElementById('novaTarefa')
let addTarefa = document.getElementById('addTarefa')
let lista = document.getElementById('lista')
addTarefa.addEventListener('click', () => {

    const textTarefa = novaTarefa.value
    const tarefas = []
    if(textTarefa !== ''){
        const item = document.createElement('li')
        item.textContent = textTarefa

        

        lista.appendChild(item)

        

        console.log(tarefas)
    }

})



