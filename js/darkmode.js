const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');
        
const darkMode = () => {
  body.classList.toggle('darkmode')
}
        
  bdark.addEventListener('click', () => {
            
  setDarkMode = localStorage.getItem('darkmode');
        
  if(setDarkMode !== "on") {
       darkMode();
                
  setDarkMode = localStorage.setItem('darkmode', 'on');
    } else {
       darkMode();
               
  setDarkMode = localStorage.setItem('darkmode', null);
}});
        
let setDarkMode = localStorage.getItem('darkmode');
    if(setDarkMode === 'on') {
       darkMode();
}      