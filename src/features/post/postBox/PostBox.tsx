import { Profile } from "@/ui";
import { PostContent, PostStatList, PostTitle } from "@/features/post";


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