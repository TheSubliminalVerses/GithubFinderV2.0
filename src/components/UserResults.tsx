import { useContext, useEffect } from 'react';
import Spinner from './Spinner';
import UserItem from './UserItem';
import { GithubCtx } from '../context/github/github.ctx';

export default function UserResults() {
    const { users, loading } = useContext(GithubCtx)

    if (loading) {
        return (
            <div className="hero">
                <div className="hero-content text-center justify-center">
                    <div className="max-w-md">
                        <Spinner />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}