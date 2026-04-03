"use client"

import { useState } from "react"
import {
  siteConfig,
  aboutConfig,
  servicesConfig,
  portfolioConfig,
  pricingConfig,
  vouchesConfig,
  tosConfig,
  type PortfolioItem,
} from "@/config/site.config"

type Page = "home" | "portfolio" | "pricing" | "vouches" | "about" | "tos"

// Icon components
const ServiceIcon = ({ icon }: { icon: string }) => {
  const icons: Record<string, JSX.Element> = {
    animation: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    rigging: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    weightpaint: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    scripting: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  }
  return icons[icon] || icons.animation
}

export function Portfolio() {
  const [currentPage, setCurrentPage] = useState<Page>("home")

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => setCurrentPage("home")}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <img
              src={siteConfig.logo}
              alt={siteConfig.name}
              className="h-8 w-auto"
            />
          </button>

          <ul className="flex items-center gap-8">
            {siteConfig.navLinks.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => setCurrentPage(item.key as Page)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === item.key
                      ? "text-slate-400"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Page Content */}
      <div className="pt-20">
        {currentPage === "home" && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === "portfolio" && <PortfolioPage />}
        {currentPage === "pricing" && <PricingPage />}
        {currentPage === "vouches" && <VouchesPage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "tos" && <TOSPage />}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-zinc-950 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-white/50">
          <p>{siteConfig.footerText}</p>
        </div>
      </footer>
    </div>
  )
}

function HomePage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-500/10 via-transparent to-transparent" />
        <div className="relative z-10 px-6 text-center">
          <h1 className="font-serif text-5xl font-normal tracking-tight text-white md:text-7xl text-balance">
            {siteConfig.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 text-pretty">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate("portfolio")}
              className="rounded-full bg-zinc-500 px-8 py-3 text-sm font-medium text-black transition-all hover:bg-zinc-400 hover:scale-105"
            >
              My Work
            </button>
            <button
              onClick={() => onNavigate("pricing")}
              className="rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/30"
            >
              My Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center font-serif text-3xl text-white md:text-4xl">
          My Skills
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicesConfig.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-zinc-500/50 hover:bg-white/10"
            >
              <div className="mb-4 text-slate-400">
                <ServiceIcon icon={service.icon} />
              </div>
              <h3 className="font-medium text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-white/60">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function PortfolioPage() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  return (
    <div className="animate-in fade-in duration-700">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-serif text-4xl text-white md:text-5xl">Portfolio</h1>
        <p className="mt-4 text-white/60">A selection of my recent 3D work and projects.</p>
        <p className="mt-2 text-sm text-white/40">
  Older work is available here:
  <a 
    href="https://discord.gg/n3X76mZ2hQ"
    target="_blank"
    className="text-slate-400 hover:underline ml-1"
  >
    Discord server
  </a>
</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioConfig.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedItem(project)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900 text-left"
            >
              <img
                src={project.previewImage}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full bg-zinc-500/20 px-3 py-1 text-xs text-slate-400">
                    {project.category}
                  </span>
                  <span className={`inline-block rounded-full px-3 py-1 text-xs ${
                    project.type === "commission" 
                      ? "bg-green-500/20 text-green-400" 
                      : "bg-purple-500/20 text-purple-400"
                  }`}>
                    {project.type}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-medium text-white">{project.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-zinc-900 rounded-2xl border border-white/10 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img
              src={selectedItem.fullImage}
              alt={selectedItem.title}
              className="w-full max-h-[70vh] object-contain"
            />
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block rounded-full bg-zinc-500/20 px-3 py-1 text-xs text-slate-400">
                  {selectedItem.category}
                </span>
                <span className={`inline-block rounded-full px-3 py-1 text-xs ${
                  selectedItem.type === "commission" 
                    ? "bg-green-500/20 text-green-400" 
                    : "bg-purple-500/20 text-purple-400"
                }`}>
                  {selectedItem.type}
                </span>
                <span className="text-xs text-white/50 ml-auto">
                  {selectedItem.dateCreated}
                </span>
              </div>
              
              <h2 className="text-2xl font-medium text-white">{selectedItem.title}</h2>
              <p className="mt-4 text-white/70 leading-relaxed">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function PricingPage() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [copiedDiscord, setCopiedDiscord] = useState(false)

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText('e1arion')
      setCopiedDiscord(true)
      setTimeout(() => setCopiedDiscord(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="animate-in fade-in duration-700">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-serif text-4xl text-white md:text-5xl">Pricing</h1>
        <p className="mt-4 text-white/60">Flexible pricing to fit your project needs.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricingConfig.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl border p-8 transition-all hover:border-zinc-500/50 ${
                pkg.popular
                  ? "border-zinc-500 bg-zinc-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-zinc-500 px-4 py-1 text-xs font-medium text-black">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-medium text-white">{pkg.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{pkg.price}</span>
                <span className="text-white/60"> / {pkg.unit}</span>
              </div>
              <p className="mt-4 text-sm text-white/60">{pkg.description}</p>
              <ul className="mt-6 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/80">
                    <svg
                      className="h-4 w-4 text-slate-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowContactModal(true)}
                className={`mt-8 w-full rounded-full py-3 text-sm font-medium transition-all ${
                  pkg.popular
                    ? "bg-zinc-500 text-black hover:bg-zinc-400"
                    : "border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                Contact Me
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="relative max-w-md w-full bg-zinc-900 rounded-2xl border border-white/10 p-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-xl font-medium text-white mb-4">Contact Me</h3>
            <p className="text-white/70 mb-6">
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 0 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 0 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 1-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Discord</p>
                  <p className="text-xs text-white/60">@e1arion</p>
                </div>
                <button
                  onClick={copyDiscord}
                  className="ml-auto px-3 py-1 text-xs bg-zinc-500 text-black rounded-full hover:bg-zinc-400 transition-colors"
                >
                  {copiedDiscord ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-xs text-white/60">hilarion@e1arion.com</p>
                </div>
                <button
                  onClick={() => window.location.href = 'mailto:hilarion@e1arion.com'}
                  className="ml-auto px-3 py-1 text-xs bg-zinc-500 text-black rounded-full hover:bg-zinc-400 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function VouchesPage() {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-serif text-4xl text-white md:text-5xl">Vouches</h1>
        <p className="mt-4 text-white/60">What clients say about working with me.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vouchesConfig.map((vouch) => (
            <div
              key={vouch.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-zinc-500/30 hover:bg-white/[0.07]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={vouch.profileImage}
                  alt={vouch.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-white">{vouch.name}</h3>
                  <p className="text-sm text-slate-400">{vouch.service}</p>
                </div>
              </div>
              
              <p className="mt-4 text-white/70 leading-relaxed">"{vouch.message}"</p>
              
              <p className="mt-4 text-xs text-white/40">{vouch.dateVouched}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-serif text-4xl text-white md:text-5xl">About Me</h1>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-500/20 to-purple-500/20 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-zinc-900">
                <img
                  src={aboutConfig.profileImage}
                  alt={aboutConfig.title}
                  className="w-600 h-auto"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-2xl text-white">{aboutConfig.title}</h2>
            {aboutConfig.bio.map((paragraph, index) => (
              <p key={index} className="mt-4 text-white/70 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="mt-8">
              <h3 className="text-sm font-medium uppercase tracking-wider text-slate-400">
                Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {aboutConfig.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function TOSPage() {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-serif text-4xl text-white md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-white/60">Last updated: {tosConfig.lastUpdated}</p>

        <div className="mt-12 space-y-8 text-white/70">
          {tosConfig.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-medium text-white">{section.title}</h2>
              <p className="mt-3 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
