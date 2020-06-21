export const isElementInViewport = (el: Element,offset = 0) => {
    const ClientRect = el.getBoundingClientRect();
    const {bottom,left,right,top} = ClientRect;
    const winHeight = (window.innerHeight||document.documentElement.clientHeight) + offset;
    const winWidth = (window.innerWidth||document.documentElement.clientWidth) + offset;
    return ((top >= 0)&&(left>=0)&&(bottom<=winHeight)&&(right<=winWidth))
}

export const formatTime = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return `${year<10?'0'+year:year}-${month<10?'0'+month:month}-${day<10?'0'+day:day} ${hour<10?'0'+hour:hour}:${minute<10?'0'+minute:minute}:${second<10?'0'+second:second}`;
}
