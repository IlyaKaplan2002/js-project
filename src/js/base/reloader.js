document.body.onload = loader;

    function loader () {
    
        setTimeout(function () {
            const preloader = document.getElementById('page-loader');
            if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
            }
        }, 1000);
    }


//First variant of code reloader
// document.body.onload = function () {
    
//     setTimeout(function () {
//         const preloader = document.getElementById('page-loader');
//         if (!preloader.classList.contains('done')) {
//             preloader.classList.add('done');
//         }
//     }, 1000);
// }
