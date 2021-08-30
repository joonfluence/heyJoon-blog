import { FC } from "react";

export type Props = {
  title: string;
};

const Intro: FC<Props> = ({ title }) => {
  return (
    <section className="flex justify-between items-center mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}
      </h1>
    </section>
  );
};

export default Intro;
