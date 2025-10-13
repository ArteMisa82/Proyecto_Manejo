export default function navbar(){

    return(
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">   
                <div className="text-white text-lg font-bold">Juegos App</div>
                <div>
                    <a href="/home" className="text-gray-300 hover:text-white mx-2">Home</a>
                    <a href="/juegos/impl" className="text-gray-300 hover:text-white mx-2">Juegos</a>
                    <a href="/hardware/imp" className="text-gray-300 hover:text-white mx-2">Hardware</a>
                </div>
            </div>
        </nav>    

    );                
}