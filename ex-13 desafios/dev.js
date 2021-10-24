function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('.txtano')
    var res = document.querySelector('.res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = `Homem`
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'criança.png')
                //criança
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'homem.png')
                //adulto
            } else {
                img.setAttribute('src', 'idoso.png')
                //idoso
            }
        } else if (fsex[1].checked) {
            genero = `Mulher`
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'garota03.png')
                //criança
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemF.png')
                //jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher.png')
                //adulto
            } else {
                img.setAttribute('src', 'vovo.png')
                //idoso
            }
        }
        res.style.padding = '15px'
        res.style.textAlign = 'center'
        
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade} anos.</strong>`
        res.appendChild(img)
    }
}