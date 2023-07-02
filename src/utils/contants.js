const GOOGLE_API_KEY ="AIzaSyAjaVwOyBZjyrTYPMhIMSzt76hI2_J8jc8";

export const YOUTUBE_VIDEOS_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;



export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const LIVE_CHAT_COUNT = 30;

//Live Chat >>>> Infinite Scroll >>>>> Pagination


//DL(Data Layer)  -Get Data Live
//UI(UI layer)  -Update the UI

//DATA(Live)
//Web Sockets(Trading apps,whatsapp)          UI<->S   (no regular interval)                    
//ApI Polling(Gmail,Cricbuzz)                  UI<-S   (Interval) 