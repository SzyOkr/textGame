const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Obudziłeś się w dziwnym miejscu i zauważyłeś słoik z białą mazią obok ciebie.',
    options: [
      {
        text: 'Weź maź',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'Zostaw maź',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Wyruszasz w poszukiwaniu odpowiedzi na pytanie, gdzie jesteś, gdy natykasz się na kupca.',
    options: [
      {
        text: 'Wymień maź wzamian za miecz',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text: 'Wymień maź wzamian za tarczę',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 3
      },
      {
        text: 'Odejdź od kupca',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'Po opuszczeniu kupca zaczynasz czuć się zmęczony i natrafiasz na małe miasteczko obok groźnie wyglądającego zamku.',
    options: [
      {
        text: 'Zwiedź zamek',
        nextText: 4
      },
      {
        text: 'Znajdź pokój do spania w mieście',
        nextText: 5
      },
      {
        text: 'Znajdź siano w stajni do spania',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'Jesteś tak zmęczony, że zasypiasz podczas zwiedzania zamku i zostajesz zabity przez jakiegoś strasznego księdza we śnie.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Bez pieniędzy na zakup pokoju włamujesz się do najbliższej gospody i zasypiasz. Po kilku godzinach snu odnajduje cię właściciel karczmy i każe strażnikowi zamknąć cię w celi.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Budzisz się wypoczęty i pełen energii gotowy do zwiedzania pobliskiego zamku.',
    options: [
      {
        text: 'Zwiedź zamek',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'Podczas eksploracji zamku na swojej drodze natrafisz na straszliwego księdza.',
    options: [
      {
        text: 'Próbuj uciekać',
        nextText: 8
      },
      {
        text: 'Zaatakuj go mieczem',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Schowaj się za tarczą',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Rzuć w niego białą mazią',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Twoje próby ucieczki są daremne, a ksiądz bez problemu cię łapie.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'Głupio myślałeś, że tego księdza można zabić zwykłym mieczem.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'Ksiądz śmiał się, gdy chowałeś się za tarczą po czym zjadł cię.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'Rzuciłeś słoikiem mazi w księdza i eksplodował. Gdy opadł kurz, zobaczyłeś, że ksiądz został zniszczony. Widząc swoje zwycięstwo, decydujesz się przejąć ten zamek jako swój i przeżyć tam resztę swoich dni.',
    options: [
      {
        text: 'Gratuluję. Zagraj ponownie',
        nextText: -1
      }
    ]
  }
]

startGame()