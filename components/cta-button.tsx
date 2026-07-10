"use client"

import posthog from "posthog-js";
import { useFeatureFlagVariantKey } from "posthog-js/react";
import { Button } from "./ui/button";
import { useState, type ComponentProps } from "react";
import { ArrowRight } from "lucide-react";
import { SignupModal } from "./signup-modal";

function CtaButton({ source, ...buttonProps }: ComponentProps<typeof Button> & { source: string }) {
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

    const openSignupModal = () => {
        posthog.capture("cta_clicked", { source })
        posthog.capture("signup_modal_opened", { source })
        setIsSignupModalOpen(true)
    }

    return (
        <>
            <Button onClick={openSignupModal} {...buttonProps} />
            <SignupModal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)} />
        </>
    );
}

export function HeaderCtaButton() {
    const ctaCopy = useFeatureFlagVariantKey('cta-copy')

    return (
        <CtaButton source="header">
            {ctaCopy === 'test' ? 'Get Early Access' : 'Join Beta'}
        </CtaButton>
    );
}

export function MainCtaButton({ source }: { source: string }) {
    const ctaCopy = useFeatureFlagVariantKey('cta-copy')

    return (
        <CtaButton source={source} size="lg" className="px-8 py-4 text-lg font-semibold">
            {ctaCopy === 'test' ? 'Get Early Access' : 'Join the Beta'}
            <ArrowRight className="ml-2 h-5 w-5" />
        </CtaButton>
    );
}
