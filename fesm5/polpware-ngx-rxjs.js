/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} item
 * @return {?}
 */
function toPromise(item) {
    return new Promise(function (resolve, reject) {
        /** @type {?} */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { toPromise };

//# sourceMappingURL=polpware-ngx-rxjs.js.map