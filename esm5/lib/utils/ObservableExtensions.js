export function toPromise(item) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YWJsZUV4dGVuc2lvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXJ4anMvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvT2JzZXJ2YWJsZUV4dGVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxVQUFVLFNBQVMsQ0FBSSxJQUFtQjtJQUM1QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDL0IsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDcEMsNENBQTRDO1lBQzVDLCtCQUErQjtZQUMvQiwyREFBMkQ7WUFDM0QsVUFBVSxDQUFDO2dCQUNQLFlBQVksSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLElBQUksRUFBRTtnQkFDTixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakI7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hCO1FBQ0wsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLFVBQVUsQ0FBQztnQkFDUCxZQUFZLElBQUksWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvUHJvbWlzZTxUPihpdGVtOiBPYnNlcnZhYmxlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gaXRlbS5zdWJzY3JpYmUoZWxlbSA9PiB7XG4gICAgICAgICAgICAvLyBXZSBjYW5ub3QgYWNjZXNzIHN1YnNjcmlwdGlvbiB0aGlzIGVhcmx5LFxuICAgICAgICAgICAgLy8gYXQgdGhlIGluaXRpYWxpemF0aW9uIHN0YWdlLlxuICAgICAgICAgICAgLy8gVGhlcmVmb3JlLCB3ZSBzY2hlZHVsZSB0byB1bnN1YnNjcmliZSB0aGlzIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiAmJiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGVsZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiAmJiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl19