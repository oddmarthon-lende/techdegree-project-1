/*
  Gets a random quote from the quotes global variable
*/
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

/*
  Gets a random rgb string in the format:
   "rgb(0-255,0-255,0-255)";
*/
function getRandomRGB() {
  const number = () => Math.floor(Math.random() * 256);
  return 'rgb(' + number() + ',' + number() + ',' + number() + ')';
}

/*
  Prints the quote to the screen
  and sets the background color to a random color
*/
function printQuote() {

  const quote = getRandomQuote();
  const color = getRandomRGB();

  var html = '<p class="quote">' + quote.quote + '</p>';

  html += '<p class="source">' + quote.source;

  // if there is a property named citation in the object
  // add html for the citation property
  if('citation' in quote)
    html += '<span class="citation">' + quote.citation + '</span>';

  // if there is a property named year in the object
  // add html for the year property
  if('year' in quote)
    html += '<span class="year">' + quote.year + '</span>';

  html += '</p><p>';

  // if there is a property named tags in the object
  // add html for the tags
  if('tags' in quote)
    for(var i = 0, tags = quote.tags; i < tags.length; i++) {
      html += '<span class="tag">' + tags[i] + '</span>';
    }

  html += '</p>';

  // set the background color of the page
  document.body.style.backgroundColor = color;

  // set the innerHTML property of quote box to the newly generated html
  document.getElementById('quote-box').innerHTML = html;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// print a new quote every 30 seconds
setInterval(printQuote, 30000);

// print a quote when the page is loaded
printQuote();
