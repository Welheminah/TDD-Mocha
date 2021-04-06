function regCheck(reg, regLoc){
    //console.log(regLoc)
    if(reg === '' && regLoc === ''){
      return 'please enter valid registration number and location'
    }
  return reg.endsWith(regLoc);	
}
console.log(regCheck('DV 23 NB GP', 'GP'));