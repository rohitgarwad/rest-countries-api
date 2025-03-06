import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {

    const error = useRouteError();

    return (
        <div>Something went wrong. {error?.status}</div>
    )
}

export default ErrorPage