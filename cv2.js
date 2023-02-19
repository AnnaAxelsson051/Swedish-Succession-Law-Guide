let url = "cv.json";
const myList = document.querySelector(".myList");
const loadingStatus = document.querySelector(".status");

const translation = {
  Employment: "Mina anställningar",
  Education: "Mina utbildningar",
};

function renderToDOM(a, b = "") {
  //render a to dom and b if it exists
  console.log("a: ", a);
  console.log("b: ", b);
  const myRenderedCvItem = document.createElement("div");
  myRenderedCvItem.innerHTML = `<strong>${a}</strong><p>${b}</p>`;
  myList.appendChild(myRenderedCvItem);
}

async function getCVData() {
  let response = await fetch(url);
  //fetcha
  if (response.ok) {
    //om det gick bra plocka ut jsonbodyn ur svaret
    let cvData = await response.json();
    //svaret hamnar i cv data som innehåller 3 keys
    myList.innerText = "";

    console.log("Education");
    const cvDataKeys = Object.keys(cvData);
    renderToDOM(cvDataKeys[0]);
    cvData.Education.forEach((eduText) => {
      //console.log(eduText);
      renderToDOM(eduText.heading, eduText.text);
    });

    console.log("Employment");
    renderToDOM(cvDataKeys[1]);
    cvData.Employment.forEach((emp) => {
      renderToDOM(emp.heading, emp.text);
      //console.log(emp.heading);
      //console.log(emp.text);
    });

  }
}
getCVData();
