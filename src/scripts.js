var btn = document.getElementById("send_btn");
var commentsCont = document.getElementsByClassName("comments")[0];
var textArea = document.getElementsByClassName("send-form__text")[0];

var userName = "Default User Name";

btn.addEventListener("click", function() {
  appendComment(userName);
});

window.addEventListener("keydown", function(e) {
  if (e.key === "Enter" && e.ctrlKey) {
    appendComment(userName);
  }
});

function appendComment(userName) {
  textArea.value.trim() &&
    commentsCont.appendChild(createComment(userName, textArea.value));
}

function createComment(author, text) {
  var comment = document.createElement("div");
  var commentCaption = document.createElement("div");
  var commentName = document.createElement("div");
  var commentDate = document.createElement("div");
  var commentText = document.createElement("div");

  comment.className = "comment";
  commentCaption.className = "comment__caption";
  commentName.className = "caption__name";
  commentDate.className = "caption__date";
  commentText.className = "comment__text";

  var months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря"
  ];
  var date = new Date();

  commentDate.innerText =
    date.getDate() +
    " " +
    months[date.getMonth()].toLowerCase() +
    " " +
    date.getFullYear();
  commentName.innerText = author;
  commentText.innerText = text;

  commentCaption.appendChild(commentName);
  commentCaption.appendChild(commentDate);
  comment.appendChild(commentCaption);
  comment.appendChild(commentText);

  return comment;
}
