/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    
    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
}

function showCookies() {
    const p = document.createElement('p');
    p.innerHTML = `Cookies: ${document.cookie}`;
    document.body.appendChild(p);
}

// Make functions globally accessible
window.setCookies = setCookies;
window.showCookies = showCookies;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxVQUFVO0FBQzdDLCtCQUErQixNQUFNO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29va2llcy1sb2NhbC1zdG9yYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNldENvb2tpZXMoKSB7XG4gICAgY29uc3QgZmlyc3RuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpcnN0bmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykudmFsdWU7XG4gICAgXG4gICAgZG9jdW1lbnQuY29va2llID0gYGZpcnN0bmFtZT0ke2ZpcnN0bmFtZX1gO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGBlbWFpbD0ke2VtYWlsfWA7XG59XG5cbmZ1bmN0aW9uIHNob3dDb29raWVzKCkge1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5pbm5lckhUTUwgPSBgQ29va2llczogJHtkb2N1bWVudC5jb29raWV9YDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHApO1xufVxuXG4vLyBNYWtlIGZ1bmN0aW9ucyBnbG9iYWxseSBhY2Nlc3NpYmxlXG53aW5kb3cuc2V0Q29va2llcyA9IHNldENvb2tpZXM7XG53aW5kb3cuc2hvd0Nvb2tpZXMgPSBzaG93Q29va2llczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=