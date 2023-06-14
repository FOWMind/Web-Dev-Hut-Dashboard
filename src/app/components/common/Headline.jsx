export function Headline({ as = 'h2', className = '', children, ...props }) {
	const As = as

	return (
		<As className={`text-4xl font-semibold text-black ${className}`} {...props}>
			{children}
		</As>
	)
}
