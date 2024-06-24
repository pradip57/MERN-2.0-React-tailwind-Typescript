import { ReactNode } from "react";
interface SectionTitleComponentPropsType {
  children: ReactNode;
}

export const SectionTitleComponent = ({
  children,
}: SectionTitleComponentPropsType): ReactNode => {
  return (
    <>
      <div className="bg-gray-200 my-5">
        <div className="mx-auto max-w-2xl px-6 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {children}
          </h2>
        </div>
      </div>
    </>
  );
};
