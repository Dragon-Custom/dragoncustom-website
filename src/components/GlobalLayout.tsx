import {
	Button,
	ButtonGroup,
	Image,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import svgLogo from "../assets/Logos/SVG/LogoWith2LinesLargeText.svg";
import darkModeLogo from "../assets/Logos/SVG/LogoWith2LinesLargeWhiteText.svg";
import { useState } from "react";
import { RouteList } from "../RouteList";
import { Link } from "react-router-dom";

export default function GlobalLayout() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<Navbar
				position="sticky"
				onMenuOpenChange={setIsMenuOpen}
				maxWidth="full"
				isBordered
				style={{
					overflow: "hidden",
				}}
			>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Button
						to="/"
						as={Link}
						variant="light"
						style={{
							height: "3.5rem",
						}}
					>
						<Image
							className="dark:hidden"
							src={svgLogo}
							style={{
								height: "4rem",
							}}
							isBlurred
						/>
						<Image
							className="hidden dark:inline"
							src={darkModeLogo}
							style={{
								height: "4rem",
							}}
							isBlurred
						/>
					</Button>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-4" justify="end">
					<ButtonGroup variant="ghost" radius="full" fullWidth>
						{RouteList.map((item, index) => {
							if (item.hidden) return;
							return (
								<Button
									key={`${item.title}-${index}`}
									startContent={item.icon}
									fullWidth
									to={item.url}
									as={Link}
								>
									{item.title}
								</Button>
							);
						})}
					</ButtonGroup>
				</NavbarContent>

				<NavbarMenu portalContainer={document.body.firstElementChild?.firstElementChild?.firstElementChild}>
					{RouteList.map((item, index) => (
						<NavbarMenuItem key={`${item.title}-${index}`}>
							<Button
								fullWidth
								as={Link}
								variant="ghost"
								to={item.url}
								size="lg"
								radius="none"
							>
								{item.title}
							</Button>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</Navbar>
		</>
	);
}
