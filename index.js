const inputEl = document.querySelector("#inputEl");
const saveButton = document.querySelector("#saveButton");
const deleteButton = document.querySelector("#deleteButton");
const leads = document.querySelector("#leads");
let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// Save lead

const saveLead = () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
};

saveButton.addEventListener("click", saveLead);

// Render leads

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

// Delete all leads

const deleteAllLeads = () => {
  localStorage.clear();
  myLeads = [];
  renderLeads();
};

deleteButton.addEventListener("click", deleteAllLeads);

// Get leads from local storage

const getLeadsFromLocalStorage = () => {
  if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
  }
};

getLeadsFromLocalStorage();
