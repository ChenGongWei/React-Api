import React from 'react'
import { useHistory } from 'react-router-dom'
import { Grid } from 'antd-mobile'

import Block from '@/components/Block'
import style from './style.module.scss'

interface ComponentItem {
    /** 组件名 */
    name: string
    /** 跳转路径 */
    path: string
}

interface ComponentGroup {
    /** 标题 */
    title: string
    /** 跳转路径 */
    children: ComponentItem[]
}

interface HomeProp {}

const Main: React.FC<HomeProp> = () => {

    const history = useHistory()

    const data: ComponentGroup[] = [
        {
            title: '组件类',
            children: [
                {
                    name: 'Component',
                    path: '/component',
                },
                {
                    name: 'PureComponent',
                    path: '/pureComponent',
                },
                {
                    name: 'memo',
                    path: '/memo',
                },
                {
                    name: 'forwardRef',
                    path: '/forwardRef',
                },
                {
                    name: 'lazy',
                    path: '/lazy',
                },
                {
                    name: 'Suspense',
                    path: '/lazy',
                },
                {
                    name: 'Fragment',
                    path: '/fragment',
                },
                {
                    name: 'Profiler',
                    path: '/profiler',
                },
                {
                    name: 'StrictMode',
                    path: '/strictMode',
                },
            ],
        },
        {
            title: '工具类',
            children: [
                {
                    name: 'createElement',
                    path: '/createElement'
                },
                {
                    name: 'cloneElement',
                    path: '/cloneElement'
                },
                {
                    name: 'createContext',
                    path: '/createContext'
                },
                {
                    name: 'createFactory',
                    path: '/createFactory'
                },
                {
                    name: 'createRef',
                    path: '/createRef'
                },
                {
                    name: 'isValidElement',
                    path: '/isValidElement'
                },
                {
                    name: 'Children.map',
                    path: '/childrenMap'
                },
                {
                    name: 'Children.forEach',
                    path: '/childrenForEach'
                },
                {
                    name: 'Children.count',
                    path: '/childrenCount'
                },
                {
                    name: 'Children.only',
                    path: '/childrenOnly'
                },
                {
                    name: 'Children.toArray',
                    path: '/childrenToArray'
                }
            ]
        }
    ]

    return (
        <div className={style.body}>
            {data.map(group => (
                <Block title={group.title} key={group.title}>
                    <Grid columns={4}>
                        {group.children.map(child => (
                            <Grid.Item key={child.name}>
                                <span
                                    className={style.item}
                                    onClick={() => history.push(child.path)}>
                                    {child.name}
                                </span>
                            </Grid.Item>
                        ))}
                    </Grid>
                </Block>
            ))}
        </div>
    )
}

 
export default Main