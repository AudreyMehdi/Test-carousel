
function loadPage(pageNumber) {
  const urlApi = `https://reqres.in/api/users?page=${pageNumber}`;
  fetch(urlApi)
  .then((reponse) => {
    return reponse.json();
  })
  .then((reponseJson) => {
    console.log(reponseJson);

    const bodyElement = document.querySelector(".carousel-inner");
    bodyElement.innerHTML = "";// me permet de ne pas superposer mes page1 et page 2
    for (let index = 0; index < reponseJson.data.length; index++) {
      let nomClass = "";

      if (index == 0) {
        nomClass = "active";
      }

      bodyElement.innerHTML += `
     <div class="carousel-item ${nomClass}">
          <div class="card" style="width: 16rem">
            <div class="card-body">
              <h5 class="card-title"></h5>
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
}

const btn1Element = document.getElementById("btn1");
const btn2Element = document.getElementById("btn2");
loadPage(1);
btn1Element.addEventListener("click", () => {
  loadPage(1);
});
 
btn2Element.addEventListener("click", () => {
  loadPage(2);
});
