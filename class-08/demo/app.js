function getUserName(){
    let userName = prompt('Please Enter Your Name: ');
    // console.log(userName);
       if (userName == 'Roger'){
        document.write('<h2>' + userName + '</h2>');
    } else {
        document.write('<h2>Sorry, your are not authorized!</h2>');
    }
    return userName;
}

function guessingGame(){
    // Got random code from w3schools
    let numberOfGuesses = 7
    let correctAnswer = (Math.floor(Math.random() * 100) +1)
    console.log(correctAnswer);
    let userAnswer = askUserQuestion();
    for(let i = 0; i < numberOfGuesses; i++){
        if (userAnswer == correctAnswer){
            alert('You are Correct!');
            break;
        } else if (userAnswer < correctAnswer){
            alert('You are to low.  Try again.')
        } else if (userAnswer > correctAnswer){
            alert('You are to high. Try again')
        }
        userAnswer = askUserQuestion();
    }
    if(userAnswer != correctAnswer){
        alert('Thank you for playing')
    }
}

function askUserQuestion(){
    let userAnswer = -1
    while(userAnswer < 1 || userAnswer > 100){
        userAnswer = prompt('Please Enter a number 1-100');
    }
    return userAnswer;
}


function imagesOnScreen(){
    userAnswer = prompt('How many baby Yodas');

    for (let i = 0; i < userAnswer;i++){
        document.write('<img src="https://observer.com/wp-content/uploads/sites/2/2020/11/kid-yoda.jpg">')
    }
}