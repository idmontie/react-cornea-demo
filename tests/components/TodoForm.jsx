import React from 'react';
import { expect } from 'chai';
import { Differ } from 'react-cornea';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import TodoForm from '../../src/components/TodoForm';
const { describe, it } = global;

describe('Todo Form', () => {
  const noop = () => {};

  it('shows a form', () => {
    const wrapper = shallow(<TodoForm handleCreate={noop} />);
    expect(wrapper.find('form').length).to.equal(1);
  });

  it('submits', () => {
    const handleCreate = sinon.spy();
    const wrapper = mount(
      <TodoForm
        handleCreate={handleCreate}
      />
    );

    wrapper.find('input').simulate(
      'change',
      {
        target: {
          value: 'test',
        }
      }
    );
    wrapper.find('form').simulate('submit');

    expect(handleCreate.calledOnce).to.equal(true);
  });

  it('has not visually changed', function(done) {
    this.timeout(10000);

    const differ = new Differ({
      component: <TodoForm handleCreate={noop} />,
      componentName: 'todo-form',
      onSnapshotCreated: done,
      savePath: __dirname + '/',
    });

    differ.compare().then((areTheSame) => {
      expect(areTheSame).to.equal(true);

      differ.cleanup();

      done();
    })
  });
});
