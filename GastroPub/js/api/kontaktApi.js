// ABOUT US IMAGE AND TEXT START
// Fetch image to about us hero start
fetch('https://gastropub.webexam-mcdm.dk/api/images', {
    headers: {
        Accept: 'application/json'
    }
})
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        function contactImage() {
            const imageData = document.querySelector("#hero-data");

            imageData.innerHTML += 
            `<div class='heroWrapper'>
                <div class='hero-header-wrapper'><h1 class='hero-header'>Kontakt</h1></div>
                <img class='hero-img' src='${data[1].url}'>
             </div>`
        }
        contactImage()
    });
// Fetch image to about us hero end

// Post contact form start
const subBtn = document.querySelector('.contact-btn');
subBtn.addEventListener('click', () => {
    
    const name = document.querySelector('.contact-field-1').value
    const phone = document.querySelector('.contact-field-2').value
    const message = document.querySelector('.contact-field-3').value
        
fetch('https://gastropub.webexam-mcdm.dk/api/contacts', {
    method: "post",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
        name: name,
        phone: phone, 
        message: message
    }),
    
})
    .then(function (res) {
        return res.json();
    })
    .then(function (contactData) {
        console.log(contactData);

        const msgValidation = document.querySelector('.msg')
        msgValidation.innerHTML += contactData.message;
    });
});
// Post contact form end
// ABOUT US IMAGE AND TEXT END