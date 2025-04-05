const SpecialHeading = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
  return (
    <div className="special-heading flex items-center gap-4 text-3xl">
      <span className="text-secondary-color" aria-hidden="true">{ icon }</span>
      <h1 className="font-bold">{ title }</h1>
    </div>
  )
}

export default SpecialHeading