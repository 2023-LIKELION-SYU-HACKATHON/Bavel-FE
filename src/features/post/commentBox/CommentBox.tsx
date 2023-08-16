import { PostUserInfo } from '@/features/post';
import { Comment } from '@/types/post.type';

interface CommentBoxProps {
  comment: Comment;
}

const CommentBox = ({ comment }: CommentBoxProps) => {
  return (
    <article className="flex flex-col gap-6 p-6 border-b border-gray-300">
      <PostUserInfo {...comment.author} />
      <p className="text-gray-700">{comment.content}</p>
    </article>
  );
};

export default CommentBox;
