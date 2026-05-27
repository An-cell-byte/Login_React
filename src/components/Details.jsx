import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Details = ({users}) => {
    const {username} = useParams()
    const [searchParams] = useSearchParams()

    return (
        <div>Details
            <p>
                Valor de la variable username: {username}
            </p>
            <p>
                Valor de : {searchParams.get("react")}
            </p>
        </div>
    )

}

export default Details
