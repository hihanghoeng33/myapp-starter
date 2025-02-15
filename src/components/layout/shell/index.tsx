import Navbar from "../navbar"
import Footer from "../footer";
type AppShellProps = {
    children: React.ReactNode;  // Children prop to render within the AppShell
}

const AppShell = (props: AppShellProps) => {
    const {children} = props;
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}

export default AppShell;