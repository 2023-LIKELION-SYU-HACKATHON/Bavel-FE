import PostContent from "@/features/post/postBox/PostContent"
import PostTitle from "@/features/post/postBox/PostTitle"
import Profile from "@/ui/profile/Profile"
import PostStatList from "./PostStatList"

interface PostBoxProps {
    title: string,
    content: string,
}

const isTitleVisible = true;

const PostBox = ({title, content}: PostBoxProps) => {
    return <div className="border-b border-gray-300">
        <Profile />
        { isTitleVisible && <PostTitle title={title}/> }
        <PostContent content={content}/>
        <PostStatList />
    </div>
}

export default PostBox;