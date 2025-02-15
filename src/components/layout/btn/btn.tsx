

const RegisBtn = () => {
    return(
        <button className="bg-green-500 p-3 m-1 rounded-lg text-white hover:bg-green-700 transition delay-100 duration-300">
            <p>Sign Up</p>
        </button>
    );
};

const GetstartedBtn = () => {
    return(
        <button className="bg-green-500 p-3 rounded-md text-white text-sm hover:bg-green-700 transition delay-100 duration-300">
            <p>Get started</p>      
        </button>
    );
};

const LearnMore = () => {
    return(
        <button className="bg-transparent border border-green-500 p-3 ml-8 mt-5 rounded-md text-white text-sm hover:bg-green-500 transition delay-100 duration-300">
            <p>Learn More</p>
        </button>
    );
}

const GetstartedBtnWhite = () => {
    return(
        <button className="bg-white p-3 rounded-md text-black text-sm hover:bg-[#1c1c1c] hover:text-white transition delay-100 duration-300">
            <p>Get started</p>      
        </button>
    );
};

export default RegisBtn;

export { GetstartedBtn };
export {LearnMore};
export {GetstartedBtnWhite};