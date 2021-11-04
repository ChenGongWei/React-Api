import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/component"
                    component={React.lazy(() => import('@/pages/Component/component'))}
                />
                <Route
                    path="/pureComponent"
                    component={React.lazy(() => import('@/pages/Component/pureComp'))}
                />
                <Route
                    path="/memo"
                    component={React.lazy(() => import('@/pages/Component/memo'))}
                />
                <Route
                    path="/forwardRef"
                    component={React.lazy(() => import('@/pages/Component/forwardRef'))}
                />
                <Route
                    path="/lazy"
                    component={React.lazy(() => import('@/pages/Component/lazyIndex'))}
                />
                <Route
                    path="/fragment"
                    component={React.lazy(() => import('@/pages/Component/fragment'))}
                />
                <Route
                    path="/profiler"
                    component={React.lazy(() => import('@/pages/Component/profiler'))}
                />
                <Route
                    path="/strictMode"
                    component={React.lazy(() => import('@/pages/Component/strictMode'))}
                />
                <Route
                    path="/createElement"
                    component={React.lazy(() => import('@/pages/Tools/createElement'))}
                />
                <Route
                    path="/cloneElement"
                    component={React.lazy(() => import('@/pages/Tools/cloneElement'))}
                />
                <Route
                    path="/createContext"
                    component={React.lazy(() => import('@/pages/Tools/createContext'))}
                />
                <Route
                    path="/createFactory"
                    component={React.lazy(() => import('@/pages/Tools/createFactory'))}
                />
                <Route
                    path="/createRef"
                    component={React.lazy(() => import('@/pages/Tools/createRef'))}
                />
                <Route
                    path="/isValidElement"
                    component={React.lazy(() => import('@/pages/Tools/isValidElement'))}
                />
                <Route
                    path="/childrenMap"
                    component={React.lazy(() => import('@/pages/Tools/childrenMap'))}
                />
                <Route
                    path="/childrenForEach"
                    component={React.lazy(() => import('@/pages/Tools/childrenForEach'))}
                />
                <Route
                    path="/childrenCount"
                    component={React.lazy(() => import('@/pages/Tools/childrenCount'))}
                />
                <Route
                    path="/childrenOnly"
                    component={React.lazy(() => import('@/pages/Tools/childrenOnly'))}
                />
                <Route
                    path="/childrenToArray"
                    component={React.lazy(() => import('@/pages/Tools/childrenToArray'))}
                />
                <Route
                    path="/useState"
                    component={React.lazy(() => import('@/pages/Hook/useState'))}
                />
                <Route
                    path="/useEffect"
                    component={React.lazy(() => import('@/pages/Hook/useEffect'))}
                />
                <Route
                    path="/useMemo"
                    component={React.lazy(() => import('@/pages/Hook/useMemo'))}
                />
                <Route
                    path="/"
                    component={React.lazy(() => import('@/pages/Main'))}
                />
              
            </Switch>
        </BrowserRouter>
    )
}

export default Routes

