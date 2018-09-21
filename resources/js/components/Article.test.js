import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Article from './Article';

describe('Article', () => {
    const article = {
        "title": "Test Article",
        "body": "Sample text",
        "created_at": "2018-09-20 09:30:01"
    }

  it('should render correctly', () => {
    const output = shallow(
      <Article article={article} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
