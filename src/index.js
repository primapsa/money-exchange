// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
  
    var fullcoin;   
    var response={};
    var coinvalue=0;
    var coins={H: 50, Q: 25, D: 10, N: 5, P: 1};    
        function nextmath(num) {
            if(num<10000){
                for (var keycoin in coins) {
                    coinvalue = coins[keycoin];
                    if(num >= coinvalue){
                      fullcoin = Math.floor(num/coinvalue);
                      num-=fullcoin*coinvalue;
                      response[keycoin]=fullcoin;                    
                      nextmath(num);
                      break;
                    }
                }
            }   
            else{
                response['error']="You are rich, my friend! We don't have so much coins for exchange";
            }
          return response;
        }    
    return nextmath(currency);
}
