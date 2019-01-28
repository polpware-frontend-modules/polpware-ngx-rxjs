(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-rxjs', ['exports'], factory) :
    (factory((global.polpware = global.polpware || {}, global.polpware['ngx-rxjs'] = {})));
}(this, (function (exports) { 'use strict';

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

    exports.toPromise = toPromise;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=polpware-ngx-rxjs.umd.js.map