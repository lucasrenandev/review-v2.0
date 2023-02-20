// Criando os elementos e atribuindo em um array
const elements = [
    {
        id: 1,
        img: "assets/images/game-01.jpg",
        name: "Batman Arkham Knight",
        developer: "Rocksteady Studios",
        description: "Escrita por Sefton Hill, Martin Lancaster e Ian Ball, a história acontece um ano depois dos eventos de Arkham City, em que Batman, no pico máximo das suas habilidades, tem de defrontar o super-vilão Espantalho, que criou um ataque a Gotham City causando a evacuação da cidade."
    },
    {
        id: 2,
        img: "assets/images/game-02.jpg",
        name: "Far Cry 3",
        developer: "Ubisoft",
        description: "Os eventos de Far Cry 3 se desenvolvem em uma ilha tropical localizada no cruzamento dos oceanos Índico e Pacífico, e conta a história do americano Jason Brody, que após perder-se na ilha durante suas férias, tem de salvar os seus amigos sequestrados e escapar dos fatais piratas que lá habitam."
    },
    {
        id: 3,
        img: "assets/images/game-03.jpg",
        name: "Crysis 3",
        developer: "Electronic Arts",
        description: "Os jogadores irão assumir o papel de Laurence Barnes (chamado de Profeta, que 'tomou' o corpo de Alcatraz), que regressa a Nova Iorque para descobrir que a cidade foi enclausurada em uma Nanodome criada pela corrupta Cell Corporation."
    },
    {
        id: 4,
        img: "assets/images/game-04.jpg",
        name: "Grand Theft Auto V",
        developer: "Rockstar Games",
        description: "O jogo se passa no estado ficcional de San Andreas, com a história da campanha um jogador seguindo três criminosos e seus esforços para realizarem assaltos sob a pressão de uma agência governamental. O mundo aberto permite que os jogadores naveguem livremente pelas áreas rurais e urbanas de San Andreas"
    },
    {
        id: 5,
        img: "assets/images/game-05.jpg",
        name: "Watch Dogs 2",
        developer: "Ubisoft",
        description: "Watch Dogs 2 é ambientado na baía de São Francisco e se desenrola sob a pele de Marcus Holloway, um hacker que foi vítima dos algoritmos de previsão de crime do ctOS 2.0 e acusado injustamente de um delito que não cometeu."
    },
    {
        id: 6,
        img: "assets/images/game-06.jpg",
        name: "Call Of Duty Black Ops 2",
        developer: "Activision",
        description: "A campanha de Black Ops II tem duas histórias que estão interligadas, uma que decorre entre os anos 80 e 90 e a outra que acontece em 2025. O protagonista de Black Ops, Alex Mason, regressa como protagonista na sessão da Guerra Fria, onde irá lutar numa guerra de procuração pelos Estados Unidos."
    },
    {
        id: 7,
        img: "assets/images/game-07.jpg",
        name: "Battlefield 3",
        developer: "Electronic Arts",
        description: "A história é toda contada em terceira pessoa, como uma narrativa onde o Sargento Henry Blackburn é interrogado em uma sala secreta - na verdade, não tão secreta assim - localizada em Nova York. Ele é questionado sobre o que aconteceu no mundo nos últimos dias, com a ameaça de terroristas por todo Planeta."
    },
    {
        id: 8,
        img: "assets/images/game-08.jpg",
        name: "Assassin's Creed Revelations",
        developer: "Ubisoft",
        description: "O jogo se passa no ano de 1511 d.C., Ezio Auditore da Firenze, já em idade mais avançada, está em busca de segredos escondidos pelo seu lendário antepassado Altaïr em Masyaf, antigo lar dos assassinos. "
    },
]

// Selecionando elementos
const imageElement = document.getElementById("image")
const nameElement = document.getElementById("name")
const developerElement = document.getElementById("developer")
const descriptionElement = document.getElementById("description")
const previousButton = document.getElementById("previous-btn")
const nextButton = document.getElementById("next-btn")

// Elemento atual
let currentElement = 0

// Função para obter os elementos criados
function getElements() {
    const element = elements[currentElement]
    const image = element.img
    const name = element.name
    const developer = element.developer
    const description = element.description

    imageElement.src = image
    nameElement.textContent = name
    developerElement.textContent = developer
    descriptionElement.textContent = description
}
// Chamando a função no documento
getElements()

// Função para o próximo elemento
function nextElement() {
    currentElement++
    if(currentElement === elements.length) {
        currentElement = 0
    }
    getElements()
}

// Função para o elemento anterior
function previousElement() {
    currentElement--
    if(currentElement < 0) {
        currentElement = elements.length - 1
    }
    getElements()
}

// Adicionando eventos
nextButton.addEventListener("click", nextElement)
previousButton.addEventListener("click", previousElement)

// Elemento automático
setInterval(nextElement, 5000)