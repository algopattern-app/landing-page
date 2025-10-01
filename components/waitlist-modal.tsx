"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

interface WaitlistModalProps {
    isOpen: boolean
    onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
    const [formData, setFormData] = useState({
        email: "",
        platform: "",
        experience: "",
        struggle: "",
        pricing: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // TODO: Implement actual form submission logic
        console.log("Waitlist form data:", formData)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))

        setIsSubmitting(false)
        onClose()

        // TODO: Show success message
        alert("Thanks for joining the waitlist! We'll be in touch soon.")
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">Join the Waitlist</DialogTitle>
                    <DialogDescription className="text-center">
                        Help us build the perfect DSA learning experience for you
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email */}
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

                    {/* Platform Preference */}
                    <div className="space-y-3">
                        <Label>Which platform are you most interested in?</Label>
                        <RadioGroup
                            value={formData.platform}
                            onValueChange={(value) => setFormData({ ...formData, platform: value })}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="ios" id="ios" />
                                <Label htmlFor="ios" className="font-normal cursor-pointer">
                                    iOS
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="android" id="android" />
                                <Label htmlFor="android" className="font-normal cursor-pointer">
                                    Android
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Experience Level */}
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

                    {/* Biggest Struggle */}
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

                    {/* Pricing */}
                    <div className="space-y-3">
                        <Label>What would you consider a fair monthly price for full access?</Label>
                        <RadioGroup value={formData.pricing} onValueChange={(value) => setFormData({ ...formData, pricing: value })}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="under-5" id="under-5" />
                                <Label htmlFor="under-5" className="font-normal cursor-pointer">
                                    {"< $5 / month"}
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="5-10" id="5-10" />
                                <Label htmlFor="5-10" className="font-normal cursor-pointer">
                                    $5-$10 / month
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="10-20" id="10-20" />
                                <Label htmlFor="10-20" className="font-normal cursor-pointer">
                                    $10-$20 / month
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="20-plus" id="20-plus" />
                                <Label htmlFor="20-plus" className="font-normal cursor-pointer">
                                    $20+ / month
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Joining..." : "Join Waitlist"}
                        </Button>
                    </div>

                </form>
            </DialogContent>
        </Dialog>
    )
}