"use client"

import posthog from "posthog-js";
import { useFeatureFlagVariantKey } from "posthog-js/react";
import { Button } from "./ui/button";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function HeaderCtaButton() {

    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
    const ctaCopy = useFeatureFlagVariantKey('cta-copy')

    const openSignupModal = (source: string) => {
        posthog.capture("cta_clicked", { source })
        posthog.capture("signup_modal_opened", { source })
        setIsSignupModalOpen(true)
    }

    return (
        <Button onClick={() => openSignupModal("header")}>
            {ctaCopy === 'test'
                ? 'Get Early Access'
                : 'Join Beta'}
        </Button>
    );
}

export function MainCtaButton() {

    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
    const ctaCopy = useFeatureFlagVariantKey('cta-copy')

    const openSignupModal = (source: string) => {
        posthog.capture("cta_clicked", { source })
        posthog.capture("signup_modal_opened", { source })
        setIsSignupModalOpen(true)
    }

    return (
        <Button size="lg" className="px-8 py-4 text-lg font-semibold" onClick={() => openSignupModal("hero")}>
            {ctaCopy === 'test'
                ? 'Get Early Access'
                : 'Join the Beta'}
            <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
    );
}