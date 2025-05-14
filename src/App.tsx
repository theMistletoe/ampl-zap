import { Button, Input, Text } from '@aws-amplify/ui-react'

function App() {
  return (
    <>
      <Button variation="primary">Hello world</Button>
      <Button variation="link">Hello world</Button>
      <Text>Test</Text>
      <Button variation="primary" isLoading={true}>
        Hello world
      </Button>
      <Input placeholder="Hello world" />

    </>
  )
}

export default App
