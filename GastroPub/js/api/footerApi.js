// FOOTER API START
fetch("https://gastropub.webexam-mcdm.dk/api/texts", {
  headers: {
    Accept: "application/json",
  },
})
  .then(function (res) {
    return res.json();
  })
  .then(function (resData) {
    function footerData() {
      const apiData = document.querySelector("#contact-data");

      apiData.innerHTML += 
      `<div class='contact-wrapper'>
            <i class='fa-solid fa-location-dot'></i>
            <div class='adr'>${resData[9].description}</div>
        </div>

        <div class='contact-wrapper'>
                <i class='fa-solid fa-phone'></i>
                <div class='tlf-footer'>${resData[10].description}</div>
        </div>`;
    }
    footerData();
  });
// FOOTER API END
