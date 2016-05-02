import React from 'react';
import { expect } from 'chai';
import { Differ } from 'react-cornea';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Todo from '../../src/components/Todo';
const { describe, it } = global;

describe('Todo', () => {
  const todo = {
    title: 'test',
    isCompleted: false,
  };
  const noop = () => {};

  it('shows the title', () => {
    const wrapper = shallow(<Todo todo={todo} handleUpdate={noop} />);
    expect(wrapper.contains('test')).to.equal(true);
  });

  it('toggles completed', () => {
    const handleUpdate = sinon.spy();
    const wrapper = shallow(
      <Todo
        todo={todo}
        handleUpdate={handleUpdate}
      />
    );

    wrapper.find('input').simulate('click');

    expect(handleUpdate.calledOnce).to.equal(true);
  });

  it('has not visually changed', function(done) {
    this.timeout(10000);

    const differ = new Differ({
      component: <Todo todo={todo} handleUpdate={noop} />,
      componentName: 'todo',
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
