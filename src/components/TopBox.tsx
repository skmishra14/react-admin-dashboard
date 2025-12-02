import { topDealsUser } from '../data';

function TopBox() {
    return (
        <div className="topBox">
            <h1 className="text-3xl font-bold m-2">Top Deals</h1>
            {
                topDealsUser.map(user => (
                    <div className="userDetails flex items-center justify-between mb-10" key={user.id}>
                        <img src={user.img} className="size-7 rounded-2xl" alt="" />
                        <div className="userDetails flex gap-1 flex-col">
                            <span className='text-sm'>{user.username}</span>
                            <span className='text-xs'>{user.email}</span>
                        </div>
                        <div className="amount">
                            <span>${user.amount}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default TopBox;