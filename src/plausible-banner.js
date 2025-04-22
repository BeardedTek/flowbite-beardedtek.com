// Plausible Exclude
window.addEventListener('load', function(){
    var plausibleSwitch = document.getElementById('plausible-switch');
    var plausibleStatus = window.localStorage.getItem('plausible_ignore');
    if (plausibleStatus === null || plausibleStatus === undefined || plausibleStatus === false ){
        plausibleSwitch.checked = true;
    } else {
        plausibleSwitch.checked = false;
    }
})

window.addEventListener('load', function(){
    var hidePlausibleBanner = window.localStorage.getItem('hidePlausibleBanner');
    var bannerEl = document.getElementById('plausible-banner');

    if ( hidePlausibleBanner ){
        bannerEl.classList.add('hidden');
    } else {
        bannerEl.classList.remove('hidden');
    }
})


document.getElementById('plausible-switch').addEventListener('change', function(){
    if (this.checked) {
        window.localStorage.removeItem('plausible_ignore');
    } else {
        window.localStorage.setItem('plausible_ignore', 'true');
    }
})

document.getElementById('plausible-ok').addEventListener('click', function() {
    var bannerEl = document.getElementById('plausible-banner');
    window.localStorage.setItem('hidePlausibleBanner', 'true');
    bannerEl.classList.add('hidden');
})
