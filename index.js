const inputEl = document.querySelector("#inputEl");
const saveButton = document.querySelector("#saveButton");
const leads = document.querySelector("#leads");
let myLeads = [];

const saveLead = () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
};

saveButton.addEventListener("click", saveLead);

const renderLeads = () => {
  let itemsList = "";

  for (let i = 0; i < myLeads.length; i++) {
    itemsList += `
      <li>
        <a href='${myLeads[i]}' target='_blank'>
          ${myLeads[i]}
        </a>
      </li>
    `;
  }

  leads.innerHTML = itemsList;
};

const getLeadsFromLocalStorage = () => {
  let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

  if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
  }
};

getLeadsFromLocalStorage();
