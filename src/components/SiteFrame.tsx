import { Navbar } from './Navbar'; import { Footer } from './Footer'; import { ScrollProgress } from './ScrollProgress';
export function SiteFrame({children}:{children:React.ReactNode}) { return <><ScrollProgress/><Navbar/><main>{children}</main><Footer/></>; }
