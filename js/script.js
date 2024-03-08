const squareWrapper = document.createElement('div');

squareWrapper.className = 'd-flex justify-content-between align-content-center flex-wrap';
squareWrapper.setAttribute('id', 'boxes');

let numBox = 100;
let tmpHtml = '';



for(let i = 1; i <=numBox; i++){
    if(i % 3 === 0 && i % 5 === 0){
        tmpHtml += `<div class="box">FizzBuzz</div>`;
    } else if(i % 3 === 0){
        tmpHtml += `<div class="box">Fizz</div>`;
    } else if(i % 5 === 0){
        tmpHtml += `<div class="box">Buzz</div>`;
    } else {
        tmpHtml += `<div class="box">${i}</div>`;
    }
}

squareWrapper.innerHTML = tmpHtml;
const container = document.querySelector('.container');
container.append(squareWrapper);