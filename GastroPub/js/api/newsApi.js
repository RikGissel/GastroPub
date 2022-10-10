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
        function newsBannerImage() {
            const newsBannerData = document.querySelector("#news-hero-data");

            newsBannerData.innerHTML += 
            `<div class='heroWrapper'>
                <div class='hero-header-wrapper'><h1 class='hero-header'>Nyheder</h1></div>
                <img class='hero-img' src='${data[21].url}'>
             </div>`
        }
        function newsMenuPicture() {
            const newsPicData = document.querySelector(".news-img-box");

            newsPicData.innerHTML += `<img class='news-dessert-img' src='${data[22].url}'>`
        }
        newsMenuPicture()
        newsBannerImage()
    }),

    fetch('https://gastropub.webexam-mcdm.dk/api/texts', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(newsTxtData) {
        function newsMenuData() {
            const newsData = document.querySelector('.news-txt-box')

            newsData.innerHTML += `<h1 class='news-menu-header2'>${newsTxtData[7].description}</h1>
            <p class='news-menu-text'>${newsTxtData[8].description.replaceAll(/(?:\r\n|\r|\n)/g, '<br>')}</p>`
        }
        newsMenuData()
    })
]);