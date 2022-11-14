import { GithubAPIUserGeneralInfo, GithubRepo, GithubUser } from './github.api.types';

export enum GithubReducerDispatchAction {
    GET_USERS = "GET_USERS",
    SET_LOADING = "SET_LOADING",
    CLEAR_USERS = "CLEAR_USERS",
    GET_USER = "GET_USER",
    GET_REPOS = "GET_REPOS"
}

export interface GithubReducerState {
    users: Array<GithubAPIUserGeneralInfo>
    user: GithubUser
    repos: Array<GithubRepo>
    loading: boolean
}

export interface GithubReducerAction {
    type: GithubReducerDispatchAction
    payload?: unknown
}