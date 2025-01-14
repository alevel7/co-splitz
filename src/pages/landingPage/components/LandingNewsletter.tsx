import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { Button, Label, TextInput } from "flowbite-react";

const LandingNewsletter = () => {
  return (
    <div className="bg-torquoiseDark py-20 px-10 text-white flex items-center gap-3 ">
      <div className="w-full flex flex-col gap-3">
        <h3 className="flex items-center gap-3 font-medium text-2xl">
          <MdOutlineEmail />
          <span>Stay in the loop</span>
        </h3>
        <p>
          Never miss a beat with CoSplitz. Subscribe for updates,
          expense-sharing tips, and special offers.
        </p>
      </div>
      <div className="w-full">
        <form className="flex gap-4 items-end">
          <div className="w-3/5 flex flex-col gap-3">
            <Label
              htmlFor="Email"
              value="Email"
              color="gray"
              className="mb-3"
            />
            <TextInput
              id="email1"
              type="email"
              placeholder="Enter email Address"
              required
              className="!bg-inherit"
            />
          </div>

          <Button type="submit" className="text-torquoiseDark bg-white">
            Join the Newsletter
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LandingNewsletter;
