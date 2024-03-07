import { type Locator, type Page } from '@playwright/test';

let number1, number2

export class CalcPage {
  readonly page: Page;
  readonly txtFirstNumber: Locator;
  readonly txtSecondNumber: Locator;
  readonly dropOperation: Locator;
  readonly btnCalculate: Locator;
  readonly txtAnswer: Locator;


  constructor(page:Page){
    this.page = page;
    this.txtFirstNumber = page.locator('#number1Field');
    this.txtSecondNumber = page.locator('#number2Field');
    this.dropOperation = page.locator('#selectOperationDropdown')
    this.btnCalculate = page.getByRole('button', { name: 'Calculate' })
    this.txtAnswer = page.locator('#numberAnswerField');

  }

  // Methods
  async goto(url){
    await this.page.goto(url);
  }
  async enterTwoNumbers(number1, number2){
    await this.txtFirstNumber.fill(number1)
    await this.txtSecondNumber.fill(number2)
  }
  async clickCalculateButtom(){
    await this.btnCalculate.click()
  }
  async chooseOperation(index){
    await this.dropOperation.selectOption({index:index});
  }
  async getResult(number1, number2, operation){
    let answer
    switch (operation.toLowerCase()) {
      case "add": answer = Number(number1) + Number(number2)
      break;
      case "subtract": answer = Number(number1) - Number(number2)
      break;
      case "multiply": answer = Number(number1) * Number(number2)
      break;
      case "divide": answer = Number(number1) / Number(number2)
      break;
      default:answer = String(number1) + String(number2)
        break;
    }
    return answer;
  }
}