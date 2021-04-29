let letters = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я']

function cryptText(string) {
    string = string.split(' ');
    let result = ''
    string.forEach(function(item) {
        if (isNaN(Number(item))) {
            if (item.length > 2) {
                for (let i = 0; i < letters.length; i++) {
                    if (letters[i] === item[0].toLowerCase()) {
                        result = result + 'код' + item + " ";
                    }
                }
                result = result + 'инту' + item + " ";
            } else {
                result = result + item + 'ик' + " ";
            }
        } else {
            let number = '';
            if (item.length > 2) {
                number = item[0] + item + item[item.length - 1];
                result = result + number + ' ';
            } else {
                number = item[1] + item[0];
                result = result + number + ' ';
            }
        }
    });
    return result;
}

console.log(cryptText('я и он теперь в интукод 12'))