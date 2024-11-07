export default async function Programming () {
    await new Promise((resolve) => (
        setTimeout(resolve, 8000)
    ))
    return (
        <div className= "bg-gray-900 bg-cover px-2 h-screen pt-6 font-semibold text-white text-lg justify-center">
            <h1>We are currently loading for programming jobs. However, there are no available job openings at the moment. Please check back later for updates.</h1>
        </div>
    );
}