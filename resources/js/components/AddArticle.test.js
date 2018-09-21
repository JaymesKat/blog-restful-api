import React from 'react';
import { mount } from 'enzyme';
import AddArticle from './AddArticle';

describe('AddArticle', () => {

  it('should render form', () => {

    const addArticleMock = jest.fn();
    const component = mount(
        <AddArticle onAdd={addArticleMock} />
    );

    component.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(addArticleMock.mock.calls.length).toBe(1);
  });
});
