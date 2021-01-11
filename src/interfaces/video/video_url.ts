// Video URL interface referenced in Video interface
interface VideoUrl {
    url: string,
    _links: {
        self: {
            href: string
        }
    }
}
export default VideoUrl