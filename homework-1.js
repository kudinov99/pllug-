//var target = [];
//while (true) {
//  target.push(1);
//}

function changeLatters(str) {
  let newStr = [];
  const letters = str.split('');
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == letters[i].toLowerCase()) {
      let upLetter = letters[i].toUpperCase();
      newStr.push(upLetter);
    } else {
      let lowLetter = letters[i].toLowerCase();
      newStr.push(lowLetter);
    }
  }
  return newStr.join('');
}

console.log(changeLatters('PlluG'));



/*
  Завдання 1 зроблено добре. Зауважень нема

  
  Завдання 2 зроблено добре
  Тут можна було стрічку не перетворювати в масив. Можна було б зробити так

  function changeLatters(str) {

    let newStr = '';

    for (let i = 0; i < str.length; i++) {

      if (str[i] == str[i].toLowerCase()) {

        newStr += str[i].toUpperCase();
      } else {

        newStr += str[i].toLowerCase();
      }
    }
    return newStr;
  }
*/
