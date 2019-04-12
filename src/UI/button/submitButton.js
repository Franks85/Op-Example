import React from 'react'

const submitButton = props => {
    const {text} = props;
    return (
        <button type="submit" className="btn btn-primary">{text}</button>
    )
}

export default submitButton