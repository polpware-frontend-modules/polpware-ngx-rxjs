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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YWJsZUV4dGVuc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtcnhqcy9zcmMvbGliL3V0aWxzL09ic2VydmFibGVFeHRlbnNpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sVUFBVSxTQUFTLENBQUksSUFBbUI7SUFDNUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNuQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZDLDRDQUE0QztZQUM1QywrQkFBK0I7WUFDL0IsMkRBQTJEO1lBQzNELFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osWUFBWSxJQUFJLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUM7aUJBQU0sQ0FBQztnQkFDSixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakIsQ0FBQztRQUNMLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNQLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osWUFBWSxJQUFJLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvUHJvbWlzZTxUPihpdGVtOiBPYnNlcnZhYmxlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gaXRlbS5zdWJzY3JpYmUoZWxlbSA9PiB7XG4gICAgICAgICAgICAvLyBXZSBjYW5ub3QgYWNjZXNzIHN1YnNjcmlwdGlvbiB0aGlzIGVhcmx5LFxuICAgICAgICAgICAgLy8gYXQgdGhlIGluaXRpYWxpemF0aW9uIHN0YWdlLlxuICAgICAgICAgICAgLy8gVGhlcmVmb3JlLCB3ZSBzY2hlZHVsZSB0byB1bnN1YnNjcmliZSB0aGlzIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiAmJiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGVsZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiAmJiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl19