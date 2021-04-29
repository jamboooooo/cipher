let letters = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я']

function cryptText(string) {
    string = string.split(' ');
    let result = ''
    string.forEach(function(item) {
        if (item.length > 2) {
            for (let i = 0; i < letters.length; i++) {
                if (letters[i] === item[0].toLowerCase()) {
                    return result = result + 'код' + item + " ";
                }
            }
            return result = result + 'инту' + item + " ";
        } else {
            return result = result + item + 'ик' + " ";
        }

    });
    return result;
}

console.log(cryptText('я и он теперь в интукод'))