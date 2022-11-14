import { Emoji } from '../@types';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <p className="prose">Made with {Emoji.PURPLE_HEART} by <em>Michael Polesensky</em></p>
                <p>Mike'sTechAdventures &copy; {year}</p>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <a className="btn btn-primary btn-circle btn-outline">
                        <FaYoutube className="text-3xl" />
                    </a>
                    <a className="btn btn-secondary btn-circle btn-outline">
                        <FaGithub className="text-3xl" />
                    </a>
                    <a className="btn btn-accent btn-circle btn-outline">
                        <FaInstagram className="text-3xl" />
                    </a>
                </div>
            </div>
        </footer>
    )
}