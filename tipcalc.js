function tipcalc(split, total, service) {
    if (service == 'good') {
        return 'Your total is $' + ((total * 1.20)/split) + ' per person.'
    }
    else if (service == 'fair') {
        return 'Your total is $' + ((total * 1.15)/split) + ' per person.'
    }
    else if (service == 'poor') {
        return 'Your total is $' + ((total * 1.10)/split)+ ' per person.'
    }
    else {
        return "I don't understand."
    }
}
document.write(tipcalc(4, 100, 'good'));