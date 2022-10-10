Promise.all([
	fetch('https://gastropub.webexam-mcdm.dk/api/images', {
        headers: {
            Accept: 'application/json'
        }
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            function informationsImage() {
                const imageData = document.querySelector("#informations-hero-data");
    
                imageData.innerHTML += 
                `<div class='heroWrapper'>
                    <div class='hero-header-wrapper'><h1 class='hero-header'>Om GastroPub</h1></div>
                    <img class='hero-img' src='${data[0].url}'>
                 </div>`
            }

            function informationsImages() {
                const informationsimagesData = document.querySelector("#informations-section");
    
                informationsimagesData.innerHTML += 
                `<section id='informations-images-wrapper'>
                    <img class='about-us-apiImage' src='${data[1].url}'>
                    <img class='about-us-apiImage' src='${data[2].url}'>
                </section>`
            }
            informationsImages()
            informationsImage()
    }),
    
	fetch('https://gastropub.webexam-mcdm.dk/api/texts', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then(function (res) {
        return res.json();
    })
    .then(function (infosData) {
        function informationsData() {
            const infoapiData = document.querySelector('#informations-section')
            
            infoapiData.innerHTML += 
            `<section class='informations-texts-box'>
                <p class='info-api-texts'>${infosData[0].description.replaceAll(/(?:\r\n|\r|\n)/g, '<br>')}</p>
                <q class='about-quote'>At skabe et sted for dig og dine venner at bruge <br> kvalitetstid sammen er et primært formål.</q>
                <h5 class='author-byline'>Bob Vestermark - Ejer</h5>
            </section>`
        }
        informationsData()
    })
]);