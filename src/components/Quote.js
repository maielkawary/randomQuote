import { useEffect , useState } from 'react';

const Quote = (myQuotes) => {
    const [myQuote, setMyQuote] = useState(myQuotes.myQuotes.quotes[getRandomNumberBetween(0,102)]);
    useEffect(() => {
        function random_bg_color() {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
         console.log(bgColor);
         document.body.style.background = bgColor;}
        random_bg_color();
    }, [myQuote]);

    function getRandomNumberBetween(min,max){
        
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    const handleChange = () => {
        setMyQuote(myQuotes.myQuotes.quotes[getRandomNumberBetween(0,102)]);
    }

    

    
    return(
        <div id="container" style={{backgroundColor: "red"}}>
        <div id='wrapper' >
            <div id='text'>
               <h2>" </h2> {myQuote.quote} <h2>" </h2>
            </div>
            <h3 id='author' class="fs-6">By: {myQuote.author}</h3>
            <button onClick={handleChange} id='change-quote' type="button" class="btn btn-dark">Another</button>
            <a href='https://twitter.com'></a>
        </div>
        </div>
    )
    
}

export default Quote;