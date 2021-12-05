import React from 'react';

import {
    Routes as RoutesWrapper,
    Route,
} from "react-router-dom";
  
import Home from '../pages/Home';
import Favourite from '../pages/Favourite';
import SelectedMovie from '../pages/SelectedMovie';



function Routes() {
    return (
        <>
            <RoutesWrapper>
                <Route exact path="/" element={<Home/>} />
                <Route path="/favourite" element={<Favourite />} />
                <Route path="/infoMovie/:id" element={<SelectedMovie/>} />
            </RoutesWrapper>
        </>
    )
}

export default Routes;










// import React from 'react';

// import { Route, Switch } from 'react-router-dom';

// import Home from '../pages/Home';
// import Catalog from '../pages/Catalog';
// import Detail from '../pages/detail/Detail';

// const Routes = () => {
//     return (
//         <Switch>
//             <Route
//                 path='/:category/search/:keyword'
//                 component={Catalog}
//             />
//             <Route
//                 path='/:category/:id'
//                 component={Detail}
//             />
//             <Route
//                 path='/:category'
//                 component={Catalog}
//             />
//             <Route
//                 path='/'
//                 exact
//                 component={Home}
//             />
//         </Switch>
//     );
// }

// export default Routes;