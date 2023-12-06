const output = document.querySelector(".output");

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log(factorial(130));
  } else {
    console.log("Nice joke");
  }
});

const killButton = document.querySelector(".killButton");

function factorial(num) {
  let result = 0;
  if (num > 1) {
    result = factorial(num - 1) * num;
  } else if (num == 1) {
    return 1;
  }
  return result;
}

let killMode = false;
killButton.addEventListener("click", () => {
  console.log("clicked");
  if (!killMode) killMode = true;
  else killMode = false;
  while (killMode) {
    console.log("Hello");
    console.log(factorial(130));
  }
});

document.addEventListener("focusout", () => {
  console.log("focus lost");
});
