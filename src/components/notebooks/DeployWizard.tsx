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
import { Textarea } from '../ui/textarea';
import { SkillPicker } from './SkillPicker';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface DeployWizardProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeployWizard({ children, open, onOpenChange }: DeployWizardProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-3xl bg-neutral-900 border-neutral-800 text-neutral-50">
        <DialogHeader>
          <DialogTitle className="text-xl font-light">Deploy a New Sovereign Intelligence</DialogTitle>
          <DialogDescription className="text-neutral-400">
            Configure the core parameters for your new mind. This will define its purpose, skills, and operational boundaries.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4 max-h-[70vh] overflow-y-auto pr-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right text-neutral-400">Name</Label>
                <Input id="name" placeholder="e.g., Project Phoenix, Market Analyzer" className="col-span-3 bg-neutral-800 border-neutral-700" />
            </div>
             <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="purpose" className="text-right text-neutral-400 pt-2">Purpose</Label>
                <Textarea id="purpose" placeholder="e.g., To analyze market trends for AI startups and generate weekly insight reports." className="col-span-3 bg-neutral-800 border-neutral-700" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right text-neutral-400">Languages</Label>
              <div className="col-span-3 grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger className="bg-neutral-800 border-neutral-700">
                    <SelectValue placeholder="Primary Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ar">Arabic</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="bg-neutral-800 border-neutral-700">
                    <SelectValue placeholder="Secondary Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ar">Arabic</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right text-neutral-400 pt-2">Master Skills</Label>
                <div className="col-span-3">
                    <SkillPicker />
                    <p className="text-xs text-neutral-500 mt-2">Select the core cognitive functions of this intelligence.</p>
                </div>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right text-neutral-400 pt-2">Pre-Feed Learning</Label>
                <div className="col-span-3">
                  <Select>
                    <SelectTrigger className="bg-neutral-800 border-neutral-700">
                      <SelectValue placeholder="Select Domain (e.g., Medicine, Art)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medicine">Medicine</SelectItem>
                      <SelectItem value="art">Art</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="mt-2 bg-neutral-800 border-neutral-700">
                      <SelectValue placeholder="Select Depth" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="practitioner">Practitioner</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right text-neutral-400 pt-2">Inputs (Feeds)</Label>
                <div className="col-span-3">
                    {/* This would be a more complex component for selecting APIs, etc. */}
                    <Input placeholder="Connect data sources (e.g., APIs, Emails, Scans)" className="bg-neutral-800 border-neutral-700" />
                    <p className="text-xs text-neutral-500 mt-2">Define the live data streams for this mind.</p>
                </div>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right text-neutral-400 pt-2">Outputs</Label>
                <div className="col-span-3">
                     {/* This would be a multi-select or tagging component */}
                    <Input placeholder="Define deliverables (e.g., Reports, Decisions, Audio)" className="bg-neutral-800 border-neutral-700" />
                    <p className="text-xs text-neutral-500 mt-2">Choose the output formats for its intelligence.</p>
                </div>
            </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">Deploy Mind</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
