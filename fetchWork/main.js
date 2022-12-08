const url = "https://northwind.vercel.app/api/customers";

const inputName = document.getElementById("name");
const inputContact = document.getElementById("contact");
const inputTitle = document.getElementById("title");
const result = document.getElementById("result");
const add = document.getElementById("add");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    result.innerHTML = data.length;
    console.log(data);
  });

add.addEventListener("click", () => {
  postMethod();
});

function postMethod() {
  const newObject = {
    companyName: inputName.value,
    contactName: inputContact.value,
    contactTitle: inputTitle.value,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newObject),
  }).then(() =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
  );
}

function getMethod() {}
