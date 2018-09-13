const own = Object.prototype.hasOwnProperty;

/**
 * classNames: 用于连接多个的类名
 * classsNames("cell", "btn-cell") // "cell btn-cell"
 */
function classNames() {
    let classes = [];
    for (let i = 0; i < arguments.length; i ++) {
        let arg = arguments[i];
        if (!arg) continue;
        if (typeof arg === "number" || typeof arg === "string") {
            classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
            let more = classNames.apply(null, arg);
            classes.push(more);
        } else if (typeof arg === "object") {
            for (let key in arg) {
                if (arg[key] && own.call(arg, key)) classes.push(key);
            }
        }
    }
    return classes.join(' ');
}

export default classNames;