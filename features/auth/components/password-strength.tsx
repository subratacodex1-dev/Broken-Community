export function getPasswordScore(value: string) {
  return [value.length >= 8, /[A-Z]/.test(value), /[0-9]/.test(value), /[^A-Za-z0-9]/.test(value)].filter(Boolean).length;
}

export function PasswordStrength({ value }: { value: string }) {
  const score = getPasswordScore(value);
  const label = ["Very weak", "Weak", "Fair", "Good", "Strong"][score];
  return <div aria-live="polite" className="grid gap-2"><div className="grid grid-cols-4 gap-2">{[0,1,2,3].map((item)=><span key={item} className={`h-1.5 rounded-full ${item < score ? "bg-primary" : "bg-primary/15"}`} />)}</div><p className="text-xs text-[hsl(var(--secondary))]">Password strength: {label}</p></div>;
}
