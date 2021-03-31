function regCheck(reg, regLoc){
    //console.log(regLoc)
  return reg.endsWith(regLoc);	
}
console.log(regCheck('DV 23 NB GP', 'GP'));