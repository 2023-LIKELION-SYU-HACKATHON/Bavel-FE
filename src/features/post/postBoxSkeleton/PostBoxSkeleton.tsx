import { UserIcon } from '@/ui';

// PostBox 컴포넌트의 스켈레톤 UI 입니다.
const PostBoxSkeleton = () => {
  return (
    <article className="flex flex-col gap-6 p-6 border-b border-gray-300 animate-pulse">
      <div className="flex flex-row items-center justify-between w-full gap-4 h-11">
        <div className="flex items-center h-full gap-4">
          <UserIcon avatar="" />
          <div className="flex flex-col gap-2">
            <div className="w-32 h-4 bg-gray-200 rounded-full " />
            <div className="w-12 h-3 bg-gray-200 rounded-full " />
          </div>
        </div>
      </div>

      <div className="w-1/2 h-5 bg-gray-200 rounded-full " />

      <div className="flex items-center w-full space-x-2">
        <div className="h-2.5 bg-gray-200 rounded-full  w-32"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-24"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-full"></div>
      </div>
      <div className="flex items-center w-full space-x-2 ">
        <div className="h-2.5 bg-gray-200 rounded-full  w-full"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-full"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-24"></div>
      </div>
      <div className="flex items-center w-full space-x-2 ">
        <div className="h-2.5 bg-gray-300 rounded-full  w-full"></div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-80"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-full"></div>
      </div>
      <div className="flex items-center w-full space-x-2 ">
        <div className="h-2.5 bg-gray-200 rounded-full  w-full"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-full"></div>
        <div className="h-2.5 bg-gray-300 rounded-full  w-24"></div>
      </div>

      <div className="flex justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 " />
          <div className="w-10 h-4 bg-gray-200 " />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 " />
          <div className="w-10 h-4 bg-gray-200 " />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 " />
          <div className="w-10 h-4 bg-gray-200 " />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 " />
        </div>
      </div>
    </article>
  );
};

export default PostBoxSkeleton;
