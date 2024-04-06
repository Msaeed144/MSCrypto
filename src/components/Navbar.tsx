import { Link } from "react-router-dom"
function Navbar() {
  return (
    <header className="bg-slate-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            <h1 className="text-3xl font-medium">
                <Link to="/" className="">🪙 ام اس کریپتو</Link>
            </h1>
            <div>
                <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
                    &#9776 
                </button>
                <nav className="flex justify-between" aria-label="main">
                    <Link to="/" className="hover:opacity-90 cursor-pointer mx-8">خانه</Link>
                    <Link to="/transformer" className="hover:opacity-90 cursor-pointer mx-8">مبدل</Link>
                    <Link to="/aboutus" className="hover:opacity-90 cursor-pointer mx-8">درباره ما</Link>
                </nav>
            </div>
        </section>
    </header>
  )
}

export default Navbar