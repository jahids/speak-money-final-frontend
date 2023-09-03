// /* eslint-disable  */
// import { Navigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';

// interface Props {
//   component: React.ComponentType;
//   // path?: string;
//   roles: Array<any>;
// }

// export const PrivateRoute: React.FC<Props> = ({
//   component: RouteComponent,
//   roles
// }) => {
  
//   const user:any = JSON.parse(localStorage.getItem('user'));
//   const isAuthenticated = localStorage.getItem('token');
//   const userHasRequiredRole = user?.role && roles?.includes(user?.role) ? true : false;

//   if (isAuthenticated && userHasRequiredRole) {
//     return  <div className="App">
// 	<div className="AppGlass">
//         <Sidebar/>
//     <RouteComponent />
// 	</div>		
// 	</div>
    
    
//   }

//   if (!isAuthenticated && !userHasRequiredRole) {
//     return <Navigate to="/login" /> ;
//   }

//   return <Navigate to="/" />;
// };


/* eslint-disable  */
import { Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';// Import your ProFeaturesPopup component
import ProFeaturesPopup from '../components/Profeature/Profeature';

interface Props {
  component: React.ComponentType;
  roles: Array<string>;
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  roles
}) => {
  const user: any = JSON.parse(localStorage.getItem('user'));
  const isAuthenticated = localStorage.getItem('token');
  const userHasRequiredRole = user?.role && roles?.includes(user?.role);

  if (isAuthenticated && userHasRequiredRole) {
    return (
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <RouteComponent />
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // User is authenticated but doesn't have the required role,
  // Display the ProFeaturesPopup component.
  return <ProFeaturesPopup/>;
};
