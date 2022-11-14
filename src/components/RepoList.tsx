import { Emoji, RepoListProps } from '../@types';
import RepoItem from './RepoItem';

export default function RepoList({ repos }: RepoListProps) {
    return (
        <div className="rounded-lg shadow-lg card bg-base-200">
            <div className="card-body">
                <h2 className="text-3xl my-4 font-bold card-title">Latest Repos {Emoji.SPARKLE}</h2>
                {repos.map(repo => (
                    <RepoItem key={repo.id} repo={repo} />
                ))}
            </div>
        </div>
    )
}