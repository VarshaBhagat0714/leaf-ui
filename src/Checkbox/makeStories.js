import React from 'react';

export default (storiesOf, { Checkbox }) =>
  storiesOf('Checkbox', module)
    .add('simple', () => (
      <Checkbox
        name="areLeavesGreen"
        label="Are leaves green?"
      />
    ))
    .add('disabled', () => (
      <Checkbox
        name="areLeavesGreen"
        label="Are leaves green?"
        disabled
        defaultChecked
      />
    ))
    .add('with error', () => (
      <Checkbox
        name="areLeavesMadeOfGlass"
        label="Are leaves made of glass?"
        error="no they're not"
        defaultChecked
      />
    ));
