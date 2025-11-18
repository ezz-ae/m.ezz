
'use client';

import * as React from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Bot } from 'lucide-react';
import { useStudioStore } from '@/lib/store';

type CommandPaletteProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [inputValue, setInputValue] = React.useState('');
  const setQuery = useStudioStore(state => state.setQuery);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === 'K' && (e.metaKey || e.ctrlKey))) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, onOpenChange]);
  
  const handleSelect = (value: string) => {
    setQuery(value);
    onOpenChange(false);
    setInputValue('');
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput 
        placeholder="Ask the Studio AI..." 
        value={inputValue}
        onValueChange={setInputValue}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {inputValue && (
             <CommandGroup heading="Ask AI">
                <CommandItem onSelect={() => handleSelect(inputValue)}>
                     <Bot className="mr-2 h-4 w-4" />
                    <span>{inputValue}</span>
                </CommandItem>
            </CommandGroup>
        )}
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => handleSelect('Explain the ADEPT Kernel')}>
            <Bot className="mr-2 h-4 w-4" />
            <span>Explain the ADEPT Kernel</span>
          </CommandItem>
           <CommandItem onSelect={() => handleSelect('What is the purpose of Notefull?')}>
            <Bot className="mr-2 h-4 w-4" />
            <span>What is the purpose of Notefull?</span>
          </CommandItem>
           <CommandItem onSelect={() => handleSelect('Compare AIXIAM and AIXEYE')}>
            <Bot className="mr-2 h-4 w-4" />
            <span>Compare AIXIAM and AIXEYE</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
