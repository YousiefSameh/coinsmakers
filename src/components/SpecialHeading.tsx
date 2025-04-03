const SpecialHeading = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
  return (
    <div className="special-heading flex items-center gap-4">
      <span className="text-3xl text-secondary-color">{ icon }</span>
      <h1 className="text-3xl font-bold">{ title }</h1>
    </div>
  )
}

export default SpecialHeading