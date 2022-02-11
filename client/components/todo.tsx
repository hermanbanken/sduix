import {Text} from 'react-native-ui-lib';

export const TODO = ({name, props}: {name: string; props: any}) => (
  <Text>
    TODO {name} {JSON.stringify(props)}
  </Text>
);
