"use client"
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";

const UINewsletterModal = ({
  modalBtnText,
  btnClassName,
  modalHeaderTitle,
  open,
  onOpenChange,
  children,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/30 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogContent className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
          <DialogHeader className="space-y-1.5 text-center sm:text-left">
            <DialogTitle className="text-lg font-semibold leading-none tracking-tight">
              {modalHeaderTitle}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {children}
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default UINewsletterModal;
