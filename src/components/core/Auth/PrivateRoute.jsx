import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function PrivateRoute(props) {
    const { token } = useSelector(state => state.auth)

    if (token === null) {
        return props.children; 
    } 
    else {
        return <Navigate to="/dashboard/my-profile" />; 
    }
}

export default PrivateRoute;