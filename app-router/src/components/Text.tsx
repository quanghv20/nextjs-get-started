import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    highlighted?: boolean;
}

export default function Text({
    className = "",
    highlighted = false,
    children,
    ...props
}: TextProps) {
    const baseClass = "text-sm sm:text-base leading-normal";
    const highlightedClass = highlighted
        ? "font-bold text-teal-500 dark:text-teal-400"
        : "text-zinc-600 dark:text-zinc-400";

    const combinedClassName = `${baseClass} ${highlightedClass} ${className}`.trim();

    return (
        <span className={combinedClassName} {...props}>
            {children}
        </span>
    );
}
