import React, { useState, useEffect } from 'react';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newContact, setNewContact] = useState({ name: '', surname: '', phone: '' });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setContacts(data));
    }, []);

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewContact(prevState => ({ ...prevState, [name]: value }));
    };

    const saveContact = () => {
        setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
        setNewContact({ name: '', surname: '', phone: '' });
        setShowForm(false);
    };

    return (
        <div>
            <h1>Contacts</h1>
            <table>
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Телефон</th>
                    <th>Видалити</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map(contact => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td><button onClick={() => deleteContact(contact.id)}>Видалити</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <button onClick={() => setShowForm(true)}>Додати контакт</button>
            </div>
            {showForm && (
                <div>
                    <h2>Додати новий контакт</h2>
                    <form>
                        <input type="text" name="name" value={newContact.name} onChange={handleInputChange} placeholder="Ім'я" /><br />
                        <input type="text" name="surname" value={newContact.surname} onChange={handleInputChange} placeholder="Прізвище" /><br />
                        <input type="text" name="phone" value={newContact.phone} onChange={handleInputChange} placeholder="Телефон" /><br />
                        <button type="button" onClick={saveContact}>Зберегти</button>
                        <button type="button" onClick={() => setShowForm(false)}>Скасувати</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Contacts;
