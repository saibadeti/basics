const form = document.getElementById("form");
const apptype = document.getElementById("applicationtype");
const assadv = document.getElementById("assigned-advisor");
const product = document.getElementById("product");

const type = document.getElementById("accounttype");
const entity = document.getElementById("entity");
const basecurrency = document.getElementById("basecurrency");

let a = [];

form.addEventListener("submit", (e) => {
  if (apptype.value === "") {
    apptype.classList.add("error");
    apptype.classList.remove("success");
  } else {
    apptype.classList.add("success");
    apptype.classList.remove("error");

    a.push(apptype.value);
  }
  if (assadv.value === "" || isNaN(assadv.value)) {
    assadv.classList.add("error");
    assadv.classList.remove("success");
    if (isNaN(assadv.value)) {
      alert("Enter Number at Assigned advisor field");
    }
  } else {
    assadv.classList.add("success");
    assadv.classList.remove("error");

    a.push(assadv.value);
  }
  if (product.value === "") {
    product.classList.add("error");
    product.classList.remove("success");
  } else {
    product.classList.add("success");
    product.classList.remove("error");

    a.push(product.value);
  }
  if (type.value === "") {
    type.classList.add("error");
    type.classList.remove("success");
  } else {
    type.classList.add("success");
    type.classList.remove("error");

    a.push(type.value);
  }
  if (entity.value === "") {
    entity.classList.add("error");
    entity.classList.remove("success");
  } else {
    entity.classList.add("success");
    entity.classList.remove("error");

    a.push(entity.value);
  }
  if (basecurrency.value === "") {
    basecurrency.classList.add("error");
    basecurrency.classList.remove("success");
  } else {
    basecurrency.classList.add("success");
    basecurrency.classList.remove("error");

    a.push(basecurrency.value);
  }

  if (a.length >= 6) {
    alert(
      `Application type : ${a[0]},\nAssigned advisor : ${a[1]}, \nProduct : ${a[2]},\nAccount Type : ${a[3]},\nEntity : ${a[4]},\nBase Currency : ${a[5]}`
    );
  }
  while (a.length > 0) {
    a.pop();
  }
  e.preventDefault();
});
