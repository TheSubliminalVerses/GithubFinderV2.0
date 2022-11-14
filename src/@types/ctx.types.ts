import { ReactNode } from 'react';
import { GithubAPIUserGeneralInfo, GithubRepo, GithubUser } from './github.api.types';

export interface GithubContext {
    users: Array<GithubAPIUserGeneralInfo>
    user: GithubUser
    repos: Array<GithubRepo>
    loading: boolean
    searchUsers?: (text: string) => Promise<void>
    clearUsers?: () => void
    getUser?: (login: string) => Promise<void>
    getUserRepos?: (login: string) => Promise<void>
}

export interface GithubProviderProps {
    readonly children: ReactNode
}