// src/components/notebooks/StormstanNotebook.tsx
'use client';

import React from 'react';

const principles = [
    {
        title: "Open Collaboration Hub",
        description: "Stormstan functions as a 'GitHub for human thinking,' a centralized platform where ideas can be shared, forked, and developed by a global community."
    },
    {
        title: "IP Release for Acceleration",
        description: "The core mechanic is the 'Ideas Giveup Event,' where intellectual property is voluntarily released upon submission to foster open, rapid, and collaborative innovation."
    },
    {
        title: "Ideas Recycling Mechanism",
        description: "Concepts are not static. They can be 'recycled,' combined, and re-contextualized, allowing old ideas to find new life in different applications, preventing intellectual stagnation."
    },
    {
        title: "Community-Driven Innovation",
        description: "The platform's value is derived from the collective intelligence of its users. It is a merit-based ecosystem where the best ideas are amplified and built upon by the community."
    }
];

export function StormstanNotebook() {
    StormstanNotebook.displayName = "StormstanNotebook";
    return (
        <div className="max-w-4xl mx-auto py-16 px-4 font-pt-sans">
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-8">
                <div className="text-center border-b border-border pb-6">
                    <h1 className="text-2xl md:text-3xl font-light text-foreground font-playfair">Stormstan</h1>
                    <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-2">
                        An "Ideas Recycling Hub" where intellectual property is released to accelerate collaborative creation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {principles.map((principle) => (
                        <div key={principle.title} className="bg-secondary/50 p-4 rounded-md border border-border">
                            <h3 className="text-base font-semibold text-primary">{principle.title}</h3>
                            <p className="text-sm text-muted-foreground mt-2">{principle.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-4">
                    <p className="text-xs text-muted-foreground/80">
                        A full, interactive instrument for this notebook is currently under development to facilitate this collaborative ecosystem.
                    </p>
                </div>
            </div>
        </div>
    );
}
