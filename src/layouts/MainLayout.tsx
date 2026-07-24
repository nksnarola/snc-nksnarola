import { FunctionComponent, PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center",
      )}
    >
      <h1 className="mb-5 font-bold text-xl text-blue-600">
        Click on person to get data
      </h1>
      <div className={classNames("flex gap-2")}>
        {Object.values(Person).map((person) => (
          <Button key={person} variant="danger">
            {person}
          </Button>
        ))}
        <button />
      </div>
    </main>
  );
};
