import React, { useState } from 'react';

const TextArrayComponent = ({ items, setItems }) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleAddItem = () => {
        if (newTitle.trim() !== '' && newDescription.trim() !== '') {
            const newItem = {
                title: newTitle,
                description: newDescription,
            };

            const updatedItems = [...items, newItem];
            setItems(updatedItems);
            setNewTitle('');
            setNewDescription('');
        }
    };
    const handleRemoveItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <div className='card'>
            <div className='card-body'>
                <label className="form-label" htmlFor="bgimages">Información de la excursión</label>
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Título"
                    className="form-control"
                />
                <br />

                <textarea
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    placeholder="Descripción"
                    className="form-control"
                />
                <br />
                <button type='button' onClick={handleAddItem} className="btn btn-secondary">Agregar</button>
                <ul className='list-group mt-4'>
                    {items.map((item, index) => (
                        <li key={index} className='list-group-item '>
                            <div className='row'>
                                <div className='col'>
                                    <div>
                                        <strong >{item.title}: </strong> {item.description}
                                    </div>
                                </div>
                                <button className="btn btn-danger col-4" onClick={() => handleRemoveItem(index)}>Eliminar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TextArrayComponent;
