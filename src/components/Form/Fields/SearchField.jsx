import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

function SearchField() {
	return (
		<form action="/" method="GET">
			<InputGroup
				className="max-w-xs"
				className="bg-bg rounded-full border-bg p-1 h-12.5"
			>
				<InputGroupInput placeholder="Search for something..." />
				<InputGroupAddon>
					<Search />
				</InputGroupAddon>
			</InputGroup>
		</form>
	);
}

export default SearchField;
