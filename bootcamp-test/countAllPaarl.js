  function countAllPaarl(reg){
    console.log(reg);
     var allPaarl = reg.split(", ");
     var counter = 0;
     //console.log(allPaarl);
     for(var i=0;i<allPaarl.length;i++){
     var  registration = allPaarl[i];
       if (registration.startsWith('CJ')){
           counter++;  
        
       }
       
     }
       //console.log(counter.length());
      console.log(counter);
        return counter;
    
   }