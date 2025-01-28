let quotes = ["I think, therefore, I am.", "What does not kill me makes me stronger.", "Science is what you know. Philosophy is what you dont know",
    "My name is Inigo Montoya, you killed my father, prepare to die!", "Fortune favors the brave", "Knowledge comes, but wisdom lingers", 
    "The cure for boredom is curiosity. There is no cure for curiosity.", "People say nothing is impossible, but I do nothing every day.", 
    "Everything is funny as long as it is happening to somebody else.", "Some people feel the rain. Others just get wet."
]

let i = 0;

const quoteSpace = document.querySelector(".quote");


function randomNumber() {
    return Math.floor(Math.random() * quotes.length);
}

window.onload = function randomQuote() {
    let random = randomNumber();

    if (localStorage.getItem("prevNum") == random) {
        random = randomNumber();
        quoteSpace.innerHTML = `"${quotes[random]}"`;
    } else {
        quoteSpace.innerHTML = `"${quotes[random]}"`;
        localStorage.setItem("prevNum", random)
    }
}