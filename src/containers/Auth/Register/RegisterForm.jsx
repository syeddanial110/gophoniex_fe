"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff } from "lucide-react";
import UITextField from "@/components/InputField/UITextField";
import { loginSchema, registerSchema } from "@/utils/schema";
import { pathLocations } from "@/utils/navigation";
import { useRouter } from "next/navigation";
import UIFileInput from "@/components/InputField/UIFileInput";
import { apiGet, apiPost } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { toast } from "sonner";
import UIModal from "@/components/UIModal/UIModal";
import UICheckbox from "@/components/UICheckbox/UICheckbox";
import UISelect from "@/components/InputField/UISelect";
import { SelectItem } from "@/components/ui/select";
import { setToken, setUserId } from "@/apis/Auth";

const RegisterForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  // modal open states
  const [liabilityOpen, setLiabilityOpen] = useState(false);
  const [photoOpen, setPhotoOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [hearUs, setHearUs] = useState([]);
  const [hearUsId, setHearUsId] = useState("");

  const form = useForm({
    resolver: yupResolver(registerSchema),
    errors: {},
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      hear: "",
      liability: false,
      photoRelease: false,
      terms: false,
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFileInput = (e) => {
    setProfileImage(e.target.files[0]);
  };

  function onSubmit(data) {
    console.log("data", data);
    // require liability checkbox
    if (!data.liability == "false") {
      toast.error("You must agree to the Release of Liability.");
      return;
    }
    if (data.terms == "false") {
      toast.error("You must agree to the Terms & Conditions.");
      return;
    }
    if (!data.photoRelease =="false") {
      toast.error("You must agree to the Photo Release.");
      return;
    }
    if(!hearUsId){
      toast.error("Please select how did you hear about us.");
      return;
    }

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("image", profileImage);
    formData.append("hear", hearUsId);
    formData.append("liability", data.liability ? "1" : "0");
    formData.append("photo", data.photoRelease ? "1" : "0");
    formData.append("terms", data.terms ? "1" : "0");

    apiPost(
      `${ApiEndpoints.auth.base}${ApiEndpoints.auth.register}`,
      formData,
      (res) => {
        console.log('res', res)
        toast.success(res?.message);
        if (res?.success) {
          setToken(res?.data?.token);
          setUserId(res?.data?.user?.id)
          router.push(pathLocations.profile);
          setUserId(res?.data?.userId?.id);
        }
      },
      (err) => {
        console.log("err", err);
        toast.error(err?.message);
      },
      // do not set Content-Type for FormData; browser will set boundary
      {}
    );
  }

  useEffect(() => {
    apiGet(
      `${ApiEndpoints.auth.hearUs}`,
      (res) => {
        console.log("res", res);
        setHearUs(res?.data);
      },
      (err) => {
        console.log("err", err);
      }
    );
  }, []);

  console.log("errors", form.formState.errors);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <UITextField
                field={field}
                formLabel="First Name"
                placeholder="Your First Name"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <UITextField
                field={field}
                formLabel="Last Name"
                placeholder="Your Last Name"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <UIFileInput
          labelName="Profile Picture"
          name="profileImage"
          onChange={handleFileInput}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <UITextField
                field={field}
                formLabel="Email"
                placeholder="Your Email"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <UITextField
                field={field}
                formLabel="Phone Number"
                placeholder="Best Contacts Phone"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <UITextField
                type="password"
                field={field}
                formLabel="Password"
                placeholder="Use Strong Passwords"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <UITextField
                type="password"
                field={field}
                formLabel="Confirm Password"
                placeholder="Confirm your password"
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <UISelect
          isLabel={true}
          labelName="How did you hear about us?"
          name="hearUsId"
          // placeholder={"Male, Female, non-specific"}
          onValueChange={(val) => {
            console.log("val", val);
            setHearUsId(val);
          }}
        >
          <SelectItem value="none">Select</SelectItem>
          {hearUs?.map((h) => (
            <SelectItem key={h.id} value={String(h.id)}>
              {h.title}
            </SelectItem>
          ))}
        </UISelect>

        {/* Liability Release (required) */}
        <FormField
          control={form.control}
          name="liability"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <UICheckbox
                checked={!!field.value}
                onChange={(v) => field.onChange(v)}
                label="Toggle YES: I agree to the Liability Release"
                checkboxId="liability-checkbox"
                labelId="liability-label"
              />
              <UIModal
                modalBtnText="View"
                btnClassName="text-sm underline"
                modalHeaderTitle="Release of Liability"
                open={liabilityOpen}
                onOpenChange={setLiabilityOpen}
              >
                <div className="space-y-3">
                  <p>
                    I understand and accept that during instruction and
                    activities provided by PHOENIX SPORTS, INC., my child will
                    remain under the care, direction, and supervision of PHOENIX
                    SPORTS, INC., and that participation in sports, indoors or
                    outdoors, involves certain risks of serious injury, illness,
                    or death.
                  </p>
                  <p>
                    I, on behalf of myself, my child, and accompanying
                    individuals, hereby assume full responsibility for all risks
                    arising from participation in any classes, programs, or
                    activities offered by PHOENIX SPORTS, INC. I hereby forever
                    waive, release, discharge, covenant not to sue, and hold
                    harmless PHOENIX SPORTS, INC., and each of its owners,
                    parents, subsidiaries, affiliated entities, predecessors,
                    successors, heirs, assigns, location partners, media
                    partners, sponsors, and each of their officers, directors,
                    agents, representatives, employees, contractors, and
                    licensees (collectively, the “Released Parties”) from any
                    and all claims, actions, damages, losses, liabilities,
                    costs, and expenses of any kind (including injuries,
                    disability, death, or property loss) arising out of or in
                    any way connected with participation in any PHOENIX SPORTS,
                    INC. Program (or part thereof), whether caused in whole or
                    part by negligence or otherwise.
                  </p>
                  <p>
                    I agree that I will not initiate or support any legal action
                    or claim against the Released Parties based on participation
                    in any Program, on any legal theory (including personal
                    injury, negligence, privacy, publicity, or defamation). I
                    further agree to indemnify, defend, and hold harmless the
                    Released Parties from any loss, liability, claim, or damages
                    (including reasonable attorney’s fees) from or arising out
                    of our participation or association with the Programs (or
                    portion thereof).
                  </p>
                </div>
              </UIModal>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Photo Release (optional) */}
        <FormField
          control={form.control}
          name="photoRelease"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <UICheckbox
                checked={!!field.value}
                onChange={(v) => field.onChange(v)}
                label="Toggle YES: I agree to the Photo Release"
                checkboxId="photo-checkbox"
                labelId="photo-label"
              />
              <UIModal
                modalBtnText="View"
                btnClassName="text-sm underline"
                modalHeaderTitle="Photo Release"
                open={photoOpen}
                onOpenChange={setPhotoOpen}
              >
                <div className="space-y-3">
                  <p>
                    I hereby irrevocably grant permission to PHOENIX SPORTS,
                    INC. and their agents to take and utilize photographs,
                    videos, or any type of recordings of me, my child, and
                    anyone accompanying me or my child to any Program or portion
                    thereof, while engaged in such Program. I, on behalf of
                    myself, my child, and anyone accompanying us, irrevocably
                    consent and waive all rights with respect to PHOENIX SPORTS,
                    INC.’s use, reproduction, sale, dissemination and
                    distribution of any and all photographs, images, videos,
                    motion pictures, recordings, or any other depiction of any
                    kind of me, my child, or anyone accompanying me or my child
                    to any such Program or portion thereof, for any legitimate
                    purpose in perpetuity, including without limitation, live
                    streaming, digital content, advertising and promotional
                    materials, commercial uses, and/or related purposes, and
                    waive all rights to compensation and other rights which may
                    arise as a result (including any rights under N.Y. Civil
                    Rights Law § 50).
                  </p>
                </div>
              </UIModal>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Terms & Conditions (required) */}
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <UICheckbox
                checked={!!field.value}
                onChange={(v) => field.onChange(v)}
                label="Toggle YES: I agree to the Phoenix Sports, Inc Terms & Conditions"
                checkboxId="terms-checkbox"
                labelId="terms-label"
              />
              <UIModal
                modalBtnText="View"
                btnClassName="text-sm underline"
                modalHeaderTitle="Phoenix Sports, Inc Terms & Conditions"
                open={termsOpen}
                onOpenChange={setTermsOpen}
              >
                <div className="space-y-3">
                  <p>
                    I have read and agree to the Terms and Conditions and
                    Privacy Policy as stated on the Phoenix Sports, Inc website.
                  </p>
                  <p>
                    <a
                      href="/terms"
                      className="text-primary underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Terms & Conditions
                    </a>
                  </p>
                  <p>
                    <a
                      href="/privacy"
                      className="text-primary underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Privacy Policy
                    </a>
                  </p>
                </div>
              </UIModal>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
