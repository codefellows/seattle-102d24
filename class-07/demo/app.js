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
