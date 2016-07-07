System.register(['@angular/core', "./test.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = 'Scott';
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n        Hi, I'm <span [style.color]=\"inputElement.value === 'yes' ? 'blue' : 'black'\">{{name}}</span> and this is my very first Angular 2 component! <span [class.is-awesome]=\"inputElement.value === 'yes'\">It's so awesome!</span>\n        <br><br>\n        Is it awesome?\n        <input type=\"text\" #inputElement (keyup)=\"0\">\n        (Type 'yes' in the box to see the HTML DOM change)\n        <br><br>\n        <button [hidden]=\"inputElement.value !== 'yes'\">Only enabled if 'yes' was entered</button>\n        <test></test>\n    ",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7Z0JBT0EsQ0FBQztnQkFKRyx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO2dCQUN4QixDQUFDO2dCQXBCTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsa2lCQVNUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUM5QixDQUFDOzt3Q0FBQTtnQkFRRiwyQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsdURBT0MsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUZXN0Q29tcG9uZW50fSBmcm9tIFwiLi90ZXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIEhpLCBJJ20gPHNwYW4gW3N0eWxlLmNvbG9yXT1cImlucHV0RWxlbWVudC52YWx1ZSA9PT0gJ3llcycgPyAnYmx1ZScgOiAnYmxhY2snXCI+e3tuYW1lfX08L3NwYW4+IGFuZCB0aGlzIGlzIG15IHZlcnkgZmlyc3QgQW5ndWxhciAyIGNvbXBvbmVudCEgPHNwYW4gW2NsYXNzLmlzLWF3ZXNvbWVdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJ1wiPkl0J3Mgc28gYXdlc29tZSE8L3NwYW4+XG4gICAgICAgIDxicj48YnI+XG4gICAgICAgIElzIGl0IGF3ZXNvbWU/XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgKFR5cGUgJ3llcycgaW4gdGhlIGJveCB0byBzZWUgdGhlIEhUTUwgRE9NIGNoYW5nZSlcbiAgICAgICAgPGJyPjxicj5cbiAgICAgICAgPGJ1dHRvbiBbaGlkZGVuXT1cImlucHV0RWxlbWVudC52YWx1ZSAhPT0gJ3llcydcIj5Pbmx5IGVuYWJsZWQgaWYgJ3llcycgd2FzIGVudGVyZWQ8L2J1dHRvbj5cbiAgICAgICAgPHRlc3Q+PC90ZXN0PlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW1Rlc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdTY290dCc7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
