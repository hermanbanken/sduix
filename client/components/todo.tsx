import {ReactNode} from 'react';
import {Text} from 'react-native-ui-lib';

export const TODO = (props: {
  name: string;
  props: any;
  children?: ReactNode;
}) => (
  <Text>
    TODO {props.name} {JSON.stringify(props)}
  </Text>
);
