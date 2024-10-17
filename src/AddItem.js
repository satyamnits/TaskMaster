import { useState } from 'react';
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ list, setList }) => {
    const [ newItem, setNewItem ] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newItem) return;
        addItem(newItem);
        setNewItem('')
    }
    const addItem = (newItem) => {
        const id = (list.length) ? (list[list.length - 1].id + 1) : 1;
        const New = { id: id, check: false, content: newItem}
        const newList = [...list, New]
        setList(newList)
        localStorage.setItem('todo', JSON.stringify(newList))
        document.getElementById('addItem').value = ""
    }
    return (
        <form className="add-item" onSubmit={handleSubmit}>
            <input
                id="addItem"
                type="text"
                placeholder="Add Item"
                autoComplete="false"
                required
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                id="button"
                type="submit"
                aria-label="add to list"
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem