"use client"

import { useState } from "react"
import posthog from "posthog-js"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

interface SignupModalProps {
    isOpen: boolean
    onClose: () => void
}

const emptyForm = {
    name: "",
    email: "",
    platform: "",
    experience: "",
    struggle: "",
    hearAbout: "",
    comments: "",
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
    const [formData, setFormData] = useState(emptyForm)
    const [step, setStep] = useState<'step1' | 'step2'>('step1')
    const [notionPageId, setNotionPageId] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()

    const resetAndClose = () => {
        onClose()
        // Delay reset so it doesn't flash during close animation
        setTimeout(() => {
            setStep('step1')
            setNotionPageId(null)
            setFormData(emptyForm)
        }, 300)
    }

    const handleStep1Submit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        posthog.capture("beta_signup_step1_submitted")

        const distinctId = posthog.get_distinct_id()
        const sessionId = posthog.get_session_id()

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-POSTHOG-DISTINCT-ID': distinctId ?? '',
                    'X-POSTHOG-SESSION-ID': sessionId ?? '',
                },
                body: JSON.stringify({ name: formData.name, email: formData.email }),
            })

            const result = await response.json()

            if (response.ok) {
                posthog.identify(formData.email, {
                    name: formData.name,
                    email: formData.email,
                })
                setNotionPageId(result.id)
                setStep('step2')
            } else if (response.status === 409) {
                toast({
                    title: "You're already on the list!",
                    description: result.error || "This email is already registered.",
                })
                resetAndClose()
            } else {
                toast({
                    title: "Oops! Something went wrong",
                    description: result.error || 'Failed to join. Please try again.',
                    variant: "destructive",
                })
            }
        } catch (error) {
            console.error('Network Error:', error)
            posthog.captureException(error)
            toast({
                title: "Connection Error",
                description: 'Network error. Please check your connection and try again.',
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleStep2Submit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!notionPageId) {
            handleStep2Skip()
            return
        }
        setIsSubmitting(true)

        posthog.capture("beta_signup_step2_submitted", {
            platform: formData.platform,
            experience: formData.experience,
            hear_about: formData.hearAbout,
        })

        const distinctId = posthog.get_distinct_id()

        try {
            await fetch(`/api/waitlist/${notionPageId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'X-POSTHOG-DISTINCT-ID': distinctId ?? '',
                },
                body: JSON.stringify({
                    platform: formData.platform,
                    experience: formData.experience,
                    struggle: formData.struggle,
                    hearAbout: formData.hearAbout,
                    comments: formData.comments,
                }),
            })
        } catch {
            // Step 2 failure is silent — user is already signed up
        } finally {
            setIsSubmitting(false)
        }

        toast({
            title: "You're on the list! 🎉",
            description: "We'll be in touch soon.",
        })
        resetAndClose()
    }

    const handleStep2Skip = () => {
        posthog.capture("beta_signup_step2_skipped")
        toast({
            title: "You're on the list! 🎉",
            description: "We'll be in touch soon.",
        })
        resetAndClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => { if (!open) resetAndClose() }}>
            <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">
                        {step === 'step1' ? 'Join the Beta' : "You're in! 🎉"}
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        {step === 'step1'
                            ? 'Help us build the perfect DSA learning experience for you'
                            : 'Check your email for beta access. While you\'re here, help us build a better app:'}
                    </DialogDescription>
                </DialogHeader>

                {/* Step indicator */}
                <div className="flex items-center justify-center gap-2">
                    <div className={`h-2 w-2 rounded-full transition-colors ${step === 'step1' ? 'bg-primary' : 'bg-muted'}`} />
                    <div className={`h-2 w-2 rounded-full transition-colors ${step === 'step2' ? 'bg-primary' : 'bg-muted'}`} />
                </div>

                {step === 'step1' ? (
                    <form key="step1" onSubmit={handleStep1Submit} className="animate-in fade-in-0 slide-in-from-right-4 duration-200 space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">
                                Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Your first name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="font-mono"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">
                                Email <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="your.email@example.com"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="font-mono"
                            />
                        </div>

                        <div className="flex justify-end">
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Joining..." : "Join Beta"}
                            </Button>
                        </div>
                    </form>
                ) : (
                    <form key="step2" onSubmit={handleStep2Submit} className="animate-in fade-in-0 slide-in-from-right-4 duration-200 space-y-6">
                        <div className="space-y-3">
                            <Label>Which platform are you most interested in?</Label>
                            <RadioGroup
                                value={formData.platform}
                                onValueChange={(value) => setFormData({ ...formData, platform: value })}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="ios" id="ios" />
                                    <Label htmlFor="ios" className="font-normal cursor-pointer">iOS</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="android" id="android" />
                                    <Label htmlFor="android" className="font-normal cursor-pointer">Android</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="space-y-3">
                            <Label>What's your current experience with data structures & algorithms?</Label>
                            <RadioGroup
                                value={formData.experience}
                                onValueChange={(value) => setFormData({ ...formData, experience: value })}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="beginner" id="beginner" />
                                    <Label htmlFor="beginner" className="font-normal cursor-pointer">
                                        Beginner (just starting out)
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="intermediate" id="intermediate" />
                                    <Label htmlFor="intermediate" className="font-normal cursor-pointer">
                                        Intermediate (solved some problems, know the basics)
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="advanced" id="advanced" />
                                    <Label htmlFor="advanced" className="font-normal cursor-pointer">
                                        Advanced (comfortable with LeetCode / interview prep)
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="struggle">What's your biggest struggle with DSA prep?</Label>
                            <Textarea
                                id="struggle"
                                placeholder="e.g., recognizing which pattern to use, staying consistent..."
                                value={formData.struggle}
                                onChange={(e) => setFormData({ ...formData, struggle: e.target.value })}
                                className="font-mono"
                            />
                        </div>

                        <div className="space-y-3">
                            <Label>How did you hear about us?</Label>
                            <RadioGroup
                                value={formData.hearAbout}
                                onValueChange={(value) => setFormData({ ...formData, hearAbout: value })}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="youtube" id="youtube" />
                                    <Label htmlFor="youtube" className="font-normal cursor-pointer">YouTube</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="instagram" id="instagram" />
                                    <Label htmlFor="instagram" className="font-normal cursor-pointer">Instagram</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="search" id="search" />
                                    <Label htmlFor="search" className="font-normal cursor-pointer">Search (Google, etc.)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="other" id="other" />
                                    <Label htmlFor="other" className="font-normal cursor-pointer">Other</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="comments">Any additional comments:</Label>
                            <Textarea
                                id="comments"
                                placeholder="Feel free to share any thoughts, questions, or suggestions..."
                                value={formData.comments}
                                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                                className="font-mono"
                                rows={3}
                            />
                        </div>

                        <div className="flex justify-end">
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Saving..." : "Submit"}
                            </Button>
                        </div>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    )
}
