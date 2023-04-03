const inputEl = document.querySelector("#inputEl");
const saveInputButton = document.querySelector("#saveInputButton");
const saveTabButton = document.querySelector("#saveTabButton");
const deleteButton = document.querySelector("#deleteButton");
const leadsUlEl = document.querySelector("#leadsUlEl");
let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// Render leads

const render = (leads) => {
  let itemsList = "";

  for (let i = 0; i < leads.length; i++) {
    itemsList += `
      <li>
        <a href='${leads[i]}' target='_blank'>
          ${leads[i]}
        </a>
      </li>
    `;
  }

  leadsUlEl.innerHTML = itemsList;
};

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// Save lead

const saveLead = () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
};

saveInputButton.addEventListener("click", saveLead);

// Save tab

const saveTab = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
};

saveTabButton.addEventListener("click", saveTab);

// Delete all leads

const deleteAllLeads = () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
};

deleteButton.addEventListener("click", deleteAllLeads);

// Get leads from local storage

const getLeadsFromLocalStorage = () => {
  if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
  }
};

getLeadsFromLocalStorage();
