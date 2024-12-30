import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import { ThemeProvider } from "@/providers/theme-provider"
import { AppProvider } from "@/providers/app-provider"
import { LayoutProps } from "@/@types"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { GridBackground } from "@/components/grid-background"
import "./globals.css"

const firaCode = Fira_Code({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sushi memory game",
  description: "Engage in a fun and challenging memory game that tests your ability to recall and match pairs of cards. Perfect for up to 4 players, this game encourages concentration, sharpens cognitive skills, and promises an enjoyable time for players of all ages."
}

// export const metadata: Metadata = {
//   title: "Sushi memory game",
//   description: "Engage in a fun and challenging memory game that tests your ability to recall and match pairs of cards. Perfect for up to 4 players, this game encourages concentration, sharpens cognitive skills, and promises an enjoyable time for players of all ages.",
//   viewport: "width=device-width, initial-scale=1",
//   icons: {
//     icon: "./favicon.ico"
//   },
//   openGraph: {
//     title: "Sushi memory game",
//     description: "Engage in a fun and challenging memory game that tests your ability to recall and match pairs of cards. Perfect for up to 4 players, this game encourages concentration, sharpens cognitive skills, and promises an enjoyable time for players of all ages.",
//     url: "URL da página",
//     images: [
//       {
//         url: "../../public\android-chrome-192x192.png",
//         width: 800,
//         height: 600,
//         alt: "Descrição da imagem",
//       }
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Sushi memory game",
//     description: "Engage in a fun and challenging memory game that tests your ability to recall and match pairs of cards. Perfect for up to 4 players, this game encourages concentration, sharpens cognitive skills, and promises an enjoyable time for players of all ages.",
//     images: ["../../public\android-chrome-192x192.png"],
//   },
//   robots: {
//     index: true,
//     follow: true
//   },
//   creator: "Nathan Ferreira"
// }

export default function RootLayout({ children, }: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body className={cn(firaCode.className, "antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <AppProvider>
            <GridBackground>
              <Header />
              {children}
            </GridBackground>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
