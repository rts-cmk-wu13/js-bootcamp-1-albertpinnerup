let quotes = ["I think, therefore, I am.", "What does not kill me makes me stronger.", "Science is what you know. Philosophy is what you dont know",
    "My name is Inigo Montoya, you killed my father, prepare to die!", "Fortune favors the brave", "Knowledge comes, but wisdom lingers", 
    "The cure for boredom is curiosity. There is no cure for curiosity.", "People say nothing is impossible, but I do nothing every day.", 
    "Everything is funny as long as it is happening to somebody else.", "Some people feel the rain. Others just get wet."
]

let i = 0;

const quoteSpace = document.querySelector(".quote");






window.onload = function randomQuote() {
    const random = Math.floor(Math.random() * quotes.length);

    quoteSpace.innerHTML = `"${quotes[random]}"`;

}