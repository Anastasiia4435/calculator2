let number1 = document.querySelector(".number1");
let number2 = document.querySelector(".number2");
let button = document.querySelector(".button");
let results = document.querySelector(".results");

function summa() {
   let n1 = number1.value;
   let n2 = number2.value;

   n1 = Number(n1);
   n2 = Number(n2);

   let summa = n1 + n2;
   return summa;
}

function text(text1) {
    let li = document.createElement('li');
    let span = document.createElement('span');

    span.textContent = text;

    li.append(span);

    return li;
}

button.addEventListener("click", event => {
    let li1 = summa(summa);

    results.append(li1);
});

