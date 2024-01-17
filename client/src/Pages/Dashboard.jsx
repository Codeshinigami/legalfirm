
export default function Dashboard() {
    return (
        <div className="px-20 pt-10 w-[100%]">
            <div className="w-full  overflow-hidden h-[200px] flex justify-center relative prevent-select rounded-xl">
                <img className="w-[100%] object-cover" src="https://blog.ipleaders.in/wp-content/uploads/2021/08/law-firm-1-800x534.jpg" alt="" />
                <h2 className="absolute top-[43%] text-white text-2xl font-semibold">Hey this is a banner</h2>
            </div>
            <div className="grid grid-cols-3 grid-rows-1 gap-10 mt-5">
                <div className="bg-blue-600 w-full h-[180px] rounded-lg"></div>
                <div className="bg-blue-600 w-full h-[180px] rounded-lg"></div>
                <div className="bg-blue-600 w-full h-[180px] rounded-lg"></div>                
            </div>
        </div>
    )
}