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
