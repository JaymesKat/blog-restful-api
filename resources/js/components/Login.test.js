import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login'


describe('Login Component', () => {

 it('should render correctly', () => {
   expect(shallow(<Login />).find('form.login').exists()).toBe(true)
 })
 it('renders a email input', () => {
    expect(shallow(<Login />).find('#email').length).toEqual(1)
   })
  it('renders a password input', () => {
    expect(shallow(<Login />).find('#password').length).toEqual(1)
   })
})
