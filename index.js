const plants = [
  { name: "Shade Plants", link: "#" },
  { name: "Sunny Plants", link: "#" },
  { name: "Succulents", link: "#" },
  { name: "Easy-care plants", link: "#" },
]

function searchFunction() {
  const value = document.getElementById("search-input").value;
  console.log("you have searched for " + value);

  // Crete an empty array to store search results
  const resultsArr = []

  // Loop through the plants array
  for (let i = 0; i < 4 ; i++ ) {

  // Check if each plant matches the search
  if (plants[i].name.includes(value)) {
      // If it matches, add it to the empty array
      resultsArr.push(plants[i]);
    }
  }
  // Console.log the search results
  console.log(`we've found ${resultsArr.length} plants!`);
  console.log(resultsArr);
}