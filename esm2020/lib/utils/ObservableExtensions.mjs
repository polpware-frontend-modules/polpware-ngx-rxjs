export function toPromise(item) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YWJsZUV4dGVuc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtcnhqcy9zcmMvbGliL3V0aWxzL09ic2VydmFibGVFeHRlbnNpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sVUFBVSxTQUFTLENBQUksSUFBbUI7SUFDNUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNuQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZDLDRDQUE0QztZQUM1QywrQkFBK0I7WUFDL0IsMkRBQTJEO1lBQzNELFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osWUFBWSxJQUFJLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksSUFBSSxFQUFFO2dCQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjtpQkFBTTtnQkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEI7UUFDTCxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDUCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLFlBQVksSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9Qcm9taXNlPFQ+KGl0ZW06IE9ic2VydmFibGU8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBpdGVtLnN1YnNjcmliZShlbGVtID0+IHtcbiAgICAgICAgICAgIC8vIFdlIGNhbm5vdCBhY2Nlc3Mgc3Vic2NyaXB0aW9uIHRoaXMgZWFybHksXG4gICAgICAgICAgICAvLyBhdCB0aGUgaW5pdGlhbGl6YXRpb24gc3RhZ2UuXG4gICAgICAgICAgICAvLyBUaGVyZWZvcmUsIHdlIHNjaGVkdWxlIHRvIHVuc3Vic2NyaWJlIHRoaXMgc3Vic2NyaXB0aW9uLlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uICYmIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZWxlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uICYmIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyBlcnJvcicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iXX0=