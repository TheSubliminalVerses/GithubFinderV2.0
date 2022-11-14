import { createContext, useReducer } from 'react';
import {
    GITHUB_BASE_URL,
    GithubAPIUserSearchQuery,
    GithubContext,
    GithubProviderProps, GithubReducerDispatchAction, GithubRepo, GithubUser,
} from '../../@types';
import axios, { AxiosResponse } from 'axios';
import githubReducer from './github.reducer';

export const GithubCtx = createContext<GithubContext>({ users: [], user: {} as GithubUser, repos: [], loading: false })

export default function GithubProvider({ children }: GithubProviderProps) {
    const [state, dispatch] = useReducer(githubReducer, { users: [], user: {} as GithubUser, repos: [], loading: false })

    const setLoading = () => dispatch({
        type: GithubReducerDispatchAction.SET_LOADING
    })

    const clearUsers = () => dispatch({
        type: GithubReducerDispatchAction.CLEAR_USERS
    })

    async function searchUsers(text: string): Promise<void> {
        setLoading()

        const response: AxiosResponse<GithubAPIUserSearchQuery> = await axios.get(`${GITHUB_BASE_URL}/search/users?q=${text}`)

        if (response.data) {
            const { items } = response.data

            dispatch({
                type: GithubReducerDispatchAction.GET_USERS,
                payload: items
            })
        }
    }

    async function getUser(login: string): Promise<void> {
        setLoading()

        const response: AxiosResponse<GithubUser> = await axios.get(`${GITHUB_BASE_URL}/users/${login}`)

        if (response.status === 404) {
            window.location.pathname = "/not-found"
        } else {
            dispatch({
                type: GithubReducerDispatchAction.GET_USER,
                payload: response.data
            })
        }
    }

    async function getUserRepos(login: string): Promise<void> {
        setLoading()

        const response: AxiosResponse<Array<GithubRepo>> = await axios.get(`${GITHUB_BASE_URL}/users/${login}/repos?sort=created&per_page=10`)

        if (response.data) {
            dispatch({
                type: GithubReducerDispatchAction.GET_REPOS,
                payload: response.data
            })
        }
    }

    return (
        <GithubCtx.Provider value={{ users: state.users, loading: state.loading, user: state.user, repos: state.repos, searchUsers, clearUsers, getUser, getUserRepos }}>
            {children}
        </GithubCtx.Provider>
    )
}