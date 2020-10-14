function toPromise(item) {
    return new Promise(function (resolve, reject) {
        var subscription = item.subscribe(function (elem) {
            // We cannot access subscription this early,
            // at the initialization stage.
            // Therefore, we schedule to unsubscribe this subscription.
            setTimeout(function () {
                subscription && subscription.unsubscribe();
            });
            if (elem) {
                resolve(elem);
            }
            else {
                reject(null);
            }
        }, function (error) {
            setTimeout(function () {
                subscription && subscription.unsubscribe();
            });
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
