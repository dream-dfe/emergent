"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import LoadingBtn from "@/components/common/LoadingBtn";
import RichTextEditor from "@/components/dashboard/RichTextEditor";
import { programmesSchema, ProgrammesValues } from "@/lib/validations";
import { BsCheckLg } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PiCaretUpDownBold } from "react-icons/pi";
import { createProgramme } from "@/actions/programs-actions";
import { toast } from "@/components/ui/use-toast";

export default function NewProgrammeForm() {
  const form = useForm<ProgrammesValues>({
    resolver: zodResolver(programmesSchema),
    defaultValues: {
      title: "",
      intro: "",
      description: "",
      status: " ",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: ProgrammesValues) {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    try {
      await createProgramme(formData);
    } catch (error) {
      toast({
        title: "Added",
        description: `New Program Successfully. `,
      });
    }
  }

  const statusList = ["open", "active", "past"];

  return (
    <Form {...form}>
      <form
        className="space-y-6 p-2"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="banner"
          render={({ field: { value, ...fieldValues } }) => (
            <FormItem>
              <FormLabel>Banner Image</FormLabel>
              <FormControl>
                <Input
                  {...fieldValues}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    fieldValues.onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="intro"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Introduction</FormLabel>
              <FormControl>
                <Input placeholder="Introduction" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Programme Status</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "max-w-80 justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? statusList.find((stat) => stat === field.value)
                        : "Select a status"}
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
                        {statusList.map((stat, i) => (
                          <CommandItem
                            value={stat}
                            key={i}
                            onSelect={() => {
                              form.setValue("status", stat);
                            }}
                          >
                            <BsCheckLg
                              className={cn(
                                "mr-2 h-4 w-4",
                                stat === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {stat}
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

        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <RichTextEditor onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingBtn type="submit" loading={isSubmitting}>
          Submit
        </LoadingBtn>
      </form>
    </Form>
  );
}
