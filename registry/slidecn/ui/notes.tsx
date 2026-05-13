interface NotesProps {
  children: string;
  markdown?: boolean;
}

const Notes = ({ children, markdown }: NotesProps) => (
  <aside className="notes" data-markdown={markdown || undefined}>
    {children}
  </aside>
);

export { Notes };
