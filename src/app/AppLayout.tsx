type AppLayoutProps = {
  children: React.ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <header>
        <h1>NoteFlow v1.0</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default AppLayout