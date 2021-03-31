function totalPhoneBill(str){
    console.log(str)
    var bill = str.split(', ')
    var total = 0;
   for(var i=0;i<bill.length;i++){
     
       if(bill[i]==='call'){
      total+= 2.75;
      }
     if(bill[i]==='sms'){
         total+= 0.65;
     
     }
   }  
    console.log('R' + total.toFixed(2));
    return 'R' + total.toFixed(2);
    
  }