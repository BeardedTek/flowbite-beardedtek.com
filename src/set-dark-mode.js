colorTheme = window.localStorage.getItem('color-theme');
if (!colorTheme){
    window.localStorage.setItem('color-theme', 'dark');
}