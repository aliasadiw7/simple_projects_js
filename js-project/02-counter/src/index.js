let count = 0;
check = () => {
  if (count === 0) {
    document.getElementById("count").style.color = "hsl(209, 61%, 16%)";
  } else if (count > 0) {
    document.getElementById("count").style.color = "green";
  } else {
    document.getElementById("count").style.color = "red";
  }
};

increase = () => {
  count += 1;
  document.getElementById("count").innerHTML = count;
  check();
};
reset = () => {
  count = 0;
  document.getElementById("count").innerHTML = count;
  check();
};
decrease = () => {
  count -= 1;
  document.getElementById("count").innerHTML = count;
  check();
};
