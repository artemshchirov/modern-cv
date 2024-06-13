'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const FormSchema = z.object({
  email: z.string().email({
    message: 'Please, enter valid email address',
  }),
  message: z
    .string()
    .min(10, {
      message: 'Please, add at least 10 characters',
    })
    .max(160, {
      message: 'Please, do not add more than 500 characters',
    }),
});

interface Props {
  children: ReactNode;
}

export default function ContactDialog({ children }: Readonly<Props>) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: `onChange`,
    defaultValues: {
      email: '',
      message: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Dialog>
      {children}
      <DialogContent className='p-0'>
        <div className='pt-[60px] pb-10 px-2.5'>
          <DialogHeader>
            <DialogTitle>Contact me</DialogTitle>
            <DialogDescription>
              I will answer you as soon as possible
            </DialogDescription>{' '}
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='mt-8 flex flex-col gap-y-8'
            >
              <div className='flex flex-col gap-y-6'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder='Email' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder='Enter your message'
                          className='resize-none'
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                variant='flat'
                size='flat'
                className='w-full'
                type='submit'
              >
                Send message
              </Button>
            </form>
          </Form>
        </div>

        {/* <DialogFooter>Contacts</DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
