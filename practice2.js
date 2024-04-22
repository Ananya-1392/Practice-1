// check if the number is even or odd.
let parity = (num) => {
    if(num % 2 == 0){
        return 'Even';
    } else if (num % 2 == 1){
        return 'Odd';
    } else {
        return "invalid input";
    }
}

console.log(parity(4));

// check whether the given number is leap year
let leapYear = (year) => {
    if (year % 100 == 0) {
        if(year % 400 == 0){
            return 'Leap Year';
        } else{
            return 'Not Leap Year';
        }
    } else if(year % 4 == 0){
        return 'Leap Year';
    } else{
        return 'Not Leap Year';
    }
}

// a fn that calculates the grade of a student based on their score using if-else 
let grade = (score) => {
    if(score >= 80){
        return 'A';
    } else if ( score >= 60){
        return 'B'
    } else if(score >= 40){
        return 'C'
    } else {
        return 'D'
    }
}

//a fn that determines the type of triangle 
let triangleType = (a, b, c) => {
    if (a==b && b==c && c==a){
        return 'equilateral'
    }else if(a==b || b==c || c==a){
        return 'isosceles'
    }else{
        return 'scalene'
    }
}

//fn that converts a numerical grate into a letter grade
let tograde = (score) => {
    if(score >= 80){
        return 'A';
    } else if ( score >= 60){
        return 'B'
    } else if(score >= 40){
        return 'C'
    } else if(score >= 20){
        return 'D'
    }else {
        return 'F'
    }
}

//switch statement to determine the number of the day based on its number representation
let day = (dayNo) => {
    let name = '';
    switch(dayNo) {
        case 0 : {
            name = 'Sunday';
            break;
        }
        case 1: {
            name = 'Monday';
            break;
        }
        case 2: {
            name = 'Tuesday'
            break;
        }
        case 3: {
            name = 'Wednesday'
            break;
        }
        case 4: {
            name = 'Thursday'
            break;
        }
        case 5: {
            name = 'Friday'
            break;
        }
        case 6: {
            name = 'Saturday'
            break;
        }
    }

    return name;
}

//program that categorizes a given month into seasons
let season = (month) => {
    let name ='';
    switch(month) {
        case 'January': {
            name = 'Winter';
            break;
        }
        case 'February': {
            name = 'Spring';
            break;
        }
        case 'March': {
            name = 'Spring';
            break;
        }
        case 'April': {
            name = 'Summer';
            break;
        }
        case 'May': {
            name = 'Summer';
            break;
        }
        case 'June': {
            name = 'Summer';
            break;
        }
        case 'July': {
            name = 'Autumn';
            break;
        }
        case 'August': {
            name = 'Autumn';
            break;
        }
        case 'September': {
            name = 'Autumn';
            break;
        }
        case 'October': {
            name = 'Autumn';
            break;
        }
        case 'November': {
            name = 'Winter';
            break;
        }
        case 'December': {
            name = 'Winter';
            break;
        }
    }
    return name;
}

//a fn that determines the discount percentage based on the total purchase amount

let discount = (amount) => {
    let discount = 0;
    switch(amount){
        case (amount >= 0) && (amount <= 100): {
            discount = 0;
            break;
        }
        case (amount >= 101) && (amount <= 500): {
            discount= 10;
            break;
        }
        case (amount >= 501) && (amount <= 1000): {
            discount = 20;
            break;
        }
        case (amount >= 1001):{
            discount= 30;
            break;
        }
    }
    return discount;
}

//fn tht converts a given month number to its corresponding name.

let monthNo = (month) => {
    let monthName ='';
    switch(month){
        case 1: {
            monthName = 'January';
            break; 
        }
        case 2: {
            monthName = 'February';
            break; 
        }
        case 3: {
            monthName = 'March';
            break; 
        }
        case 4: {
            monthName = 'April';
            break; 
        }
        case 5: {
            monthName = 'May';
            break; 
        }
        case 6: {
            monthName = 'June';
            break; 
        }
        case 7: {
            monthName = 'July';
            break; 
        }
        case 8: {
            monthName = 'August';
            break; 
        }
        case 9: {
            monthName = 'September';
            break; 
        }
        case 10: {
            monthName = 'October';
            break; 
        }
        case 11: {
            monthName = 'November';
            break; 
        }
        case 12: {
            monthName = 'December';
            break; 
        }
    }
    return monthName;
}

// a fn that calculates the area of a shape based on user input.
let area = (shape, sides) =>{
    switch(shape){
        case 'Circle':{
            return Math.PI * sides[0] * sides[0];
        }
        case 'Square':{
            return sides[0] * sides[0];
        }
        case 'Triangle':{
            let a = sides[0];
            let b = sides[1];
            let c = sides[2];
            let s = (a+b+c)/2
            return Math.sqrt(s*(s-a)*(s-b)*(s-c))
        }
    }
}

// print numbers from 1 to 10 using for loop
for(let i =1; i<=10; i++){
    console.log(i);
}

// fn that calculates factorial

let factorial = (n) => {
    let fact = 1;
    for(let i =1; i <= n; i++){
        fact = fact * i;
    }
    return fact;
}

//fn to find sum of all numbers bet 1 to 100 using while loop

let sum = (n) => {
    let i = 1;
    let s = 0;
    while ( i <= n){
        s = s+i;
        i++;
    }
    return s;
}

// fn that prints the multiplication table using for loop

let mult = (n) => {
    let table = [];
    for(let i=1 ; i<=10; i++){
        table.push(n*i);
    }
    return table;
}

// fn yhat checks if a number is prime or not

let prime = (n) => {
    for(let i =2 ; i*i < n; i++){
        if(n % i == 0){
            return 'not prime'
        }
    }
    return 'prime'
}

//fn that generates fibonacci sequence upto a certain limit using while loop

let fib = (n) => {
    let seq = [];
    if(n==0) seq =[];
    if(n==1) seq[1];
    if(n==2) seq[1, 1];
    let i = 2;
    while ( i < n) {
        seq.push(seq[i-2] + seq [i-1]);
        i++;
    }

    return seq;
}

//fn to find the largest element in the array.
let max = (a) => {
    if(a.length == 0){
        return 'no largest number';
    }
    let largest = a[0];
    for(let i = 1; i<a.length; i++){
        if(a[i] > largest){
            largest = a[i];
        }
    }
    return largest;
}

//fn that count number of vowels in a string
let voweles = (str) => {
    let n = 0;
    for(let i =0; i<str.length; i++){
        switch(str[i]){
            case'a':
            case'e':
            case'i':
            case'o':
            case'u':{
                n++;
                break;
            }
        }
    }
    return n;
}

//fn that calculates sum of digits of a given number.
let ndigits = (num) =>{
    let nStr = num + ''; //converts number to string
    let sum = 0
    for(let i =0; i<nStr.length; i++){
        sum = sum + Number(nStr[i]);
    }
    return sum;
}

//check if a given string is palindrome or not
let palindrome = (string) => {
    let revStr = '';
    for(let i = string.length - 1; i >= 0; i--){
        revStr += string[i];
    }
    if(string = revStr){
        return true;
    }else return false;
}

//fn to calculate the area of a rectangle given its length and width

let rectangle = (l,b) =>{
    return l*b;
}

// fn that takes array of numbers as input and returns sum of all the numbers

let sumArray = (a)=>{
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum = sum + a[i];
    }
    return sum;
}

//palindrome number
let palin = (num) =>{
    let numStr = num + '';
    for (let i = 0; i<numStr.length;i++){
        if(numStr[i] != numStr[numStr.length - 1- i]){
            return false;
        }
    }
    return true;
}

// fn to find the maximum and minimum elements in an array
let minMax = (a) => {
    if(a.length == 0) return 'empty array'
    let min = a[0];
    let max= a[0];
    for(let i=0; i<a.length; i++){
        if(a[i] > max){
            max = a[i];
        }
        if(a[i] < min){
            min = a[i];
        }
    }

    return {
        minimum: min,
        maximum: max
    }
}

// fn that takes string as input and returns rev of a string
let reverse = (str) => {
    let revStr ='';
    for(let i = rev.Str.length - 1; i >= 0; i-- ){
        revStr += str[i];
    }
    return revStr;
}

//fibonacci
let fi = (n) =>{
    let seq = [];
    if(n==0) seq=[];
    if(n==1) seq = [1];
    if(n==2) seq = [1, 1];
    let i = 2;
    while (i <n){
        seq.push(seq[i-2]+seq[i-1]);
        i++;
    }
}

//fn that takes 2 numbers as input and returns gcd
let gcd = (a, b) => {
    if(a==0) return b;
    if(b==0) return a;
    let r;
    if(a<b){
        r = b%a
        return gcd(a, r);
    }else{
        r = a%b
        return gcd(b,r);
    }
}

//