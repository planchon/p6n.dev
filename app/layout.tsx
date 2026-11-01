import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { baseOpenGraph, site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: site.title,
		template: `%s · ${site.name}`,
	},
	description: site.description,
	applicationName: site.handle,
	authors: [{ name: site.name, url: site.url }],
	creator: site.name,
	publisher: site.name,
	openGraph: baseOpenGraph,
	twitter: {
		card: "summary_large_image",
		title: site.title,
		description: site.description,
		creator: site.twitter,
		site: site.twitter,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	// Only needed for a "URL prefix" property in Google Search Console
	// verified with the HTML tag method. A "Domain" property is verified
	// with a DNS TXT record instead and doesn't need this.
	verification: process.env.GOOGLE_SITE_VERIFICATION
		? { google: process.env.GOOGLE_SITE_VERIFICATION }
		: undefined,
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#151515" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
			>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
