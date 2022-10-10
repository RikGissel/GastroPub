/* FETCH API DATA FOR MENU*/
Promise.all([
	fetch('https://gastropub.webexam-mcdm.dk/api/images', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(responseData) {
        function menuHeroImage() {
            const menuHeroImgData = document.querySelector("#menu-hero");
            const menuImage = document.querySelector("#menuBXS1");

            menuHeroImgData.innerHTML += 
            `<div class='heroWrapper'>
                <div class='hero-header-wrapper'>
                    <h1 class='hero-header'>Menu</h1>
                </div>
                <img class='hero-img hero-menu-img' src='${responseData[9].url}'>
            </div>`

            menuImage.innerHTML += 
                `<h1 class='dish-headers'>Supper</h1>
                <img class='menu-plate' src='${responseData[10].url}'>
                <h1 class='dish-headers'>Salater</h1>
                <img class='menu-plate' src='${responseData[11].url}'>
                <h1 class='dish-headers'>Hovedretter</h1>
                <img class='menu-plate' src='${responseData[12].url}'>`
        }
        menuHeroImage()
    }),

	fetch('https://gastropub.webexam-mcdm.dk/api/menus', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(menuTxtData) {
        function menuHeroTxt() {

            let foodNames = "";
            for (let i = 0; i < 12; i++) {
                foodNames += 
                `<div class='inner-menu-content'>
                    <div class='menu-texts-wrapper'>
                        <h2 class='menu-titles'>${menuTxtData[i].name}</h2>
                       
                            <p class='ingredientTags'> ${menuTxtData[i].ingredients}</p>
                    </div>
                    <div class='menu-prices-wrapper'>
                    <p class='priceTags'>${menuTxtData[i].price}</p>
                    
                    </div>
                </div>`;
            }

            document.getElementById("menu-content-wrapper").innerHTML = foodNames;

            /* ----- JS FOR CSS CODE TO ADD HR BEFORE INGREDIENTS ELEMENT ----- */
            $('ingredientTags').before('<hr/>')
            /* ----- JS FOR CSS CODE TO ADD HR BEFORE INGREDIENTS ELEMENT ----- */
        }
        menuHeroTxt()
    })
]);