export const isElementInViewport = (el: Element,offset = 0) => {
    const ClientRect = el.getBoundingClientRect();
    const {bottom,left,right,top} = ClientRect;
    const winHeight = (window.innerHeight||document.documentElement.clientHeight) + offset;
    const winWidth = (window.innerWidth||document.documentElement.clientWidth) + offset;
    return ((top >= 0)&&(left>=0)&&(bottom<=winHeight)&&(right<=winWidth))
}
