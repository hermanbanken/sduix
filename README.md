# SDUIx
Render React Native UI's in the server using JSX/TSX syntax and send those to the client to be hydrated.

This project is a demonstrator of how easy it is to convert JSX to JSON and to rehydrate it locally. It is a work in progress, and the following things still need to be investigated:

- [ ] allow dynamic logic based on client state (maybe through `<IfState />` blocks?)
- [ ] donut holes: create hole that renders SDUI from different urls
- [ ] actions: expose & hydrate dynamic actions from SDUI
- [ ] versioning: automatically detect incompatibilities in the registry/component-props

## Demo server-side output
```javascript
export const Screen = (props: ScreenProps) => (
  <>
    <View flex margin-3>
      <InputField value="username" />
    </View>
    <View flex margin-3>
      <InputField
        value="password"
        textContentType="password"
        placeholder="Password"
        secureTextEntry
      />
    </View>
    <Button margin-10>
      <Text>Submit</Text>
    </Button>
  </>
);
export const App = <Screen header={{title: 'foo'}} />;
const result = renderToJson(App);
console.log(inspect(result, false, null, true /* enable colors */));
```
results in:

<table><tr><td>

```javascript
// npm run build && node dist/server.js
{
  type: 'Screen',
  props: { header: { title: 'foo' } },
  items: [
    {
      type: '_',
      props: {},
      items: [
        {
          type: 'View',
          props: { flex: true, 'margin-3': true },
          items: [ { type: 'InputField', props: { value: 'username' } } ]
        },
        {
          type: 'View',
          props: { flex: true, 'margin-3': true },
          items: [
            {
              type: 'InputField',
              props: {
                value: 'password',
                textContentType: 'password',
                placeholder: 'Password',
                secureTextEntry: true
              }
            }
          ]
        },
        {
          type: 'Button',
          props: { 'margin-10': true },
          items: [ { type: 'Text', props: {}, items: [ 'Submit' ] } ]
        }
      ]
    }
  ]
}
```

</td>
<td>

![screenshot of demo](screenshot.png)

</td>
</tr>
</table>

### References
- https://github.com/gorangajic/react-render-to-json
- https://stackoverflow.com/questions/60358261/how-to-compile-jsx-server-side
- https://www.storyblok.com/tp/react-dynamic-component-from-json
- https://stackoverflow.com/questions/5905492/dynamic-function-name-in-javascript
