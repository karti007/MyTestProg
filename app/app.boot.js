System.register(["@angular/platform-Browser-Dynamic", "./app.modules"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_Browser_Dynamic_1, app_modules_1;
    return {
        setters: [
            function (platform_Browser_Dynamic_1_1) {
                platform_Browser_Dynamic_1 = platform_Browser_Dynamic_1_1;
            },
            function (app_modules_1_1) {
                app_modules_1 = app_modules_1_1;
            }
        ],
        execute: function () {
            platform_Browser_Dynamic_1.platformBrowserDynamic().bootstrapModule(app_modules_1.AppModule);
        }
    };
});
//# sourceMappingURL=app.boot.js.map