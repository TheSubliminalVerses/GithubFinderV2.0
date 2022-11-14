import { UserItemProps } from '../@types';
import { Link } from 'react-router-dom';
import { FaGit } from 'react-icons/fa';

export default function UserItem({ user: { login, avatar_url } }: UserItemProps) {
    return (
        <div className="card shadow-md compact bg-base-200">
            <div className="flex flex-row items-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={avatar_url} alt="Profile Picture"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{login}</h2>
                    <Link to={`/user/${login}`} className="text-base-content text-opacity-40">
                        <FaGit className="inline mr-1" /> Visit Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}