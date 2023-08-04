interface UserIdProps {
    nickname: string,
    userHandle: string,
}

const UserId = ({nickname, userHandle}: UserIdProps) => {
    return <div>
        <span className="font-bold text-black">{nickname}</span>
        <span className="text-base ml-1 text-gray-400">{userHandle}</span>
    </div>
}

export default UserId;