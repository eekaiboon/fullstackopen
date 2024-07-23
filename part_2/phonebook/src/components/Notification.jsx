const Notification = ({message}) => {
    if (message === null) {
        return null
    }

    return (
        <div className='banner'>
            {message}
        </div>
    )
}

export default Notification