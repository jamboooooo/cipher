let letters = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я']

function cryptText(string) {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === string[0].toLowerCase()) {
            return 'код' + string;
        }

    }
    return 'инту' + string;
}

console.log(cryptText('аривет'))