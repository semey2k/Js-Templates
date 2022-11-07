const btn = document.querySelector('.favorite');

function initialState(themeName){
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

initialState('dark-theme');

function toggleTheme(){
    if(localStorage.getItem('theme') == 'dark-theme'){
        initialState('light-theme');
    }else{
        initialState('dark-theme');
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault;
    toggleTheme();
})