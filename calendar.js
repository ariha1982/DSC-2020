const dateContainer = document.querySelector(".calendar"),
  dateTitle = dateContainer.querySelector("h1");

var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function getDate(){
  const now = new Date();
  const month = monthNames[now.getMonth()];
  const date = now.getDate();
  dateTitle.innerText = `${month} ${date < 10 ? `0${date}`: date}`;
}

function init() {
  getDate();
}

init();
