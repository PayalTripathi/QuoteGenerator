const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('name');
const twitterBtn=document.getElementById('button');
const newQuoteBtn=document.getElementById('new-quote');
const loader=document.getElementById('loader');

//let apiQuotes=[];

//Show loading
/*function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}

//Hide Loading
function complete(){
    quoteContainer.hidden=false;
    loader.hidden=true;
}*/

//Show new quote
function newQuote(){
   // const displayQuote = () =>{
    //loading();
    //Pick a random quote from apiQuotes array
    const quote=localQuotes[Math.floor(Math.random()* localQuotes.length)];
    console.log(quote);

    /*let quote=localQuotes[index].text;
    let author=localQuotes[index].name;
    console.log(quote);
    console.log(author);*/
    //authorText.textContent= quote.author;
    //quoteText.textContent=quote.text;
    //Check if Author field is blank and replace it with 'Unknown'
    if(!quote.author){
        authorText.textContent='Unknown';

    }
    else{
        authorText.textContent=quote.name;
    }
// Check quote length to determine styling
if(quote.text.length>120)
{
    quoteText.classList.add('long-quote');
}
else{
    quoteText.classList.remove('long-quote');
}
//Set Quote, Hide Loader
quoteText.textContent=quote.text;
authorText.textContent=quote.name;
//complete();
}


// Get Quotes from API
/*async function getQuotes(){
    loading();
   const apiUrl= 'https://type.fit/api/quotes';
   
    try{
        const response=await fetch(apiUrl);
        apiQuotes=await response.json();
       // console.log(apiQuotes);
       newQuote();
    }
    catch (error){
        
        //Catch Error Here
    }


}*/


//Tweet a quote
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');

}

//EventListener
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);


//onload
//getQuotes();
newQuote();
//displayQuote();
