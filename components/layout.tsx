import Header from "@/components/Common/header";
import Footer from "@/components/Common/footer";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <div className="relative block md:flex">
        <Header />
        <div className="mx-auto">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
