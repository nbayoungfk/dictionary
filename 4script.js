function searchWord() {
    const word = document.getElementById('wordInput').value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(url)
        .then(response => response.json())
        .then(data => { 
            displayResult(data);
        })
        
}

function displayResult(data) {
    const wordInfo = data[0];
    const meanings = wordInfo.meanings[0];
    const synonyms = meanings.synonyms;
    const antonyms = meanings.antonyms;

    document.getElementById('result').innerHTML = `
        <p><strong>Word:</strong> ${wordInfo.word}</p>
        <p><strong>Part of Speech:</strong> ${meanings.partOfSpeech}</p>
        <p><strong>Definition:</strong> ${meanings.definitions[0].definition}</p>
        <p><strong>Synonyms:</strong> ${synonyms}</p>
        <p><strong>Antonyms:</strong> ${antonyms}</p>
    `;
}