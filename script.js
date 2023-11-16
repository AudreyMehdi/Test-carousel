// function tartempion(page){
//   const urlApi = `https://reqres.in/api/users?page=${page}`
//   const button1 = document.getElementById("button1");
//   const button2 = document.getElementById("button2");
// }

//document.addEventListener("click", )

const urlApi = "https://reqres.in/api/users?page=1";
fetch(urlApi)
  .then((reponse) => {
    return reponse.json();
  })
  .then((reponseJson) => {
    console.log(reponseJson);

    const bodyElement = document.querySelector(".carousel-inner"); // suivre la même logique que dans le CSS, class => .

    for (let index = 0; index < reponseJson.data.length; index++) {
      let nomClass = "";

      if (index == 0) {
        nomClass = "active"; // condition ternaire
      }

      bodyElement.innerHTML += `
     <div class="carousel-item ${nomClass}">
          <div class="card" style="width: 16rem">
            <div class="card-body">
              <h5 class="card-title">USER :</h5>
              <p class="card-text">
                  <div>Nom: ${reponseJson.data[index].last_name}</div>
                  <div >Prénom: ${reponseJson.data[index].first_name}</div>
                  <div >Email: ${reponseJson.data[index].email}</div>
                  <div >Id: ${reponseJson.data[index].id}</div>
                  <div ><img src= ${reponseJson.data[index].avatar} /></div>
              </p>
            </div>
          </div>
        </div>
 `;
    }
  });

const bodyElement = document.querySelector("body");
bodyElement.innerHTML += `
<div>
<button id = "button1">1</button>
<button id = "button2">2</button>
</div>
`;

//document.querySelector("#last_name0").innerHTML = `Nom :  ${reponseJson.data[0].last_name}`;
// document.querySelector("#name0").innerHTML = `Prénom :  ${reponseJson.data[0].first_name}`;
// document.querySelector("#email0").innerHTML = `Mail : ${reponseJson.data[0].email}`;
// document.querySelector("#num0").innerHTML = `ID : ${reponseJson.data[0].id}`;
// document.querySelector("#avatar0").innerHTML = `<img src= ${reponseJson.data[0].avatar} />`;

// document.querySelector("#last_name1").innerHTML = `Nom :  ${reponseJson.data[1].last_name}`;
// document.querySelector("#name1").innerHTML = `Prénom :  ${reponseJson.data[1].first_name}`;// boucle for sur responseJson.data
// document.querySelector("#email1").innerHTML = `Mail : ${reponseJson.data[1].email}`;
// document.querySelector("#num1").innerHTML = `ID : ${reponseJson.data[1].id}`;
// document.querySelector("#avatar1").innerHTML = `<img src= ${reponseJson.data[1].avatar} />`;

// document.querySelector("#last_name2").innerHTML = `Nom :  ${reponseJson.data[2].last_name}`;
// document.querySelector("#name2").innerHTML = `Prénom :  ${reponseJson.data[2].first_name}`;
// document.querySelector("#email2").innerHTML = `Mail : ${reponseJson.data[2].email}`;
// document.querySelector("#num2").innerHTML = `ID : ${reponseJson.data[2].id}`;
// document.querySelector("#avatar2").innerHTML = `<img src= ${reponseJson.data[2].avatar} />`;

// document.querySelector("#last_name3").innerHTML = `Nom :  ${reponseJson.data[3].last_name}`;
// document.querySelector("#name3").innerHTML = `Prénom :  ${reponseJson.data[3].first_name}`;
// document.querySelector("#email3").innerHTML = `Mail : ${reponseJson.data[3].email}`;
// document.querySelector("#num3").innerHTML = `ID : ${reponseJson.data[3].id}`;
// document.querySelector("#avatar3").innerHTML = `<img src= ${reponseJson.data[3].avatar} />`;

// document.querySelector("#last_name4").innerHTML = `Nom :  ${reponseJson.data[4].last_name}`;
// document.querySelector("#name4").innerHTML = `Prénom :  ${reponseJson.data[4].first_name}`;
// document.querySelector("#email4").innerHTML = `Mail : ${reponseJson.data[4].email}`;
// document.querySelector("#num4").innerHTML = `ID : ${reponseJson.data[4].id}`;
// document.querySelector("#avatar4").innerHTML = `<img src= ${reponseJson.data[4].avatar} />`;

// document.querySelector("#last_name5").innerHTML = `Nom :  ${reponseJson.data[5].last_name}`;
// document.querySelector("#name5").innerHTML = `Prénom :  ${reponseJson.data[5].first_name}`;
// document.querySelector("#email5").innerHTML = `Mail : ${reponseJson.data[5].email}`;
// document.querySelector("#num5").innerHTML = `ID : ${reponseJson.data[5].id}`;
// document.querySelector("#avatar5").innerHTML = `<img src= ${reponseJson.data[5].avatar} />`;
