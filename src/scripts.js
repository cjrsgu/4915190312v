const btn = document.getElementById("send_btn");
const commentsCont = document.getElementsByClassName("comments")[0];
const textArea = document.getElementsByClassName("send-form__text")[0];

const userName = "Default User Name";

btn.addEventListener("click", () => {
  appendComment(userName);
});

window.addEventListener("keydown", e => {
  if (e.key === "Enter" && e.ctrlKey) {
    appendComment(userName);
  }
});

function appendComment(userName) {
  textArea.value.trim() &&
    commentsCont.appendChild(createComment(userName, textArea.value));
}

function createComment(author, text) {
  const comment = document.createElement("div");
  const commentCaption = document.createElement("div");
  const commentName = document.createElement("div");
  const commentDate = document.createElement("div");
  const commentText = document.createElement("div");

  comment.className = "comment";
  commentCaption.className = "comment__caption";
  commentName.className = "caption__name";
  commentDate.className = "caption__date";
  commentText.className = "comment__text";

  const months = [
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
  const date = new Date();

  commentDate.innerText = `${date.getDate()} ${months[
    date.getMonth()
  ].toLowerCase()} ${date.getFullYear()}`;
  commentName.innerText = author;
  commentText.innerText = text;

  commentCaption.appendChild(commentName);
  commentCaption.appendChild(commentDate);
  comment.appendChild(commentCaption);
  comment.appendChild(commentText);

  return comment;
}
