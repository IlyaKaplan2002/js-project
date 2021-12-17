function preloaderSpinner () {
    
    setTimeout(function () {
        const preloaderSpinner = document.getElementById('page-loader');
        if (!preloaderSpinner.classList.contains('done')) {
        preloaderSpinner.classList.add('done');
        }
    }, 1000);
}
document.body.onload = preloaderSpinner;


const loader = (element) => {
    element.innerHTML = `<div id="page-loader" class="preloader">
    <div class="loader"></div>
    </div>`;

    
    // e.setTimeout(function () {
    //     const preloader = document.getElementById('page-loader');
    //     if (!preloader.classList.contains('done')) {
    //     preloader.classList.add('done');
    //     }
    // }, 1000);
};

const removeLoader = () => { 
    const preloader = document.getElementById('page-loader');
    preloader.remove();

}

export {loader, removeLoader}

//First variant of code reloader
// document.body.onload = function () {
    
//     setTimeout(function () {
//         const preloader = document.getElementById('page-loader');
//         if (!preloader.classList.contains('done')) {
//             preloader.classList.add('done');
//         }
//     }, 1000);
// }
