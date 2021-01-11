// Video interface referenced in product interface
import VideoUrl from "./video_url";

interface Video {
    _links: {
       self: {
          href: string
       }
    },
    _embedded: {
       videos_url: VideoUrl[]
    },
    page_count: number,
    page_size: number,
    total_items: number,
    page: number
 }
export default Video