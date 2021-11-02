import React from 'react'
import style from './style.module.scss'

const Text = () => {
    return (
        <div className={style.memo_son}>
            子组件
        </div>
    )
}

const ProfilerComponent = () => {

    const callback = (id: string, phase: string, actualDuration: number, baseDuration: number, startTime: number, commitTime: number, interactions: Set<any>) => {
        let props = { id, phase, actualDuration, baseDuration, startTime, commitTime, interactions }
        console.log(props)
    }

    return (
        <div className={style.memo_father}>
            <React.Profiler id="root" onRender={callback} >
                <div>父组件</div>
                <Text />
            </React.Profiler>
        </div>
    )
}

export default ProfilerComponent