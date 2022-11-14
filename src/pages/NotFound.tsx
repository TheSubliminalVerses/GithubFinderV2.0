import { Emoji } from '../@types';
import { FaArrowLeft } from 'react-icons/all';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="hero">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-8xl font-bold mb-8">Oops! {Emoji.HEART_BROKEN}</h1>
                    <p className="text-5xl mb-8">404 - Not found!</p>
                    <p className="text-3xl mb-8">No idea what you are looking for!</p>
                    <Link to="/" className="btn btn-accent btn-lg hover:text-neutral">
                        <FaArrowLeft className="mr-2" />
                        <p>Go Back!</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}