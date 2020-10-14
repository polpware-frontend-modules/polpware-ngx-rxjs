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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YWJsZUV4dGVuc2lvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LXJ4anMvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvT2JzZXJ2YWJsZUV4dGVuc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxVQUFVLFNBQVMsQ0FBSSxJQUFtQjtJQUM1QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ25DLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkMsNENBQTRDO1lBQzVDLCtCQUErQjtZQUMvQiwyREFBMkQ7WUFDM0QsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDWixZQUFZLElBQUksWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQjtRQUNMLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNQLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osWUFBWSxJQUFJLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1Byb21pc2U8VD4oaXRlbTogT2JzZXJ2YWJsZTxUPik6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGl0ZW0uc3Vic2NyaWJlKGVsZW0gPT4ge1xuICAgICAgICAgICAgLy8gV2UgY2Fubm90IGFjY2VzcyBzdWJzY3JpcHRpb24gdGhpcyBlYXJseSxcbiAgICAgICAgICAgIC8vIGF0IHRoZSBpbml0aWFsaXphdGlvbiBzdGFnZS5cbiAgICAgICAgICAgIC8vIFRoZXJlZm9yZSwgd2Ugc2NoZWR1bGUgdG8gdW5zdWJzY3JpYmUgdGhpcyBzdWJzY3JpcHRpb24uXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gJiYgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShlbGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gJiYgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU29tZXRoaW5nIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdfQ==