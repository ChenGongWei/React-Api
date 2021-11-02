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
                    path="/"
                    component={React.lazy(() => import('@/pages/Main'))}
                />
              
            </Switch>
        </BrowserRouter>
    )
}

export default Routes

