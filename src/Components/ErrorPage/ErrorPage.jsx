
const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-5">
            <h2 className="text-5xl text-center font-semibold">Oops ☹</h2>
            <p className="text-2xl ">Your targeted page is not found</p>
            <button className="btn btn-secondary">Go Back</button>
        </div>
    );
};

export default ErrorPage;