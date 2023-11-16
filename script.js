const urlApi = "https://reqres.in/api/users?page=1";
fetch(urlApi)
  .then((reponse) => {
    return reponse.json();
  })
  .then((reponseJson) => {
    console.log(reponseJson);

    document.querySelector("#last_name0").innerHTML = `Nom :  ${reponseJson.data[0].last_name}`;
    document.querySelector("#name0").innerHTML = `Prénom :  ${reponseJson.data[0].first_name}`;
    document.querySelector("#email0").innerHTML = `Mail : ${reponseJson.data[0].email}`;
    document.querySelector("#num0").innerHTML = `ID : ${reponseJson.data[0].id}`;
    document.querySelector("#avatar0").innerHTML = `<img src= ${reponseJson.data[0].avatar} />`;

    document.querySelector("#last_name1").innerHTML = `Nom :  ${reponseJson.data[1].last_name}`;
    document.querySelector("#name1").innerHTML = `Prénom :  ${reponseJson.data[1].first_name}`;// boucle for sur responseJson.data
    document.querySelector("#email1").innerHTML = `Mail : ${reponseJson.data[1].email}`;
    document.querySelector("#num1").innerHTML = `ID : ${reponseJson.data[1].id}`;
    document.querySelector("#avatar1").innerHTML = `<img src= ${reponseJson.data[1].avatar} />`;

    document.querySelector("#last_name2").innerHTML = `Nom :  ${reponseJson.data[2].last_name}`;
    document.querySelector("#name2").innerHTML = `Prénom :  ${reponseJson.data[2].first_name}`;
    document.querySelector("#email2").innerHTML = `Mail : ${reponseJson.data[2].email}`;
    document.querySelector("#num2").innerHTML = `ID : ${reponseJson.data[2].id}`;
    document.querySelector("#avatar2").innerHTML = `<img src= ${reponseJson.data[2].avatar} />`;

    document.querySelector("#last_name3").innerHTML = `Nom :  ${reponseJson.data[3].last_name}`;
    document.querySelector("#name3").innerHTML = `Prénom :  ${reponseJson.data[3].first_name}`;
    document.querySelector("#email3").innerHTML = `Mail : ${reponseJson.data[3].email}`;
    document.querySelector("#num3").innerHTML = `ID : ${reponseJson.data[3].id}`;
    document.querySelector("#avatar3").innerHTML = `<img src= ${reponseJson.data[3].avatar} />`;

    document.querySelector("#last_name4").innerHTML = `Nom :  ${reponseJson.data[4].last_name}`;
    document.querySelector("#name4").innerHTML = `Prénom :  ${reponseJson.data[4].first_name}`;
    document.querySelector("#email4").innerHTML = `Mail : ${reponseJson.data[4].email}`;
    document.querySelector("#num4").innerHTML = `ID : ${reponseJson.data[4].id}`;
    document.querySelector("#avatar4").innerHTML = `<img src= ${reponseJson.data[4].avatar} />`;

    document.querySelector("#last_name5").innerHTML = `Nom :  ${reponseJson.data[5].last_name}`;
    document.querySelector("#name5").innerHTML = `Prénom :  ${reponseJson.data[5].first_name}`;
    document.querySelector("#email5").innerHTML = `Mail : ${reponseJson.data[5].email}`;
    document.querySelector("#num5").innerHTML = `ID : ${reponseJson.data[5].id}`;
    document.querySelector("#avatar5").innerHTML = `<img src= ${reponseJson.data[5].avatar} />`;

  });

