import React from 'react';

import {Container} from 'react-bootstrap';
import Header from '../components/Tools/Header';
import NavSearch from '../components/Tools/NavSearch';
// import routes from '../routes/routes'

// const switchRoutes = (
//   <Switch>
//     {
//       routes.map((prop, key) => {
//         return (
//           <Route
//             path={"/tools" + prop.path}
//             component={prop.component}
//             key={key}
//           />
//         );
//       })
//     }
//     <Redirect from="/tools" to="/tools/home" />
//   </Switch>
// );

export default function Tools(props) { 
  return (
    <div className="home">
      <Header/>
      <NavSearch/>
      <Container fluid className="px-5">
        {props.children}
      </Container>
      {/* <Footer/> */}
    </div>
  )
}