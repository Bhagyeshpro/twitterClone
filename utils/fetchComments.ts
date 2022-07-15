import { Comment } from "../typing";

export const fetchComments = async (tweetId: String) => {
    const res = await fetch(`/api/getComments?tweetId=${tweetId}`)

    const comments : Comment[] = await res.json()

    return comments;


}