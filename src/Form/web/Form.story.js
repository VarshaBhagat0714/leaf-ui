import { storiesOf } from '@storybook/react';
import Spacer from '../../Spacer/web';
import TextInput from '../../TextInput/web';
import Select from '../../Select/web';
import Checkbox from '../../Checkbox/web';
import RadioButton from '../../RadioButton/web';
import Button from '../../Button/web';
import Form from '../web';
import makeStories from '../makeStories';

makeStories(storiesOf, {
  Spacer,
  TextInput,
  Select,
  Checkbox,
  RadioButton,
  Button,
  Form,
});
