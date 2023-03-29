const inputEl = document.querySelector("#inputEl");
const saveButton = document.querySelector("#saveButton");
let myLeads = [];
const leads = document.querySelector("#leads");

const saveLead = () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
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
