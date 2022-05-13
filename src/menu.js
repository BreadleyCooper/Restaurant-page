// menu page inside a funtion. Export said function, then import function and add it to the event listenere for the menu page button
function renderMenu(){
    const main = document.querySelector(".main")
    // create the grid container for the menu
    const menuContainer = document.createElement("div");
    menuContainer.classList.toggle("menuContainer");
    main.appendChild(menuContainer)
    // menu title
    const menuTitle = document.createElement("h1")
    menuTitle.classList.toggle("menuTitle")
    menuContainer.appendChild(menuTitle)
    menuTitle.textContent = "MENU"
    // create starters section
    const startersContainer = document.createElement("div")
    startersContainer.classList.toggle("startersContainer")
    const startersTitle = document.createElement("h2")
    startersTitle.classList.toggle("startersTitle")
    const starters = document.createElement("div")
    starters.classList.toggle("starters")
    menuContainer.appendChild(startersContainer)
    startersContainer.append(startersTitle, starters)
    startersTitle.textContent = "Starters"

    // array of starters 
    let startersArray = ["Placeholder","£5.00", "Placeholder", "£5.00","Placeholder", "£5.00","Placeholder","£5.00", "Placeholder","£5.00"]
    for (let i = 0;i<startersArray.length;i++){
        const startersItem = document.createElement("li");
        startersTitle.appendChild(startersItem);
        startersItem.classList.toggle("startersItem")
        startersItem.textContent = startersArray[i]
    }
    // create sides section
    const sidesContainer = document.createElement("div")
    sidesContainer.classList.toggle("sidesContainer")
    const sidesTitle = document.createElement("h2")
    sidesTitle.classList.toggle("sidesTitle")
    sidesTitle.textContent = "Sides";
    const sides = document.createElement("div")
    sides.classList.toggle("sides")
    menuContainer.appendChild(sidesContainer)
    sidesContainer.append(sidesTitle, sides)
    
    //array of sides
    let sidesArray = ["Placeholder","£5.00", "Placeholder", "£5.00","Placeholder", "£5.00","Placeholder","£5.00", "Placeholder","£5.00"] 
    for (let i = 0; i<sidesArray.length;i++){
        const sidesItem = document.createElement("li")
        sidesTitle.appendChild(sidesItem);
        sidesItem.classList.toggle("sidesItem")
        sidesItem.textContent = sidesArray[i]
    }
    // create mains section
    const mainsContainer = document.createElement("div")
    mainsContainer.classList.toggle("mainsContainer")
    const mainsTitle = document.createElement("h2")
    mainsTitle.classList.toggle("mainsTitle")
    mainsTitle.textContent = "Mains"
    const mains = document.createElement("div")
    mains.classList.toggle("mains")
    menuContainer.appendChild(mainsContainer)
    mainsContainer.append(mainsTitle, mains)

    // array of mains
    let mainsArray = ["Placeholder","£5.00", "Placeholder", "£5.00","Placeholder", "£5.00","Placeholder","£5.00", "Placeholder","£5.00"]
    for (let i =0; i<mainsArray.length;i++){
        const mainsItem = document.createElement("li")
        mainsTitle.appendChild(mainsItem)
        mainsItem.classList.toggle("mainsItem")
        mainsItem.textContent = mainsArray[i]
    }
    
    //create drinks section
    const drinksContainer = document.createElement("div")
    drinksContainer.classList.toggle("drinksContainer")
    const drinksTitle = document.createElement("h2")
    drinksTitle.classList.toggle("drinksTitle")
    drinksTitle.textContent = "Drinks"
    const drinks = document.createElement("div")
    drinks.classList.toggle("drinks")
    menuContainer.appendChild(drinksContainer)
    drinksContainer.append(drinksTitle, drinks)
    
    // array of drinks
    let drinksArray = ["Placeholder","£5.00", "Placeholder", "£5.00","Placeholder", "£5.00","Placeholder","£5.00", "Placeholder","£5.00"]
    for(let i=0;i<drinksArray.length;i++){
        const drinksItem = document.createElement("li")
        drinksTitle.appendChild(drinksItem)
        drinksItem.classList.toggle("drinksItem")
        drinksItem.textContent = drinksArray[i]
    }
}

export default renderMenu;