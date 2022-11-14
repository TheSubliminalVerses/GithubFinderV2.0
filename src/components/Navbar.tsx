import { NavbarProps } from '../@types';
import { FaGithub, FaHome, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar({ title = "Github Finder V2" }: NavbarProps) {
    return (
        <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <FaGithub className="inline pr-2 text-3xl" />
                    <Link to="/" className="text-lg font-bold align-middle" >{title}</Link>
                </div>

                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                            <FaHome className="mr-2" /> Home
                        </Link>
                        <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
                            <FaQuestionCircle className="mr-2" /> About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}