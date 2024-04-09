function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.lehgth == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute( 'src', 'bebemenino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemenino.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            }else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemenina.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
            }else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}