
export let formatDuration = (duration?: number | null) => {
    if (!duration) return "/"

    const hours = Math.floor(duration / 60)
    const minutes = duration % 60

    return `${hours < 10 ? `0${hours}` : hours.toString()} : ${minutes < 10 ? `0${minutes}` : minutes.toString()}`
}
