'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function FloatingMessage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm w-full animate-fade-in-up">
      <Card className="bg-primary text-primary-foreground shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <p className="text-sm">
              If you are interested in learning about our courses, email us at{' '}
              <a href="mailto:dreams@dreamfactoryfoundation.africa" className="underline font-semibold">
                dreams@dreamfactoryfoundation.africa
              </a>
            </p>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground -mt-2 -mr-2"
              onClick={() => setIsVisible(false)}
              aria-label="Dismiss message"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

