import { cx } from "class-variance-authority";

interface MainContentProps extends React.ComponentProps<"main"> { }

export default function MainContent({ children, className, ...props }: MainContentProps) {
    return (
        <main className={cx("t-4-9 md:mt-8", className)} {...props} >{children} </main>
    )
}