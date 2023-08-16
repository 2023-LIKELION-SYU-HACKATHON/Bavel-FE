import { Comment } from '@/types/post.type';
import { CommentBox } from '@/features/post';

interface CommentBoxListProps {
  comments: Comment[];
}

const CommentBoxList = ({ comments }: CommentBoxListProps) => {
  return (
    <div className="bg-white">
      {comments.map(comment => (
        <CommentBox key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentBoxList;
