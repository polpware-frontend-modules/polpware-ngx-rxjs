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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YWJsZUV4dGVuc2lvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXJ4anMvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvT2JzZXJ2YWJsZUV4dGVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLFNBQVMsQ0FBSSxJQUFtQjtJQUM1QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07O1lBQ3pCLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNwQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNsQztZQUNELFlBQVksSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0MsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQjtRQUNMLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixZQUFZLElBQUksWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9Qcm9taXNlPFQ+KGl0ZW06IE9ic2VydmFibGU8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBpdGVtLnN1YnNjcmliZShlbGVtID0+IHtcbiAgICAgICAgICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyB3cm9uZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uICYmIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGVsZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiAmJiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU29tZXRoaW5nIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdfQ==