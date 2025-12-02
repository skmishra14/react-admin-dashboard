import TopBox from "../components/TopBox";

function Home () {
    return (
        <div className="home grid gap-5 grid-cols-4 auto-rows-[minmax(180px,_auto)]">
            <div className="box1 p-5 border-2 rounded-xl border-gray-700 col-span-1 row-span-3">
                <TopBox />
            </div>
            <div className="box2 p-5 border-2 rounded-xl border-gray-700">Box2</div>
            <div className="box3 p-5 border-2 rounded-xl border-gray-700">Box3</div>
            <div className="box4 p-5 border-2 rounded-xl border-gray-700 col-span-1 row-span-3">Box4</div>
            <div className="box5 p-5 border-2 rounded-xl border-gray-700">Box5</div>
            <div className="box6 p-5 border-2 rounded-xl border-gray-700">Box6</div>
            <div className="box7 p-5 border-2 rounded-xl border-gray-700 col-span-2 row-span-2">Box7</div>
            <div className="box8 p-5 border-2 rounded-xl border-gray-700">Box8</div>
            <div className="box9 p-5 border-2 rounded-xl border-gray-700">Box9</div>
        </div>
    );
}

export default Home;