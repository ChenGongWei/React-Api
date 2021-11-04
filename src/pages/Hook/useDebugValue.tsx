import { useState, useDebugValue } from 'react'

const useFriendStatus = (status: boolean) => {
    const [isOnline] = useState(status);
    // 在开发者工具中的这个 Hook 旁边显示标签
    // e.g. "FriendStatus: Online"
    useDebugValue(isOnline ? 'Online' : 'Offline');
    return isOnline;
}

const Index = () => {
    const online = useFriendStatus(true)
    const offline = useFriendStatus(false)
    return (
        <>
            <div>Tom{online ? '在线' : '不在线'}</div>
            <div>John{offline ? '在线' : '不在线'}</div>
        </>
    )
}

export default Index
