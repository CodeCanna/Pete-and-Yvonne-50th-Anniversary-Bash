window.onload = function () {
    // Get nav bar items
    let navItems = document.getElementsByClassName("nav-item");

    let navItemsArray = [];

    function handlClick() {
        for (let i in navItemsArray) {
            navItemsArray[i].style.backgroundColor = "";
        }
        event.srcElement.style.backgroundColor = "#FFD300";
    }

    // Separate items
    for (let i in navItems) {
        // Assign each item to navItemsArray
        if(i === "item") {
            break;
        }
        navItemsArray.push(navItems[i]);
    }

    // Add event listeners to items
    for (let i in navItemsArray) {
        navItemsArray[i].addEventListener("click", handlClick);
    }
}