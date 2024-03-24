console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // get the whole data object:
    console.log("whole Object:", data);

    //get the 4th character's name:
    console.log("4th character's name:", data.results[3].name);

    //get all names and log them indidually and an in array:
    data.results.forEach((element) => console.log("character:", element.name));
    let arrCharacters = data.results.map((element) => element.name);
    console.log("array of all characters:", arrCharacters);

    //bonus: eye-color of R2D2:
    console.log("eye-color of R2D2:", data.results[2]["eye_color"]);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
