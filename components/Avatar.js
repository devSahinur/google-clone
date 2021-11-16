function Avatar({url, className}) {
    return (
        <img
            loading="lazy"
            className={`h-10 transition transform rounded-full cursor-pointer hover:scale-125 ${className}`}
            src={url} alt="Profile Picture"
        />
    )
}

export default Avatar
