console.log("Script.js är korrekt länkat.");
//En asynkron funktion som hämtar användardata från servern med hjälp av Fetch API.
async function fetchUsers(callback) {
  try {
    //Skickar en GET-förfrågan till servern för att hämta användardata från den angivna API-slutpunkten.
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();
    console.log(users);
    callback(users);
  } catch (error) {
    console.error("Fel vid hämtning av användare:", error);
  }
}
// --ALTERNATIV-- Där vi använder .then() för att hämta data
// fetch('http://localhost:3000/users')
//   .then(response => response.json())   // Konverterar svaret till JSON
//   .then(users => console.log(users))   // Loggar användardata
//   .catch(error => console.error('Fel vid hämtning:', error)); // Hanterar fel



//En funktion som skapar och lägger till HTML-element för varje användare på webbsidan.
function displayUsers(users) {
  const content = document.getElementById("content");
  //Skapar ett ul-element för att hålla listan över användare.
  const userList = document.createElement("ul");

  users.forEach((user) => {
    //Skapar ett li-element för att representera en enskild användare.
    const userItem = document.createElement("li");
    userItem.style.backgroundColor = user.color;
    //Lägger till användarens namn, användarnamn och färg i li-elementet med HTML.
    userItem.innerHTML = `
            <h2>${user.firstName} ${user.lastName}</h2>
            <p><strong>Användarnamn:</strong> ${user.username}</p>
            <p><strong>Färg:</strong> ${user.color}</p>
        `;
    userList.appendChild(userItem);
  });
  //Lägger till den skapade användarlistan i innehållsdiven på webbsidan.
  content.appendChild(userList);
}

fetchUsers(displayUsers);
