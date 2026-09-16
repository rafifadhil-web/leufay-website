type Props = { label: string; className?: string; src?: string };

export function AssetPlaceholder({ label, className = '', src }: Props) {
  if (src) {
    return <div className={`asset-placeholder ${className}`}><img src={src} alt={label} /></div>;
  }

  return <div className={`asset-placeholder ${className}`} role="img" aria-label={`Placeholder for ${label}`}><span>ASSET SLOT</span><strong>{label}</strong><small>Replace in public/assets</small></div>;
}
