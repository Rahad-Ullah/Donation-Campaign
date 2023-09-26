import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-5">
            <h2 className="text-6xl text-center font-semibold mb-14 text-red">404</h2>
            <h2 className="text-5xl text-center font-semibold mb-6">Oops ☹</h2>
            <p className="text-xl mb-4">Your targeted page is not found</p>
            <Link to={"/"}><button className="btn btn-secondary normal-case text-lg">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;