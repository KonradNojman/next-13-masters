import { CustomInput } from "@/ui/atoms/CustomInput";
import { CustomLabel } from "@/ui/atoms/CustomLabel";

export function InputWithLabel({
	label,
	name,
	type,
	placeholder,
	...rest
}: {
	label: string;
	name: string;
	type: string;
	placeholder: string;
	[key: string]: unknown;
}) {
	return (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<CustomLabel htmlFor={name}>{label}</CustomLabel>
			<CustomInput type={type} id={name} name={name} placeholder={placeholder} {...rest} />
		</div>
	);
}
