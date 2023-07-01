import Cards from '../../assets/desktop/isocard.svg';

function Slogan() {
    return (
        <section className="md:text-48 my-14 text-[36px] font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center">
            <div className=" text-center md:col-span-1 md:col-start-2">
                <p className="">
                    Earn <span className=" text-purple-300">More</span>
                </p>
                <p className="">Pay Less</p>
                <button className="font-bolt md:text-24 mt-7 rounded-[14px] bg-purple-500 px-6 py-[6px] text-[20px] transition-all duration-300 hover:bg-pink-500 md:px-8 md:py-2">
                    Start
                </button>
            </div>
            <div className="mt-[69px]">
                <img src={Cards} alt="Creadit Card" />
            </div>
        </section>
    );
}

export default Slogan;
