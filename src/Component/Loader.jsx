import { HashLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <HashLoader size={100} color="#36d7b7"></HashLoader>
        </div>
    );
};

export default Loader;