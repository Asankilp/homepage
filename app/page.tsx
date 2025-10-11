import { ProfileCard } from "@/components/profile-card"

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background with blur effect */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/bg.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="flex min-h-screen items-center justify-center p-4 md:p-8">
        <ProfileCard />
      </div>

      <div className="fixed bottom-4 right-4 z-10">
        <p className="text-xs text-foreground/60 backdrop-blur-sm bg-background/20 px-3 py-2 rounded-lg border border-border/30 md:text-sm">
          Illust by{" "}
          <a
            href="https://x.com/amsrntk3"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground/80 transition-colors"
          >
            甘城なつき
          </a>
        </p>
      </div>
    </main>
  )
}
