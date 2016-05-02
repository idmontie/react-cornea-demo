import React from 'react';
import { expect } from 'chai';
import { Differ } from 'react-cornea';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Todos from '../../src/components/Todos';
const { describe, it } = global;

describe('Todo', () => {
  const todos = [{
    title: 'test 1',
    isCompleted: false,
  }, {
    title: 'test 2',
    isCompleted: true,
  }];
  const noop = () => {};

  it('shows the titles', () => {
    const wrapper = mount(<Todos todos={todos} handleUpdate={noop} />);
    expect(wrapper.text().indexOf('test 1')).to.not.equal(-1);
    expect(wrapper.text().indexOf('test 2')).to.not.equal(-1);
  });

  it('has not visually changed', function(done) {
    this.timeout(10000);

    const differ = new Differ({
      component: <Todos todos={todos} handleUpdate={noop} />,
      componentName: 'todos',
      onSnapshotCreated: done,
      savePath: __dirname + '/',
      cssFile: __dirname + '/../../styles/app.css',
    });

    differ.compare().then((areTheSame) => {
      expect(areTheSame).to.equal(true);

      differ.cleanup();

      done();
    })
  });
});
