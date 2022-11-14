import { FaArrowRight } from 'react-icons/all';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Emoji } from '../@types';
import { GithubCtx } from '../context/github/github.ctx';

export default function UserSearch() {
    const [text, setText] = useState<string>("")
    const { users, searchUsers, clearUsers } = useContext(GithubCtx)

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
        setText(e.target.value)
    }

    function onSubmitHandler(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault()

        if (text === "") {
            toast.warning<string>(`Search box can't be empty! ${Emoji.NO_ENTRY_FIRE}`)
        } else {
            searchUsers!(text)
            setText("")
        }
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-control">
                        <div className="relative">
                            <input type="text" value={text}
                                   className="w-full pr-40 bg-gray-200 input input-lg input-bordered text-black" placeholder="Search..."
                                   onChange={onChangeHandler} />
                            <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg btn-accent hover:text-neutral" type="submit">
                                <FaArrowRight className="text-3xl" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div>
                    <button className="btn btn-ghost btn-lg" onClick={clearUsers}>Clear</button>
                </div>
            )}
        </div>
    )
}