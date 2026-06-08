import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "../layouts/Logo";

function NotFound() {
  return (
    <main className="flex-1 flex flex-col gap-2 xl:gap-10 items-center justify-center p-4 lg:p-10 w-full">
      <div className="grid gap-3 text-center justify-center">
        <div className="mx-auto">
          <Logo />
        </div>
        <h1 className="text-9xl lg:text-[10em] font-bold leading-none">404</h1>
        <p>Sorry, we couldn't fint that page</p>

        <Button
          asChild
          className="bg-main px-6 py-3 h-auto hover:bg-blue-600 mx-auto"
        >
          <Link to="/">GO TO HOME</Link>
        </Button>
      </div>
    </main>
  );
}

export default NotFound;
