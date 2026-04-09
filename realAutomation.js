class BaseElement {
    constructor(selector) {
        this.selector = selector;
    }
    click() {
        console.log(`Clicking on ${this.selector}`);
    }
}
// câu 1
// const buttonLogin = new BaseElement("#login-button");
// const buttonSubmit = new BaseElement("#submit-button");
// buttonLogin.click();
// buttonSubmit.click();

class Button extends BaseElement {
    doubleClick() {
        console.log(`Double clicking on ${this.selector}`);
    }
}
// câu 2
const btn = new Button("#submit-button");
btn.doubleClick();
btn.click();

class InputField extends BaseElement {
    type(text) {
        console.log(`Typing "${text}" into ${this.selector}`);
    }
}
// câu 3
const input = new InputField("input[name='username']");
input.type("admin");