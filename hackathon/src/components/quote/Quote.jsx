import "./Quote.css"
import { useState, useEffect } from 'react';

const Quote = () => {
  const quotes = [
    "Helping one person might not change the world, but it could change the world for one person. - Unknown",
    "The smallest act of kindness is worth more than the grandest intention. - Oscar Wilde",
    "No one has ever become poor by giving. - Anne Frank",
    "We rise by lifting others. - Robert Ingersoll",
    "Happiness doesn't result from what we get, but from what we give. - Ben Carson",
    "The greatest use of life is to spend it for something that will outlast it. - William James",
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    function myFunction() {
      const temp = quotes[0];
      quotes.shift();
      quotes.push(temp);
      setCurrentQuote(temp);
    }
    
    myFunction(); // Call initially
    const intervalId = setInterval(myFunction, 6000);

    return () => clearInterval(intervalId); // Cleanup
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="quote_box">
        <div>
            <div>
            {currentQuote}
            </div>
        </div>
    </div>
  );
};

export default Quote;