const form = document.queryselector("form");

const FullName = document.getElementById("name");
const Email = document.getElementById("email");
const phone = document.getElementById("phone");
const Subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name : ${FullName.value}<br>
 Email : ${Email.value}<br> Phone : ${phone.value} <br> subject : ${Subject.value}<br> Message : ${mess.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "abi764858@gmail.com",
    Password: "26F6A5C9D66CBE830C126E208975AE852402",
    To: "abi764858@gmail.com",
    From: "abi764858@gmail.com",
    Subject: Subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "ok") {
      Swal.fire({
        title: "success!",
        text: "message sent successfully",
        icon: "success",
      });
    }
  });
}
function checkInputs() {
  const items = document.querySelector(".item");
  for (const item of items) {
    if (item.value == " ") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //sendEmail();
  checkInputs();
});
