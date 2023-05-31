let Like = document.getElementById("btnLike");
let likep = document.getElementById("likep");
btnLike.addEventListener("click", () => {
  window.localStorage.setItem(likep.innerHTML++);
});

let form = document.getElementById("form");
let btnSubmit = document.getElementById("btnSubmit");
let comment = document.getElementById("comment");
let name1 = document.getElementById("name");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  name1.textContent = form.name.value;
  comment.textContent = form.comment.value;
});

let Delete = document.getElementById("delete");

Delete.addEventListener("click", () => {
  comment.textContent = "";
  name1.textContent = "";
});
