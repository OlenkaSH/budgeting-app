// Total balance
const balanceElement = document.getElementById("balance");

// Value input
const valueInputElement = document.querySelector("input");
// Income/expence
const selectElement = document.querySelector("select");

// Addition button
const additionButtonElement = document.querySelector("footer button");

// Entry list

const entryListElement = document.querySelector("section ul");

function addEntry(amount, operation) {
  const listEntry = document.createElement("li");
  listEntry.classList.add(operation);

  const listEntryValue = document.createElement("strong");

  listEntryValue.innerText = amount + "€";
  //create an element for Description
  const listEntryDescription = document.createElement("em");
  listEntryDescription.innerText = "Description";

  //create an element for operator (+ or -)
  const listEntryOperator = document.createElement("span");

  if (operation === "income") {
    listEntryOperator.innerText = "+";
  } else if (operation === "expense") {
    listEntryOperator.innerText = "-";
  }

  listEntry.appendChild(listEntryDescription);

  listEntry.appendChild(listEntryOperator);

  listEntry.appendChild(listEntryValue);

  entryListElement.appendChild(listEntry);
}

function updateBalance() {
  //console.log(entryListElement.children);
  let total = 0;

  for (let item of entryListElement.children) {
    //console.log(item);
    const valueElement = item.querySelector("strong");
    const operationElement = item.querySelector("span");

    const value = parseInt(valueElement.innerText);
    const operation = operationElement.innerText;

    if (operation === "+") {
      total = total + value;
    } else if (operation === "-") {
      total = total - value;
    }
  }

  balanceElement.innerText = total + "€";
}

additionButtonElement.onclick = function () {
  //console.log("Button was clicked");
  const amount = valueInputElement.value;
  const operation = selectElement.value;

  addEntry(amount, operation);
  valueInputElement.value = "";

  updateBalance();
};
