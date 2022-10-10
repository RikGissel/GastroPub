Promise.all([
    fetch('https://gastropub.webexam-mcdm.dk/api/images', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(staffImgData) {
        function teamImage() {
            const teamImageData = document.querySelector("#team-hero-image");
            const chefImage = document.querySelector("#head-chef-photo")

            teamImageData.innerHTML +=
                `<div class='heroWrapper'>
                <div class='hero-header-wrapper'>
                    <h1 class='hero-header'>Vores Team</h1>
                </div>
                <img class='hero-img' src='${staffImgData[3].url}'>
            </div>`

            chefImage.innerHTML += `<img class='chef-picture' src='${staffImgData[4].url}'>`
        }

        function employeesImgData() {

            let staffPics = "";
            for (let i = 5; i < 9; i++) {
                staffPics += `<img class='employees-picture' src='${staffImgData[i].url}'>`
            }

            document.getElementById("staff-members-picture")
                .innerHTML = staffPics;

        }
        employeesImgData()
        teamImage()
    }),

    fetch('https://gastropub.webexam-mcdm.dk/api/texts', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(chefTxtData) {
        function masterchefData() {
            const chefData = document.querySelector('#head-chef-info')

            chefData.innerHTML += `<h1 class='chef-header-text'>${chefTxtData[1].description}</h1>
                <p class='chef-description-text'>${chefTxtData[2].description}</p>`
        }

        function employeesTxtData() {

            let staffInfos = "";
            for (let i = 3; i < 7; i++) {
                staffInfos +=
                `<p class='employees-txt'>${chefTxtData[i].description.replaceAll(/(?:\r\n|\r|\n)/g, '<br>')}</p>`
            }

            document.getElementById("staff-members-info").innerHTML = staffInfos;
        }
        employeesTxtData()
        masterchefData()
    })
]);