System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n            <h2>Game Setup</h2>\n            Enter your name please:\n            <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        <section\n        [ngClass]=\"{\n            puzzle: true,\n            solved: switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number\n        }\"\n        [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\">\n            <h2>The Puzzle |\n                {{switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number ? 'SOLVED' : 'NOT SOLVED'}}\n            </h2>\n            <p>Ok, welcome <span class=\"name\">{{name.value}}</span></p>\n            <br>\n            Switch 1:\n            <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n            Switch 2:\n            <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n            Switch 3:\n            <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n            Switch 4:\n            <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n        </section>\n        <h2 [hidden]=\"switch1.value != switch1Number || switch2.value != switch2Number || switch3.value != switch3Number || switch4.value != switch4Number\">Congratulations {{name.value}}, You did it!</h2>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0NBO2dCQUFBO2dCQWNBLENBQUM7Z0JBUkcsa0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNoRyxDQUFDO2dCQTVDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUseTJDQTJCVDtxQkFDSixDQUFDOzttQ0FBQTtnQkFlRixzQkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsNkNBY0MsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1wdXp6bGUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2V0dXBcIj5cbiAgICAgICAgICAgIDxoMj5HYW1lIFNldHVwPC9oMj5cbiAgICAgICAgICAgIEVudGVyIHlvdXIgbmFtZSBwbGVhc2U6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmFtZSAoa2V5dXApPVwiMFwiPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uXG4gICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgIHB1enpsZTogdHJ1ZSxcbiAgICAgICAgICAgIHNvbHZlZDogc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiYgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyXG4gICAgICAgIH1cIlxuICAgICAgICBbbmdTdHlsZV09XCJ7ZGlzcGxheTogbmFtZS52YWx1ZSA9PT0gJycgPyAnbm9uZScgOiAnYmxvY2snfVwiPlxuICAgICAgICAgICAgPGgyPlRoZSBQdXp6bGUgfFxuICAgICAgICAgICAgICAgIHt7c3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiYgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyID8gJ1NPTFZFRCcgOiAnTk9UIFNPTFZFRCd9fVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPk9rLCB3ZWxjb21lIDxzcGFuIGNsYXNzPVwibmFtZVwiPnt7bmFtZS52YWx1ZX19PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIFN3aXRjaCAxOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDEgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgICAgICBTd2l0Y2ggMjpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gyIChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgICAgICAgU3dpdGNoIDM6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMyAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgICAgIFN3aXRjaCA0OlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDQgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGgyIFtoaWRkZW5dPVwic3dpdGNoMS52YWx1ZSAhPSBzd2l0Y2gxTnVtYmVyIHx8IHN3aXRjaDIudmFsdWUgIT0gc3dpdGNoMk51bWJlciB8fCBzd2l0Y2gzLnZhbHVlICE9IHN3aXRjaDNOdW1iZXIgfHwgc3dpdGNoNC52YWx1ZSAhPSBzd2l0Y2g0TnVtYmVyXCI+Q29uZ3JhdHVsYXRpb25zIHt7bmFtZS52YWx1ZX19LCBZb3UgZGlkIGl0ITwvaDI+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBQdXp6bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHN3aXRjaDFOdW1iZXI6IG51bWJlcjtcbiAgICBzd2l0Y2gyTnVtYmVyOiBudW1iZXI7XG4gICAgc3dpdGNoM051bWJlcjogbnVtYmVyO1xuICAgIHN3aXRjaDROdW1iZXI6IG51bWJlcjtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN3aXRjaDFOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLnN3aXRjaDJOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLnN3aXRjaDNOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLnN3aXRjaDROdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoMU51bWJlciwgdGhpcy5zd2l0Y2gyTnVtYmVyLCB0aGlzLnN3aXRjaDNOdW1iZXIsIHRoaXMuc3dpdGNoNE51bWJlcik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
