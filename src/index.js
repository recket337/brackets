module.exports = function check(str, bracketsConfig) {
    // your solution
  function isBracketsOpen(str) {
    for (let i=0;i<bracketsConfig.length;i++) {
      if (bracketsConfig[i][0]===str) return true;
      }
      return false;
  }
  
  function isBracketsClose(str) {
    for (let i=0;i<bracketsConfig.length;i++) {
      if (bracketsConfig[i][1]===str) return true;
    }
    return false;
  }
  
    function getCloseBrackets(openBr) {
      for (let i=0;i<bracketsConfig.length;i++) {
        if (bracketsConfig[i][0]===openBr) return bracketsConfig[i][1];
      }
    }
    let stack=[];
    let result=false;;
  for (let a=0;a<str.length;a++) {
    if (isBracketsOpen(str[a])) {
      if ((stack[stack.length-1]===str[a])&&(isBracketsOpen(str[a])===isBracketsClose(str[a])))
      {
      stack.pop();
      continue;
      }
      stack.push(str[a]);
      continue;
    }
    if (isBracketsClose(str[a])) {
      if (stack.length===0) return false;
      let c=stack.pop();
      let b=getCloseBrackets(c);
      if (str[a]!==b) return false;
    }
  }
  if (stack.length===0) result=true;
  return result;
  }
  