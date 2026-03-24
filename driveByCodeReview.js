const FAVOURITE_FLOWERS = [];
let favouriteFlower = null;
// would extract, also shouting case?
const DESCRIPTIONS = [ // dduplication of the text
  "Select your very favourite flower from the list.",
  "Select your almost favourite flower from the list.",
  "Select your 3rd favourite flower from the list.",
  "Select your 4th favourite flower from the list.",
];

const FLOWERS = [
  "Violet",
  "Lilly",
  "Snowdrop",
  "Rose",
  "Poppy",
  "Daffodil",
  "Bluebell",
];

function createDropdown() {
  const container = document.getElementById("select-favourite-container"); // is kebeab case good?

  DESCRIPTIONS.forEach((description, index) => {
    const selectionDescription = document.createElement("p");
    selectionDescription.textContent = description;

    const select = document.createElement("select");
    select.setAttribute("id", `favourite-selection-${index}`);
    select.setAttribute("onchange", "setFavourite(this)");

    FLOWERS.forEach((flower) => {
      const option = document.createElement("option");
      option.setAttribute("value", flower);
      option.textContent = flower;
      select.appendChild(option);
    }); // should be a function with a name

    container.appendChild(selectionDescription);
    container.appendChild(select);
  });
}

function setFavourite(favouriteElement) {
  if (favouriteElement.id === "favourite-selection-0") {
    // don't understand why necessary, isn't it always pushed?
    favouriteFlower = favouriteElement.value; // should be a local scope
    FAVOURITE_FLOWERS.push(favouriteFlower);
  } else {
    FAVOURITE_FLOWERS.push(favouriteFlower);
  }
}

function getFavourite() {
  return favouriteFlower;
}

function createAcknowledgement() {
  const confirmationMessage = document.getElementById("confirmation-message");
  if (!favouriteFlower) {
    confirmationMessage.innerText =
      "You didn't select your very favourite flower.";
  } else {
    confirmationMessage.innerText = `Thank you for voting! Your very favourite flower is a ${getFavourite()}.`;
  }
}

function displayErrorMessage() {
  const errorParagraph = document.getElementById("error-message");
  errorParagraph.innerText =
    "Sorry, we were unable to send your favourites. Please try again.";
}

function handleError(error) {
  console.error(`An error occurred: ${error.message}`);
  displayErrorMessage();
}

async function sendFlowerData() {
  try {
    const response = await fetch("https://flowers.api.co.uk", {
      method: "POST",
      body: JSON.stringify(FLOWERS),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to send data: ${response.status}`); // perhaps they shpuld use their handle error? no need to throw it back
    }
  } catch (error) {
    handleError(error);
    throw error; // need to throw?
  }
}

async function getFlowerData() {
  const url = "https://flowers.api.co.uk/flowers";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json); // log
  } catch (error) {
    handleError();
    throw error; // error thrown ...
  }
}

document.addEventListener("DOMContentLoaded", function () {
  createDropdown();
});
