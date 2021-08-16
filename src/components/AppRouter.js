import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {useContext} from "react";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading)
        return <Loader/>

    return (
        isAuth
            ?
        <Switch>
            {privateRoutes.map(({component, path, exact}) =>
                <Route
                    component={component}
                    path={path}
                    exact={exact}
                    key={path}
                />
            )}
            <Redirect to='/posts'/>
        </Switch>
            :
            <Switch>
                {publicRoutes.map(({component, path, exact}) =>
                    <Route
                        component={component}
                        path={path}
                        exact={exact}
                        key={path}
                    />
                )}
                <Redirect to='/login'/>
            </Switch>
    );
};

export default AppRouter;