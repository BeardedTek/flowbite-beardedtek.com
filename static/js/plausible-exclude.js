// Plausible Exclude
const plausibleBanner = document.getElementById('plausible-banner');
var hidePlausibleBanner = window.localStorage.getItem('hidePlausibleBanner');

function disablePlausible(e) {
    window.localStorage.setItem('plausible_ignore', 'true');
    window.localStorage.setItem('hidePlausibleBanner','true');
    plausibleBanner.classList.add('hidden');
}

function enablePlausible(e) {
    window.localStorage.removeItem('plausible_ignore');
    window.localStorage.setItem('hidePlausibleBanner','true');
    plausibleBanner.classList.add('hidden');
}


if ( hidePlausibleBanner){
    plausibleBanner.classList.add('hidden');
} else {
    plausibleBanner.classList.remove('hidden');
}