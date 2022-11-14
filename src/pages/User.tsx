import { useContext, useEffect } from 'react';
import { GithubCtx } from '../context/github/github.ctx';
import { Link, useParams } from 'react-router-dom';
import { Emoji, RouterParams } from '../@types';
import {
    FaArrowLeft,
    FaCheck, FaCode,
    FaGithub,
    FaGlobeAmericas,
    FaLocationArrow, FaStore,
    FaTwitter,
    FaUserFriends,
    FaUsers
} from 'react-icons/fa';
import RepoList from '../components/RepoList';

export default function User() {
    const { user, getUser, getUserRepos, loading, repos } = useContext(GithubCtx)
    const params = useParams<RouterParams>()

    useEffect((): void => {
        getUser!(params.login!)
        getUserRepos!(params.login!)
    }, [])
    return (
        <div className="w-full mx-auto lg:w-10/12">
            <div className="mb-4">
                <Link to="/" className="btn btn-ghost hover:text-accent-content">
                    <FaArrowLeft className="mr-2" />
                    <p>Go Back!</p>
                </Link>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                <div className="card w-11/12 glass shadow-xl">
                    <figure>
                        <img src={user.avatar_url} alt=""/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-primary-content">{user.name}</h2>
                        <p className="text-gray-300">Username - {user.login}</p>
                    </div>
                </div>

                <div className="col-span-2">
                    <div className="mb-6">
                        <h1 className="text-3xl card-title">
                            {user.name}
                            <div className="ml-2 mr-1 badge badge-accent">
                                <FaCheck className="mr-2" /> {user.type}
                            </div>
                            {user.hireable && (
                                <div className="mx-1 badge badge-accent">
                                    <FaCheck className="mr-2" /> Hireable
                                </div>
                            )}
                        </h1>
                        <p className="prose italic">{user.bio}</p>
                        <div className="mt-4 card-actions">
                            <a href={user.html_url} target="_blank" rel="noreferrer" className="btn btn-outline hover:text-primary-content">
                                <FaGithub className="inline mr-2 text-xl" />
                                <p className="inline align-middle font-semibold">Visit Profile!</p>
                                <p className="ml-2 text-xl inline align-middle mb-1">{Emoji.GREEN_HEART}</p>
                            </a>
                        </div>
                    </div>

                    <div className="w-full rounded-lg shadow-md bg-base-200 stats">
                        {user.login && (
                            <div className="stat">
                                <div className="stat-title text-xl">
                                    <FaLocationArrow className="inline mr-2" />
                                    <p className="inline align-middle">Location</p>
                                </div>
                                <div className="text-lg stat-value">
                                    {user.location}
                                </div>
                            </div>
                        )}
                        {user.blog && (
                            <div className="stat">
                                <div className="stat-title text-xl">
                                    <FaGlobeAmericas className="inline mr-2" />
                                    <p className="inline align-middle">Website</p>
                                </div>
                                <div className="text-lg stat-value">
                                    <a href={`https://${user.blog}`} target="_blank" rel="noreferrer">{user.blog}</a>
                                </div>
                            </div>
                        )}
                        {user.twitter_username && (
                            <div className="stat">
                                <div className="stat-title text-xl">
                                    <FaTwitter className="inline mr-2" />
                                    <p className="inline align-middle">Location</p>
                                </div>
                                <div className="text-lg stat-value">
                                    <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer">
                                        {user.twitter_username}
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full py-5 my-5 rounded-lg shadow-md bg-base-200 stats">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5 text-xl">
                        Followers
                    </div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                        {user.followers}
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUserFriends className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5 text-xl">
                        Following
                    </div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                        {user.following}
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaCode className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5 text-xl">
                        Public Repos
                    </div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                        {user.public_repos}
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaStore className="text-3xl md:text-5xl" />
                    </div>
                    <div className="stat-title pr-5 text-xl">
                        Public Gists
                    </div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                        {user.public_gists}
                    </div>
                </div>
            </div>

            <RepoList repos={repos} />
        </div>
    )
}