const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {
}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  
  // ukradnij fragment scenariusza z id podanym wyżej
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  
  // wrzuć tekst z scenariusza
  textElement.innerText = textNode.text
  
  console.log(`Generuje dialog ${textNode.text}`);

  // usuwanie poprzedni opcji
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  // wyrenderuj wszystkie przyciski (pole: options)
  textNode.options.forEach(function (option) {
    console.log(`Próbuje generować opcje ${option.text}`);

    if (option.requiredState) {
        console.log(option.requiredState());
        if (!option.requiredState())
          return;
    }
    
    console.log(`Generuje opcje ${option.text}`);

    //stwórz element <Button/>
    const button = document.createElement('button')

    //wypełnij content jego
    button.innerText = option.text

    //dodaj classę z css'em
    button.classList.add('btn')

    // podepnij event kliknięcia
    // tutaj bindujesz funkcje która jest inna dla każdego przycisku
    // (każdy przycisk ma inne argument options)
    button.addEventListener('click', () => selectOption(option))

    // wrzuć go do DOM
    optionButtonsElement.appendChild(button)
    
  })
}

function selectOption(option) {
  // to merguje dwa state z priorytetem na ten nowy

  if (option.setState)
    state = { ...state, ...option.setState };
  console.log(state)

  // jeżeli opcja zawiera pole action to je wykona jak funkcje
  if (option.action)
    option.action()


  // wyświetl następny tek
  if (option.nextText)
    showTextNode(option.nextText);
}


const textNodes = [
  {
    id: 1,
    text: 'Obudziłeś się w dziwnym miejscu i zauważyłeś 3 bohaterów obok ciebie. Byli nimi:',
    options: [
      {
        text: 'Rycerz',
        setState: { Rycerz: true },
        nextText: 2,
        action: function () {
          document.getElementById("pierwszyAvatar").src = './img/knight.png'
        }
      },
      {
        text: 'Łucznik',
        setState: { Łucznik: true },
        nextText: 2,
        action: function () {
          document.getElementById("pierwszyAvatar").src = './img/archer.svg'
        }
      },
      {
        text: 'Jeźdzca',
        setState: { Jezdzca: true },
        nextText: 2,
        action: function () {
          document.getElementById("pierwszyAvatar").src = './img/rider.svg'
        }
      },
      {
        text: 'Zabójca',
        setState: { Zabojca: true },
        nextText: 2,
        action: function () {
          document.getElementById("pierwszyAvatar").src = './img/assasin.svg'
        }
      },
    ]
  },
  {
    id: 2,
    text: 'Kolejnym bohaterem był:',
    options: [
      {
        text: 'Rycerz',
        requiredState: () => state.Rycerz === undefined,
        setState: { Rycerz: true },
        nextText: 3,
        action: function () {
          document.getElementById("drugiAvatar").src = './img/knight.png'
        }
      },
      {
        text: 'Łucznik',
        setState: { Łucznik: true },
        requiredState: () => state.Łucznik === undefined,
        nextText: 3,
        action: function () {
          document.getElementById("drugiAvatar").src = './img/archer.svg'
        }
      },
      {
        text: 'Jeźdzca',
        setState: { Jezdzca: true },
        requiredState: () => state.Jezdzca === undefined,
        nextText: 3,
        action: function () {
          document.getElementById("drugiAvatar").src = './img/rider.svg'
        }
      },
      {
        text: 'Zabójca',
        setState: { Zabojca: true },
        requiredState: () => state.Zabojca === undefined,
        nextText: 3,
        action: function () {
          document.getElementById("drugiAvatar").src = './img/assasin.svg'
        }
      },
    ]
  },
  {
    id: 3,
    text: 'Ostatnim z nich był:',
    options: [
      {
        text: 'Rycerz',
        requiredState: () => state.Rycerz === undefined,
        setState: { Rycerz: true },
        nextText: 4,
        action: function () {
          document.getElementById("trzeciAvatar").src = './img/knight.png'
        }
      },
      {
        text: 'Łucznik',
        setState: { Łucznik: true },
        requiredState: () => state.Łucznik === undefined,
        nextText: 4,
        action: function () {
          document.getElementById("trzeciAvatar").src = './img/archer.svg'
        }
      },
      {
        text: 'Jeźdzca',
        setState: { Jezdzca: true },
        requiredState: () => state.Jezdzca === undefined,
        nextText: 4,
        action: function () {
          document.getElementById("trzeciAvatar").src = './img/rider.svg'
        }
      },
      {
        text: 'Zabójca',
        setState: { Zabojca: true },
        requiredState: () => state.Zabojca === undefined,
        nextText: 4,
        action: function () {
          document.getElementById("trzeciAvatar").src = './img/assasin.svg'
        }
      },
    ]
  },
  {
    id: 4,
    text: 'Teraz, razem wszyscy poszliście do najbliższego miasta, aby trochę zarobić na jedzenie',
    options: [
      {
        text: 'Następny',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'Koło baru spotykacie "Ulfrika Koparke", który oferuję wam zadanie kradzieży jabłka od Steva - miejscowego inkwizytora.',
    options: [
      {
        text: 'Zgódź się',
        nextText: 6
      },
      {
        text: 'Zrezygnuj',
        nextText: 12
      }
    ]
  },
  {
    id: 6,
    text: 'Zbliżacie się do domu Steva. Teraz należy wybrać, kto ukradnie jabłko?',
    options: [
      {
        text: 'Rycerz',
        requiredState: () => state.Rycerz == true,
        nextText: 7,
      },
      {
        text: 'Łucznik',
        requiredState: () => state.Łucznik == true,
        nextText: 8,
      },
      {
        text: 'Jeźdzca',
        requiredState: () => state.Jezdzca == true,
        nextText: 9,
      },
      {
        text: 'Zabójca',
        requiredState: () => state.Zabojca == true,
        nextText: 10,
      }

    ]
  },
  {
    id: 7,
    text: 'Rycerz wchodzi do środka budynku mordując wszystkich w środku i zabierając jabłko. Zatrzymuje was miejscowa straż pod władaniem Majkela.',
    options: [
      {
        text: 'Restart',
        action: homar
      }
    ]
  },
  {
    id: 8,
    text: `Łucznik wystrzelił strzałe z przyczepioną liną i wyciągnął jabłko z domu Steva. Wszystko widziała straż pod władaniem Majkela i zamkneła was w lochu.`,
    options: [
      {
        text: 'Restart',
        action: homar
      }
    ]
  },
  {
    id: 9,
    text: 'Jeźdzca szarżuje w środek budynku, niszczy wszystko a następnie wywozi skrzynie. Razem uciekacie za granice miaste, aby uniknąc straży. Skrzynia jest pusta.',
    options: [
      {
        text: 'Restart',
        action: homar
      }
    ]
  },
  {
    id: 10,
    text: 'Assasin wchodzi i wychodzi z jabłkiem. Udało wam się',
    options: [
      {
        text: 'Oddaj jabłko Ulfrikowi',
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: 'Odnosicie jabłko Ulfrikowi Koparce, otrzymujecie zapłate i opuszczacie miasto.',
    options: [
      {
        text: 'Aby grać dalej kup DLC (nie ma DLC)',
        action: homar
      }
    ]
  },
  {
    id: 12,
    text: 'Nie no brachu, takiego zadania nie przyjąć?',
    options: [
      {
        text: 'Restart',
        action: homar
      },
    ],
  },
]

function homar() {
  document.location.reload(true)
}

startGame()