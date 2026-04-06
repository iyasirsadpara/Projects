import React, { useState } from 'react'
import '../Style/Contact.css'

const Contact = () => {

 const [contacts, setContacts] = useState([
  { name: "Yasir Hussain", phone: "+92 300 1234567", img: "", add: "" },
  { name: "Ali Raza", phone: "+92 301 2345678", img: "", add: "" },
  { name: "Ahmed Khan", phone: "+92 302 3456789", img: "", add: "" },
  { name: "Usman Tariq", phone: "+92 303 4567890", img: "", add: "" },
  { name: "Bilal Ahmed", phone: "+92 304 5678901", img: "", add: "" },
  { name: "Hassan Ali", phone: "+92 305 6789012", img: "", add: "" },
  { name: "Zain Malik", phone: "+92 306 7890123", img: "", add: "" },
  { name: "Saad Sheikh", phone: "+92 307 8901234", img: "", add: "" },
  { name: "Umar Farooq", phone: "+92 308 9012345", img: "", add: "" },
  { name: "Hamza Javed", phone: "+92 309 0123456", img: "", add: "" },
  { name: "Fahad Iqbal", phone: "+92 310 1234567", img: "", add: "" },
  { name: "Imran Abbas", phone: "+92 311 2345678", img: "", add: "" },
  { name: "Shahzaib Khan", phone: "+92 312 3456789", img: "", add: "" },
  { name: "Danish Raza", phone: "+92 313 4567890", img: "", add: "" },
  { name: "Nabeel Ahmad", phone: "+92 314 5678901", img: "", add: "" },
])

  const [showForm, setShowForm] = useState(false)

  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    img: "",
    add: ""
  })

  const [searchQuery, setSearchQuery] = useState('')

  const getInitial = (name) => name.charAt(0).toUpperCase()

  const colors = ["#541993", "#00BCD4", "#9C27B0", "#009688", "#FF9800", "#E91E63"]

  // Handle input change
  const handleChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value
    })
  }

  // Add contact
  const addContact = () => {
    if (!newContact.name || !newContact.phone) return

    setContacts([...contacts, newContact])

    setNewContact({ name: "", phone: "", img: "", add: "" })
    setShowForm(false)
  }

  // Filter contacts based on search query
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className='parent'>

      {/* Search re*/}
      <div className="searchbar">
        <input type="text" placeholder='Search Contact' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>

      {/* Button */}
      <div className="create-contact">
        <button onClick={() => setShowForm(true)}>Create Contact</button>
      </div>

      {/* FORM POPUP */}
      {showForm && (
        <div className="form-popup">
          <div className="form">
            <h3>Add Contact</h3>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newContact.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={newContact.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="img"
              placeholder="Image URL (optional)"
              value={newContact.img}
              onChange={handleChange}
              required={false}
            />
            <input
              type="text"
              name="add"
              placeholder="Add note (optional)"
              value={newContact.add}
              onChange={handleChange}
            />

            <button onClick={addContact}>Save</button>
            <button onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Contacts */}
      <div className="contacts">
        {filteredContacts.map((contact, index) => (
          <div className="contact" key={index}>

            <div
              className="avatar"
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              {contact.img ? (
                <img src={contact.img} alt="" />
              ) : (
                getInitial(contact.name)
              )}
            </div>

            <div className="contact-info">
              <h4>{contact.name}</h4>
              <p>{contact.phone}</p>
            </div>

            <div className='call-actions'>
              <h1 onClick={() => alert("Calling " + contact.name)}>✆</h1>

              <h1 onClick={() => alert("Video calling " + contact.name)}>🎥</h1>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Contact