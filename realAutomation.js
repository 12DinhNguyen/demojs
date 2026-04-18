class BaseElement {
    constructor(selector) {
        this.selector = selector;
    }
    async click() {

        console.log(`Clicking on ${this.selector}`);

    }
}
// câu
//
// async function testFlow() {
//     const buttonLogin = new BaseElement("#login-button");
//     const buttonSubmit = new BaseElement("#submit-button");

//     await buttonLogin.click();
//     await buttonSubmit.click();
// }

// testFlow();

// const testFlow = async () => {
//     const buttonLogin = new BaseElement("#login-button");
//     const buttonSubmit = new BaseElement("#submit-button");

//     await buttonLogin.click();
//     await buttonSubmit.click();
// };
// testFlow();


// class Button extends BaseElement {
//     doubleClick() {
//         console.log(`Double clicking on ${this.selector}`);
//     }
// }
// // câu 2
// const btn = new Button("#submit-button");
// btn.doubleClick();
// btn.click();

// class InputField extends BaseElement {
//     type(text) {
//         console.log(`Typing "${text}" into ${this.selector}`);
//     }
// }
// // câu 3
// const input = new InputField("input[name='username']");
// input.type("admin");