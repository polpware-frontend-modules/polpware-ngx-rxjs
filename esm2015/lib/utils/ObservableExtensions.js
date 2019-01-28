/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} item
 * @return {?}
 */
export function toPromise(item) {
    return new Promise((resolve, reject) => {
        /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YWJsZUV4dGVuc2lvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXJ4anMvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvT2JzZXJ2YWJsZUV4dGVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLFNBQVMsQ0FBSSxJQUFtQjtJQUM1QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztjQUM3QixZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNsQztZQUNELFlBQVksSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0MsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQjtRQUNMLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNQLFlBQVksSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1Byb21pc2U8VD4oaXRlbTogT2JzZXJ2YWJsZTxUPik6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGl0ZW0uc3Vic2NyaWJlKGVsZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU29tZXRoaW5nIHdyb25nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gJiYgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZWxlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uICYmIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl19