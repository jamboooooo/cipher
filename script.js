let letters = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я']

function cryptText(string) {
    string = string.split(' ');
    let result = ''
    string.forEach(function(item) {
        for (let i = 0; i < letters.length; i++) {
            if (letters[i] === item[0].toLowerCase()) {
                return result = result + 'код' + item + " ";
            } else {
                return result = result + 'инту' + item + " ";
            }
        }
    });
    return result;
}

console.log(cryptText('Привет амир'))