import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
    const { isLoggedIn } = props; // destructuring props object
    // isLoggedIn shows whether user is logged in or not

    // If user is logged in then show the Dashboard
    // If user is not logged in then redirect to Login Page
    if (isLoggedIn) {
        return props.children; // show the Dashboard component
    } else {
        return <Navigate to="/login" />; // redirect to Login Page
    }
}

export default PrivateRoute;