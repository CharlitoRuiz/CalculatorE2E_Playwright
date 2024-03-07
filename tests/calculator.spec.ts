import { test, expect } from '@playwright/test';
import { CalcPage } from '../pages/calculator.pages';
import data from '../fixtures/data.json'

let number1 = data.number1, number2 = data.number2

test.beforeEach('Go to Calculator Page', async ({ page }) => {
  await page.goto('/BasicCalculator.html');
  await expect(page).toHaveTitle(/Basic Calculator/);
  await expect(page.url()).toContain("/BasicCalculator");

});

test('Add two numbers', async ({ page }) => {
  const calcpage = new CalcPage(page);
  await calcpage.enterTwoNumbers(number1, number2);
  await calcpage.chooseOperation(0)
  await  calcpage.clickCalculateButtom();
  await expect(calcpage.txtAnswer).toBeVisible();
  let result = await calcpage.getResult(number1, number2, "Add");
  await expect(calcpage.txtAnswer).toHaveValue(String(result));
});

test('Subtract two numbers', async ({ page }) => {
  const calcpage = new CalcPage(page);
  await calcpage.enterTwoNumbers(number1, number2);
  await calcpage.chooseOperation(1)
  await  calcpage.clickCalculateButtom();
  await expect(calcpage.txtAnswer).toBeVisible();
  let result = await calcpage.getResult(number1, number2, "Subtract");
  await expect(calcpage.txtAnswer).toHaveValue(String(result));
});

test('Multiply two numbers', async ({ page }) => {
  const calcpage = new CalcPage(page);
  await calcpage.enterTwoNumbers(number1, number2);
  await calcpage.chooseOperation(2)
  await  calcpage.clickCalculateButtom();
  await expect(calcpage.txtAnswer).toBeVisible();
  let result = await calcpage.getResult(number1, number2, "Multiply");
  await expect(calcpage.txtAnswer).toHaveValue(String(result));
});

test('Divide two numbers', async ({ page }) => {
  const calcpage = new CalcPage(page);
  await calcpage.enterTwoNumbers(number1, number2);
  await calcpage.chooseOperation(3)
  await  calcpage.clickCalculateButtom();
  await expect(calcpage.txtAnswer).toBeVisible();
  let result = await calcpage.getResult(number1, number2, "Divide");
  await expect(calcpage.txtAnswer).toHaveValue(String(result));
});

test('Concatenate two numbers', async ({ page }) => {
  const calcpage = new CalcPage(page);
  await calcpage.enterTwoNumbers(number1, number2);
  await calcpage.chooseOperation(4)
  await  calcpage.clickCalculateButtom();
  await expect(calcpage.txtAnswer).toBeVisible();
  let result = await calcpage.getResult(number1, number2, "Concatenate");
  await expect(calcpage.txtAnswer).toHaveValue(String(result));
});
