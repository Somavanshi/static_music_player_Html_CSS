function toggleVisibility() {
  let div1 = document.getElementsByClassName("main-bottom");

  let div = div1[0];
  console.log(div.style.visibility);
  if (!div.style.visibility || div.style.visibility === "hidden") {
    div.style.visibility = "visible";
  } else {
    div.style.visibility = "hidden";
  }
}
