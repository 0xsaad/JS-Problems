var x = "madam";

function palindrome(x) {
  x = x.toLowerCase();
  var x1 = x.split("").reverse().join("");

  if (x1 === x) console.log(`${x} is Palindrome`);
  else console.log(`${x} is not Palindrome`);
}
palindrome(x);
