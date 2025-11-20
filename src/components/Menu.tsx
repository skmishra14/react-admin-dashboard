import { Link } from 'react-router';
import { menu } from '../data.ts';

function Menu() {
    return (
        <div className="menu">
            {
                menu.map((item) => (
                    <div className="title flex flex-col gap-1 p-2" key={item.id}>
                        <span className='text-xs text-gray-300'>{item.title}</span>
                        {
                            item.listItems.map((itemList) => (
                                <Link 
                                to={itemList.url} 
                                key={itemList.id} 
                                className='p-2 flex items-center 
                                gap-2 hover:bg-gray-600 rounded-md'>
                                    <img src={itemList.icon} alt="" />
                                    <span>{itemList.title}</span>
                                </Link>
                            ))}
                    </div>
                ))};
        </div>
    );
}
export default Menu;