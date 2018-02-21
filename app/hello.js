var FirstNameSpace;
(function (FirstNameSpace) {
    var NotExported = /** @class */ (function () {
        function NotExported() {
        }
        return NotExported;
    }());
    var NameSpaceClass = /** @class */ (function () {
        function NameSpaceClass() {
        }
        return NameSpaceClass;
    }());
    FirstNameSpace.NameSpaceClass = NameSpaceClass;
})(FirstNameSpace || (FirstNameSpace = {}));
var SecondNameSpace;
(function (SecondNameSpace) {
    var NameSpaceClass = /** @class */ (function () {
        function NameSpaceClass() {
        }
        return NameSpaceClass;
    }());
    SecondNameSpace.NameSpaceClass = NameSpaceClass;
})(SecondNameSpace || (SecondNameSpace = {}));
window.onload = function () {
    var unionType;
    unionType = 1;
    console.log("unionType : " + unionType);
    unionType = "test";
    console.log("unionType : " + unionType);
    function addWithTypeGuard(arg1, arg2) {
        if (typeof arg1 === "string") {
            // arg1 is treated as string within this code
            console.log("first argument is a string");
            return arg1 + arg2;
        }
        if (typeof arg1 === "number" && typeof arg2 === "number") {
            // arg1 and arg2 are treated as numbers within this code
            console.log("both arguments are numbers");
            return arg1 + arg2;
        }
        console.log("default return");
        return arg1.toString() + arg2.toString();
    }
    console.log("addWithTypeGuard(1,2)=" + addWithTypeGuard(1, 2)); // con backtick | backquote
    function addWithAlias(arg1, arg2) {
        return arg1.toString() + arg2.toString();
    }
    console.log("addWithAlias: " + addWithAlias(2, 3));
    var f = function (message) { console.log(message); };
    function usingCallbackWithString(callback) {
        callback("this is a string");
    }
    usingCallbackWithString(f);
    var idOnly = { id: 1 };
    var idAndName = {
        id: 2, name: "idAndName"
    };
    idAndName = idOnly;
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
    var ClassA = /** @class */ (function () {
        function ClassA() {
        }
        ClassA.prototype.print = function () { console.log('ClassA.print()'); };
        ;
        return ClassA;
    }());
    var ClassB = /** @class */ (function () {
        function ClassB() {
        }
        ClassB.prototype.print = function () { console.log("ClassB.print()"); };
        ;
        return ClassB;
    }());
    function printClass(a) {
        a.print();
    }
    var classA = new ClassA();
    var classB = new ClassB();
    printClass(classA);
    printClass(classB);
    var ClassWithConstructor = /** @class */ (function () {
        function ClassWithConstructor(_id, _name) {
            this.id = _id;
            this.name = _name;
        }
        return ClassWithConstructor;
    }());
    var c = new ClassWithConstructor(1, "Nome01");
    console.log("Il nome di ClassWithConstructor \u00E8: " + c.name);
    var StaticClass = /** @class */ (function () {
        function StaticClass() {
        }
        StaticClass.printTwo = function () {
            console.log("StaticClass.printTwo() -> 2");
        };
        return StaticClass;
    }());
    StaticClass.printTwo();
    var StaticProperty = /** @class */ (function () {
        function StaticProperty() {
        }
        StaticProperty.prototype.updateCount = function () {
            StaticProperty.count++;
        };
        StaticProperty.count = 0;
        return StaticProperty;
    }());
    var firstInstance = new StaticProperty();
    console.log("StaticProperty.count = " + StaticProperty.count);
    firstInstance.updateCount();
    console.log("StaticProperty.count = " + StaticProperty.count);
    var secondInstance = new StaticProperty();
    secondInstance.updateCount();
    console.log("StaticProperty.count = " + StaticProperty.count);
    var firstNameSpace = new FirstNameSpace.NameSpaceClass();
    // let notExported = new FirstNameSpace.NotExported(); // Va in errore, NotExported non è accessibile.
};
//# sourceMappingURL=hello.js.map