import {
    GithubReducerState,
    GithubReducerAction,
    GithubReducerDispatchAction, GithubAPIUserGeneralInfo, GithubUser, GithubRepo,
} from '../../@types';

export default function githubReducer(state: GithubReducerState, action: GithubReducerAction) {
    switch (action.type) {
        case GithubReducerDispatchAction.GET_USERS:
            return { ...state, users: action.payload as Array<GithubAPIUserGeneralInfo>, loading: false }
        case GithubReducerDispatchAction.GET_USER:
            return { ...state, user: action.payload as GithubUser, loading: false }
        case GithubReducerDispatchAction.CLEAR_USERS:
            return { ...state, users: [] as Array<GithubAPIUserGeneralInfo> }
        case GithubReducerDispatchAction.GET_REPOS:
            return { ...state, repos: action.payload as Array<GithubRepo>, loading: false }
        case GithubReducerDispatchAction.SET_LOADING:
            return { ...state, loading: true }
        default:
            return state
    }
}