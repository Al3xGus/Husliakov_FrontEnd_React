// src/FormComponent.js
import React, { useState, useEffect } from 'react';

const FormComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone) => {
        const re = /^\d{12}$/;
        return re.test(phone);
    };

    const validateForm = () => {
        const errors = {};
        if (!name) errors.name = 'Ім\'я є обов\'язковим';
        if (!email) {
            errors.email = 'Електронна пошта є обов\'язковою';
        } else if (!validateEmail(email)) {
            errors.email = 'Неправильний формат електронної пошти';
        }
        if (!phone) {
            errors.phone = 'Телефон є обов\'язковим';
        } else if (!validatePhone(phone)) {
            errors.phone = 'Телефон повинен складатися з 12 цифр';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setFormSubmitted(true);
            alert('Форма успішно відправлена');
        } else {
            setFormSubmitted(false);
        }
    };

    useEffect(() => {
        if (formSubmitted) {
            setName('');
            setEmail('');
            setPhone('');
            setFormSubmitted(false);
        }
    }, [formSubmitted]);

    return (
        <div>
            <h1>Форма з валідацією</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Ім'я:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                </div>
                <div>
                    <label>
                        Електронна пошта:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>
                <div>
                    <label>
                        Телефон:
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>
                    {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
                </div>
                <button type="submit">Відправити</button>
            </form>
        </div>
    );
};

export default FormComponent;
