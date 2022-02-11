import type {ClassType, FunctionComponent} from 'react';
import {Screen} from './screen';
import {TODO} from './todo';
import {InputField} from './input';
import {Text, View, Button} from 'react-native-ui-lib';
export type {TextFieldProps} from 'react-native-ui-lib/typings';
export type {ButtonProps} from 'react-native-ui-lib';

export const registry: Record<
  string,
  FunctionComponent | ClassType<any, any, any>
> = {
  Screen,
  InputField,
  View,
  Button: Button,
  Text,
  TODO,
};
