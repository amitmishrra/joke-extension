const getJokes = async () => {
    try {
        const res = await fetch("https://api.chucknorris.io/jokes/random")

        const data = await res.json();

        let string = data.value.toString();

        if(string.includes("Chuck Norris")){
            
          string =  string.replace("Chuck Norris", "Amit Mishra")
            console.log(string);
        }
        const myJoke = document.getElementById("myJoke");
        myJoke.innerHTML = string;


    } catch (error) { }
}

window.addEventListener("load", () => {
    getJokes();
})

const btn = document.getElementById('btn').addEventListener("click", () => {
    getJokes();
})



