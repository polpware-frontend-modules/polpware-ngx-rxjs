function toPromise(item) {
    return new Promise((resolve, reject) => {
        const subscription = item.subscribe(elem => {
            // We cannot access subscription this early,
            // at the initialization stage.
            // Therefore, we schedule to unsubscribe this subscription.
            setTimeout(() => {
                subscription && subscription.unsubscribe();
            });
            if (elem) {
                resolve(elem);
            }
            else {
                reject(null);
            }
        }, error => {
            setTimeout(() => {
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
