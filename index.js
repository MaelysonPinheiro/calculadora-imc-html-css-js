let nome = document.getElementById('nome')
let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let result = document.getElementById('resultado')


function btt(){
    let vnome = nome.value
    let vpeso = parseFloat(peso.value)
    let valt = parseFloat(altura.value)
    let imc = vpeso/(valt*valt)
    if(imc <= 19 ){
        result.innerHTML = vnome + ' Seu Imc ta na desnutrição garoto: ' + imc.toFixed(2)
    }else if(imc <= 24){
        result.innerHTML = vnome + ' Seu imc está normal: ' + imc.toFixed(2)
    }else{
        result.innerHTML = vnome + ' Você ta acima do peso com IMC: ' + imc.toFixed(2)
    }
}