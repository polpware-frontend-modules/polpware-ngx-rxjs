function toPromise(item) {
    return new Promise((resolve, reject) => {
        const subscription = item.subscribe(elem => {
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
        }, error => {
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
