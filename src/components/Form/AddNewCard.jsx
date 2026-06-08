import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import DatePicker from "./Fields/DatePicker";

function AddNewCard() {
  return (
    <form method="POST" action="/" className="grid gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="card-type">Card Type</FieldLabel>
            <Input
              className="p-3 h-auto"
              id="card-type"
              placeholder="Classic"
              required
            />
          </Field>
        </FieldGroup>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="card-name">Name On Card</FieldLabel>
            <Input
              className="p-3 h-auto"
              id="card-name"
              placeholder="My Cards"
              required
            />
          </Field>
        </FieldGroup>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="card-number">Card Number</FieldLabel>
            <Input
              className="p-3 h-auto"
              id="card-number"
              placeholder="**** **** **** ****"
              required
            />
          </Field>
        </FieldGroup>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="card-expiration">Expiration Date</FieldLabel>
            <DatePicker />
          </Field>
        </FieldGroup>
        <Button className="btn bg-main text-white hover:bg-blue-600 p-4 h-auto mr-auto min-w-50">
          Add Card
        </Button>
      </div>
    </form>
  );
}

export default AddNewCard;
