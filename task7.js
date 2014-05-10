
/*7.Write an expression that checks if given positive integer number n (n ≤ 100) is prime. E.g. 37 is prime.*/

function task7() {
    var number = parseInt(document.getElementById('num').value);
    console.log(number);
    var counter = 0;

    if (number > 0 || number < 100) {
        for (var i = 2; i < number; i++) {
            if ((number % i) == 0) {
               counter++
            }
        }
    }
    else {
        alert('The number is out of range 0 - 100')
    }

    if (counter === 0) {
        alert('The number ' + number + ' is prime');
    }
    else {
        alert('The number ' + number + ' is not prime');
    }
}
