interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <div
        className={`mb-3 h-0.5 w-12 bg-accent${centered ? ' mx-auto' : ''}`}
      />
      <h2 className="text-3xl font-bold text-stone-50 md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-stone-400">{subtitle}</p>
      )}
    </div>
  );
}
