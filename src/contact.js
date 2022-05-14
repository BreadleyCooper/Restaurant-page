function renderContact() {
    const main = document.querySelector(".main")
    const contactContainer = document.createElement("div")
    contactContainer.classList.toggle("contactContainer")
    const contactHead = document.createElement("div")
    contactHead.classList.toggle("contactHead")
    contactHead.textContent = "Get in touch!"
    main.appendChild(contactContainer);
    contactContainer.appendChild(contactHead)
    const contactDetails = document.createElement("div")
    contactDetails.classList.toggle("contactDetails")
    contactContainer.appendChild(contactDetails)
    

}
export default renderContact