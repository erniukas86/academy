import React from "react";

export default function withLoading(Component) {
    return function WithLoadingComponent(props) {
        if(props.isLoading){
            return <h5>Loading....</h5>;
        }

        return <Component {...props} />;
    }
}