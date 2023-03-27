import { useState } from 'react';
import './styles.css';

type Props = {
    onSearch: Function

}

export default function SearchBar({ onSearch }: Props) {

    const [text, setText] = useState('');

    function handleSubimit(e: any) {
        e.preventDefault();
        onSearch(text);
    }

    function handleTextChange(e : any) {
        setText(e.target.value);
    }

    function handleResetClick() {
        setText('');
        onSearch(text);
    }

    return (
        <form className="search-bar" onSubmit={handleSubimit}>
            <button type="submit" >🔎︎</button>
            <input
                value={text}
                type="text"
                placeholder="Nome do Filme"
                onChange={handleTextChange}
            />
            <button className='btn-reset' onClick={handleResetClick}>🗙</button>
        </form>
    );
}