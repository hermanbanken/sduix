import React, {Component} from 'react';
import {final} from './final';

type ScreenProps = {
  id?: string;
  header: {
    title: string;
  };
  content?: {
    children: typeof React.Component;
  };
};

export const Screen = (props: ScreenProps) => (
  <>
    <Button text={props.header.title} />
    {Array(10)
      .fill(0, 0, 10)
      .map(_ => (
        <InputField value="nested" />
      ))}
    {/* {...Array(10)
      .fill(0, 0, 10)
      .map(_ => <InputField value="foo" />)} */}
    <View flex style={{}}>
      {Array(10)
        .fill({}, 0, 10)
        .map((c, idx) => {
          return (
            <View key={'id' in c ? c.id : idx} margin-3>
              <InputField {...c} />
            </View>
          );
        })}
    </View>
  </>
);

type ViewProps = {
  flex?: boolean;
  style?: any;
} & {children: JSX.Element[] | JSX.Element};

const View = final<ViewProps>('View');

type ButtonProps = {
  text: string;
};

type InputFieldProps = {
  value: string;
};

export const Button = final<ButtonProps>('Button');
export const InputField = final<InputFieldProps>('InputField');

export const Text = Component;

export const App = <Screen header={{title: 'foo'}} />;