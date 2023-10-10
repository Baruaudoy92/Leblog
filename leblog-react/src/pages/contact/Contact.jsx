import "./contact.css";

export default function Contact() {
  return (
    <>
    <div className="contact">
    <div className="headerTitles">
           <span className="headerTitleSm">CONTACT</span>
           <span className="headerTitleLg">Blog</span>
           </div>
           <div className="contactPage">
           <form className="contactForm">
            <label>Nom</label>
            <input type="text" className="contactInput" placeholder="Enter your Frist name..." />
            <label>Prénom</label>
            <input type="text" className="contactInput" placeholder="Enter your Last name..." />
            <label>Numéro</label>
            <input type="tel" className="contactInput" placeholder="Enter your Number..." />
            <label>Commetaire</label>
            <input type="text" className="contactInput" placeholder="Write something..." />
            <label for="country">Pays</label>
            <select id="country" name="country">
            <option value="france">France</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option> 
            </select>
            <button className="submitButton">Submit</button>
        </form>
           </div>
    </div>
    </>
  )
}
