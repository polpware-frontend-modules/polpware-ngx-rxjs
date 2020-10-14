(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-rxjs', ['exports'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-rxjs'] = {})));
}(this, (function (exports) { 'use strict';

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

    exports.toPromise = toPromise;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-rxjs.umd.js.map
