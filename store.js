
 var priceInDoller=[10,2];

function dollerToRupee(){
           
let args=Array.from(arguments);
   let finala= args.map(element => element*80  ) 
         console.log(finala); 
   
     
}
dollerToRupee(2);
dollerToRupee(1,2,3);

