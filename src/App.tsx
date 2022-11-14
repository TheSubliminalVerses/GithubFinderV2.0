import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import User from './pages/User';
import GithubProvider from './context/github/github.ctx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <>
            <GithubProvider>
                <BrowserRouter>
                    <div className="flex flex-col justify-between h-screen">
                        <Navbar />
                        <main className="container mx-auto px-3 pb-12">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="not-found" element={<NotFound />} />
                                <Route path="/user/:login" element={<User />} />
                                <Route path="/*" element={<NotFound />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </BrowserRouter>
                <ToastContainer />
            </GithubProvider>
        </>
    )
}

export default App
