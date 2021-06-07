import * as yup from 'yup'

export const fruits = [
  'apples',
  'oranges',
  'grapes',
  'grapefruit',
  'strawberry',
  'lemons',
  'cherry',
  'rhubarb',
  'banana',
  'custard-apple',
  'pineapple',
  'mango',
  'blueberry',
  'kiwi',
  'pear',
  'apricots',
  'naartjie',
  'mandarin',
  'clementine',
  'grenadilla',
  'nectarines',
  'passionfruit',
  'watermelons',
  'rockmelons'
]

export const validationSchema = fruits.reduce((acc, fruit) => {
  return { ...acc, [fruit]: yup.string().required() }
}, {})

export const initialValues = fruits.reduce((acc, fruit) => {
  return { ...acc, [fruit]: '' }
}, {})

export const initialErrors = fruits.reduce((acc, fruit) => {
  return { ...acc, [fruit]: '' }
}, {})

export const initialTouched = fruits.reduce((acc, fruit) => {
  return { ...acc, [fruit]: false }
}, {})
