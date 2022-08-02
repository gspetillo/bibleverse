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
    let data = await response.json();
    quote = data[0]
    console.log(quote)
    quote.innerHTML = '"'+quote.quote+'"'
    if(quote.author){

        author.innerHTML = "- "+quote.author+", "+formatSeries(quote.series)
    }else{
        author.innerHTML = "- "+formatSeries(quote.series)
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