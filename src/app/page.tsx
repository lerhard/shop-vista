import {Button} from "@atoms/Button/Button";
import {ButtonVariants} from "@atoms/Button/ButtonEnums";

export default function Home() {
  return (
      <main>
            <Button variant={ButtonVariants.Outline}>Click me</Button>
      </main>
  )
}
