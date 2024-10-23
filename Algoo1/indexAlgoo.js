function countAnalysis(sentence) {
    let numberOfWords = 0;
    let numberOfCharacters = sentence.length;
    let numberOfVowels = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // Boucle à travers la phrase caractère par caractère
    for (let i = 0; i < sentence.length; i++) {
        // Compter les voyelles
        if (vowels.includes(sentence[i])) {
            numberOfVowels++;
        }

        // Compter les mots (en supposant que les mots sont séparés par des espaces)
        if (sentence[i] === ' ' && sentence[i - 1] !== ' ') {
            numberOfWords++;
        }
    }

    // Incrémenter le nombre de mots pour le dernier mot si la phrase n'est pas vide
    if (sentence[sentence.length - 1] !== ' ') {
        numberOfWords++;
    }

    // Afficher les résultats
    console.log("Nombre de caractères : " + numberOfCharacters);
    console.log("Nombre de mots : " + numberOfWords);
    console.log("Nombre de voyelles : " + numberOfVowels);
}

// Exemple d'utilisation
let sentence = "Bonjour, comment ça va ?";
countAnalysis(sentence);
