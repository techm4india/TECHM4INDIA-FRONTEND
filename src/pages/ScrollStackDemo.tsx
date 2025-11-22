import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'

export default function ScrollStackDemo() {
  return (
    <div className="min-h-screen">
      <ScrollStack>
        <ScrollStackItem>
          <h2 className="text-3xl font-bold mb-4">Card 1</h2>
          <p className="text-lg">This is the first card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2 className="text-3xl font-bold mb-4">Card 2</h2>
          <p className="text-lg">This is the second card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2 className="text-3xl font-bold mb-4">Card 3</h2>
          <p className="text-lg">This is the third card in the stack</p>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  )
}

