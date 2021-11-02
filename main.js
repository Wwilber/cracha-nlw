/* UTILIZAR JS DIRETO NO HTML: digitar o código dentro da tag <script>, essa tag fica  dentro da tag <head> ou no final da <body> */

/* CRIAÇÃO DAS VARIÁVEIS:
      const github = 'jwilberribeiro'
      const youtube = 'xxx'
      const facebook = 'wilber.ribeiro.92'
      const instagram = 'jwilberr'
      const twitter = 'jwwilber'
       */

/* criação do objeto de nome: link, do tipo: const: */
const linksSocialMedia = {
  github: 'Wwilber',
  youtube: 'xxx',
  facebook: 'wilber.ribeiro.92',
  instagram: 'jwilberr',
  twitter: 'jwwilber'
}

/* CRIAÇÃO DA FUNÇÃO: */
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    /*  alert(li.children[0].href) */
  }
}
changeSocialMediaLinks()

// CRIAÇÃO DA FUNÇÃO PARA PEGAR AS INFORMAÇÕES DO USUÁRIO DO GITHUB:

function getGithubProfilesInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  // COMANDO fatch - vai na url e pega o que ela respondeu para utilizar no JS:
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      linkUser.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGithubProfilesInfos()

// ARROW FUCTION (função anônima):
/*
// função normal:
function nomedafunção(argumento){
  // code
}
// executar a função normal:
nomedafunção()

// função anônima com 1 argumento: 
argumento => {
// code
}

// função anônima com 2 argumentos:
(argumento, argumento2) =>{
// code
}
// função anônima sem argumentos:
() => {
} */
