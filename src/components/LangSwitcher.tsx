"use client";

import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "@/i18n.config";
import { twMerge } from "tailwind-merge";
import { Dropdown } from "react-bootstrap";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ children, label }: Props) {
  return (
    <Dropdown>
      <Dropdown.Toggle className="btn-lg w-100">{label}</Dropdown.Toggle>
      <Dropdown.Menu className="w-100">{children}</Dropdown.Menu>
    </Dropdown>
  );
}
