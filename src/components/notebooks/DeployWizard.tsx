// src/components/notebooks/DeployWizard.tsx
"use client";

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SkillPicker } from './SkillPicker';

interface DeployWizardProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeployWizard({ children, open, onOpenChange }: DeployWizardProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl bg-neutral-900 border-neutral-800 text-neutral-50">
        <DialogHeader>
          <DialogTitle className="text-xl font-light">Deploy a New Sovereign Intelligence</DialogTitle>
          <DialogDescription className="text-neutral-400">
            Configure the core parameters for your new mind.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right text-neutral-400">Name</Label>
                <Input id="name" placeholder="e.g., Project Phoenix" className="col-span-3 bg-neutral-800 border-neutral-700" />
            </div>
             <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="purpose" className="text-right text-neutral-400">Purpose</Label>
                <Input id="purpose" placeholder="e.g., To analyze market trends for AI startups" className="col-span-3 bg-neutral-800 border-neutral-700" />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right text-neutral-400 pt-2">Master Skills</Label>
                <div className="col-span-3">
                    <SkillPicker />
                </div>
            </div>
            {/* Additional steps for Pre-Feed Learning, Inputs, and Outputs would go here */}
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">Deploy Mind</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
