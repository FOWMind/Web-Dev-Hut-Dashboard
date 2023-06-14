export function Button({ featured = false, label, icon, className = '' }) {
	const Icon = icon

	return (
		<button
			className={`${
				featured ? 'bg-green' : ''
			} px-5 py-3 rounded-lg text-lg w-full flex items-center justify-start ${className}`}
		>
			{icon && <Icon size={24} />}
			<span
				className={`${
					featured ? 'font-medium' : 'font-semibold'
				} ml-2 text-black`}
			>
				{label}
			</span>
		</button>
	)
}
