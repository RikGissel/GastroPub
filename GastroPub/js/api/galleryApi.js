    Promise.all([
        fetch('https://gastropub.webexam-mcdm.dk/api/images', {
            headers: {
                Accept: 'application/json'
            }
        })
        .then(function (res) {
            return res.json();
        })
        .then(function (galleryPictures) {
            function galleryBanner() {
                const imageData = document.querySelector("#gallery-hero-data");
    
                imageData.innerHTML += 
                `<div class='heroWrapper'>
                    <div class='hero-header-wrapper'><h1 class='hero-header'>Galleri</h1></div>
                    <img class='hero-img' src='${galleryPictures[13].url}'>
                 </div>`
            }

            function slideshowGallery() {
                const slideshowPics = document.querySelector(".slideshow-wrapper");
    
                slideshowPics.innerHTML += 
                
                `<h1>Vores selskabslokaler</h1>
                <div class='gallery-section'>
                    <div class='carousel-wrapper'>
                      <input id='slide1' type='radio' name='controls' checked='checked' />
                      <input id='slide2' type='radio' name='controls' />
                      <input id='slide3' type='radio' name='controls' />
                      <input id='slide4' type='radio' name='controls' />
                      <input id='slide5' type='radio' name='controls' />
                      <input id='slide6' type='radio' name='controls' />
                      <input id='slide7' type='radio' name='controls' />
                  
                      <label for='slide1' class='nav-dot'></label>
                      <label for='slide2' class='nav-dot'></label>
                      <label for='slide3' class='nav-dot'></label>
                      <label for='slide4' class='nav-dot'></label>
                      <label for='slide5' class='nav-dot'></label>
                      <label for='slide6' class='nav-dot'></label>
                      <label for='slide7' class='nav-dot'></label>
                  
                      <label for='slide1' class='left-arrow'></label>
                      <label for='slide2' class='left-arrow'></label>
                      <label for='slide3' class='left-arrow'></label>
                      <label for='slide4' class='left-arrow'></label>
                      <label for='slide5' class='left-arrow'></label>
                      <label for='slide6' class='left-arrow'></label>
                      <label for='slide7' class='left-arrow'></label>
                  
                      <label for='slide1' class='right-arrow'></label>
                      <label for='slide2' class='right-arrow'></label>
                      <label for='slide3' class='right-arrow'></label>
                      <label for='slide4' class='right-arrow'></label>
                      <label for='slide5' class='right-arrow'></label>
                      <label for='slide6' class='right-arrow'></label>
                      <label for='slide7' class='right-arrow'></label>
                  
                      <div class='carousel'>
                        <ul>
                          <li>
                            <img src='${galleryPictures[14].url}'>
                          </li>
                          <li>
                            <img src='${galleryPictures[15].url}'>
                          </li>
                          <li>
                            <img src='${galleryPictures[16].url}'>
                          </li>
                          <li>
                            <img src='${galleryPictures[17].url}'>
                          </li>
                          <li>
                            <img src='${galleryPictures[18].url}'>
                          </li>
                          <li>
                            <img src='${galleryPictures[19].url}'>
                          </li>
                          <li>
                            <img src='${galleryPictures[20].url}'>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>`
            }
            slideshowGallery()
            galleryBanner()
        })
    ]);