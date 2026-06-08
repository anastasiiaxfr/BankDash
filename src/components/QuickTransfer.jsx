import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import CarouselUsers from "@/components/Carousels/CarouselUsers";

function QuickTransfer() {
	return (
		<div className="flex flex-col justify-between gap-15 flex-1 self-stretch h-full">
			<div className="my-auto">
				<CarouselUsers />
			</div>
			<div className="flex flex-wrap gap-10 items-center justify-between">
				<p className="text-cstm-gray-200">Write Amount</p>

				<form action="/" method="POST" className="flex-1 mt-auto">
					<InputGroup className="rounded-full bg-bg border-bg p-0 h-auto focus:outline-0  focus:appearance-none">
						<InputGroupInput
							id="inline-start-input"
							placeholder="525.50"
						/>
						<InputGroupAddon align="inline-end" className="p-0">
							<Button className="btn bg-main text-white rounded-full py-3 px-4 h-auto hover:bg-blue-600 cursor-pointer">
								Send{" "}
								<svg className="icon" width={24} height={24}>
									<use href="#i42"></use>
								</svg>
							</Button>
						</InputGroupAddon>
					</InputGroup>
				</form>
			</div>
		</div>
	);
}

export default QuickTransfer;
