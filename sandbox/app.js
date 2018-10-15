System.register("test", [], function (exports_1, context_1) {
    "use strict";
    var DemoFunction;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            DemoFunction = /** @class */ (function () {
                function DemoFunction() {
                }
                DemoFunction.prototype.triggerFunction = function () {
                    alert("Triggered");
                };
                return DemoFunction;
            }());
            exports_1("DemoFunction", DemoFunction);
        }
    };
});
System.register("app", ["test"], function (exports_2, context_2) {
    "use strict";
    var test_1, thing;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (test_1_1) {
                test_1 = test_1_1;
            }
        ],
        execute: function () {
            thing = new test_1.DemoFunction();
            if (document.readyState !== 'loading') {
                thing.triggerFunction();
            }
            else {
                document.addEventListener('DOMContentLoaded', thing.triggerFunction);
            }
        }
    };
});
//# sourceMappingURL=app.js.map