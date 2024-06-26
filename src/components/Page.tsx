import { ReactElement } from "react"

export const Page = ({ children }: { children: ReactElement }) => {
	return (
		<div
			className="page"
			style={{
				position: "absolute",
				display: "inline",
				height: "max(calc(100% - var(--navbar-height)) , 100vh)",
				left: 0,
				right: 0,
				padding: "4px",
			}}
		>
			{children}
		</div>
	);
}