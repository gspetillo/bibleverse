const quote = document.querySelector('#quote h2');
const author = document.querySelector('#quote h3');
let books = null;
const randomBook = null;
const randomChapter = null;

const fetchQuote = async () => {
    const url = `https://web-series-quotes-api.deta.dev/quote/`;
    const response = await fetch(url, headers = {
        'Accept': `application/json`
    });
    const data = await response.json();
    const quoteData = data[0]
    console.log(quote)
    quote.innerHTML = '"'+quoteData.quote+'"'
    if(quote.author){
        author.innerHTML = "- "+quoteData.author+", "+formatSeries(quoteData.series)
    }else{
        author.innerHTML = "- "+formatSeries(quoteData.series)
    }
}

const formatSeries = (series) => {
    newSeriesName = series[0].toUpperCase();
    console.log(series)
    for(let i=1; i<series.length; i++){
        if(series[i] === '_'){
            newSeriesName += ' '
        }else if(series[i-1] && (series[i-1]== ' ' || series[i-1] == '_')){
            newSeriesName += series[i].toUpperCase()
        }else{
            newSeriesName += series[i]
        }
        console.log(newSeriesName[i], series[i])
    }
    return newSeriesName;
}

fetchQuote()