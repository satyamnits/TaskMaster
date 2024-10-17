import { FaTrashAlt } from 'react-icons/fa'
import AddItem from './AddItem'
import SearchItem from './SearchItem'
import { useState } from 'react'

const Main = ({ list, setList }) => {
    const [ search, setSearch ] = useState('')
    const changeCheck = (id) => {
        const newList = list.map((item) =>
            (item.id === id) ? { ...item, check: !item.check } : item
        )
        setList(newList)
        localStorage.setItem('todo', JSON.stringify(newList))
    }
    const deleteItem = (id) => {
        const newList = list.filter((item) =>
        (item.id !== id)
        )
        setList(newList)
        localStorage.setItem('todo', JSON.stringify(newList))
    }
    return (
        <main className="Main">
            <SearchItem
            search={search}
            setSearch={setSearch}
            />
            <AddItem
            list={list}
            setList={setList}
            />
            {(list.length)
                ?list.filter(item => ((item.content.toLowerCase())).includes(search.toLowerCase())).map((item) => (
                    <ul key={item.id}>
                        <li className="list" key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.check}
                                onChange={() => changeCheck(item.id)}
                                />
                            <p style={(item.check)?{textDecoration: 'line-through'}:null}>{item.content}</p>
                            <FaTrashAlt
                                role="button"
                                tabIndex="0"
                                onClick={() => deleteItem(item.id)}
                                />
                        </li>
                    </ul>
                ))
                :<p style={
                    {'marginTop': '2rem',
                    'fontSize': '2rem',
                    'fontWeight':'600',
                    'color': 'white'
                }}> List is empty 🤔 <br/> means no work </p>
            }
        </main>
    )
}

export default Main