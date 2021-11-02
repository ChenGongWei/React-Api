import React from 'react'
import Loading from '@/components/Loading'
import Test from './lazyTest'
import style from './style.module.scss'

const LazyComponent = React.lazy(() => new Promise(resolve => {
    // 用 setTimeout 来模拟 import 异步引入效果
    setTimeout(()=>{
        resolve({
            // @ts-ignore
            default: ()=> <Test />
        })
    }, 2000)
}))

/**
const LazyComponent = React.lazy(() => import('./lazyTest.js'))
*/

class LazyIndex extends React.Component{   
    render(){
        return (
            <div className={style.lazy_box} >
                <React.Suspense fallback={ <Loading /> } >
                    <LazyComponent />
                </React.Suspense>
            </div>
        )
    }
}

export default LazyIndex