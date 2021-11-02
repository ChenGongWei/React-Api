import type { FC } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import TouchSvg from '@/assets/svg/touch.svg'
import styles from './style.module.scss'


/**
 * 辅助触控
 * 回到首页 √
 * @return {*}
 */
const AssistiveTouch: FC = () => {
    const history = useHistory()
    const location = useLocation()
    console.log(history, location);
    


    if (location.pathname === '/') {
        return null
    }

    return (
        <div
            className={styles.touch}
            onClick={() =>  history.replace('/')}>
            <img src={TouchSvg} alt="返回首页" />
        </div>
    )
}

export default AssistiveTouch
