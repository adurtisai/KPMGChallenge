let obj = {
    a1: {
        b1: {
            c1: 'd1',
            nested : true
        },
    },
    x1: {
        y1: {
            z1: 'a1'
        }
    }
};

function getObjectKeys(object, key) {
    const keys = key.split('.');
    let obj = object;
    for (let ikey of keys) {
        for (let [objKey, value] of Object.entries(obj)) {
            if(!keys.includes(objKey)) {
                continue;
            }
            obj = value;
        }
    }
    return obj;
}

console.log(getObjectKeys(obj, 'a1.b1.c1'));
console.log(getObjectKeys(obj, 'a1.b1.nested'));
console.log(getObjectKeys(obj, 'x1.y1.z1'));