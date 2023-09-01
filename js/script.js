
const text = document.querySelectorAll(".interest-paragraf");
const colors = {
    0: 'red',
    1: 'green',
    2: 'blue',
};
const initialColor = 'black';

let previousColors = [];

function changeColor() {
    text.forEach((paragraf, index) => {
        const color = colors[index];
        previousColors[index] = paragraf.style.color;
        paragraf.style.color = color;
    });

    setTimeout(() => {
        text.forEach((paragraf, index) => {
            paragraf.style.color = previousColors[index];
        });
    }, 2000);
}
const intervalId = setInterval(changeColor, 3000);



