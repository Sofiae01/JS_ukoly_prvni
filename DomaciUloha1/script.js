const jmeno = prompt("Zadej své křestní jméno").trim().slice(0,3)
const prijmeni = prompt("Zadej své příjmení").slice(0,5)
const domena = "@fit.cvut.cz"

const email = `
<p>Email: ${prijmeni}${jmeno}${domena}
`

document.body.innerHTML += email