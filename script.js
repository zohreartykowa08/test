let wordList = words.split('\n');

const wordContainer = document.getElementById('words');
function load() {
    checkWord();
}

function showAll() {
    wordList.forEac((word) => {
        let tm = word.split('-')[0];
        let ru = word.split('-')[1];
        addElement(tm, ru);
    })
}

let loading = document.createElement('IMG');
loading.src = 'loading.gif';

function checkWord() {
    let searchText = document.getElementById('search').value;
    if (searchText.trim().length <= 0) {
        showAll();
    } else {
        wordContainer.innerHTML = "";
        wordContainer.appendChild(loading);
        setTimeout(() => {
            findWord(searchText);
        }, 2000);
    }
}

function findWord(query) {
    let isFound = false;
    wordList.forEach((word, index) => {
        let tm = word.split('-')[0];
        let ru = word.split('-')[1];
        try {
            if (tm.toUpperCase().includes(query.toUpperCase())
                || ru.toUpperCase().includes(query.toUpperCase())) {
                addElement(tm, ru);
                isFound = true;
            }
        } catch (err) {
            console.log(err);
        }
    });
    wordContainer.removeChild(loading);
}

function addElement(tm, ru) {
    let tmElement = document.createElement('h2');
    tmElement.style.color = '#15b4df';
    tmElement.innerHTML = tm;

    let ruList = ru.split(';');

    let ul = document.createElement('ul');
    ruList.forEach((item, i) => {
        let li = document.createElement('li');
        li.innerHTML=item;
        ul.appendChild(li);
    })
    // let ruElement = document.createElement('h2');
    // ruElement.style.color = 'grey';
    // ruElement.innerHTML = ru;

    wordContainer.appendChild(tmElement);
    wordContainer.appendChild(ul);
}

