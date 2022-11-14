export type RouterParams = {
    login: string
}

export enum Emoji {
    PURPLE_HEART = "\u{1F49C}",
    GREEN_HEART = "\u{1F49A}",
    HEART_BROKEN = "\u{1F494}",
    NO_ENTRY_FIRE = "\u{1F4DB}",
    SPARKLE = "\u{2728}"
}

export const GITHUB_BASE_URL = import.meta.env.VITE_GITHUB_BASE_URL