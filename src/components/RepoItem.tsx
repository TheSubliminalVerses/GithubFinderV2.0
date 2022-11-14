import { RepoItemProps } from '../@types';
import { FaEye, FaLink, FaStar } from 'react-icons/fa';
import { BiGitRepoForked, BiNoEntry } from 'react-icons/bi';

export default function RepoItem({ repo }: RepoItemProps) {
    return (
        <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
            <div className="card-body">
                <h3 className="mb-3 font-semibold">
                    <a href={repo.html_url}>
                        <FaLink className="inline mr-2" />
                        <p className="inline align-middle">{repo.name}</p>
                    </a>
                </h3>
                <p className="mb-3">{repo.description}</p>
                <div>
                    <div className="mr-2 badge badge-info badge-lg">
                        <FaEye className="mr-2" />
                        <p>{repo.watchers}</p>
                    </div>
                    <div className="mr-2 badge badge-success badge-lg">
                        <FaStar className="mr-2" />
                        <p>{repo.stargazers_count}</p>
                    </div>
                    <div className="mr-2 badge badge-error badge-lg">
                        <BiNoEntry className="mr-2" />
                        <p>{repo.open_issues_count}</p>
                    </div>
                    <div className="mr-2 badge badge-warning badge-lg">
                        <BiGitRepoForked className="mr-2" />
                        <p>{repo.forks}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}