const squareWrapper = document.createElement('div');

squareWrapper.className = 'd-flex justify-content-between align-content-center flex-wrap';
squareWrapper.setAttribute('id', 'boxes');

let numBox = 100;
let tmpHtml = '';



for(let i = 1; i <=numBox; i++){
    if(i % 3 === 0 && i % 5 === 0){
        tmpHtml += `<div class="box bg-success">FizzBuzz</div>`;
    } else if(i % 3 === 0){
        tmpHtml += `<div class="box bg-body-tertiary">Fizz</div>`;
    } else if(i % 5 === 0){
        tmpHtml += `<div class="box bg-info">Buzz</div>`;
    } else {
        tmpHtml += `<div class="box bg-warning">${i}</div>`;
    }
}

squareWrapper.innerHTML = tmpHtml;
const container = document.querySelector('.container');
container.append(squareWrapper);