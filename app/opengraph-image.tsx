import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { decompress } from "wawoff2";
import { site } from "@/lib/site";

export const alt = `${site.name}, product minded backend & infra engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LINE = "#CBCBCB";
const TEXT = "#0a0a0a";
const MUTED = "#6b6b6b";

// Same dashed guides as the site: two vertical lines framing the content
// column and full-width horizontal lines.
const dashed = "2px dashed";
const COLUMN_LEFT = 150;
const COLUMN_RIGHT = 150;

// Satori can't read woff2, so the site's own font files are converted to
// TTF in memory at build time instead of committing TTF copies.
const loadFont = async (file: string) => {
	const woff2 = await readFile(join(process.cwd(), "public/fonts", file));
	return Buffer.from(await decompress(woff2));
};

export default async function OpengraphImage() {
	const [mackinac, fragmentMono, avatar] = await Promise.all([
		loadFont("mackinac-bold.woff2"),
		loadFont("fragment-mono-regular.woff2"),
		readFile(join(process.cwd(), "public/pp.png")),
	]);
	const avatarSrc = `data:image/png;base64,${avatar.toString("base64")}`;

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				position: "relative",
				background: "#ffffff",
				fontFamily: "Fragment Mono",
				color: TEXT,
			}}
		>
			<div
				style={{
					position: "absolute",
					top: 0,
					bottom: 0,
					left: COLUMN_LEFT,
					borderLeft: `${dashed} ${LINE}`,
				}}
			/>
			<div
				style={{
					position: "absolute",
					top: 0,
					bottom: 0,
					right: COLUMN_RIGHT,
					borderLeft: `${dashed} ${LINE}`,
				}}
			/>
			<div
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: 110,
					borderTop: `${dashed} ${LINE}`,
				}}
			/>
			<div
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					bottom: 110,
					borderTop: `${dashed} ${LINE}`,
				}}
			/>

			<div
				style={{
					position: "absolute",
					top: 110,
					bottom: 110,
					left: COLUMN_LEFT,
					right: COLUMN_RIGHT,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					padding: "0 64px",
				}}
			>
				<div style={{ display: "flex", alignItems: "center", gap: 40 }}>
					<img
						src={avatarSrc}
						alt=""
						width={150}
						height={150}
						style={{ borderRadius: 9999 }}
					/>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div
							style={{
								fontFamily: "Mackinac",
								fontSize: 84,
								lineHeight: 1,
							}}
						>
							paul planchon
						</div>
						<div style={{ fontSize: 30, marginTop: 18, color: MUTED }}>
							product minded engineer
						</div>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						fontSize: 26,
						marginTop: 48,
						color: TEXT,
					}}
				>
					backend & infra · Wizz @ Voodoo · Paris
				</div>
			</div>

			<div
				style={{
					position: "absolute",
					bottom: 40,
					left: COLUMN_LEFT + 64,
					right: COLUMN_RIGHT + 64,
					display: "flex",
					justifyContent: "space-between",
					fontSize: 24,
					color: MUTED,
				}}
			>
				<span>p6n.dev</span>
				<span>github.com/planchon</span>
			</div>
		</div>,
		{
			...size,
			fonts: [
				{ name: "Mackinac", data: mackinac, weight: 800, style: "normal" },
				{
					name: "Fragment Mono",
					data: fragmentMono,
					weight: 400,
					style: "normal",
				},
			],
		},
	);
}
