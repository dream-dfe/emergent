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
import { ProgramesType } from "@/types";
import { programmesSchema, ProgrammesValues } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import LoadingBtn from "@/components/common/LoadingBtn";
import RichTextEditor from "@/components/dashboard/RichTextEditor";
import { cn } from "@/lib/utils";
import { editProgramme } from "@/actions/programs-actions";

export default function EditProgram({ program }: { program: ProgramesType }) {
  const form = useForm<ProgrammesValues>({
    resolver: zodResolver(programmesSchema),
    defaultValues: {
      title: program.title,
      intro: program.intro,
      description: program.description,
      status: program.status,
      id: program.id,
      bannerUrl: String(program.bannerUrl),
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
      await editProgramme(formData);
    } catch (error) {
      toast({
        title: "Added",
        description: `New Program Successfully. `,
      });
    }
  }

  const statusList = ["open", "active", "past"];

  return (
    <Sheet>
      <SheetTrigger asChild className="my-4">
        <FiEdit3 className="size-5 cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Programme</SheetTitle>
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
                name="bannerUrl"
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
                    <FormLabel>Change Banner Image</FormLabel>
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
                      <RichTextEditor
                        onChange={field.onChange}
                        ref={field.ref}
                        initialContent={field.value}
                      />
                    </FormControl>
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
