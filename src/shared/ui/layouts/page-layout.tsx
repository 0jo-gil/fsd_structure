import { forwardRef } from "react";

interface PageLayoutProps {
    children?: React.ReactNode
}

export const PageLayout = forwardRef<HTMLDivElement, PageLayoutProps>(({
    children
}, ref) => {
    return (
        <div ref={ref}>
            {children}
        </div>
    )
})