const container = document.querySelector('#container');

async function getMenu(next) {
    try {
        const response = await fetch('/menu/manifest.json');
        const menu = await response.json();
        // next(menu);
        return menu;
    } catch (error) {
        next(error);
    }
}

function displayMenu(menu) {
    const images = menu.images;

    console.log("Images:", images);


    images.forEach(image => {
        const page = getMenuHtmlPage(image);
        container.appendChild(page);
    });

    console.log("Menu:", menu);
}

function getMenuHtmlPage(image) {
    const page = document.createElement('img');
    page.id = "page" + image.id;
    page.src = image.url;
    page.alt = "Image presentant le menu de o'good food yaounde"
    page.classList.add('menu-page');
    page.loading = 'lazy';

    return page;
}

getMenu().then(displayMenu);