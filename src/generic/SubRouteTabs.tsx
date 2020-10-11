import React, {useMemo, useState} from 'react';
import {Divider, Tab, Tabs} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ErrorAlert from "./ErrorAlert";
import ProgressBar from "./ProgressBar";
import {Route, Routes} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";


interface SubRoute {
    label?: string;
    href: string;
    index: number;
    component?: React.ReactElement;
}

interface Props {
    subRoutes: SubRoute[];
    baseUrl: string;
    loading: boolean;
    error?: object;
    errorResponse?: object;
}

const SubRouteTabs: React.FC<Props> = (props: Props) => {

    const {
        subRoutes,
        baseUrl,
        loading,
        error,
        errorResponse
    } = props;

    const location = useLocation();


    const getIndexOfCurrentLocation = (): number => {

        const lastPath = location.pathname.split("/").splice(-1)[0];

        const matchingSubRoute = subRoutes.find(subRoute => subRoute.href === lastPath);
        if (!matchingSubRoute) {
            console.log('No matched route, default company route');
            return 0;
        } else {
            console.log(`Matched route with index : ${matchingSubRoute.index}`);
            return matchingSubRoute.index;
        }
    }
    const currentLocation = useMemo(() => getIndexOfCurrentLocation(), []);
    const [value, setValue] = useState(currentLocation);
    const navigate = useNavigate();


    const LinkTab: React.FC<SubRoute> = ({href, label, index}: SubRoute) => {
        return (
            <Tab
                component="a"
                onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
                    event.preventDefault();
                    setValue(index);
                    navigate(`${baseUrl}/${href}`);
                }}
                label={label}
            />
        );
    };


    return (
        <div>
            <div style={{display: 'flex'}}>
                <Tabs
                    indicatorColor='primary'
                    textColor='primary'
                    value={value}
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    {
                        subRoutes.map(subRoute => <LinkTab key={subRoute.index}
                                                           {...subRoute}/>
                        )
                    }
                </Tabs>
            </div>

            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <Divider/>
                </Grid>

                <ErrorAlert error={error}
                            errorResponse={errorResponse}
                            displayGrid
                />

                <ProgressBar loading={loading} displayGrid/>
                <Grid item xs={12}>


                    <Routes>
                        {subRoutes.slice(1).map(subRoute => <Route key={subRoute.index}
                                                                   path={subRoute.href}
                                                                   element={subRoute.component}/>)
                        }
                        {/*first element of companySubRoutes on the end, to match all*/}
                        <Route element={subRoutes[0].component}/>
                    </Routes>
                </Grid>
            </Grid>
        </div>
    );
};


export default SubRouteTabs;
