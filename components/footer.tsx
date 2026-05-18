export function Footer() {
    return (
        <footer className="border-t border-border/40 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <img src="/images/icon.svg" alt="AlgoPattern logo" className="h-8 w-8 object-contain" />
                        <span className="font-bold text-xl text-foreground">AlgoPattern</span>
                        <span className="text-muted-foreground">© 2026</span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}