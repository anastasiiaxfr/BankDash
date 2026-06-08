import { useState } from "react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { Pencil } from "lucide-react";
import DatePicker from "../components/Form/Fields/DatePicker";

export default function Settings() {
  const [enabled, setEnabled] = useState(false);
  const [enabled1, setEnabled1] = useState(false);
  const [enabled2, setEnabled2] = useState(false);
  const [enabled3, setEnabled3] = useState(false);

  return (
    <main className="flex flex-col gap-6 xl:gap-10 items-center justify-center p-4 lg:p-10 w-full">
      <article className="bg-white rounded-2xl p-4 lg:p-10 w-full">
        <Tabs defaultValue="edit-profile">
          {/* Tabs Header */}
          <TabsList variant="line">
            <TabsTrigger value="edit-profile">Edit Profile</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          {/* Edit Profile */}
          <TabsContent value="edit-profile">
            <from className="py-10 grid grid-cols-1 md:grid-cols-[120px_1fr] gap-10">
              <div>
                <Avatar className="w-27.5 h-27.5">
                  <AvatarImage src="/img/ava.png" alt="" />
                  <AvatarFallback>ER</AvatarFallback>
                  <AvatarBadge className="bg-main text-white w-8! h-8! p-1!">
                    <Pencil className="w-4! h-4!" />
                  </AvatarBadge>
                </Avatar>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <Field>
                  <FieldLabel htmlFor="name">Your Name</FieldLabel>

                  <Input
                    id="name"
                    placeholder="Charlene Reed"
                    className="p-3 h-auto"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="user-name">User Name</FieldLabel>

                  <Input
                    id="user-name"
                    placeholder="Charlene Reed"
                    className="p-3 h-auto"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="date-birth">Date of Birth</FieldLabel>

                  <DatePicker />
                </Field>

                <Field>
                  <FieldLabel htmlFor="address">Present Address</FieldLabel>

                  <Input
                    id="address"
                    placeholder="San Jose, California, USA"
                    className="p-3 h-auto"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="permanent-address">
                    Permanent Address
                  </FieldLabel>

                  <Input
                    id="permanent-address"
                    placeholder="San Jose, California, USA"
                    className="p-3 h-auto"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="city">City</FieldLabel>

                  <Input
                    id="city"
                    placeholder="San Jose"
                    className="p-3 h-auto"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="postal-code">Postal Code</FieldLabel>

                  <Input
                    id="postal-code"
                    placeholder="45962"
                    className="p-3 h-auto"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="country">Country</FieldLabel>

                  <Input
                    id="country"
                    placeholder="USA"
                    className="p-3 h-auto"
                  />
                </Field>

                <div className="text-right lg:col-span-2">
                  <Button className="btn bg-main text-white hover:bg-blue-600 p-4 h-auto mr-auto min-w-50">
                    Save
                  </Button>
                </div>
              </div>
            </from>
          </TabsContent>

          {/* Preferences */}
          <TabsContent value="preferences">
            <form className="py-10 grid gap-10" method="POST" action="/">
              <div className="grid lg:grid-cols-2 gap-10">
                <Field>
                  <FieldLabel htmlFor="currency">Currency</FieldLabel>

                  <Input
                    id="currency"
                    placeholder="USD"
                    className="p-3 h-auto"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="timezone">Time Zone</FieldLabel>

                  <Input
                    id="timezone"
                    placeholder="(GMT-12:00) International Date Line West"
                    className="p-3 h-auto"
                  />
                </Field>
              </div>
              <div className="grid gap-5">
                <h2>Notification</h2>

                <Field
                  orientation="horizontal"
                  className="flex items-start gap-2"
                >
                  <Switch
                    id="check1"
                    checked={enabled1}
                    onCheckedChange={setEnabled1}
                  />
                  <div className="flex flex-col gap-1">
                    <FieldLabel htmlFor="check1">
                      I send or receive digita currency
                    </FieldLabel>
                  </div>
                </Field>

                <Field
                  orientation="horizontal"
                  className="flex items-start gap-2"
                >
                  <Switch
                    id="check2"
                    checked={enabled2}
                    onCheckedChange={setEnabled2}
                  />
                  <div className="flex flex-col gap-1">
                    <FieldLabel htmlFor="check2">
                      I receive merchant order
                    </FieldLabel>
                  </div>
                </Field>

                <Field
                  orientation="horizontal"
                  className="flex items-start gap-2"
                >
                  <Switch
                    id="check3"
                    checked={enabled3}
                    onCheckedChange={setEnabled3}
                  />
                  <div className="flex flex-col gap-1">
                    <FieldLabel htmlFor="check3">
                      There are recommendation for my account
                    </FieldLabel>
                  </div>
                </Field>
              </div>
            </form>
          </TabsContent>

          {/* Security */}
          <TabsContent value="security">
            <form className="py-10" method="POST" action="/">
              {/* Switch Section */}
              <div className="mb-10">
                <h2 className="mb-3 font-semibold">
                  Two-factor Authentication
                </h2>

                <Field
                  orientation="horizontal"
                  className="flex items-start gap-2"
                >
                  <Switch
                    id="switch-focus-mode"
                    checked={enabled}
                    onCheckedChange={setEnabled}
                  />
                  <div className="flex flex-col gap-1">
                    <FieldLabel htmlFor="switch-focus-mode">
                      Enable or disable two factor authentication
                    </FieldLabel>
                  </div>
                </Field>
              </div>

              {/* Password Section */}
              <div className="grid gap-4">
                <h2 className="font-semibold">Change Password</h2>

                <div className="grid lg:grid-cols-2 gap-10">
                  <div className="grid gap-6">
                    <Field>
                      <FieldLabel htmlFor="current-password">
                        Current Password
                      </FieldLabel>

                      <Input
                        id="current-password"
                        type="password"
                        placeholder="**** **** **** ****"
                        className="p-3 h-auto"
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="new-password">
                        New Password
                      </FieldLabel>

                      <Input
                        id="new-password"
                        type="password"
                        placeholder="**** **** **** ****"
                        className="p-3 h-auto"
                      />
                    </Field>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="text-right mt-10">
                <Button className="bg-main text-white hover:bg-blue-600 p-4 h-auto min-w-50">
                  Save
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </article>
    </main>
  );
}
