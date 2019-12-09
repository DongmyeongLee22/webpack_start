/* Google Map */
function initMap() {

    // Map options
    const options = {

        scrollwheel: false,
        zoom: 16,
        center: {lat: 35.134330, lng: 129.103055}

    };

    // New Map
    const map = new google.maps.Map(document.getElementById('map'), options);

    // Add marker
    const marker = new google.maps.Marker({
        position: {lat: 35.134330, lng: 129.103055},
        map: map,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    //Add InfoWindow
    const infoWindow = new google.maps.InfoWindow({
        // content: '<p class="lead text-primary">Hello!!!!!!!</p>'
        content: `
        <div>
            <div>
                <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda consequatur dignissimos                          distinctio ducimus earum eligendi fugit illum ipsa, ipsum neque nisi omnis quaerat, quasi quis repudiandae                  saepe similique soluta?
                </p>
            </div>
            <br>
            <div class="row mb-4 px-4">
            <div class="col-4">
            <img src="/assets/images/avatar-1.png" alt="" class="img-fluid shadow-xl rounded-circle" width="150px">
                </div>
                <div class="col-8">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloribus, eveniet id in maiores maxime                    porro quae rerum tempora! Deleniti dolorum exercitationem harum libero natus perferendis repellat repudiandae                   similique ut?
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque beatae culpa cumque deleniti                         distinctio maxime, nisi quam quia, quis sint tempora? Consectetur culpa ex ipsa molestiae nostrum, nulla                    obcaecati!
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis debitis illum laborum nemo omnis                     quo ratione repellat, reprehenderit saepe sequi soluta veritatis? Corporis laborum maiores odit sapiente                vel voluptas?
                </p>
                </div>
                </div>
        </div>
        `
    });

    marker.addListener('click', () => infoWindow.open(map, marker))
}


window.initMap = initMap;

export {initMap};