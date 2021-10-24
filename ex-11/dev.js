var agora = new Date()
var hora = agora.getHours()
    console.log(`Agora são exatemante ${hora} horas`)

switch (hora <= 12) {
    case console.log('Bom dia!'): 
    break

    case (hora < 17):
        console.log('Boa tarde!')
    break

    case (hora < 18 ): 
        console.log('Boa noite!')
    break

    case (hora < 24):
        console.log('Boa madrugada!')
    break

    default:
    break
}

//Boa tarde nao funciona