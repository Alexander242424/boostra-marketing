import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer>
      <div className="h-[500px] flex w-full flex-col px-4 md:px-[121px]">
        <div className="flex gap-2.5">
          <Button size={"lg"}>Test</Button>
          <Button disabled={true} size={"lg"}>
            Test
          </Button>
        </div>
        <div className="flex gap-2.5">
          <Button variant={"secondary"}>Test</Button>
          <Button variant={"secondary"} disabled={true}>
            Test
          </Button>
        </div>
      </div>
    </footer>
  );
}
