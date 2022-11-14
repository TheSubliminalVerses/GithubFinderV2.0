export type GithubUser = GithubAPIUserGeneralInfo & GithubAPIUserDetails

export interface GithubAPIUserGeneralInfo {
    readonly login: string
    readonly id: number
    readonly node_id: string
    readonly avatar_url: string
    readonly gravatar_url: string
    readonly url: string
    readonly html_url: string
    readonly followers_url: string
    readonly following_url: string
    readonly gists_url: string
    readonly starred_url: string
    readonly subscriptions_url: string
    readonly organizations_url: string
    readonly repos_url: string
    readonly events_url: string
    readonly received_event_url: string
    readonly type: string
    readonly site_admin: boolean
}

export interface GithubAPIUserDetails {
    readonly name: string
    readonly company: string
    readonly blog: string
    readonly location: string
    readonly email: string | null
    readonly hireable: boolean
    readonly bio: string
    readonly twitter_username: string
    readonly public_repos: number
    readonly public_gists: number
    readonly followers: number
    readonly following: number
    readonly created_at: string
    readonly updated_at: string
}

type License = {
    readonly key: string
    readonly name: string
    readonly spdx_id: string
    readonly url: string
    readonly node_id: string
}

export interface GithubRepo {
    readonly id: number
    readonly node_id: string
    readonly name: string
    readonly full_name: string
    readonly private: boolean
    readonly owner: GithubAPIUserGeneralInfo
    readonly html_url: string
    readonly description: string
    readonly fork: boolean
    readonly url: string
    readonly forks_url: string
    readonly keys_url: string
    readonly collaborators_url: string
    readonly teams_url: string
    readonly hooks_url: string
    readonly issue_events_url: string
    readonly events_url: string
    readonly assignees_url: string
    readonly branches_url: string
    readonly tags_url: string
    readonly blobs_url: string
    readonly git_tags_url: string
    readonly git_refs_url: string
    readonly trees_url: string
    readonly statuses_url: string
    readonly languages_url: string
    readonly stargazers_url: string
    readonly contributors_url: string
    readonly subscription_url: string
    readonly subscribers_url: string
    readonly commits_url: string
    readonly git_commits_url: string
    readonly comments_url: string
    readonly issue_comment_url: string
    readonly contents_url: string
    readonly compare_url: string
    readonly merges_url: string
    readonly archive_url: string
    readonly downloads_url: string
    readonly issues_url: string
    readonly pulls_url: string
    readonly milestones_url: string
    readonly notifications_url: string
    readonly labels_url: string
    readonly releases_url: string
    readonly deployments_url: string
    readonly created_at: string
    readonly updated_at: string
    readonly git_url: string
    readonly ssh_url: string
    readonly clone_url: string
    readonly svn_url: string
    readonly homepage: string | null
    readonly size: number
    readonly stargazers_count: number
    readonly watchers_count: number
    readonly language: string
    readonly has_issues: boolean
    readonly has_projects: boolean
    readonly has_downloads: boolean
    readonly has_wiki: boolean
    readonly has_pages: boolean
    readonly has_discussions: boolean
    readonly forks_count: number
    readonly mirrors_url: string | null
    readonly archived: boolean
    readonly disabled: boolean
    readonly open_issues_count: number
    readonly license: License
    readonly allow_forking: boolean
    readonly is_template: boolean
    readonly web_commit_signoff_required: boolean
    readonly topics: Array<string>
    readonly visibility: string
    readonly forks: number
    readonly open_issues: number
    readonly watchers: number
    readonly default_branch: string
}

export interface GithubAPIUserSearchQuery {
    readonly total_amount: number
    readonly incomplete_results: boolean
    readonly items: Array<GithubAPIUserGeneralInfo>
}