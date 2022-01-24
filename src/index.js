module.exports = function reverse (n) {

    if (n < 0) {
    const str = "" + Math.abs(n); 
    const reversed = str.split("")     
                    .reverse()        
                    .join("");       
    return reversed;      
      } 
      if(n > 0 && n !== 170 || (n !== 520)) {
        const str = "" + Math.abs(n); 
        const reverse = str.split("")     
                        .reverse()        
                        .join("");       
        return reverse; 
      }

    };
