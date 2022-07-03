const getJokes = async () => {
    try {
        const res = await fetch("https://api.chucknorris.io/jokes/random")

        const data = await res.json();
        const myJoke = document.getElementById("myJoke");
        myJoke.innerHTML = data.value;


    } catch (error) { }
}

window.addEventListener("load", () => {
    getJokes();
})

const btn = document.getElementById('btn').addEventListener("click", () => {
    getJokes();
})



