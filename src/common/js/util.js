const on = (element, event, handler) => {
    if (event && element && handler) {
        let off = null;
        if (document.addEventListener) {
            console.log("element", element);
            element.addEventListener(event, handler, false);
            off = () => element.removeEventListener(event, handler, false);
            return {
                off
            }
        } else {
            element.attachEvent(`on${event}`, handler);
            off = () => element.detachEvent(`on${event}`, handler);
            return {
                off
            }
        }
    }
};

const now = Date.now || function () {
    new Date().getTime();
};
// wait 需要进行等待的时间
const throttle = (wait, fn) => {
    let previous = 0, context, args, result;
    let action = () => {
        result = fn.apply(context, args);
    };
    let throttled = () => {
        let now = Date.now() || new Date().getTime();
        args = arguments;
        context = this;
        let remainding = wait - (now - previous);
        // reamind > wait 为了防止客户端改变系统时间
        if (remainding <= 0 || remainding > wait) {
            previous = now;
            action();
        }
        return result;
    };
    return throttled;
};

export { on, throttle };