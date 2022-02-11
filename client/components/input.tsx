import React from 'react';
import {TextField} from 'react-native-ui-lib';
import {TextFieldProps} from 'react-native-ui-lib/typings';

export const InputField = (props: TextFieldProps) => <TextField migrate={false} {...props} />