import {Outlet, RouteObject} from 'react-router-dom';

const styleRoot = {
    width: '100%', height: '100%', margin: 0, padding: 0
}
export const routes: RouteObject[] = [
    {
        path: '/',
        element: <div style={styleRoot}><Outlet /></div>,
        children: [
            {
                path: '/about',
                element: <div style={{ ...styleRoot, background: 'red'}}>about</div>,
            },

            {
                path: '/example',
                element: <div style={{ ...styleRoot, background: 'green'}}>example</div>,
            },
        ],
    },
];