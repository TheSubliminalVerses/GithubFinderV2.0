import { GithubAPIUserGeneralInfo, GithubRepo } from './github.api.types';

export interface NavbarProps {
    title?: string
}

export interface UserItemProps {
    user: GithubAPIUserGeneralInfo
}

export interface RepoListProps {
    repos: Array<GithubRepo>
}

export interface RepoItemProps {
    repo: GithubRepo
}