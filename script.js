document.getElementById("sub_1").addEventListener("click", num);

var romanNum = {
  1: "I",  2: "II",  3: "III",  4: "IV",  5: "V",  6: "VI",  7: "VII",  8: "VIII",  9: "IX",  10: "X",  20: "XX",  30: "XXX",  40: "XL",  50: "L",  60: "LX",  70: "LXX",  80: "LXXX",  90: "XC",  100: "C",  200: "CC",  300: "CCC",  400: "CD",  500: "D",  600: "DC",  700: "DCC",  800: "DCCC",  900: "CM",  1000: "M",  2000: "MM",  3000: "MMM",};
function num() {
  var number = document.getElementById("num").value;
  var number1 = number.toString();
  var sum;
  var son = "";
  console.log(number.length);

  for (var i = 0; i <= number1.length - 1; i++) {
    sum = number1.charAt(i) * 10 ** (number1.length - i - 1);
    son += romanNum[sum];
  }
  document.getElementById("res_1").innerHTML = son;
}
var romanNum1 = {
  I: "1",  II: "2",  III: "3",  IV: "4",  V: "5",  VI: "6",  VII: "7",  VIII: "8",  IX: "9",  X: "10",  XX: "20",  XXX: "30",  XL: "40",  L: "50",  LX: "60",  LXX: "70",  LXXX: "80",  XC: "90",  C: "100",  CC: "200",  CCC: "300",  CD: "400",  D: "500",  DC: "600",  DCC: "700",  DCCC: "800",  CM: "900",  M: "1000",  MM: "2000",  MMM: "3000",};
console.log(romanNum1["M"]);
document.getElementById("sub_2").addEventListener("click", rafet);
function rafet() {
  var roman = document.getElementById("roman").value.toUpperCase();
  var prev, current;
  var sum = 0;
  for (var i = 0; i < roman.length - 1; i++) {
    current = parseInt(romanNum1[roman.charAt(i)]);
    prev = parseInt(romanNum1[roman.charAt(i + 1)]);
    if (current >= prev) {
      sum += current;
    } else {
      sum -= current;
    }
  }
  console.log(sum + prev);
  document.getElementById("res_2").innerHTML = sum + prev;
}
