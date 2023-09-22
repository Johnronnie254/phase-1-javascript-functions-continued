// code your solution here
function saturdayFun (fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`
}
console.log(saturdayFun("Bathe my dog"))

// work 2
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  console.log(mondayWork()); //  Monday, I will go to the office."
  console.log(mondayWork('work from home')); // Monday, I will work from home."


//last
function wrapAdjective(sign = "*") {
    return function (adjective = "a beautiful baby") {
      return `You are ${sign}${adjective}${sign}!`;
    };
  }
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer"));