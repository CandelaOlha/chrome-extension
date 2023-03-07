const inputEl = document.querySelector("#inputEl");
const saveButton = document.querySelector("#saveButton");
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const leads = document.querySelector("#leads");
let itemsList = "";

const saveLead = () => {
  myLeads.push(inputEl.value);
  //   console.log(myLeads);
};

saveButton.addEventListener("click", saveLead);

for (let i = 0; i < myLeads.length; i++) {
  itemsList += `<li>${myLeads[i]}</li>`;
}

leads.innerHTML = itemsList;
