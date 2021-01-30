import React from 'react';
import { Route, Switch } from 'react-router'

import PageNotFound from './components/common/page-not-found';
import TabularMenu from './components/tabular-menu';

import Header from './components/common/header';

const Root = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={TabularMenu} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </>
    )
}

export default Root;