const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame(){
    state = {}
    showTextNode(1)
}
function showTextNode(textNodeIndex){
 const textNode = textNOdes.fint(textNode => text.Node.id ===
    textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsELement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.apperChild(button)
        }
    })
}

function showOption(option) {
    return true
}

function selectOption(option)

}

const textNodes = [
    {
        id: 1,
        text: 'Totalne JD',
        options: [
            {
                text: 'JD',
                setState {JD: true},
                nextText: 2,
            },
            {
                text: 'nie JD',
                nextText: 2
            }
        ]
    }
    {
        id: 2
        text: 'dasdadsdasd'
        options : [
            text: 'wwwwwww',
            requiredState: (currentState) => currentState.JD
            setState { JD: false, wwww: true}
        ]
    }
]
startGame()