//InnerText 

let pInnerText = document.getElementsByTagName('p')[0]
pInnerText.innerText += 'ADD pelo InnerText'
//---------------------------------------------------////
//TextContent
let pContent = document.getElementsByTagName('p')[1]
pContent.textContent += 'ADD pelo textContent'
//---------------------------------------------------////
//InnerHTML 
let pInnerHTML = document.getElementsByTagName('p')[2]
pInnerHTML.innerHTML += '<span> paragrafo add pelo InnerHTML</span>'

pInnerText.setAttribute('meuATT', 'victordavi') 


function ret3(){
    console.log(3)
    return 5
}
