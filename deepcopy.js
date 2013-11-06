function Deep_Copy (obj) {
    if (typeof obj == 'number' || typeof obj == 'string' || typeof obj == 'boolean') {
        return obj;
    } else if (typeof obj == 'object') {
        if (obj instanceof Array) {
            var newArr = [], i, len = obj.length;
            for (i = 0; i < len; i++) {
                newArr[i] = arguments.callee(obj[i]);
            }
            return newArr;
        } else {
            var newObj = {};
            for (var name in obj) {
                newObj[name] = arguments.callee(obj[name]);
            }
            return newObj;
        }
    }
}