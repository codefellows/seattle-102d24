// Basic While Loop
let userAnswer = 'no';

while(userAnswer == 'no'){
    userAnswer = prompt('Please enter yes or no');
}

// Basic For Loop

for(let i = 40; i < 50; i++){
    console.log(i);
}

// declare a function and invoking a function (difference)
function userName(){
    let userName = prompt('Enter your name: ');
    return userName;
}

let user1 = userName();
let user2 = userName();
let user3 = userName();

// truthy vs falsy
(false) = False
(true) = true
('') = False
('0') = True
(0) = False
(true && false)
(true || false)
(false && false)
('0' == 0)
('0' === 0)
('0' !== 0)
((5 * 5) == '25') && (false && true)
((5 * 5) == '25') && ('false' && true)
((5 * 5) == '25') || ((false && true) && (true))