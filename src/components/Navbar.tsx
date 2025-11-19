function Navbar () {
    return(
        <div className="navbar flex items-center justify-between px-4 py-2">
            <div className="logo flex items-center gap-2 text-2xl">
                <img src="./logo.svg" alt="" />
                <span>UserAdmin</span>
            </div>
            <div className="icons flex items-center gap-5">
                <img src="./search.svg" alt="" />
                <img src="./app.svg" alt="" />
                <img src="./expand.svg" alt="" />
                <div className="notification flex items-center gap-2">
                    <img src="./notifications.svg" alt="" />
                    <span className="bg-red-500 text-amber-50  w-[16px] h-[16px] flex items-center justify-center absolute top-0.5 right-32 rounded-full text-xs">1</span>
                </div>
                <div className="user flex items-center gap-2">
                    <img src="./user.svg" alt="" />
                    <span>User</span>
                </div>
                <img src="./setting.svg" alt="" />

            </div>
        </div>
    )
}

export default Navbar;