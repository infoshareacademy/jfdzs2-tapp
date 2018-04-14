element = document.getElementById("hey");
element.addEventListener("click",function(e){
    e.preventDefault;
    element.classList.remove("bounce");
    element.offsetWidth = element.offsetWidth;
    element.classList.add("bounce");
},false);


document.body.onkeyup = function(e){
    if(e.keyCode == 32 ) {
        //spacebar or enter clicks focused element
        element = document.getElementById("hey");
        element.classList.remove("bounce");
        element.offsetWidth = element.offsetWidth;
        element.classList.add("bounce");
    }
};

const FRAME_DURATION = 1000 / 1000; // 60fps frame duration
// If available we are using native "performance" API instead of "Date"
// It it's name suggests it is more performant, read more on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Performance
const getTime = typeof performance === 'function' ? performance.now : Date.now;
const MAX_POSITION = 1920;

const box = document.querySelector('.Box');
// Initial position
let position = 1920;
// Initial time
let lastUpdate = getTime();

function animate() {
    const dexterPosition = box.getBoundingClientRect();
    const kittyPos = element.getBoundingClientRect();
    const kittyHeight = element.offsetHeight;
    const kittyWidth = element.offsetWidth;

    if((kittyPos.height + kittyPos.y) > dexterPosition.y) {
      //console.log('dsfsdfsd');
        var kittyX2 = kittyPos.x + kittyPos.width;
      if (dexterPosition.x >= kittyPos.x && dexterPosition.x <= kittyX2) {
        console.log('kolizja x');
      }
    }

    //console.log(kittyPos, kittyPos.height + kittyPos.y, dexterPosition.y);
    const now = getTime();
    // This is the main part
    // We are checking how much time has passed since the last update
    // and translating that to frames
    const delta = (now - lastUpdate) / FRAME_DURATION;

    // Updating scene logic
    // We want to move the box 1px per each 16.66ms (60fps)
    // so we are multipling 1px with the number of frames passed
    position += 1 * delta;

    // Reset position
    if (position > MAX_POSITION) {
        position -= MAX_POSITION;
    }

    // Render updated scene
    box.style.transform = `translateX(${ position }px)`;

    // Update last updated time
    lastUpdate = now;

    // Fake 10fps using "setTimeout"
    setTimeout(animate, 10);
}
animate();