function renderContact() {
    // container
    const main = document.querySelector(".main")
    const contactContainer = document.createElement("div")
    contactContainer.classList.toggle("contactContainer")
    main.appendChild(contactContainer);
    // contact title
    const contactHead = document.createElement("div")
    contactHead.classList.toggle("contactHead")
    contactHead.textContent = "Get in touch!"
    contactContainer.appendChild(contactHead)
    // container for contact details
    const contactDetails = document.createElement("div")
    contactDetails.classList.toggle("contactDetails")
    contactContainer.appendChild(contactDetails)
    // container for address
    const contactAddress = document.createElement("div")
    contactAddress.classList.toggle("contactAddress")
    contactAddress.textContent = "Conservatory Village \r\n Unit P \r\n Little Paxton \r\n PE19 6EN"
    contactDetails.appendChild(contactAddress)
    // container for phone number and socials
    const contactPhone = document.createElement("div")
    contactPhone.classList.toggle("contactPhone")
    contactPhone.textContent = "07960982365"
    contactContainer.appendChild(contactPhone)
    // social links
    const fb = document.querySelector(".fb")
    const insta = document.querySelector(".insta")
    const contactFB = fb.cloneNode("true")
    const contactInsta = insta.cloneNode("true")
    contactFB.classList.toggle("contactFB")
    contactInsta.classList.toggle("contactInsta")
    contactPhone.append(contactFB, contactInsta)

}
export default renderContact