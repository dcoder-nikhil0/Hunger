import { ReactNode } from "react";

interface BottomSheetProps {
  children: ReactNode;
}

const BottomSheet = ({ children }: BottomSheetProps) => {
  return (
    <section
      className="
      flex
      flex-col
      items-center
      px-8
      py-10
      bg-white
      flex-1
      "
    >
      {children}
    </section>
  );
};

export default BottomSheet;