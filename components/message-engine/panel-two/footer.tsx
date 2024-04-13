"use client";

import * as React from "react";

import { ImagePlus, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EmojiInput } from "@/components/emoji-picker";
import { Input } from "@/components/ui/input";

type Props = {};

const Footer = (props: Props) => {
  const [emoji, setEmoji] = React.useState("");
  const [text, setText] = React.useState("");

  const onChange = (e: string) => {
    setText((prev) => prev + e);
  };

  return (
    <footer className="w-full px-4 py-2 rounded-md shadow-sm bg-background">
      <form>
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center space-x-2">
          <Button variant={"ghost"} size={"icon"} className="group">
            <ImagePlus
              size={20}
              className="text-muted-foreground group-hover:text-foreground"
            />
            <span className="sr-only">upload image</span>
          </Button>
          <EmojiInput val={emoji} onChange={onChange} />
          <Input
            placeholder="Enter message..."
            type="text"
            className="w-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button variant={"default"} size={"sm"} className="group">
            Send
            <Send className="flex-shrink-0 ml-2 size-4 text-muted-foreground group-hover:text-primary-foreground" />
          </Button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;