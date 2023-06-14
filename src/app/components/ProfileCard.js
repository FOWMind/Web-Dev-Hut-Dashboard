export function ProfileCard({ className = '', ...props }) {
	return (
		<div
			className={`bg-soft-grey rounded-lg py-1 px-3 ${className}`}
			{...props}
		>
			<img
				src="/img/avatar.svg"
				alt=""
				width="40"
				height="40"
				className="w-[40px] h-[40px] rounded-3xl object-cover object-center bg-red-500 border-2 border-grey inline-block"
			/>
			<span className="text-black text-lg font-medium inline-block align-middle ml-4">
				John Doe
			</span>
		</div>
	)
}
