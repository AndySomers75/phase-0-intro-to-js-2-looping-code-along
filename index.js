// Code your solutions in this file
function writeCards( birthdayArray, party ) {
    let thankYouCards = []
    for ( let i = 0; i < birthdayArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${birthdayArray[i]}, for the wonderful ${party} gift!` )
    }
    return thankYouCards
  }
  
  function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
        console.log( startingNumber );
        startingNumber -= 1;
      }
      console.log( startingNumber );
    }