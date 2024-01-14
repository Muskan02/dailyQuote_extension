const url = 'https://daily-quote4.p.rapidapi.com/daily_quote';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8080969e95mshcda5f9de420f056p1b4b86jsnf66b726ac0c8',
		'X-RapidAPI-Host': 'daily-quote4.p.rapidapi.com'
	}
};

try {
	// const response = await fetch(url, options);
	// const result = await response.text();
	// console.log(result);
    fetch(url,options)
    .then(data => data.json())
    .then(dailyQuote => {
        const quote = dailyQuote.quote.quote;
        const author = dailyQuote.quote.author;

        document.getElementById("quote").innerHTML = quote;
        document.getElementById("author").innerHTML = author;


    })
} catch (error) {
	console.error(error);
}