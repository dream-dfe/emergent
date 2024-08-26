"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PiCaretUpDownBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import { toast } from "@/components/ui/use-toast";

import { BsCheckLg } from "react-icons/bs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { ScrollArea } from "@/components/ui/scroll-area";
import { FiEdit3 } from "react-icons/fi";

import { Checkbox } from "@/components/ui/checkbox";
import LoadingBtn from "../common/LoadingBtn";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { setRole } from "@/actions/user-actions";
import { Input } from "../ui/input";

const formSchema = z.object({
  role: z.string().min(2, {
    message: "Select a role",
  }),
  id: z.string(),
});

export default function EditUserRole({
  id,
  role,
  name,
}: {
  id: string;
  role: string;
  name: string;
}) {
  const rolesList = ["student", "user"];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
      id: id,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });
    await setRole(formData);

    toast({
      title: "Edited",
      description: `User Role changed Successfully. `,
    });
  }
  return (
    <Sheet>
      <SheetTrigger asChild className="my-4">
        <FiEdit3 className="size-5 cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Change {name}'s role</SheetTitle>
          <SheetDescription>
            Make sure to change to the relevant role
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[80vh]">
          <Form {...form}>
            <form
              className="space-y-6 p-2"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="hidden" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "justify-between",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value
                              ? rolesList.find((rolez) => rolez === field.value)
                              : "Select a role"}
                            <PiCaretUpDownBold className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px]">
                        <Command>
                          <CommandInput placeholder="Search a role..." />
                          <CommandList>
                            <CommandEmpty>No role found.</CommandEmpty>
                            <CommandGroup>
                              {rolesList.map((rolez, i) => (
                                <CommandItem
                                  value={rolez}
                                  key={i}
                                  onSelect={() => {
                                    form.setValue("role", rolez);
                                  }}
                                >
                                  <BsCheckLg
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      rolez === field.value
                                        ? "opacity-100"
                                        : "opacity-0",
                                    )}
                                  />
                                  {rolez}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <LoadingBtn
                type="submit"
                className="w-full"
                loading={isSubmitting}
              >
                Submit
              </LoadingBtn>
            </form>
          </Form>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
