import Header from "@/components/Common/header";
import Footer from "@/components/Common/footer";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen">
      <div className="relative block md:flex">
        <Header />
        <div className="mx-auto">
          <main className="h-screen overflow-y-scroll">
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
