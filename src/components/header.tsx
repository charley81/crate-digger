type HeaderProps = {
  title: string
  description: string
}

export function Header({ title, description }: HeaderProps) {
  return (
    <div>
      <h3 className="text-4xl font-thin">{title}</h3>
      <p className="mt-1 text-slate-500">{description}</p>
    </div>
  )
}
