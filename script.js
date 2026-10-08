const quote = document.getElementById("QuoteID")
const author = document.getElementById("AuthorID")

const btn = document.getElementById("quotegen"); 
const resetBtn = document.getElementById("resquote"); 

async function QuoteGen() {
  try{
    quote.innerHTML = "Loading..."
    author.innerHTML = "Loading..."

    let result = await fetch('https://dummyjson.com/quotes/random')
    let data = await result.json();

    console.log(data)
    console.log(data.quote)

    quote.innerHTML = data.quote
    author.innerHTML = data.author

  } catch (error) {
    console.log("Error" + error)
  }
}
QuoteGen();

function ResQuote(){
  quote.innerHTML = "Quote Generator"
  author.innerHTML = "Daily wise words"
}

btn.addEventListener("click", getQuote);
resetBtn.addEventListener("click", ResQuote);