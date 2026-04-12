import JustValidate from 'just-validate';

import "/src/sass/style.scss";

try {
    const validator = new JustValidate('form');

    validator.addField('#Surname', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 2,
    },
  ])
  .addField('#Name', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 2,
    },
  ])
  .addField('#Patronymic', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 2,
    },
  ])
  .addField('#numbers', [
    {
      rule: 'required',
    },
    {
      rule: 'number',
    },
  ])
  .addField('#Email', [
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ])
  .addField('#Numbers', [
    {
      rule: 'required',
    },
    {
      rule: 'number',
    },
  ])
  .addField('#Address', [
    {
      rule: 'required',
    },
  ])
  .addField('#Region', [
    {
      rule: 'required',
    },
  ])
  .addField('#Delivery', [
    {
      rule: 'required',
    },
  ])
  .addField('#Type', [
    {
      rule: 'required',
    },
  ])
  .addField('#Date', [
    {
      rule: 'required',
    },
  ])
  .addField('#Time', [
    {
      rule: 'required',
    },
  ]);;
} catch (e) {

}