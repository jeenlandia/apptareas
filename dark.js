const preferedColor = window.matchMedia('(prefered-color: dark)').matches ? 'dark' : 'light';

const slider = document.getElementById('slider');

const setThemeColor = (theme) =>{
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', () =>{
    let switchTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setThemeColor(switchTheme);
});

setThemeColor(localStorage.getItem('theme') || preferedColor);