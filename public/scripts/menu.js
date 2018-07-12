if (typeof cssmenu_no_js === 'undefined') {
    var open_main_item = null;

    function handleMenuClick(container, e, isHamburger){
        container.classList.toggle('open');

        // Only one dropdown can be open at a time
        if (open_main_item !== container && open_main_item !== null) {
            open_main_item.classList.remove("open");
        }

        // On mobiles devices the hamburger toggles the menu
        if (!isHamburger) {
            open_main_item = container.classList.contains('open') ? container: null;
        }
        e.stopPropagation();
        e.preventDefault();
    }

    // menu button for mobile devices
    var dom_hamburger = document.body.querySelector(".hamburger.expand-toggle");
    dom_hamburger.addEventListener('click', function(e){
        handleMenuClick(dom_hamburger.parentNode, e, true);
    });

    // search container narrow screens
    var dom_search = document.body.querySelector(".search-container > .expand-toggle");
    dom_search.addEventListener('click', function(e){
        handleMenuClick(dom_search.parentNode, e, false);
        document.body.querySelector("#search-query > input").focus();
    });

    var expandToggles = document.body.querySelectorAll("#cssmenu .expand-toggle");
    // HTMLCollections don't expose a forEach
    [].forEach.call(expandToggles, function(expandToggle){
        expandToggle.addEventListener('click', function(e) {
            handleMenuClick(expandToggle.parentNode, e, false);
        });
    });

    // close menu when clicking outside of the main bar
    document.getElementById('top').addEventListener('click', function(e) {
        e.stopPropagation();
    });
    window.addEventListener("click", function(e) {
        if (open_main_item !== null) {
            open_main_item.classList.remove("open");
        }
        open_main_item = null;
    });
}
