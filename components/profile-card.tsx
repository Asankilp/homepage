import { siGithub, siBilibili, siSteam } from "simple-icons"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

function SimpleIcon({ icon, className }: { icon: any; className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
      <path d={icon.path} />
    </svg>
  )
}

export function ProfileCard() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: siGithub,
      href: "https://github.com/Asankilp",
      label: "@Asankilp",
    },
    {
      name: "Bilibili",
      icon: siBilibili,
      href: "https://space.bilibili.com/422499448",
      label: "@Asankilp",
    },
    {
      name: "Steam",
      icon: siSteam,
      href: "https://steamcommunity.com/id/asankilp/",
      label: "@Asankilp",
    },
    {
      name: "Blog",
      // icon removed - using custom inline SVG for Blog
      href: "https://blog.erroro.moe",
      label: "ErrOrO's Space",
    },
  ]

  return (
    <Card className="w-full max-w-2xl backdrop-blur-md bg-card/80 border-border/50 shadow-2xl">
      <div className="p-8 md:p-12 space-y-8">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                <img src="https://blog.erroro.moe/assets/avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full border-4 border-card" /> */}
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-balance text-card-foreground">Asankilp</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">meow</p>
        </div>

        {/* Bio */}
        <div className="text-center space-y-4">
          <p className="text-base md:text-lg text-card-foreground/90 leading-relaxed text-pretty">
            热爱计算机的 ACGN 爱好者。  
            
            希望一切更加美好~！
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center">
            Connect With Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                className="w-full justify-start gap-3 h-auto py-3 px-4 bg-card/50 hover:bg-accent hover:text-accent-foreground border-border/50 transition-all duration-200"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.name === "Blog" ? (
                    <svg
                      className="w-[1.75rem] h-[1.75rem] mb-1 mr-2 fill-current stroke-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M168.448 104.575a2.148 4.446 0 0 1-2.148 4.445 2.148 4.446 0 0 1-2.149-4.445 2.148 4.446 0 0 1 2.149-4.446 2.148 4.446 0 0 1 2.148 4.446"
                        transform="matrix(1.05575 .27872 -.28152 1.04527 -117.998 -144.535)"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2.30885"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.11 185.034a2.914 5.027 0 0 1-2.915 5.027 2.914 5.027 0 0 1-2.914-5.027 2.914 5.027 0 0 1 2.914-5.027 2.914 5.027 0 0 1 2.914 5.027"
                        transform="matrix(.89428 -.62156 .6278 .8854 -117.998 -144.535)"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2.63252"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M115.153 151.38a2.914 5.027 0 0 1-2.914 5.027 2.914 5.027 0 0 1-2.914-5.027 2.914 5.027 0 0 1 2.914-5.028 2.914 5.027 0 0 1 2.914 5.027"
                        transform="matrix(1.08836 -.09559 .09655 1.07756 -117.998 -144.535)"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2.63252"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.82 189.986a2.507 4.325 0 0 1-2.507 4.325 2.507 4.325 0 0 1-2.507-4.325 2.507 4.325 0 0 1 2.507-4.325 2.507 4.325 0 0 1 2.507 4.325"
                        transform="matrix(.89428 -.62156 .6278 .8854 -117.998 -144.535)"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2.26484"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M636.43 289.918c-3.042-.765-5.726-2.858-7.21-5.622-.968-1.805-1.432-3.86-1.476-5.908-.043-2.048.325-4.092.943-6.045a24 24 0 0 1 3.53-6.952l4.284-3.294c3.793-2.4 8.654-3.036 12.938-1.695s7.913 4.636 9.661 8.77c1.03 2.438 1.416 5.23.596 7.746-.41 1.258-1.118 2.426-2.09 3.323s-2.21 1.516-3.522 1.692a6.03 6.03 0 0 1-3.548-.617l-6.498 3.11a10.46 10.46 0 0 1-3.033 3.565 10.46 10.46 0 0 1-4.575 1.927"
                        transform="matrix(.42448 .03626 -.03662 .42027 -243.567 -114.836)"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="none"
                        strokeOpacity="1"
                      />
                    </svg>
                  ) : (
                    <SimpleIcon icon={link.icon} className="w-5 h-5 flex-shrink-0" />
                  )}
                  <div className="flex flex-col items-start flex-1 min-w-0">
                    <span className="text-sm font-medium">{link.name}</span>
                    <span className="text-xs text-muted-foreground truncate w-full">{link.label}</span>
                  </div>
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        {/* <div className="flex justify-center pt-4">
          <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg" asChild>
            <a href="mailto:i@erroro.moe">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get In Touch
            </a>
          </Button>
        </div> */}
      </div>
    </Card>
  )
}
