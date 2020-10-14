function toPromise(item) {
    return new Promise(function (resolve, reject) {
        var subscription = item.subscribe(function (elem) {
            if (!subscription) {
                console.log('Something wrong');
            }
            subscription && subscription.unsubscribe();
            if (elem) {
                resolve(elem);
            }
            else {
                reject(null);
            }
        }, function (error) {
            subscription && subscription.unsubscribe();
            reject(error);
        });
        if (!subscription) {
            console.log('Something error');
        }
    });
}

/*
 * Public API Surface of ngx-rxjs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { toPromise };
//# sourceMappingURL=polpware-ngx-rxjs.js.map
