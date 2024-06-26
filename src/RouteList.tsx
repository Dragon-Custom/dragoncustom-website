import CategoryIcon from '@mui/icons-material/Category';
import NewspaperIcon from "@mui/icons-material/Newspaper";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { ReactElement } from 'react';
import { HomePage } from './pages/Home';
import { ProductsPage } from './pages/Products';
import { NewsPage } from './pages/News';
import { AboutUsPage } from './pages/AboutUs';
interface RouteItem {
	title: string;
	url: string;
	page: ReactElement;
	icon?: ReactElement;
	hidden?: boolean;
}
export const RouteList: Array<RouteItem> = [
	{
		title: "Home",
		url: "/",
		page: <HomePage />,
		hidden: true,
	},
	{
		title: "Products",
		url: "/products",
		page: <ProductsPage />,
		icon: <CategoryIcon />,
	},
	{
		title: "News",
		url: "/news",
		page: <NewsPage />,
		icon: <NewspaperIcon />,
	},
	{
		title: "Support",
		url: "/support",
		page: <div>Support Page</div>,
		icon: <SupportAgentIcon />,
	},
	{
		title: "About Us",
		url: "/about",
		page: <AboutUsPage />,
		icon: <InfoIcon />,
	},
	{
		title: "Contact Us",
		url: "/contact",
		page: <div>Contact Us Page</div>,
		icon: <PhoneIcon />,
	},
];