export default function setColorActivButton(event: React.MouseEvent) {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.parentElement instanceof HTMLDivElement) {
            let parent = event.target.parentElement;
            parent.querySelectorAll("button").forEach(button => {
                button.style.backgroundColor = "#020B14";
            })
        }
        event.target.style.backgroundColor = "#1F73F9";
    }
}