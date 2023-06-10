import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar";
import { MarvelPages,DCPage, Search, Hero } from "../pages"



export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPages />} />
                <Route path="dc" element={ <DCPage /> } />
                <Route path="search" element={ <Search /> } />
                <Route path="hero/:id" element={ <Hero /> } />

                <Route path="/*" element= {<Navigate to={"/login"} />}/>
                <Route path="/" element={ <Navigate to="/marvel" /> } />
            </Routes>
        </div>        

    </>
  )
}
