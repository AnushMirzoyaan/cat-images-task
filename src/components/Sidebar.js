import cat from '../image/cat.png'
import './Sidebar.css';

function AddMoreCats() {

}

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <img src={cat} />
            <button onClick={AddMoreCats}>More Cats</button>
        </div>
    )
}

