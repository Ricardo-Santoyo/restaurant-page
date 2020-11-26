function contact() {
  let content = document.querySelector("#content");
  let contactContainer = document.createElement("div");
  contactContainer.id = "contact-container";
  let phoneHeader = document.createElement("h1");
  phoneHeader.textContent = "Phone Number";
  let phoneNumber = document.createElement("p");
  phoneNumber.textContent = "77378287268";
  contactContainer.appendChild(phoneHeader);
  contactContainer.appendChild(phoneNumber);
  let addressHeader = document.createElement("h1");
  addressHeader.textContent = "Address";
  let address = document.createElement("p");
  address.textContent = "2659 Cost Avenue, MILDRED PA 18632";
  contactContainer.appendChild(addressHeader);
  contactContainer.appendChild(address);
  content.appendChild(contactContainer);
};

export default contact;